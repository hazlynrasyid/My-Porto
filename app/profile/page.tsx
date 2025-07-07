import React from 'react';
import Wave from 'react-wavify';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <main className="flex-grow flex items-center justify-center p-6 md:p-12">
        <div className="max-w-2xl text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
            Ride the Next Wave of Innovation
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Discover how our solutions can transform your business with cutting-edge technology and unparalleled support.
          </p>
          
          <button className="bg-orange-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-300 transition-all duration-300 transform hover:-translate-y-1">
            Get Started
          </button>
        </div>
      </main>
      <div className="w-full h-[150px] relative">
        <Wave
          fill='#0065F8'
          paused={false}
          style={{ display: 'flex', position: 'absolute', bottom: 0, width: '100%', zIndex: 10 }}
          options={{
            height: 20,
            amplitude: 30,
            speed: 0.15,
            points: 4,
          }}
        />
        <Wave
          fill='rgb(0, 202, 255, 0.4)'
          paused={false}
          style={{ display: 'flex', position: 'absolute', bottom: 0, width: '100%' }}
          options={{
            height: 40,
            amplitude: 25,
            speed: 0.2,
            points: 3,
          }}
        />
      </div>
    </div>
  );
}
