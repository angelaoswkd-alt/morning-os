export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FBFAF7] via-[#F8F7F4] to-[#F3F2EE] flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md rounded-[36px] bg-white/90 backdrop-blur-md border border-white shadow-2xl shadow-black/5 p-8">
        <p className="text-sm font-medium tracking-wide text-amber-600">☀ Good Morning, Angela</p>

        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-gray-900">
          Morning OS
        </h1>

        <p className="mt-1 text-sm text-gray-400">Tuesday · 30 June</p>

        <p className="mt-4 text-xl leading-relaxed text-gray-700">
          Today has already been quietly prepared for you.
        </p>

        <div className="mt-8 rounded-3xl bg-gradient-to-br from-[#F7F8F5] to-[#F2F5F1] p-6 border border-white">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
            Today's State
          </p>

          <div className="mt-4 flex items-center justify-between">
            <div>
              <p className="text-3xl font-semibold text-gray-900">Prepared</p>
              <p className="mt-1 text-sm text-gray-500">Everything important has already been organized.</p>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-xl">
              🌿
            </div>
          </div>
        </div>

        <div className="mt-10">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
            Already Prepared
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "Alarm",
              "Route",
              "Weather",
              "Meeting Brief",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full bg-[#F4F4F2] px-4 py-2 text-sm text-gray-600"
              >
                ✓ {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t pt-6">
          <h2 className="text-sm font-medium uppercase tracking-wide text-gray-400">
            Needs You
          </h2>

          <div className="mt-5 space-y-3">
            {[
              { title: "Product Meeting", subtitle: "10:00 AM" },
              { title: "Review Proposal", subtitle: "3 min" },
              { title: "Bring Umbrella", subtitle: "Rain after 9:00" },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-black/5 bg-[#FAFAF8] p-4"
              >
                <p className="text-lg font-medium text-gray-900">{item.title}</p>
                <p className="mt-1 text-sm text-gray-500">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-12 text-center text-sm leading-7 text-gray-500">
          Everything else has already been taken care of.
          <br />
          <span className="text-gray-400">
            Your attention belongs to what matters today.
          </span>
        </p>
      </div>
    </main>
  );
}