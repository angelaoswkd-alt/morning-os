type PreparedSectionProps = {
  prepared: {
    title: string;
    items: string[];
  };
};

export default function PreparedSection({ prepared }: PreparedSectionProps) {
  return (
    <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
      <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
        {prepared.title}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {prepared.items.map((item) => (
          <span
            key={item}
            className="rounded-full bg-[#F4F4F2] px-4 py-2 text-sm text-gray-700"
          >
            ✓ {item}
          </span>
        ))}
      </div>
    </section>
  );
}