type StateCardProps = {
  state: {
    title: string;
    message: string;
    emotion?: string;
  };
};

export default function StateCard({ state }: StateCardProps) {
  return (
    <section className="rounded-3xl bg-gradient-to-br from-[#F7F8F5] to-[#F2F5F1] border border-white p-6 shadow-sm">
      <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
        Today's State
      </p>

      <div className="mt-4 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-semibold text-gray-900">
            {state.title}
          </h2>
          <p className="mt-2 text-sm leading-6 text-gray-600">
            {state.message}
          </p>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-xl">
          🌿
        </div>
      </div>
    </section>
  );
}