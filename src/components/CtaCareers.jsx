
import { useRef, useState } from "react";
import { motion } from "framer-motion";
// import emailjs from "@emailjs/browser";
import {
  ArrowRight,
  Upload,
  FileText,
  User,
  Mail,
  Phone,
  Sparkles,
  LoaderCircle,
} from "lucide-react";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ALLOWED_EXTENSIONS = ["pdf", "doc", "docx"];

export default function CtaCareers() {
  const formRef = useRef(null);
  const fileInputRef = useRef(null);

  const [selectedFile, setSelectedFile] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    setStatus({ type: "", message: "" });

    if (!file) {
      setSelectedFile(null);
      return;
    }

    const extension = file.name.split(".").pop().toLowerCase();

    if (!ALLOWED_EXTENSIONS.includes(extension)) {
      setSelectedFile(null);
      event.target.value = "";
      setStatus({
        type: "error",
        message: "Upload a PDF, DOC, or DOCX file.",
      });
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setSelectedFile(null);
      event.target.value = "";
      setStatus({
        type: "error",
        message: "Resume must be 5 MB or smaller.",
      });
      return;
    }

    setSelectedFile(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSending) return;

    if (!selectedFile) {
      setStatus({ type: "error", message: "Please upload your resume." });
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: "error",
        message: "EmailJS has not been configured yet.",
      });
      return;
    }

    setIsSending(true);
    setStatus({ type: "", message: "" });

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey,
      });

      formRef.current.reset();
      setSelectedFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";

      setStatus({
        type: "success",
        message: "Application submitted successfully. Thank you!",
      });
    } catch (error) {
      console.error("EmailJS submission failed:", error);
      setStatus({
        type: "error",
        message: "Could not submit your application. Please try again.",
      });
    } finally {
      setIsSending(false);
    }
  };

  const inputClass =
    "w-full rounded-lg border border-white/10 bg-[#08080D] py-3 pl-10 pr-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-[#8B5CF6]/60 sm:text-base";

  return (
    <section
      id="career-application"
      className="bg-[#050508] px-3 py-8 sm:px-5 sm:py-10 lg:px-8 lg:py-12"
    >
      <div className="mx-auto max-w-[1500px]">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.45 }}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0F] shadow-[0_0_35px_rgba(139,92,246,0.07)]"
        >
          <div className="h-1 w-full bg-gradient-to-r from-[#8B5CF6] via-[#3B82F6] to-[#06B6D4]" />

          {/* Background effects */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-16 top-0 h-48 w-48 rounded-full bg-[#8B5CF6]/10 blur-[90px]" />
            <div className="absolute -right-16 bottom-0 h-48 w-48 rounded-full bg-[#06B6D4]/10 blur-[90px]" />
          </div>

          {/* Full-width content */}
          <div className="relative grid grid-cols-1 gap-7 p-4 sm:p-6 md:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-10 lg:p-9 xl:gap-14 xl:p-10">
            {/* Left: heading and CTA content */}
            <div className="flex flex-col justify-center">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#8B5CF6]/25 bg-[#8B5CF6]/10 px-3 py-1.5">
                <Sparkles size={14} className="text-[#C4B5FD]" />
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#C4B5FD]">
                  Your Next Opportunity
                </span>
              </span>

              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl xl:text-5xl">
                Build Your Future
                <span className="block bg-gradient-to-r from-[#A78BFA] via-[#60A5FA] to-[#67E8F9] bg-clip-text text-transparent">
                  With Vaytrix
                </span>
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                Ready for your next career move? Share your details and resume
                with us to explore opportunities that match your skills.
              </p>

              <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {[
                  "Technology roles",
                  "Career growth",
                  "Leadership roles",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-slate-300"
                  >
                    <span className="text-[#67E8F9]">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: compact form */}
            <div className="min-w-0 border-t border-white/10 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-10">
              <div className="mb-5">
                <h3 className="text-xl font-semibold text-white sm:text-2xl">
                  Apply Now
                </h3>
                <p className="mt-1 text-sm text-slate-400">
                  Enter your details and attach your resume.
                </p>
              </div>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2"
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="career-name"
                    className="mb-1.5 block text-sm font-medium text-slate-200"
                  >
                    Full Name *
                  </label>
                  <div className="relative">
                    <User
                      size={17}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                    />
                    <input
                      id="career-name"
                      type="text"
                      name="user_name"
                      placeholder="Your full name"
                      autoComplete="name"
                      maxLength={100}
                      required
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="career-email"
                    className="mb-1.5 block text-sm font-medium text-slate-200"
                  >
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail
                      size={17}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                    />
                    <input
                      id="career-email"
                      type="email"
                      name="user_email"
                      placeholder="you@example.com"
                      autoComplete="email"
                      maxLength={254}
                      required
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="career-phone"
                    className="mb-1.5 block text-sm font-medium text-slate-200"
                  >
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone
                      size={17}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                    />
                    <input
                      id="career-phone"
                      type="tel"
                      name="user_phone"
                      placeholder="Your phone number"
                      autoComplete="tel"
                      inputMode="tel"
                      pattern="[+0-9() -]{7,20}"
                      title="Enter a valid phone number."
                      maxLength={20}
                      required
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Resume */}
                <div>
                  <label
                    htmlFor="career-resume"
                    className="mb-1.5 block text-sm font-medium text-slate-200"
                  >
                    Resume *
                  </label>
                  <input
                    ref={fileInputRef}
                    id="career-resume"
                    type="file"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    required
                    onChange={handleFileChange}
                    className="sr-only"
                  />

                  <label
                    htmlFor="career-resume"
                    className="flex min-h-[46px] cursor-pointer items-center gap-2 rounded-lg border border-dashed border-white/20 bg-[#08080D] px-3 py-2.5 transition hover:border-[#8B5CF6]/60"
                  >
                    {selectedFile ? (
                      <FileText size={18} className="shrink-0 text-[#67E8F9]" />
                    ) : (
                      <Upload size={18} className="shrink-0 text-[#A78BFA]" />
                    )}
                    <span className="min-w-0 flex-1 truncate text-sm text-slate-300">
                      {selectedFile ? selectedFile.name : "Choose resume"}
                    </span>
                  </label>
                  <p className="mt-1 text-xs text-slate-500">
                    PDF / DOC / DOCX · Max 5 MB
                  </p>
                </div>

                {/* Submission feedback */}
                {status.message && (
                  <div
                    role="status"
                    aria-live="polite"
                    className={`rounded-lg border p-3 text-sm sm:col-span-2 ${
                      status.type === "success"
                        ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-300"
                        : "border-red-400/20 bg-red-400/10 text-red-300"
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                {/* Submit */}
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={isSending}
                    className="group flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#8B5CF6] via-[#6366F1] to-[#3B82F6] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#6366F1]/15 transition hover:-translate-y-0.5 hover:shadow-[#6366F1]/30 disabled:cursor-not-allowed disabled:opacity-70 sm:text-base"
                  >
                    {isSending ? (
                      <>
                        <LoaderCircle size={18} className="animate-spin" />
                        Submitting Application...
                      </>
                    ) : (
                      <>
                        Submit Application
                        <ArrowRight
                          size={18}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
