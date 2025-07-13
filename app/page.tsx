'use client';

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect} from 'react';
import Wave from 'react-wavify';
import useSound from 'use-sound';
import { useSoundContext } from './ui/sound-context'; // Import sound context
import { MuteButton } from './ui/mute-button';
import RopeModal from './ui/rope-modal';


// A simple SVG X icon for the close button


export default function Home() {
  const { isMuted } = useSoundContext()

  // State for Profile Modal
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isProfileAnimatingOut, setIsProfileAnimatingOut] = useState(false);

  // State for Analytic Modal
  const [isAnalyticModalOpen, setIsAnalyticModalOpen] = useState(false);
  const [isAnalyticAnimatingOut, setIsAnalyticAnimatingOut] = useState(false);

  // State for Contact Modal
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isContactAnimatingOut, setIsContactAnimatingOut] = useState(false);



  const [playAmbient, { stop: stopAmbient }] = useSound(
    '/sound/waves.mp3', // Make sure you have this file in public/sound/
    {
      volume: isMuted ? 0 : 0.50, // Lower volume for ambient sound
      loop: true,
      interrupt: true,
    }
  );

  // Functions for Profile Modal
  const openProfileModal = () => {
    setIsProfileAnimatingOut(false);
    setIsProfileModalOpen(true);
  };


  // Functions for Analytic Modal
  const openAnalyticModal = () => {
    setIsAnalyticAnimatingOut(false);
    setIsAnalyticModalOpen(true);
  };



  // Functions for Contact Modal
  const openContactModal = () => {
    setIsContactAnimatingOut(false);
    setIsContactModalOpen(true);
  };


  const [playClick] = useSound(
        '/sound/buble-pop.mp3',
        { volume: 0.50 } // You can customize options
    );

    // --- CREATE HANDLERS ---
    const handleProfileClick = () => {
        playClick(); 
        openProfileModal();
    };
    const handleAnalyticClick = () => {
        playClick(); 
        openAnalyticModal();
    };
    const handleContactClick = () => {
        playClick(); // It's that simple!
        openContactModal();
    };


  useEffect(() => {
    if (isProfileAnimatingOut) {
      const timer = setTimeout(() => {
        setIsProfileModalOpen(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isProfileAnimatingOut]);

  useEffect(() => {
    if (isAnalyticAnimatingOut) {
      const timer = setTimeout(() => {
        setIsAnalyticModalOpen(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isAnalyticAnimatingOut]);

  useEffect(() => {
    if (isContactAnimatingOut) {
      const timer = setTimeout(() => {
        setIsContactModalOpen(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isContactAnimatingOut]);

  useEffect(() => {
    // Play ambient sound on component mount
    playAmbient();

    // Stop ambient sound on component unmount
    return () => {
      stopAmbient();
    };
  }, [playAmbient, stopAmbient]);


  return (
    <div className="flex flex-col min-h-screen bg-blue-100 font-sans">
      
      <header className="p-4 flex justify-end items-center space-x-4">
        <MuteButton />
      </header>
      <main className="flex-grow flex flex-col items-center justify-center p-6 md:p-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Halo Apa Kabar<span className="text-amber-600">.</span>
          </h1>
          <p className="text-lg text-gray-800 mt-2">Aku seorang Developer</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {/* Profile button */}
          <button
            onClick={handleProfileClick}
            className="w-24 h-24 bg-gray-700 shadow-2xl text-white rounded-full flex items-center justify-center transition duration-300 ease-in-out hover:scale-110 animate-float"
          >
            <Image
              src={"/PageUtama/Profile.png"}
              width={50}
              height={50}
              alt="Profile"
            />
          </button>
          {/* Instagram button */}
          <Link
            href="https://www.instagram.com/brisngr_int"
            target="_blank"
            rel="noopener noreferrer"
            className="w-24 h-24 bg-gray-700 shadow-2xl text-white rounded-full flex items-center justify-center transition duration-300 ease-in-out hover:scale-110 animate-float">
            <Image
              src="/PageUtama/instagram.png"
              width={50}
              height={50}
              alt="Instagram"
            />
          </Link>
          {/* Analytic/Project button */}
          <button
            onClick={handleAnalyticClick}
            className="w-24 h-24 bg-gray-700 shadow-2xl text-white rounded-full flex items-center justify-center transition duration-300 ease-in-out hover:scale-110 animate-float">
            <Image
              src={"/PageUtama/analytics.png"}
              width={50}
              height={50}
              alt="Project"
            />
          </button>
          {/* Contact button */}
          <button
            onClick={handleContactClick}
            className="w-24 h-24 bg-gray-700 shadow-2xl text-white rounded-full flex items-center justify-center transition duration-300 ease-in-out hover:scale-110 animate-float">
            <Image
              src={"/PageUtama/alert.png"}
              width={50}
              height={50}
              alt="Kontak"
            />
          </button>
        </div>
      </main>

      {/* Wave Section */}
      <div className="w-full h-[150px] relative">
        <Wave
          fill='rgb(87, 143, 202)'
          paused={false}
          style={{ display: 'flex', position: 'absolute', bottom: 0, width: '100%', zIndex: 10 }}
          options={{
            height: 20,
            amplitude: 25,
            speed: 0.2,
            points: 3,
          }}
        />
        <Wave
          fill='rgba(0, 202, 255, 0.4)'
          paused={false}
          style={{ display: 'flex', position: 'absolute', bottom: 0, width: '100%' }}
          options={{
            height: 5,
            amplitude: 25,
            speed: 0.2,
            points: 2,
          }}
        />
      </div>
        <RopeModal isOpen={isProfileModalOpen} onClose={() => setIsProfileModalOpen(false)} title="Profile" >
          <div className="grid grid-cols-3 gap-4 p-6">
               <div className="col-span-1 flex items-center justify-center">
                 <Image
                   src={"/PageUtama/Profile-pic.png"}
                   width={200}
                   height={200}
                   alt="Pr-pic"
                   className="w-full h-auto object-cover rounded-lg"
                 />
               </div>
               <div className="col-span-2">
                 <h1 className="text-xl font-bold text-gray-900 mb-2">
                   Hazlyn Rasyid
                 </h1>
                 <p className="text-sm text-gray-700 max-h-36 overflow-y-auto pr-2">
                   Hazlyn Rasyid adalah seorang web developer yang sedang menempuh pendidikan di STTI Tanjungpinang, jurusan Teknik Informatika. Memiliki minat yang kuat dalam pengembangan teknologi web, Hazlyn aktif mengembangkan berbagai proyek berbasis website dengan fokus pada tampilan modern dan fungsionalitas yang optimal. Selain kuliah, ia juga terus mengasah keterampilan coding, terutama di bidang frontend dan backend development, guna mempersiapkan diri sebagai pengembang yang andal dan adaptif terhadap perkembangan teknologi.
                 </p>
               </div>
             </div>
        </RopeModal>
        <RopeModal isOpen={isAnalyticModalOpen} onClose={() => setIsAnalyticModalOpen(false)} title="My Project" >
          <div className="p-6 space-y-4 max-h-50 overflow-y-auto">
              <div>
                  <h4 className="text-lg font-bold text-gray-800">Nalar Sinergi</h4>
                  <p className="text-sm text-gray-600 mt-1">Nalar sinergi adalah sebuah web design yang dirancang oleh Hazlyn Rasyid dan Winson</p>
                  <a href="https://hazlynrasyid.github.io/nalar-sinergi" className="text-lg font-medium text-blue-600 hover:underline">
                    https://hazlynrasyid.github.io/nalar-sinergi
                </a>
              </div>
              <div>
                  <h4 className="text-lg font-bold text-gray-800">Bejalan</h4>
                  <p className="text-sm text-gray-600 mt-1">Bejalan Adalah Project web yang di kembangkan dengan berkelompok oeleh Hazlyn Rasyid, Frenky, Adinda yang memenangkan Juara 3 dalam E-Fest Umrah</p>
                  <a href="https://github.com/Frenky-1210/bejalan.git" className="text-lg font-medium text-blue-600 hover:underline">
                    https://github.com/Frenky-1210/bejalan.git
                </a>
              </div>
            </div>
        </RopeModal>
        <RopeModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} title="Contact" >
          <div className="p-6 text-center">
                <p className="text-base text-gray-700 mb-2">Sampaikan Pesan Anda Melalui Email:</p>
                <a href="mailto:hazlynrasyid34@gmail.com" className="text-lg font-medium text-blue-600 hover:underline">
                  hazlynrasyid34@gmail.com
                </a>
            </div>
        </RopeModal>
        

    </div>
  );
}