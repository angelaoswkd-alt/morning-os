type HeroProps = {
  feeling: {
    title: string;
    message: string;
    emotion?: string;
  };
};

export default function Hero({ feeling }: HeroProps) {
  return (
    <section className="rounded-[36px] bg-white/90 p-8 shadow-2xl shadow-black/5 ring-1 ring-black/5 backdrop-blur-md">
      <p className="text-sm font-medium tracking-wide text-amber-600">
        ☀ Good Morning, Angela
      </p>

      <div className="mt-8">
        <p className="text-sm text-gray-400">Tuesday · June 30</p>

        <h1 className="mt-3 text-5xl font-semibold tracking-tight text-gray-950">
          {feeling.title}
        </h1>

        <p className="mt-5 text-xl leading-relaxed text-gray-700">
          {feeling.message}
        </p>
      </div>
    </section>
  );
}