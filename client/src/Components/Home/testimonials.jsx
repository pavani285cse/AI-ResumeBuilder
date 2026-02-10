const Testimonials = () => {
  const cardsData = [
    {
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
      name: "Briar Martin",
      handle: "@neilstellar",
    },
    {
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
      name: "Avery Johnson",
      handle: "@averywrites",
    },
    {
      image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200",
      name: "Jordan Lee",
      handle: "@jordantalks",
    },
    {
      image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200",
      name: "Avery Johnson",
      handle: "@averywrites",
    },
  ];

  const CreateCard = ({ card }) => (
    <div className="p-5 rounded-2xl bg-green-50 mx-4 shadow-sm hover:shadow-md transition w-72 shrink-0 border border-slate-100">
      <div className="flex gap-3 items-center">
        <img className="size-11 rounded-full" src={card.image} alt="" />
        <div>
          <div className="flex items-center gap-1">
            <p className="font-medium text-slate-900">{card.name}</p>
            {/* Verified */}
            <svg className="fill-green-500" width="14" height="14" viewBox="0 0 12 12">
              <path d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38c-.042.21.125.411.245.59l.24.297c.313.368.47.551.56.743a1.63 1.63 0 0 0 1.404 0l.743-.56 2.91-2.91a.488.488 0 1 0-.691-.69L4.996 7.628l-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z" />
            </svg>
          </div>
          <p className="text-xs text-slate-500">{card.handle}</p>
        </div>
      </div>

      <p className="text-sm text-slate-700 mt-4 leading-relaxed">
        Radiant made undercutting all of our competitors an absolute breeze.
      </p>
    </div>
  );

  return (
    <section className="py-28 bg-white">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-green-50 text-green-700 text-sm font-medium">
          Testimonials
        </span>

        <h2 className="mt-6 text-4xl font-semibold text-slate-900">
          Don&apos;t just take our words
        </h2>

        <p className="mt-4 text-slate-600">
          Hear what our users say about us. We&apos;re always looking for ways to
          improve. If you have a positive experience with us, leave a review.
        </p>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .marquee {
          animation: marquee 25s linear infinite;
        }
        .reverse {
          animation-direction: reverse;
        }
      `}</style>

      {/* Row 1 */}
      <div className="mt-20 overflow-hidden relative max-w-6xl mx-auto">
        <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-white to-transparent z-10" />
        <div className="flex marquee min-w-[200%] py-6">
          {[...cardsData, ...cardsData].map((card, i) => (
            <CreateCard key={i} card={card} />
          ))}
        </div>
        <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-white to-transparent z-10" />
      </div>

      {/* Row 2 */}
      <div className="overflow-hidden relative max-w-6xl mx-auto">
        <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-white to-transparent z-10" />
        <div className="flex marquee reverse min-w-[200%] py-6">
          {[...cardsData, ...cardsData].map((card, i) => (
            <CreateCard key={i} card={card} />
          ))}
        </div>
        <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-white to-transparent z-10" />
      </div>
    </section>
  );
};

export default Testimonials;
