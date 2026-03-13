const Privacy = () => {
  return (
    <section
      id="privacy"
      className="border-t border-yellow-400/10 bg-stone-950 py-12 sm:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="duck-headline mb-4 text-2xl font-black tracking-tight">
          Privacy-first by design
        </h2>
        <p className="max-w-2xl text-zinc-300">
          Duck U is built to be fun, not creepy. QR codes are opt-in, and the
          game runs without needing to expose who you really are.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-yellow-400/20 bg-stone-900/70 p-5">
            <h3 className="mb-2 text-sm font-semibold text-yellow-300">
              Opt-in only
            </h3>
            <p className="text-sm text-zinc-300">
              Your QR is yours. No one is scanning random plates—only people who
              choose to join the game.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/20 bg-stone-900/70 p-5">
            <h3 className="mb-2 text-sm font-semibold text-yellow-300">
              Minimal profile info
            </h3>
            <p className="text-sm text-zinc-300">
              You pick a username and optional Jeep nickname/color. No forced
              real names, no license plate storage.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/20 bg-stone-900/70 p-5">
            <h3 className="mb-2 text-sm font-semibold text-yellow-300">
              You&apos;re in control
            </h3>
            <p className="text-sm text-zinc-300">
              From inside the app you can delete your account and data if you
              ever decide to leave the pond.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Privacy;

