"use client";

import { useState } from "react";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

export function NewsletterPanel() {
  const [isSent, setIsSent] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-sage to-sage-deep px-12 py-14 text-center">
      <MaterialIcon
        name="eco"
        className="pointer-events-none absolute left-10 top-6 text-[90px] text-[rgba(230,199,126,0.12)]"
      />
      <MaterialIcon
        name="spa"
        className="pointer-events-none absolute bottom-[18px] right-[46px] text-[90px] text-[rgba(230,199,126,0.12)]"
      />
      <div className="relative">
        <h2 className="mb-3 font-heading text-[32px] font-semibold text-[#FBF7EC]">
          Gentle reminders for a calmer body
        </h2>
        <p className="mx-auto mb-7 max-w-[480px] text-base leading-relaxed text-[#D6CFBE]">
          Occasional notes on natural relief, simple self-care, and a little spiritual grounding. No noise — only
          what serves your wellbeing.
        </p>
        {isSent ? (
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[rgba(230,199,126,0.4)] bg-[rgba(230,199,126,0.18)] px-[26px] py-[15px] text-[15px] font-semibold text-[#F0E4C4]">
            <MaterialIcon name="check_circle" className="text-xl" />
            Thank you — you&apos;re on the list.
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setIsSent(true);
            }}
            className="mx-auto flex max-w-[440px] flex-wrap justify-center gap-2.5"
          >
            <input
              type="email"
              required
              placeholder="Your email address"
              className="min-w-[220px] flex-1 rounded-full border border-white/50 bg-white/95 px-[22px] py-3.5 text-[15px] text-ink outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-gold px-7 py-3.5 text-[15px] font-bold text-ink shadow-[0_8px_20px_rgba(0,0,0,0.18)] hover:bg-gold-hover"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
