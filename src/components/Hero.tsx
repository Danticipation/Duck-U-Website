import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-stone-900 flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/duck-u-logo.jpg')" }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-stone-950/75" aria-hidden />
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/gravel.png')]" aria-hidden />
      <div className="tire-track-overlay" />

      <div className="absolute -left-20 top-0 bottom-0 w-40 bg-yellow-400/5 rotate-12 transform skew-x-12 hidden lg:block" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        <div className="space-y-6 sm:space-y-8">
          <div className="inline-block px-3 py-1.5 bg-yellow-400 text-black font-black uppercase tracking-tighter text-sm skew-x-[-10deg]">
            The Streets are Your Pond
          </div>

          <h1 className="duck-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-4 sm:mb-6">
            DON&apos;T BE WACK,
            <br />
            DO QUACK!
          </h1>

          <p className="max-w-2xl text-lg sm:text-xl md:text-2xl text-zinc-300 mb-8 sm:mb-10">
            The silly-competitive Jeep ducking app.
            <br className="hidden sm:block" />
            <span className="sm:inline">Scan QR stickers → earn points → trash-talk your way to Supreme Duckinator.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="https://ducku.app"
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[48px] bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-base sm:text-lg px-6 sm:px-8 py-4 rounded-2xl flex items-center justify-center gap-2 sm:gap-3 transition shadow-xl shadow-yellow-400/30 active:scale-[0.98]"
            >
              📲 Download Duck U (iOS &amp; Android)
            </a>
            <a
              href="#how"
              className="min-h-[48px] border-2 border-yellow-400 hover:bg-yellow-400/10 font-bold text-base sm:text-lg px-6 sm:px-8 py-4 rounded-2xl transition text-yellow-400 flex items-center justify-center active:scale-[0.98]"
            >
              See how it works →
            </a>
          </div>

          <div className="mt-8 sm:mt-10 flex flex-wrap gap-3 sm:gap-4 text-sm opacity-75">
            <div>🔥 Created in Scottsdale, AZ – played everywhere 🐦‍🔥</div>
            <div>🔒 No personal info collected or sold. Ever! 🔒</div>
          </div>
        </div>

        <div className="hidden lg:block relative">
          <div className="absolute -inset-6 bg-yellow-400/10 blur-3xl rounded-full" />

          <div className="relative bg-zinc-900 border border-yellow-400/30 rounded-3xl shadow-2xl overflow-hidden w-80 rotate-3">
            <div className="bg-black h-10 flex items-center px-4 gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-emerald-400" />
            </div>
            <Image
              src="/images/logo-qr.png"
              alt="Duck U app screenshot – scanner in action"
              width={500}
              height={500}
              className="w-full"
            />
            <div className="p-4 text-center bg-gradient-to-t from-black text-yellow-400 text-sm font-bold">
              YOU JUST GOT DUCKED! +7 PTS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

