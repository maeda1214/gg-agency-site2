"use client";

import { useState, useTransition } from "react";
import { contactSchema, type ContactFormValues } from "@/lib/contact";
import type { Locale } from "@/types/content";

type FormState = {
  status: "idle" | "success" | "error";
  message: string;
};

type FormErrors = Partial<Record<keyof ContactFormValues | "form", string>>;

const statusMessages = {
  success: "送信しました。内容を確認のうえ、担当者よりご連絡します。",
  error: "送信できませんでした。時間をおいて再度お試しください。"
};

const labels = {
  ja: {
    name: "お名前",
    company: "会社名 / ブランド名",
    email: "メールアドレス",
    message: "お問い合わせ内容",
    submit: "送信する",
    sending: "送信中...",
    validation: {
      name: "お名前を入力してください。",
      email: "正しいメールアドレスを入力してください。",
      message: "お問い合わせ内容は10文字以上で入力してください。"
    }
  },
  en: {
    name: "Name",
    company: "Company / Brand",
    email: "Email",
    message: "Project outline",
    submit: "Send inquiry",
    sending: "Sending...",
    validation: {
      name: "Please enter your name.",
      email: "Please enter a valid email address.",
      message: "Please enter at least 10 characters."
    }
  }
};

export function ContactForm({ locale }: { locale: Locale }) {
  const t = labels[locale];
  const [formState, setFormState] = useState<FormState>({ status: "idle", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isPending, startTransition] = useTransition();

  function submit(formData: FormData) {
    const raw = Object.fromEntries(formData.entries());
    const parsed = contactSchema.safeParse({
      ...raw,
      inquiryType: "Brand / Campaign",
      country: "",
      budgetRange: "",
      timeline: "",
      timeZone: ""
    });

    if (!parsed.success) {
      setErrors(getValidationErrors(parsed.error.issues, locale));
      setFormState({ status: "idle", message: "" });
      return;
    }

    setErrors({});
    startTransition(async () => {
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(parsed.data)
        });
        const result = (await response.json().catch(() => null)) as { errors?: Record<string, string[]> } | null;

        if (!response.ok) {
          setErrors(
            Object.fromEntries(
              Object.entries(result?.errors || {}).map(([field, messages]) => [field, messages[0] || statusMessages.error])
            ) as FormErrors
          );
          setFormState({ status: "error", message: statusMessages.error });
          return;
        }

        setFormState({ status: "success", message: statusMessages.success });
      } catch {
        setFormState({ status: "error", message: statusMessages.error });
      }
    });
  }

  return (
    <form action={submit} noValidate className="grid gap-5 border border-[#c8a86a]/30 bg-[#090909] p-5 text-white sm:p-8">
      <div className="hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field name="name" label={t.name} error={errors.name} required />
        <Field name="company" label={t.company} error={errors.company} />
      </div>
      <Field name="email" label={t.email} error={errors.email} required type="email" />
      <label className="grid gap-2 text-sm font-semibold text-white/78">
        {t.message}
        <textarea
          aria-describedby={errors.message ? "message-error" : undefined}
          aria-invalid={Boolean(errors.message)}
          className={[
            "focus-ring min-h-44 border bg-black px-3 py-3 text-sm font-normal text-white outline-none placeholder:text-white/30 transition-colors",
            errors.message ? "border-red-400/80" : "border-white/14"
          ].join(" ")}
          name="message"
          required
        />
        {errors.message ? (
          <span id="message-error" className="text-xs font-medium text-red-300">
            {errors.message}
          </span>
        ) : null}
      </label>
      {formState.message ? (
        <p className={formState.status === "success" ? "text-sm font-semibold text-[#c8a86a]" : "text-sm font-semibold text-red-300"}>
          {formState.message}
        </p>
      ) : null}
      <button
        className="focus-ring min-h-12 border border-[#c8a86a] bg-[#c8a86a] px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-[#e3c983] disabled:cursor-not-allowed disabled:opacity-60"
        type="submit"
        disabled={isPending}
      >
        {isPending ? t.sending : t.submit}
      </button>
    </form>
  );
}

function Field({
  name,
  label,
  error,
  type = "text",
  required
}: {
  name: string;
  label: string;
  error?: string;
  type?: string;
  required?: boolean;
}) {
  const errorId = `${name}-error`;

  return (
    <label className="grid gap-2 text-sm font-semibold text-white/78">
      {label}
      <input
        aria-describedby={error ? errorId : undefined}
        aria-invalid={Boolean(error)}
        className={[
          "focus-ring min-h-12 border bg-black px-3 text-sm font-normal text-white outline-none placeholder:text-white/30 transition-colors",
          error ? "border-red-400/80" : "border-white/14"
        ].join(" ")}
        name={name}
        type={type}
        required={required}
      />
      {error ? (
        <span id={errorId} className="text-xs font-medium text-red-300">
          {error}
        </span>
      ) : null}
    </label>
  );
}

function getValidationErrors(issues: Array<{ path: PropertyKey[] }>, locale: Locale): FormErrors {
  const t = labels[locale].validation;
  const errors: FormErrors = {};

  for (const issue of issues) {
    const field = issue.path[0];

    if (field === "name") {
      errors.name = t.name;
    }

    if (field === "email") {
      errors.email = t.email;
    }

    if (field === "message") {
      errors.message = t.message;
    }
  }

  return errors;
}
