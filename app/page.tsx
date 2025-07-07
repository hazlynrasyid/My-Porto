'use client';

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from 'react';
import Wave from 'react-wavify';
import useSound from 'use-sound';

// A simple SVG X icon for the close button
const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);


export default function Home() {
  // State for Profile Modal
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isProfileAnimatingOut, setIsProfileAnimatingOut] = useState(false);

  // State for Analytic Modal
  const [isAnalyticModalOpen, setIsAnalyticModalOpen] = useState(false);
  const [isAnalyticAnimatingOut, setIsAnalyticAnimatingOut] = useState(false);

  // State for Contact Modal
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isContactAnimatingOut, setIsContactAnimatingOut] = useState(false);

  const modalRef = useRef(null);

  // Functions for Profile Modal
  const openProfileModal = () => {
    setIsProfileAnimatingOut(false);
    setIsProfileModalOpen(true);
  };

  const closeProfileModal = () => {
    setIsProfileAnimatingOut(true);
  };

  // Functions for Analytic Modal
  const openAnalyticModal = () => {
    setIsAnalyticAnimatingOut(false);
    setIsAnalyticModalOpen(true);
  };

  const closeAnalyticModal = () => {
    setIsAnalyticAnimatingOut(true);
  };

  // Functions for Contact Modal
  const openContactModal = () => {
    setIsContactAnimatingOut(false);
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactAnimatingOut(true);
  };

  const [playClick] = useSound(
        '/sound/buble-pop.mp3',
        { volume: 0.50 } // You can customize options
    );
    const [playClick_2] = useSound(
        '/sound/bubble-pop-2.mp3',
        { volume: 0.25 } // You can customize options
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
    const handleProfilecloseClick = () => {
        playClick_2(); // It's that simple!
        closeProfileModal();
    };
    const handleAnalyticcloseClick = () => {
        playClick_2(); // It's that simple!
        closeAnalyticModal();
    };
    const handleContactcloseClick = () => {
        playClick_2(); // It's that simple!
        closeContactModal();
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


  return (
    <div className="flex flex-col min-h-screen bg-linear-to-b from-blue-600 to-blue-100 font-sans">
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
            className="w-24 h-24 bg-linear-150 from-green-400 to-blue-400 shadow-2xl text-white rounded-full flex items-center justify-center transition duration-300 ease-in-out hover:scale-110 animate-float"
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
            className="w-24 h-24 bg-linear-300 from-green-400 to-blue-400 shadow-2xl text-white rounded-full flex items-center justify-center transition duration-300 ease-in-out hover:scale-110 animate-float">
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
            className="w-24 h-24 bg-linear-210 from-green-400 to-blue-400 shadow-2xl text-white rounded-full flex items-center justify-center transition duration-300 ease-in-out hover:scale-110 animate-float">
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
            className="w-24 h-24 bg-linear-to-tl from-green-400 to-blue-400 shadow-2xl text-white rounded-full flex items-center justify-center transition duration-300 ease-in-out hover:scale-110 animate-float">
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

      {/* Profile Modal Component */}
      {isProfileModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300"
          aria-labelledby="profile-modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div
            ref={modalRef}
            className={`relative w-full max-w-lg mx-4 bg-white rounded-2xl shadow-2xl transform ${isProfileAnimatingOut ? 'animate-fade-scale-out' : 'animate-fade-scale-in'}`}
          >
            <div className="flex items-start justify-between p-5 border-b border-gray-200 rounded-t-2xl bg-amber-200">
              <h3 id="profile-modal-title" className="text-xl font-semibold text-gray-800">
                Profil
              </h3>
              <button
                type="button"
                onClick={handleProfilecloseClick}
                className="p-1 text-red-600 bg-transparent rounded-lg hover:bg-red-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                aria-label="Close modal"
              >
                <XIcon />
              </button>
            </div>
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
            <div className="flex items-center justify-end p-5 space-x-2 border-t border-gray-200 rounded-b-2xl">
              <button
                onClick={handleProfilecloseClick}
                className="px-5 py-2.5 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 hover:text-gray-900"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Analytic Modal Component */}
      {isAnalyticModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300"
          aria-labelledby="analytic-modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div
            ref={modalRef}
            className={`relative w-full max-w-lg mx-4 bg-white rounded-2xl shadow-2xl transform ${isAnalyticAnimatingOut ? 'animate-fade-scale-out' : 'animate-fade-scale-in'}`}
          >
            <div className="flex items-start justify-between p-5 border-b border-gray-200 rounded-t-2xl bg-sky-200">
              <h3 id="analytic-modal-title" className="text-xl font-semibold text-gray-800">
                Project Saya
              </h3>
              <button
                type="button"
                onClick={handleAnalyticcloseClick}
                className="p-1 text-red-600 bg-transparent rounded-lg hover:bg-red-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                aria-label="Close modal"
              >
                <XIcon />
              </button>
            </div>
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
            <div className="flex items-center justify-end p-5 space-x-2 border-t border-gray-200 rounded-b-2xl">
              <button
                onClick={handleAnalyticcloseClick}
                className="px-5 py-2.5 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 hover:text-gray-900"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Contact Modal Component */}
      {isContactModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300"
          aria-labelledby="contact-modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div
            ref={modalRef}
            className={`relative w-full max-w-sm mx-4 bg-white rounded-2xl shadow-2xl transform ${isContactAnimatingOut ? 'animate-fade-scale-out' : 'animate-fade-scale-in'}`}
          >
            <div className="flex items-start justify-between p-5 border-b border-gray-200 rounded-t-2xl bg-emerald-200">
              <h3 id="contact-modal-title" className="text-xl font-semibold text-gray-800">
                Kontak Saya
              </h3>
              <button
                type="button"
                onClick={handleContactcloseClick}
                className="p-1 text-red-600 bg-transparent rounded-lg hover:bg-red-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                aria-label="Close modal"
              >
                <XIcon />
              </button>
            </div>
            <div className="p-6 text-center">
                <p className="text-base text-gray-700 mb-2">Sampaikan Pesan Anda Melalui Email:</p>
                <a href="mailto:hazlynrasyid34@gmail.com" className="text-lg font-medium text-blue-600 hover:underline">
                  hazlynrasyid34@gmail.com
                </a>
            </div>
            <div className="flex items-center justify-end p-5 space-x-2 border-t border-gray-200 rounded-b-2xl">
              <button
                onClick={handleContactcloseClick}
                className="px-5 py-2.5 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 hover:text-gray-900"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}