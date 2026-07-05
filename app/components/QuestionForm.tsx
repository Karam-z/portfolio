"use client";

import { useState } from "react";

const EMAIL = "karam.zuheir2@gmail.com";

export default function QuestionForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio question from ${name || "someone"}`);
    const body = encodeURIComponent(
      `${question}\n\n— ${name || "Anonymous"}${email ? ` (${email})` : ""}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  const field =
    "w-full rounded-xl bg-[var(--card)] border border-[var(--border)] px-4 py-3 text-[var(--fg)] placeholder:text-[var(--muted)] outline-none focus:border-[var(--accent)] transition-colors";

  return (
    <form onSubmit={submit} className="w-full max-w-2xl mx-auto space-y-4 text-left">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          className={field}
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className={field}
          type="email"
          placeholder="Your email (optional)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <textarea
        className={`${field} min-h-[140px] resize-y`}
        placeholder="What would you like to ask?"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        required
      />
      <div className="flex flex-col sm:flex-row items-center gap-4 justify-between">
        <button
          type="submit"
          className="bg-[var(--accent)] text-[var(--on-accent)] px-7 py-3 rounded-full font-semibold hover:bg-[var(--accent-hover)] transition-colors"
        >
          Send question
        </button>
        <span className="text-[var(--muted)] text-sm">
          or email me directly at{" "}
          <a href={`mailto:${EMAIL}`} className="text-[var(--accent)] hover:underline">
            {EMAIL}
          </a>
        </span>
      </div>
    </form>
  );
}
