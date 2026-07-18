"use client";

import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 3000);
  }

  return (
    <section className="bg-[#f5f5f5] py-12 px-4">
      <div className="mx-auto max-w-5xl rounded-[32px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-gray-100 px-6 py-8 md:px-10">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="shrink-0">
            <h2 className="text-base font-bold text-[#212121] font-bahnschrift md:text-xl">
              Join Our Newsletter To Get Offers
            </h2>
            <p className="mt-1 text-xs text-gray-500 font-bahnschrift">
              Subscribe to our <span className="text-[#A98153]">newsletter</span> and <span className="text-[#A98153]">stay updated</span>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex w-full max-w-lg gap-0">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 border border-gray-200 rounded-l-[24px] px-4 py-3 text-sm text-[#333] placeholder:text-gray-400 focus:outline-none focus:border-gray-400 font-bahnschrift"
            />
            <button
              type="submit"
              className="rounded-r-[24px] bg-[#212121] px-6 py-3 text-[12px] font-bold text-white uppercase tracking-[0.25em] transition-colors hover:bg-black font-bahnschrift"
            >
              {submitted ? "Done!" : "Subscribe"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
