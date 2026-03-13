const faqs = [
  {
    q: "Do I have to show my license plate or real name?",
    a: "No. Duck U only needs a username and optional Jeep nickname/color. No license plates are stored.",
  },
  {
    q: "Can non-Jeep owners play?",
    a: "Duck U is tuned for Jeep culture, but nothing stops other rigs from joining the fun.",
  },
  {
    q: "Is this only for Arizona?",
    a: "Nope. Duck U was created in Scottsdale, AZ, but it works anywhere people are dropping ducks.",
  },
  {
    q: "Is Duck U free?",
    a: "The core game is free while the community grows. Future paid extras, if any, will always be optional.",
  },
];

const Faq = () => {
  return (
    <section
      id="faq"
      className="border-t border-yellow-400/10 bg-stone-950 py-12 sm:py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="duck-headline mb-6 text-3xl font-black tracking-tight">
          Frequently quacked questions
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {faqs.map((item) => (
            <article
              key={item.q}
              className="rounded-2xl border border-yellow-400/20 bg-stone-900/80 p-5"
            >
              <h3 className="mb-2 text-sm font-semibold text-yellow-300">
                {item.q}
              </h3>
              <p className="text-sm text-zinc-300">{item.a}</p>
            </article>
          ))}
        </div>

        <footer className="mt-10 flex flex-col gap-4 border-t border-zinc-800 pt-6 text-xs text-zinc-500 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Duck U. All rights reserved.</p>
          <div className="flex gap-4">
            <a
              href="mailto:hello@ducku.app"
              className="min-h-[44px] min-w-[44px] inline-flex items-center hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 rounded"
            >
              Contact
            </a>
            <span className="opacity-60">Privacy &amp; terms coming soon</span>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Faq;

