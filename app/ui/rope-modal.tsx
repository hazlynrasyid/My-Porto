// /components/DraggableModal.tsx
import React, { useState, useEffect, useRef, FC } from 'react';

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
      // Center the modal horizontally and place it one-third down the screen
      const modalWidth = modalRef.current?.offsetWidth || 500; // Use a default width if ref is not ready
      const initialX = window.innerWidth / 2 - modalWidth / 2;
      const initialY = window.innerHeight / 3;
      setModalPosition({ x: initialX, y: initialY });
    }
  }, [isOpen]);

  // Handle the start of a drag operation
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    // Calculate the offset between the mouse cursor and the modal's top-left corner
    setDragOffset({
      x: e.clientX - modalPosition.x,
      y: e.clientY - modalPosition.y,
    });
  };

  // Handle the mouse movement during a drag operation
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    // Update the modal's position based on the new mouse coordinates and the initial offset
    setModalPosition({
      x: e.clientX - dragOffset.x,
      y: e.clientY - dragOffset.y,
    });
  };

  // Handle the end of a drag operation
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    // A full-screen container to capture mouse events for dragging
    <div 
      className=" inset-0 z-50 fade-scale-in"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp} // End dragging if the mouse leaves the window
    >
      <div 
        ref={modalRef}
        className="bg-white rounded-lg shadow-2xl w-11/12 max-w-lg flex flex-col absolute"
        style={{ top: modalPosition.y, left: modalPosition.x }}
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
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DraggableModal;