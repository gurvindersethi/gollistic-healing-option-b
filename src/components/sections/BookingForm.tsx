"use client";

import { useEffect, useId, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookingFormSchema, type BookingFormValues } from "@/lib/validations/booking";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

type BookingFormProps = {
  heading: string;
  messageLabel: string;
  messagePlaceholder: string;
  selectOptions?: string[];
  defaultInterest?: string;
  submitLabel: string;
  successTitle: string;
  successBody: string;
  footnote: string;
};

type ToastState = {
  type: "success" | "error";
  message: string;
};

const inputClasses =
  "rounded-[11px] border border-border-warm-3 bg-field px-[15px] py-[13px] text-[14.5px] text-ink outline-none";

export function BookingForm({
  heading,
  messageLabel,
  messagePlaceholder,
  selectOptions,
  defaultInterest,
  submitLabel,
  successTitle,
  successBody,
  footnote,
}: BookingFormProps) {
  const [isSent, setIsSent] = useState(false);
  const [toast, setToast] = useState<ToastState | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      interest: defaultInterest ?? "",
      preferredDate: "",
      preferredTime: "",
      message: "",
    },
  });

  const currentInterest = watch("interest");

  useEffect(() => {
    if (defaultInterest && !currentInterest) {
      setValue("interest", defaultInterest, { shouldDirty: true, shouldValidate: true });
    }
  }, [defaultInterest, currentInterest, setValue]);

  useEffect(() => {
    if (!toast) {
      return;
    }

    const timeoutId = window.setTimeout(() => setToast(null), 4000);
    return () => window.clearTimeout(timeoutId);
  }, [toast]);

  const nameId = useId();
  const phoneId = useId();
  const emailId = useId();
  const interestId = useId();
  const dateId = useId();
  const timeId = useId();
  const messageId = useId();

  const onSubmit = async (values: BookingFormValues) => {
    setToast(null);
    setIsSent(false);

    try {
      const response = await fetch("/api/book-appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          interest: values.interest || defaultInterest || "",
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Your request could not be sent right now.");
      }

      reset();
      setIsSent(true);
      setToast({ type: "success", message: data.message || "Thank you. Your appointment request has been received." });
    } catch (error) {
      const message = error instanceof Error ? error.message : "We could not send your booking request right now.";
      setToast({ type: "error", message });
    }
  };

  if (isSent) {
    return (
      <div className="px-2.5 py-10 text-center">
        <MaterialIcon name="check_circle" className="text-[54px] text-sage" />
        <h3 className="my-4 font-heading text-2xl font-semibold text-ink">{successTitle}</h3>
        <p className="text-[15px] leading-relaxed text-muted">{successBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" noValidate>
      <h3 className="font-heading text-[22px] font-semibold text-ink">{heading}</h3>

      <div className="flex gap-3.5">
        <label htmlFor={nameId} className="flex flex-1 flex-col gap-[7px] text-[13px] font-bold text-muted">
          Name
          <input id={nameId} type="text" placeholder="Your name" className={inputClasses} {...register("name")} />
          {errors.name && <span className="text-xs font-normal text-red-700">{errors.name.message}</span>}
        </label>
        <label htmlFor={phoneId} className="flex flex-1 flex-col gap-[7px] text-[13px] font-bold text-muted">
          Phone
          <input
            id={phoneId}
            type="tel"
            placeholder="(000) 000-0000"
            className={inputClasses}
            {...register("phone")}
          />
          {errors.phone && <span className="text-xs font-normal text-red-700">{errors.phone.message}</span>}
        </label>
      </div>

      <label htmlFor={emailId} className="flex flex-col gap-[7px] text-[13px] font-bold text-muted">
        Email
        <input id={emailId} type="email" placeholder="you@email.com" className={inputClasses} {...register("email")} />
        {errors.email && <span className="text-xs font-normal text-red-700">{errors.email.message}</span>}
      </label>

      {selectOptions && (
        <label htmlFor={interestId} className="flex flex-col gap-[7px] text-[13px] font-bold text-muted">
          I&apos;m reaching out about
          <select id={interestId} className={inputClasses} {...register("interest")}>
            <option value="">Please choose…</option>
            {selectOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      )}

      <div className="flex gap-3.5">
        <label htmlFor={dateId} className="flex flex-1 flex-col gap-[7px] text-[13px] font-bold text-muted">
          Preferred Date
          <input id={dateId} type="date" className={inputClasses} {...register("preferredDate")} />
          {errors.preferredDate && <span className="text-xs font-normal text-red-700">{errors.preferredDate.message}</span>}
        </label>
        <label htmlFor={timeId} className="flex flex-1 flex-col gap-[7px] text-[13px] font-bold text-muted">
          Preferred Time
          <input id={timeId} type="time" className={inputClasses} {...register("preferredTime")} />
          {errors.preferredTime && <span className="text-xs font-normal text-red-700">{errors.preferredTime.message}</span>}
        </label>
      </div>

      <label htmlFor={messageId} className="flex flex-col gap-[7px] text-[13px] font-bold text-muted">
        {messageLabel}
        <textarea
          id={messageId}
          rows={3}
          placeholder={messagePlaceholder}
          className={`${inputClasses} resize-vertical`}
          {...register("message")}
        />
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        aria-busy={isSubmitting}
        className="mt-1 flex items-center justify-center gap-2 rounded-[13px] bg-sage py-[15px] text-[15.5px] font-bold text-bone shadow-[0_10px_24px_rgba(94,107,76,0.3)] transition hover:bg-sage-hover disabled:cursor-not-allowed disabled:opacity-80"
      >
        {isSubmitting ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-bone/70 border-t-bone" />
            Sending…
          </>
        ) : (
          submitLabel
        )}
      </button>

      {toast && (
        <div
          role="status"
          aria-live="polite"
          className={`rounded-[12px] border px-3 py-2 text-sm ${
            toast.type === "success"
              ? "border-emerald-200 bg-emerald-50 text-emerald-800"
              : "border-red-200 bg-red-50 text-red-800"
          }`}
        >
          {toast.message}
        </div>
      )}

      <p className="text-center text-xs text-soft-muted-2">{footnote}</p>
    </form>
  );
}
