"use client";

import { useId, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contact } from "@/content/shared/site";
import { bookingFormSchema, type BookingFormValues } from "@/lib/validations/booking";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

type BookingFormProps = {
  heading: string;
  messageLabel: string;
  messagePlaceholder: string;
  selectOptions?: string[];
  submitLabel: string;
  successTitle: string;
  successBody: string;
  footnote: string;
};

const inputClasses =
  "rounded-[11px] border border-border-warm-3 bg-field px-[15px] py-[13px] text-[14.5px] text-ink outline-none";

export function BookingForm({
  heading,
  messageLabel,
  messagePlaceholder,
  selectOptions,
  submitLabel,
  successTitle,
  successBody,
  footnote,
}: BookingFormProps) {
  const [isSent, setIsSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: { name: "", phone: "", email: "", interest: "", message: "" },
  });

  const nameId = useId();
  const phoneId = useId();
  const emailId = useId();
  const interestId = useId();
  const messageId = useId();

  const onSubmit = (values: BookingFormValues) => {
    const subject = `${heading} from ${values.name}`;
    const lines = [
      `Name: ${values.name}`,
      `Phone: ${values.phone}`,
      `Email: ${values.email}`,
      values.interest ? `Interested in: ${values.interest}` : null,
      "",
      values.message ?? "",
    ].filter((line): line is string => line !== null);
    const params = new URLSearchParams({ subject, body: lines.join("\n") });
    window.location.href = `mailto:${contact.email}?${params.toString()}`;
    setIsSent(true);
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
        className="mt-1 rounded-[13px] bg-sage py-[15px] text-[15.5px] font-bold text-bone shadow-[0_10px_24px_rgba(94,107,76,0.3)] hover:bg-sage-hover"
      >
        {submitLabel}
      </button>
      <p className="text-center text-xs text-soft-muted-2">{footnote}</p>
    </form>
  );
}
