const MerchForum = () => {
  return (
    <section
      id="merch"
      className="border-t border-yellow-400/10 bg-gradient-to-b from-stone-900 to-stone-950 py-12 sm:py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 max-w-2xl">
          <h2 className="duck-headline mb-4 text-3xl font-black tracking-tight">
            Coming soon: merch &amp; Jeep flock forum
          </h2>
          <p className="text-zinc-300">
            Duck U is starting as an app—but the pond is getting bigger. Merch
            and a simple community space are on the roadmap.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <article
            aria-labelledby="merch-card-title"
            className="rounded-2xl border border-yellow-400/25 bg-stone-950/70 p-6"
          >
            <div className="mb-3 inline-flex rounded-full border border-yellow-400/60 bg-yellow-400/10 px-3 py-1 text-xs font-semibold uppercase text-yellow-300">
              Coming soon
            </div>
            <h3
              id="merch-card-title"
              className="mb-2 text-lg font-semibold text-zinc-50"
            >
              Duck U merch
            </h3>
            <p className="text-sm text-zinc-300">
              Duck QR sticker packs, trail-ready hoodies, and &quot;Lord of the
              Pond&quot; flex gear for the top of the leaderboard.
            </p>
          </article>

          <article
            id="forum"
            aria-labelledby="forum-card-title"
            className="rounded-2xl border border-yellow-400/25 bg-stone-950/70 p-6"
          >
            <div className="mb-3 inline-flex rounded-full border border-yellow-400/60 bg-yellow-400/10 px-3 py-1 text-xs font-semibold uppercase text-yellow-300">
              Coming soon
            </div>
            <h3
              id="forum-card-title"
              className="mb-2 text-lg font-semibold text-zinc-50"
            >
              Jeep Flock Forum
            </h3>
            <p className="text-sm text-zinc-300">
              A simple space for Jeepers to find meets, share trail runs, and
              trade ideas for the most legendary duck drops.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default MerchForum;

