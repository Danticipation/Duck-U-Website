import Image from "next/image";

const Nav = () => {
  return (
    <header className="sticky top-0 z-20 border-b border-yellow-400/10 bg-gradient-to-b from-stone-950/95 via-stone-950/90 to-stone-950/60 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#top" className="flex items-center gap-3">
          <div className="relative h-8 w-8 overflow-hidden rounded-full border border-yellow-400/60 bg-black">
            <Image
              src="/images/duck-u-logo.jpg"
              alt="Duck U logo"
              fill
              sizes="32px"
              className="object-cover"
            />
          </div>
          <span className="text-sm font-semibold text-zinc-300">
            Don&apos;t be wack, do quack
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-300 md:flex">
          <a href="#how" className="hover:text-yellow-300">
            How it works
          </a>
          <a href="#points" className="hover:text-yellow-300">
            Points &amp; titles
          </a>
          <a href="#merch" className="hover:text-yellow-300">
            Merch
          </a>
          <a href="#forum" className="hover:text-yellow-300">
            Forum
          </a>
          <a href="#faq" className="hover:text-yellow-300">
            FAQ
          </a>
          <a
            href="https://ducku.app"
            target="_blank"
            className="rounded-full bg-yellow-400 px-4 py-2 text-xs font-black uppercase tracking-wide text-black hover:bg-yellow-300"
          >
            Download app
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Nav;

