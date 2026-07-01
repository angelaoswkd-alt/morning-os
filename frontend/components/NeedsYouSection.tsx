type FocusItem = {
  title: string;
  subtitle: string;
};

type NeedsYouSectionProps = {
  focus: {
    title: string;
    items: FocusItem[];
  };
};

export default function NeedsYouSection({ focus }: NeedsYouSectionProps) {
  return (
    <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
      <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
        {focus.title}
      </p>

      <div className="mt-5 space-y-3">
        {focus.items.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-black/5 bg-[#FAFAF8] p-4"
          >
            <p className="text-lg font-medium text-gray-900">
              {item.title}
            </p>
            <p className="mt-1 text-sm text-gray-500">
              {item.subtitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}