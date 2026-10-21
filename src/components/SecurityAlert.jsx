
import { useEffect, useState } from "react";
import {
  FaExclamationTriangle,
  FaShieldAlt,
  FaEnvelope,
  FaTimes,
} from "react-icons/fa";

function SecurityAlert() {
  const [isOpen, setIsOpen] = useState(true);

  const email = "info@vaytrixtechit.com";

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/75 p-3 backdrop-blur-sm sm:p-4"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          setIsOpen(false);
        }
      }}
    >
      {/* Compact Alert Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="security-alert-title"
        className="relative my-auto w-full max-w-md overflow-hidden rounded-xl border border-violet-500/30 bg-[#080810] shadow-[0_0_40px_rgba(139,92,246,0.18)]"
      >
        {/* Ambient glow */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-600/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />

        {/* Close button */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close security alert"
          className="absolute right-2 top-2 z-20 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-black/40 text-slate-300 transition duration-300 hover:rotate-90 hover:border-red-400/40 hover:bg-red-500/15 hover:text-red-300"
        >
          <FaTimes size={14} />
        </button>

        {/* Header */}
        <div className="relative border-b border-white/10 bg-gradient-to-r from-violet-600/20 via-blue-600/15 to-cyan-500/20 px-4 py-4 text-center">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-red-400/30 bg-red-500/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-red-300 sm:text-xs">
            <FaExclamationTriangle size={12} />
            Security Alert
          </div>

          <h2
            id="security-alert-title"
            className="pr-5 text-xl font-black uppercase tracking-wide text-white sm:text-2xl"
          >
            Important Notice
          </h2>

          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400" />
        </div>

        {/* Content */}
        <div className="relative max-h-[55vh] space-y-3 overflow-y-auto px-4 py-4">
          <div className="flex items-start gap-2.5">
            <FaShieldAlt
              className="mt-1 shrink-0 text-cyan-400"
              size={18}
            />

            <div className="min-w-0">
              <h3 className="text-center text-sm font-extrabold uppercase leading-relaxed text-violet-300 sm:text-base">
                Official Communication Notice
              </h3>

              <p className="mt-2 text-justify text-xs leading-6 text-slate-300 sm:text-sm">
                Vaytrix Tech IT communicates through its verified
                official email domain. Please verify any communication
                claiming to represent our company before sharing
                sensitive information or making payments.
              </p>
            </div>
          </div>

          {/* Warning message */}
          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
            <p className="text-xs leading-6 text-slate-300 sm:text-sm">
              Received a suspicious message, job offer, or payment
              request? Contact us through our official email address
              to verify its authenticity.
            </p>
          </div>

          {/* Official email */}
          <div className="flex justify-center pb-1">
            <a
              href={`mailto:${email}`}
              className="inline-flex max-w-full items-center gap-2 rounded-lg border border-cyan-400/30 bg-cyan-400/10 px-3 py-2 text-xs font-semibold text-cyan-300 transition duration-300 hover:border-cyan-300/60 hover:bg-cyan-400/20 hover:shadow-[0_0_18px_rgba(6,182,212,0.15)] sm:text-sm"
            >
              <FaEnvelope className="shrink-0" />
              <span className="break-all">{email}</span>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="relative flex justify-end border-t border-white/10 bg-white/[0.02] px-4 py-3">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="rounded-lg bg-gradient-to-r from-violet-600 to-blue-600 px-5 py-2 text-xs font-semibold text-white shadow-lg transition duration-300 hover:scale-105 hover:shadow-violet-500/20 sm:text-sm"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}

export default SecurityAlert;


