const steps = [
  {
    title: "Slap your duck on your Jeep",
    body: "Generate your personal Duck U QR, print your duck sticker, and slap it on your rig.",
    badge: "Step 1",
  },
  {
    title: "Let people duck you (and each other)",
    body: "Other Jeepers scan your QR when they spot you. Every scan means points, streaks, and chaotic bonuses.",
    badge: "Step 2",
  },
  {
    title: "Climb the leaderboard and flex",
    body: "Earn titles like Quack Assassin and Supreme Duckinator while you trash-talk your Jeep club.",
    badge: "Step 3",
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how"
      className="border-t border-yellow-400/10 bg-gradient-to-b from-stone-950 to-stone-900 py-12 sm:py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 max-w-2xl">
          <h2 className="duck-headline mb-4 text-3xl font-black tracking-tight">
            How Duck U works
          </h2>
            <p className="text-zinc-300">
              Real-world Jeep ducking meets a points-powered game loop you can
              play on any trail, cruise, or city street.
            </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.title}
              className="relative flex flex-col gap-4 rounded-2xl border border-yellow-400/15 bg-stone-950/60 p-6 shadow-[0_0_40px_rgba(250,204,21,0.08)]"
            >
              <span className="inline-flex w-min rounded-full border border-yellow-400/60 bg-yellow-400/10 px-3 py-1 text-xs font-semibold uppercase text-yellow-300">
                {step.badge}
              </span>
              <h3 className="text-lg font-semibold text-zinc-50">
                {step.title}
              </h3>
              <p className="text-sm text-zinc-300">{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

