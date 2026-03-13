const Culture = () => {
  return (
    <section className="border-t border-yellow-400/10 bg-gradient-to-b from-stone-900 to-stone-950 py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 md:flex-row md:items-center">
        <div className="flex-1 space-y-4">
          <h2 className="duck-headline text-3xl font-black tracking-tight">
            Built on real Jeep ducking culture
          </h2>
          <p className="text-zinc-300">
            Since around 2020, Jeep owners have been secretly leaving rubber
            ducks on Jeeps they admire with a simple note: &quot;You&apos;ve
            been ducked!&quot; It&apos;s a small, weird, wholesome surprise that
            blew up across the Jeep world.
          </p>
          <p className="text-zinc-300">
            Duck U keeps that vibe intact—no plates, no weird tracking—while
            adding streaks, bonuses, and weekly leaderboards so your Jeep club
            can keep score.
          </p>
          <p className="text-sm text-zinc-400">
            Perfect for local Jeep meets, trail runs, and parking-lot ambushes
            wherever Jeep people already watch each other&apos;s rigs.
          </p>
        </div>

        <div className="flex-1 space-y-4">
          <div className="rounded-2xl border border-yellow-400/20 bg-stone-900/80 p-5 text-sm text-zinc-200">
            <p className="font-semibold text-yellow-300">
              A quick look inside the app:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>
                Profile with your Jeep nickname, color, and evolving duck title.
              </li>
              <li>Personal QR you can print as stickers or cards.</li>
              <li>Scanner that shouts &quot;You just got ducked!&quot;</li>
              <li>Leaderboards that reset weekly with fresh bragging rights.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Culture;

