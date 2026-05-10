"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";

export function Newsletter() {
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setEmail("");
  }

  return (
    <section className="bg-white py-8">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-gray-900 uppercase md:text-base">
              Join Our Newsletter To Get Offers
            </h2>
            <p className="mt-0.5 text-xs text-gray-500">
              Subscribe and get exclusive deals & updates.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex w-full max-w-sm gap-2">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-9 flex-1 text-sm"
            />
            <button
              type="submit"
              className="rounded bg-gray-900 px-4 py-2 text-xs font-semibold text-white tracking-wide uppercase transition-colors hover:bg-black"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
