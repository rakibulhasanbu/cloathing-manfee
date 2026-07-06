import type { Review } from "@/types/shop";

/* ── Shared star path ─────────────────────────────────────────────────── */
const STAR_PATH =
  "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z";

function Stars({ rating, size = 14 }: { rating: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg
          key={s}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d={STAR_PATH} fill={s <= Math.round(rating) ? "#FBCA51" : "#e5e7eb"} />
        </svg>
      ))}
    </div>
  );
}

function RatingBar({
  stars,
  count,
  total,
}: {
  stars: number;
  count: number;
  total: number;
}) {
  const pct = total > 0 ? (count / total) * 100 : 0;
  return (
    <div className="flex items-center gap-2">
      <span className="w-3 text-right text-xs text-gray-500">{stars}</span>
      <svg width={12} height={12} viewBox="0 0 24 24" aria-hidden="true">
        <path d={STAR_PATH} fill="#FBCA51" />
      </svg>
      <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-100">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#c0a086] to-[#977b63] transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="w-5 text-right text-xs text-gray-400">{count}</span>
    </div>
  );
}

/* ── Main component ───────────────────────────────────────────────────── */

interface Props {
  reviews: Review[];
  rating: number;
  reviewCount: number;
}

export function ProductReviews({ reviews, rating, reviewCount }: Props) {
  const dist = [5, 4, 3, 2, 1].map((stars) => ({
    stars,
    count: reviews.filter((r) => Math.round(r.rating) === stars).length,
  }));

  return (
    <section id="product-reviews" className="mt-12 scroll-mt-20 md:mt-16">
      {/* Header bar */}
      <div className="flex flex-col gap-3 rounded-t-xl bg-gray-50 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-900">
          Customer Reviews
        </h2>
        <button
          id="write-review-btn"
          className="rounded-lg bg-emerald-500 px-5 py-2 text-xs font-semibold text-white transition-colors hover:bg-emerald-600"
        >
          Write a Review
        </button>
      </div>

      {/* Rating summary (only when reviews exist) */}
      {reviewCount > 0 && (
        <div className="flex items-center gap-8 border-x border-gray-100 bg-white px-5 py-6">
          {/* Big score */}
          <div className="flex flex-col items-center">
            <span className="text-5xl font-bold text-gray-900">{rating.toFixed(1)}</span>
            <Stars rating={rating} size={16} />
            <span className="mt-1 text-xs text-gray-400">{reviewCount} reviews</span>
          </div>

          {/* Breakdown bars */}
          <div className="flex-1 space-y-2">
            {dist.map(({ stars, count }) => (
              <RatingBar key={stars} stars={stars} count={count} total={reviewCount} />
            ))}
          </div>
        </div>
      )}

      {/* Review list */}
      <div className="divide-y divide-gray-100 rounded-b-xl border border-gray-100">
        {reviews.length === 0 ? (
          <p className="py-12 text-center text-sm text-gray-400">
            No reviews yet — be the first to share your experience!
          </p>
        ) : (
          reviews.map((review) => (
            <article key={review.id} className="px-5 py-6">
              <div className="flex items-start justify-between gap-4">
                {/* Avatar + name */}
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#c0a086] to-[#977b63] text-sm font-bold text-white">
                    {review.customerName.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {review.customerName}
                    </p>
                    <p className="text-xs text-gray-400">
                      {new Date(review.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>

                {/* Stars */}
                <Stars rating={review.rating} size={14} />
              </div>

              <p className="mt-3 text-sm leading-relaxed text-gray-700">{review.text}</p>
            </article>
          ))
        )}
      </div>
    </section>
  );
}
