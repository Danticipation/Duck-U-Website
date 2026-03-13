const Scoring = () => {
  return (
    <section
      id="points"
      className="border-t border-yellow-400/10 bg-stone-950 py-12 sm:py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <h2 className="duck-headline mb-4 text-3xl font-black tracking-tight">
              Points, bonuses, and ridiculous titles
            </h2>
            <p className="text-zinc-300">
              Under the hood, Duck U keeps things fair but chaotic. Every scan
              runs through scoring rules powered by Firebase Cloud Functions.
            </p>
          </div>
          <p className="max-w-sm text-sm text-zinc-400">
            Titles like Sitting Duck, Quack Assassin, Supreme Duckinator, and
            weekly Lord of the Pond are all earned in-app based on your score.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-yellow-400/20 bg-stone-900/80 p-5">
            <h3 className="mb-1 text-sm font-semibold text-yellow-300">
              First time ducking someone
            </h3>
            <p className="text-2xl font-black text-zinc-50">+5 pts</p>
            <p className="mt-2 text-sm text-zinc-300">
              The first time you duck a Jeep, it hits harder.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/20 bg-stone-900/80 p-5">
            <h3 className="mb-1 text-sm font-semibold text-yellow-300">
              Regular duck
            </h3>
            <p className="text-2xl font-black text-zinc-50">+3 pts</p>
            <p className="mt-2 text-sm text-zinc-300">
              Every normal scan still moves you up the pond.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/20 bg-stone-900/80 p-5">
            <h3 className="mb-1 text-sm font-semibold text-yellow-300">
              Night Owl
            </h3>
            <p className="text-2xl font-black text-zinc-50">+2 pts</p>
            <p className="mt-2 text-sm text-zinc-300">
              Ducks dropped between 10pm–6am UTC earn a little extra.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/20 bg-stone-900/80 p-5">
            <h3 className="mb-1 text-sm font-semibold text-yellow-300">
              Revenge duck
            </h3>
            <p className="text-2xl font-black text-zinc-50">×2</p>
            <p className="mt-2 text-sm text-zinc-300">
              Duck back someone who ducked you first and your points are doubled.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/20 bg-stone-900/80 p-5">
            <h3 className="mb-1 text-sm font-semibold text-yellow-300">
              Duck Chain
            </h3>
            <p className="text-2xl font-black text-zinc-50">+10 pts &amp; ×2</p>
            <p className="mt-2 text-sm text-zinc-300">
              Give 3+ ducks in a row and trigger a chain bonus that stacks.
            </p>
          </div>

          <div className="rounded-2xl border border-red-500/40 bg-red-950/40 p-5">
            <h3 className="mb-1 text-sm font-semibold text-red-300">
              Self-duck
            </h3>
            <p className="text-2xl font-black text-zinc-50">−5 pts</p>
            <p className="mt-2 text-sm text-zinc-200">
              Scan your own QR on purpose? That&apos;s a foul. Don&apos;t.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scoring;

