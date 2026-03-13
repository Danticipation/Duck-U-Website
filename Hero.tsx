import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-stone-900 flex items-center justify-center overflow-hidden">
      {/* Background Texture Overlay (Mud/Tread Effect) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />
      
      {/* Abstract "Tire Track" Graphic */}
      <div className="absolute -left-20 top-0 bottom-0 w-40 bg-yellow-400/5 rotate-12 transform skew-x-12 hidden lg:block" />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="space-y-8">
          <div className="inline-block px-3 py-1 bg-yellow-400 text-black font-black uppercase tracking-tighter text-sm skew-x-[-10deg]">
            The Streets are Your Pond
          </div>
          
          <h1 className="duck-headline text-7xl md:text-8xl font-black tracking-tighter leading-none mb-6">
            DON&apos;T BE WACK,<br />DO QUACK!
          </h1>
          
          <p className="max-w-2xl mx-auto text-2xl md:text-3xl text-zinc-300 mb-10">
            The silly-competitive Jeep Ducking app.<br />
            Scan QR stickers → earn points → trash-talk your way to Supreme Duckinator.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://ducku.app" 
               target="_blank"
               className="quack-btn bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-xl px-10 py-5 rounded-2xl flex items-center justify-center gap-3 transition shadow-xl shadow-yellow-400/30">
              📲 DOWNLOAD NOW (iOS & Android)
            </a>
            <a href="#how" 
               className="border-2 border-yellow-400 hover:bg-yellow-400/10 font-bold text-xl px-10 py-5 rounded-2xl transition">
              SEE HOW IT WORKS →
            </a>
          </div>

          <div className="mt-16 flex justify-center gap-8 text-sm opacity-75">
            <div>🔥 Based in Scottsdale AZ🔥</div>
            <div>🔒No personal info collected or sold, ever!🔒</div>
          </div>
        </div>

        {/* Floating app mockup */}
        <div className="hidden lg:block absolute bottom-10 right-10 bg-zinc-900 border border-yellow-400/30 rounded-3xl shadow-2xl overflow-hidden w-72 rotate-6">
          <div className="bg-black h-10 flex items-center px-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
          </div>
          <Image 
            src="/images/duck-u-qr.png" 
            alt="Duck U app screenshot – scanner in action" 
            width={500} 
            height={500} 
            className="w-full"
          />
          <div className="p-4 text-center bg-gradient-to-t from-black text-yellow-400 text-sm font-bold">YOU JUST GOT DUCKED! +7 PTS</div>
        </div>
      </section>
    );
  };

export default RuggedHero;