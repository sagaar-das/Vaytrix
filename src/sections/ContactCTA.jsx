import { useState } from "react";
import { motion } from "framer-motion";
import { sendContactEmail } from "../utils/email";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useNavigate } from "react-router-dom";

import {
  ArrowUpRight,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";

function ContactCTA() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    location: "",
    phone: "",
  });

  const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedForm = {
      name: form.name.trim(),
      email: form.email.trim(),
      location: form.location.trim(),
      phone: form.phone || "",
    };

    if (
      !trimmedForm.name ||
      !trimmedForm.email ||
      !trimmedForm.phone ||
      !trimmedForm.location
    ) {
      setSuccess("");
      setError("Please fill in all fields before submitting.");
      return;
    }

    if (!isValidPhoneNumber(trimmedForm.phone)) {
      setSuccess("");
      setError("Please enter a valid phone number.");
      return;
    }

    if (!accepted) {
      setSuccess("");
      setError("Please accept the Privacy Policy and Terms & Conditions.");
      return;
    }

    setError("");
    setSuccess("");
    setLoading(true);

    sendContactEmail(trimmedForm)
      .then(() => {
        setLoading(false);
        setSuccess("Thank you! Your message has been sent.");

        setForm({
          name: "",
          email: "",
          location: "",
          phone: "",
        });

        setAccepted(false);
      })
      .catch((error) => {
        console.error(error);

        setLoading(false);
        setError("Failed to send message. Please try again.");
      });
  };

  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-[#050508]
        px-5
        py-10
        pb-2
        sm:px-8
        sm:py-5
        lg:px-10
        lg:py-10
        lg:pb-5

      "
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#8B5CF6]/10 blur-[150px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#06B6D4]/10 blur-[150px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3B82F6]/5 blur-[160px]" />

      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* =======================================================
            TOP TECHNICAL HEADER
        ======================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex items-end justify-between border-b border-white/[0.07] pb-5"
        >
          <div className="flex items-center gap-3">

            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#8B5CF6]/30 bg-[#8B5CF6]/10">
              <Sparkles
                size={16}
                className="text-[#A855F7]"
              />
            </div>

            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#64748B]">
                Vaytrix / Communication
              </p>

              <p className="mt-1 text-xs text-[#94A3B8]">
                Start a meaningful conversation
              </p>
            </div>

          </div>

          <span className="hidden font-mono text-[9px] uppercase tracking-[0.2em] text-[#475569] sm:block">
            CONTACT / 06
          </span>

        </motion.div>

        {/* =======================================================
            MAIN ASYMMETRIC LAYOUT
        ======================================================== */}

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

          {/* =====================================================
              LEFT EDITORIAL AREA
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex flex-col justify-between"
          >

            <div>

              {/* Label */}

              <div className="mb-7 flex items-center gap-3">

                <span className="h-px w-10 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4]" />

                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[#A78BFA]">
                  Contact / Connect
                </span>

              </div>

              {/* Heading */}

              <h2 className="max-w-xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#F8FAFC] sm:text-5xl lg:text-6xl">

                Let's turn your
                <br />

                <span className="bg-gradient-to-r from-[#A855F7] via-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">
                  next idea
                </span>

                <br />

                into reality.

              </h2>

              <p className="mt-7 max-w-lg text-sm leading-7 text-[#94A3B8] sm:text-base">

                Have a question, project requirement, or future challenge?
                Connect with the Vaytrix team and let's explore how technology
                can help move your goals forward.

              </p>

            </div>

            {/* =================================================
                CONTACT CHANNELS
            ================================================== */}

            <div className="mt-12">

              <p className="mb-5 font-mono text-[9px] uppercase tracking-[0.2em] text-[#475569]">
                Direct Channels
              </p>

              <div className="space-y-3">

                {/* EMAIL */}

                <div className="group flex items-center gap-4 border-b border-white/[0.07] pb-4">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.025] transition-all duration-300 group-hover:border-[#8B5CF6]/40 group-hover:bg-[#8B5CF6]/10">
                    <Mail
                      size={17}
                      className="text-[#A78BFA]"
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-[#64748B]">
                      Email
                    </p>

                    <p className="mt-1 break-all text-sm text-[#F8FAFC]">
                      info@vaytrix-itservice.com
                    </p>
                  </div>

                  <ArrowUpRight
                    size={15}
                    className="ml-auto text-[#475569] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#A78BFA]"
                  />

                </div>

                {/* PHONE */}

                <div className="group flex items-center gap-4 border-b border-white/[0.07] pb-4">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.025] transition-all duration-300 group-hover:border-[#3B82F6]/40 group-hover:bg-[#3B82F6]/10">
                    <Phone
                      size={17}
                      className="text-[#60A5FA]"
                    />
                  </div>

                  <div>
                    <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-[#64748B]">
                      Phone
                    </p>

                    <p className="mt-1 text-sm text-[#F8FAFC]">
                      +1812 495 4121
                    </p>
                  </div>

                  <ArrowUpRight
                    size={15}
                    className="ml-auto text-[#475569] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#60A5FA]"
                  />

                </div>

                {/* OFFICE */}

                <div className="group flex items-center gap-4 border-b border-white/[0.07] pb-4">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.025] transition-all duration-300 group-hover:border-[#06B6D4]/40 group-hover:bg-[#06B6D4]/10">
                    <MapPin
                      size={17}
                      className="text-[#22D3EE]"
                    />
                  </div>

                  <div>
                    <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-[#64748B]">
                      Office
                    </p>

                    <p className="mt-1 text-sm text-[#F8FAFC]">
                      20 Cooper Square, New York,
                      NY 10003, USA
                    </p>
                  </div>

                  <ArrowUpRight
                    size={15}
                    className="ml-auto text-[#475569] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#22D3EE]"
                  />

                </div>

                {/* HOURS */}

                <div className="group flex items-center gap-4">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.025] transition-all duration-300 group-hover:border-[#8B5CF6]/40 group-hover:bg-[#8B5CF6]/10">
                    <Clock
                      size={17}
                      className="text-[#A78BFA]"
                    />
                  </div>

                  <div>
                    <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-[#64748B]">
                      Availability
                    </p>

                    <p className="mt-1 text-sm text-[#F8FAFC]">
                      Mon - Fri: 9:00 AM - 6:00 PM EST
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* SOCIAL */}

            <div className="mt-10 flex items-center gap-4">

              <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#475569]">
                Follow
              </span>

              <div className="h-px w-8 bg-white/[0.08]" />

              <div className="flex gap-2">

                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.02] text-[#64748B] transition-all duration-300 hover:border-[#8B5CF6]/50 hover:bg-[#8B5CF6]/10 hover:text-[#C4B5FD]"
                >
                  <Linkedin size={15} />
                </a>

                <a
                  aria-label="Facebook"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.02] text-[#64748B] transition-all duration-300 hover:border-[#3B82F6]/50 hover:bg-[#3B82F6]/10 hover:text-[#93C5FD]"
                >
                  <Facebook size={15} />
                </a>

                <a
                  aria-label="Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.02] text-[#64748B] transition-all duration-300 hover:border-[#06B6D4]/50 hover:bg-[#06B6D4]/10 hover:text-[#67E8F9]"
                >
                  <Instagram size={15} />
                </a>

              </div>

            </div>

          </motion.div>

          {/* =====================================================
              RIGHT FORM
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >

            {/* Form outer glow */}

            <div className="pointer-events-none absolute -inset-3 rounded-[28px] bg-gradient-to-br from-[#8B5CF6]/10 via-transparent to-[#06B6D4]/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-[24px] border border-white/[0.09] bg-[#0A0A0F]">

              {/* FORM TOP BAR */}

              <div className="flex items-center justify-between border-b border-white/[0.07] px-6 py-4 sm:px-8">

                <div className="flex items-center gap-3">

                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-[#8B5CF6] to-[#3B82F6]">
                    <Send
                      size={14}
                      className="text-white"
                    />
                  </div>

                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#64748B]">
                      Inquiry Form
                    </p>

                    <p className="mt-0.5 text-xs text-[#94A3B8]">
                      Start your conversation
                    </p>
                  </div>

                </div>

                <span className="font-mono text-[9px] text-[#475569]">
                  01 / 01
                </span>

              </div>

              {/* FORM */}

              <form
                onSubmit={handleSubmit}
                className="p-6 sm:p-8"
              >

                <div className="mb-7">

                  <h3 className="text-2xl font-semibold tracking-tight text-[#F8FAFC]">
                    Tell us what you need.
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#64748B]">
                    Share your details and our team will get back to you.
                  </p>

                </div>

                {/* NAME + EMAIL */}

                <div className="grid gap-4 sm:grid-cols-2">

                  <div>
                    <label className="mb-2 block font-mono text-[8px] uppercase tracking-[0.16em] text-[#64748B]">
                      Full Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      autoComplete="name"
                      required
                      className="
                        w-full rounded-lg
                        border border-white/[0.08]
                        bg-white/[0.025]
                        px-4 py-3
                        text-sm text-[#F8FAFC]
                        outline-none
                        placeholder:text-[#475569]
                        transition-all duration-300
                        focus:border-[#8B5CF6]/50
                        focus:bg-[#8B5CF6]/[0.04]
                        focus:ring-1
                        focus:ring-[#8B5CF6]/20
                      "
                    />
                  </div>

                  <div>
                    <label className="mb-2 block font-mono text-[8px] uppercase tracking-[0.16em] text-[#64748B]">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      autoComplete="email"
                      required
                      className="
                        w-full rounded-lg
                        border border-white/[0.08]
                        bg-white/[0.025]
                        px-4 py-3
                        text-sm text-[#F8FAFC]
                        outline-none
                        placeholder:text-[#475569]
                        transition-all duration-300
                        focus:border-[#8B5CF6]/50
                        focus:bg-[#8B5CF6]/[0.04]
                        focus:ring-1
                        focus:ring-[#8B5CF6]/20
                      "
                    />
                  </div>

                </div>

                {/* PHONE */}

                <div className="mt-4">

                  <label className="mb-2 block font-mono text-[8px] uppercase tracking-[0.16em] text-[#64748B]">
                    Phone Number
                  </label>

                  <div
                    className="
                      rounded-lg
                      border border-white/[0.08]
                      bg-white/[0.025]
                      px-4 py-3
                      transition-all duration-300
                      focus-within:border-[#8B5CF6]/50
                      focus-within:bg-[#8B5CF6]/[0.04]
                      focus-within:ring-1
                      focus-within:ring-[#8B5CF6]/20
                    "
                  >
                    <PhoneInput
                      international
                      defaultCountry="US"
                      value={form.phone}
                      onChange={(value) =>
                        setForm({
                          ...form,
                          phone: value,
                        })
                      }
                      placeholder="Phone number"
                      required
                      className="w-full bg-transparent text-sm text-[#F8FAFC]"
                    />
                  </div>

                </div>

                {/* LOCATION */}

                <div className="mt-4">

                  <label className="mb-2 block font-mono text-[8px] uppercase tracking-[0.16em] text-[#64748B]">
                    Location
                  </label>

                  <input
                    type="text"
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                    placeholder="City / Country"
                    autoComplete="address-level2"
                    required
                    className="
                      w-full rounded-lg
                      border border-white/[0.08]
                      bg-white/[0.025]
                      px-4 py-3
                      text-sm text-[#F8FAFC]
                      outline-none
                      placeholder:text-[#475569]
                      transition-all duration-300
                      focus:border-[#8B5CF6]/50
                      focus:bg-[#8B5CF6]/[0.04]
                      focus:ring-1
                      focus:ring-[#8B5CF6]/20
                    "
                  />

                </div>

                {/* MESSAGE */}

                <div className="mt-4">

                  <label className="mb-2 block font-mono text-[8px] uppercase tracking-[0.16em] text-[#64748B]">
                    Message
                  </label>

                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirement..."
                    rows={1}
                    required
                    className="
      w-full
      resize-none
      rounded-lg
      border border-white/[0.08]
      bg-white/[0.025]
      px-4 py-3
      text-sm
      text-[#F8FAFC]
      outline-none
      placeholder:text-[#475569]
      transition-all
      duration-300
      focus:border-[#8B5CF6]/50
      focus:bg-[#8B5CF6]/[0.04]
      focus:ring-1
      focus:ring-[#8B5CF6]/20
    "
                  />

                  <div className="mt-1 flex justify-end">
                    <span className="font-mono text-[8px] text-[#475569]">
                      Share your requirements or questions
                    </span>
                  </div>

                </div>

                {/* CONSENT */}

                <div className="mt-5 flex items-start gap-3 rounded-lg border border-white/[0.06] bg-white/[0.015] p-3">

                  <input
                    type="checkbox"
                    checked={accepted}
                    onChange={() => setAccepted(!accepted)}
                    required
                    className="mt-1 h-3.5 w-3.5 shrink-0 cursor-pointer accent-[#8B5CF6]"
                  />

                  <p className="text-[11px] leading-5 text-[#64748B]">

                    By opting in for text messages, you agree to receive
                    appointment reminders and important updates from brightitinc
                    at the number provided. Message frequency varies. Msg & data
                    rates may apply. Reply STOP to unsubscribe. Reply HELP for
                    help. View our{" "}

                    <span
                      onClick={() => navigate("/privacy-policy")}
                      className="cursor-pointer font-medium text-[#A78BFA] hover:text-[#67E8F9]"
                    >
                      Privacy Policy
                    </span>

                    {" "}and{" "}

                    <span
                      onClick={() => navigate("/terms-conditions")}
                      className="cursor-pointer font-medium text-[#A78BFA] hover:text-[#67E8F9]"
                    >
                      Terms & Conditions
                    </span>

                    {" "}for more information.

                  </p>

                </div>

                {/* ERROR */}

                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 rounded-lg border border-red-500/20 bg-red-500/[0.05] px-3 py-2 text-xs text-red-400"
                  >
                    {error}
                  </motion.p>
                )}

                {/* SUCCESS */}

                {success && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 rounded-lg border border-emerald-500/20 bg-emerald-500/[0.05] px-3 py-2 text-xs text-emerald-400"
                  >
                    {success}
                  </motion.p>
                )}

                {/* SUBMIT */}

                <motion.button
                  type="submit"
                  whileHover={{
                    scale: loading ? 1 : 1.015,
                  }}
                  whileTap={{
                    scale: loading ? 1 : 0.985,
                  }}
                  disabled={loading}
                  className="
                    group relative mt-6 flex w-full
                    items-center justify-center gap-3
                    overflow-hidden rounded-lg
                    bg-gradient-to-r
                    from-[#8B5CF6]
                    via-[#3B82F6]
                    to-[#06B6D4]
                    px-5 py-3.5
                    text-sm font-semibold text-white
                    shadow-[0_10px_35px_rgba(139,92,246,0.18)]
                    transition-all duration-300
                    hover:brightness-110
                    disabled:cursor-not-allowed
                    disabled:opacity-70
                  "
                >

                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                  <span className="relative">
                    {loading ? "Sending..." : "Send Message"}
                  </span>

                  {!loading && (
                    <ArrowUpRight
                      size={17}
                      className="relative transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  )}

                </motion.button>

                {/* RESPONSE */}

                <div className="mt-5 flex items-center justify-center gap-2">

                  <span className="h-1.5 w-1.5 rounded-full bg-[#06B6D4] shadow-[0_0_10px_rgba(6,182,212,0.8)]" />

                  <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-[#475569]">
                    Typical response within 24 hours
                  </span>

                </div>

              </form>

            </div>

          </motion.div>

        </div>

        {/* =======================================================
            BOTTOM STATEMENT
        ======================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-6 sm:flex-row"
        >

          <div className="flex items-center gap-3">

            <span className="font-mono text-[9px] text-[#475569]">
              VAYTRIX
            </span>

            <span className="h-px w-8 bg-white/[0.08]" />

            <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#64748B]">
              Technology / People / Possibility
            </span>

          </div>

          <div className="flex items-center gap-2">

            <Clock
              size={12}
              className="text-[#06B6D4]"
            />

            <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#475569]">
              We're ready when you are
            </span>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default ContactCTA;



