// /components/DraggableModal.tsx
import React, { useState, useEffect, useRef, FC } from 'react';
// CORRECTED: Import from 'framer-motion' instead of 'motion/react'
import { motion, AnimatePresence } from "motion/react";

// Define the props for the DraggableModal component
interface DraggableModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

const DraggableModal: FC<DraggableModalProps> = ({ isOpen, onClose, children, title }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  // Set the initial position of the modal when it opens
  useEffect(() => {
    if (isOpen) {
      // Center the modal horizontally and place it a bit down from the top
      const modalWidth = modalRef.current?.offsetWidth || 500;
      const initialX = window.innerWidth / 2 - modalWidth / 2;
      const initialY = window.innerHeight / 5; // Adjusted for a better initial position
      setModalPosition({ x: initialX, y: initialY });
    }
  }, [isOpen]);

  // Handle the start of a drag operation
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    // We only want to drag when the left mouse button is clicked
    if (e.button !== 0) return;
    setIsDragging(true);
    // Calculate the offset between the mouse cursor and the modal's top-left corner
    setDragOffset({
      x: e.clientX - modalPosition.x,
      y: e.clientY - modalPosition.y,
    });
    // Prevent text selection while dragging
    e.preventDefault();
  };

  // UPDATED: These handlers are now attached to the window for more robust dragging
  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    setModalPosition({
      x: e.clientX - dragOffset.x,
      y: e.clientY - dragOffset.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // ADDED: Effect to add/remove global event listeners for dragging
  // This makes dragging work even if the cursor leaves the browser window
  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }

    // Cleanup function to remove listeners when the component unmounts
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset]); // Rerun when dragging starts/stops

  // KEY CHANGE: The conditional rendering is now INSIDE AnimatePresence
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with a fade animation */}
          <motion.div
            className="fixed inset-0 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose} 
          />

          {/* Draggable Modal Window */}
          <motion.div
            ref={modalRef}
            className="fixed bg-white rounded-lg shadow-2xl w-11/12 max-w-lg flex flex-col z-50"
            style={{ top: modalPosition.y, left: modalPosition.x }}
            // Animation properties for open/close
            initial={{ scale: 0, }}
            animate={{ scale: 1,  }}
            exit={{ scale: 0,}}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            {/* Modal Header */}
            <div
              className="p-4 border-b flex justify-between items-center cursor-grab active:cursor-grabbing"
              onMouseDown={handleMouseDown} // Initiate dragging from the header
            >
              <h2 className="text-xl font-semibold text-gray-800 select-none">{title}</h2>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-800 text-2xl cursor-pointer">&times;</button>
            </div>
            {/* Modal Body */}
            <div className="p-6 overflow-y-auto" style={{ maxHeight: '70vh' }}>
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default DraggableModal;
