"use client";

import { useState, useTransition } from "react";
import { applySchema, type ApplyFormValues } from "@/lib/contact";
import type { Locale } from "@/types/content";

const lineConsultationUrl = "https://lin.ee/RDw8302";

type FormState = {
  status: "idle" | "success" | "error";
  message: string;
};

type FormErrors = Partial<Record<keyof ApplyFormValues | "form", string>>;

const statusMessages = {
  success: "送信しました。内容を確認のうえ、担当者よりご連絡します。",
  error: "送信できませんでした。時間をおいて再度お試しください。"
};

const labels = {
  ja: {
    required: "必須",
    name: "お名前",
    email: "メールアドレス",
    age: "年齢",
    residence: "お住まい",
    message: "応募メッセージ",
    line: "LINEで相談する",
    submit: "モデル応募を送信する",
    sending: "送信中...",
    validation: {
      name: "お名前を入力してください。",
      email: "正しいメールアドレスを入力してください。",
      age: "年齢を入力してください。",
      residence: "お住まいを入力してください。",
      message: "応募メッセージを入力してください。"
    }
  },
  en: {
    required: "Required",
    name: "Name",
    email: "Email",
    age: "Age",
    residence: "Residence",
    message: "Application message",
    line: "Talk on LINE",
    submit: "Send model application",
    sending: "Sending...",
    validation: {
      name: "Please enter your name.",
      email: "Please enter a valid email address.",
      age: "Please enter your age.",
      residence: "Please enter where you live.",
      message: "Please enter your application message."
    }
  }
};

export function ApplyForm({ locale }: { locale: Locale }) {
  const t = labels[locale];
  const [formState, setFormState] = useState<FormState>({ status: "idle", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isPending, startTransition] = useTransition();

  function submit(formData: FormData) {
    const raw = Object.fromEntries(formData.entries());
    const parsed = applySchema.safeParse(raw);

    if (!parsed.success) {
      setErrors(getValidationErrors(parsed.error.issues, locale));
      setFormState({ status: "idle", message: "" });
      return;
    }

    setErrors({});
    startTransition(async () => {
      try {
        const response = await fetch("/api/apply", {
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
    <div className="grid gap-4">
      <form action={submit} noValidate className="grid gap-5 border border-[#c8a86a]/30 bg-[#090909] p-5 text-white sm:p-8">
        <div className="hidden">
          <label htmlFor="apply-website">Website</label>
          <input id="apply-website" name="website" tabIndex={-1} autoComplete="off" />
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field name="name" label={t.name} requiredLabel={t.required} error={errors.name} required />
          <Field name="email" label={t.email} requiredLabel={t.required} error={errors.email} required type="email" />
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field name="age" label={t.age} requiredLabel={t.required} error={errors.age} required inputMode="numeric" />
          <Field name="residence" label={t.residence} requiredLabel={t.required} error={errors.residence} required />
        </div>
        <label className="grid gap-2 text-sm font-semibold text-white/78">
          <span className="flex items-center gap-2">
            {t.message}
            <RequiredBadge>{t.required}</RequiredBadge>
          </span>
          <textarea
            aria-describedby={errors.message ? "apply-message-error" : undefined}
            aria-invalid={Boolean(errors.message)}
            className={[
              "focus-ring min-h-44 border bg-black px-3 py-3 text-sm font-normal text-white outline-none placeholder:text-white/30 transition-colors",
              errors.message ? "border-red-400/80" : "border-white/14"
            ].join(" ")}
            name="message"
            required
          />
          {errors.message ? (
            <span id="apply-message-error" className="text-xs font-medium text-red-300">
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
      <a
        className="focus-ring inline-flex min-h-12 items-center justify-center gap-3 border border-[#c8a86a]/45 bg-black px-5 py-3 text-sm font-semibold tracking-[0.12em] text-white transition hover:border-[#c8a86a] hover:text-[#e3c983]"
        href={lineConsultationUrl}
        rel="noreferrer"
        target="_blank"
      >
        <LineIcon />
        {t.line}
      </a>
    </div>
  );
}

function Field({
  error,
  inputMode,
  label,
  name,
  required,
  requiredLabel,
  type = "text"
}: {
  error?: string;
  inputMode?: "numeric";
  label: string;
  name: string;
  required?: boolean;
  requiredLabel: string;
  type?: string;
}) {
  const errorId = `${name}-error`;

  return (
    <label className="grid gap-2 text-sm font-semibold text-white/78">
      <span className="flex items-center gap-2">
        {label}
        <RequiredBadge>{requiredLabel}</RequiredBadge>
      </span>
      <input
        aria-describedby={error ? errorId : undefined}
        aria-invalid={Boolean(error)}
        className={[
          "focus-ring min-h-12 border bg-black px-3 text-sm font-normal text-white outline-none placeholder:text-white/30 transition-colors",
          error ? "border-red-400/80" : "border-white/14"
        ].join(" ")}
        inputMode={inputMode}
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

function RequiredBadge({ children }: { children: string }) {
  return (
    <span className="border border-[#c8a86a]/45 px-1.5 py-0.5 text-[10px] font-semibold leading-none tracking-[0.12em] text-[#d8bd7d]">
      {children}
    </span>
  );
}

function LineIcon() {
  return (
    <svg aria-hidden className="h-4 w-4" fill="none" viewBox="0 0 24 24">
      <path
        d="M20 11.2c0 4.1-3.7 7.4-8.2 7.4-.8 0-1.6-.1-2.3-.3L5.2 20l1.3-3.4C4.8 15.3 3.8 13.4 3.8 11.2c0-4.1 3.7-7.4 8.2-7.4S20 7.1 20 11.2Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
      <path d="M7.8 11.6h1.8m2-1.3v2.6m2.1-2.6h2" stroke="currentColor" strokeLinecap="round" strokeWidth="1.4" />
    </svg>
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

    if (field === "age") {
      errors.age = t.age;
    }

    if (field === "residence") {
      errors.residence = t.residence;
    }

    if (field === "message") {
      errors.message = t.message;
    }
  }

  return errors;
}
