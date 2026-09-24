import { useState } from "react";
import { motion } from "framer-motion";
import { sendContactEmail } from "../utils/email";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useNavigate } from "react-router-dom";

import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Linkedin,
  Facebook,
  Instagram,
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
        px-4
        py-20
        sm:px-6
        sm:py-24
        lg:py-28
      "
    >
      {/* =========================================================
          TECHNICAL GRID
      ========================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* =========================================================
          AMBIENT GLOWS
      ========================================================== */}
      <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-[#8B5CF6]/10 blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-[#06B6D4]/10 blur-[130px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3B82F6]/5 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* =========================================================
            SECTION HEADER
        ========================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 max-w-3xl"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4]" />

            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[#A78BFA]">
              Contact / Connect
            </span>
          </div>

          <h2 className="text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#F8FAFC] sm:text-4xl lg:text-5xl">
            Let&apos;s Build Something{" "}
            <span className="bg-gradient-to-r from-[#8B5CF6] via-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">
              Great Together
            </span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#94A3B8] sm:text-base">
            Have a question or want to discuss your requirements? Reach out to
            our team and we&apos;ll get back to you soon.
          </p>
        </motion.div>

        {/* =========================================================
            MAIN GRID
        ========================================================== */}
        <div className="grid items-stretch gap-6 md:grid-cols-2">

          {/* =======================================================
              LEFT SIDE
          ======================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="
              relative
              flex
              h-full
              flex-col
              overflow-hidden
              rounded-2xl
              border
              border-white/[0.08]
              bg-[rgba(10,10,15,0.72)]
              p-6
              backdrop-blur-xl
              sm:p-8
            "
          >
            {/* CARD GLOW */}
            <div className="pointer-events-none absolute -left-20 -top-20 h-48 w-48 rounded-full bg-[#8B5CF6]/10 blur-[70px]" />

            <div className="relative z-10 flex h-full flex-col justify-between">

              <div>

                {/* CARD LABEL */}
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#8B5CF6] shadow-[0_0_10px_rgba(139,92,246,0.8)]" />

                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#64748B]">
                    Direct Communication
                  </span>
                </div>

                <h2 className="text-2xl font-semibold text-[#F8FAFC]">
                  Contact Information
                </h2>

                <p className="mt-2 max-w-md text-sm leading-6 text-[#64748B]">
                  Connect with our team through any of the channels below.
                </p>

                {/* CONTACT DETAILS */}
                <div className="mt-7 space-y-5">

                  {/* EMAIL */}
                  <div className="group flex gap-4">
                    <div
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-white/[0.08]
                        bg-white/[0.03]
                        text-[#A78BFA]
                        transition-all
                        duration-300
                        group-hover:border-[#8B5CF6]/40
                        group-hover:bg-[#8B5CF6]/10
                        group-hover:text-[#C4B5FD]
                      "
                    >
                      <Mail size={19} />
                    </div>

                    <div className="min-w-0">
                      <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#64748B]">
                        Email
                      </p>

                      <p className="mt-1 break-all text-sm text-[#F8FAFC]">
                        info@vaytrix-itservice.com
                      </p>
                    </div>
                  </div>

                  {/* PHONE */}
                  <div className="group flex gap-4">
                    <div
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-white/[0.08]
                        bg-white/[0.03]
                        text-[#A78BFA]
                        transition-all
                        duration-300
                        group-hover:border-[#8B5CF6]/40
                        group-hover:bg-[#8B5CF6]/10
                        group-hover:text-[#C4B5FD]
                      "
                    >
                      <Phone size={19} />
                    </div>

                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#64748B]">
                        Phone
                      </p>

                      <p className="mt-1 text-sm text-[#F8FAFC]">
                        xxxxxxxxx
                      </p>
                    </div>
                  </div>

                  {/* OFFICE */}
                  <div className="group flex gap-4">
                    <div
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-white/[0.08]
                        bg-white/[0.03]
                        text-[#A78BFA]
                        transition-all
                        duration-300
                        group-hover:border-[#8B5CF6]/40
                        group-hover:bg-[#8B5CF6]/10
                        group-hover:text-[#C4B5FD]
                      "
                    >
                      <MapPin size={19} />
                    </div>

                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#64748B]">
                        Office
                      </p>

                      <p className="mt-1 max-w-sm text-sm leading-6 text-[#F8FAFC]">
                       xxxxxxxx
                      </p>
                    </div>
                  </div>

                  {/* HOURS */}
                  <div className="group flex gap-4">
                    <div
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-white/[0.08]
                        bg-white/[0.03]
                        text-[#A78BFA]
                        transition-all
                        duration-300
                        group-hover:border-[#8B5CF6]/40
                        group-hover:bg-[#8B5CF6]/10
                        group-hover:text-[#C4B5FD]
                      "
                    >
                      <Clock size={19} />
                    </div>

                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#64748B]">
                        Hours
                      </p>

                      <p className="mt-1 text-sm text-[#F8FAFC]">
                        Mon - Fri: 9:00 AM - 6:00 PM EST
                      </p>
                    </div>
                  </div>

                </div>

                {/* RESPONSE CARD */}
                <div
                  className="
                    mt-8
                    rounded-2xl
                    border
                    border-[#8B5CF6]/20
                    bg-gradient-to-br
                    from-[#8B5CF6]/[0.08]
                    via-[#0A0A0F]/70
                    to-[#06B6D4]/[0.05]
                    p-5
                  "
                >
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#06B6D4] shadow-[0_0_10px_rgba(6,182,212,0.8)]" />

                    <h3 className="text-sm font-semibold text-[#F8FAFC]">
                      Have Questions?
                    </h3>
                  </div>

                  <p className="mt-2 text-sm leading-6 text-[#94A3B8]">
                    We typically respond within 24 hours.
                  </p>

                  <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.12em] text-[#A78BFA]">
                    Response Time: Within 24 Hours
                  </p>
                </div>

              </div>

              {/* SOCIAL */}
              <div className="mt-8">

                <h3 className="text-sm font-semibold text-[#F8FAFC]">
                  Follow Us
                </h3>

                <div className="mt-3 flex gap-3">

                  {/* LINKEDIN */}
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-white/[0.08]
                      bg-white/[0.03]
                      text-[#94A3B8]
                      transition-all
                      duration-300
                      hover:border-[#8B5CF6]/50
                      hover:bg-[#8B5CF6]/10
                      hover:text-[#C4B5FD]
                      hover:shadow-[0_0_20px_rgba(139,92,246,0.12)]
                    "
                  >
                    <Linkedin size={17} />
                  </a>

                  {/* FACEBOOK */}
                  <a
                    aria-label="Facebook"
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-white/[0.08]
                      bg-white/[0.03]
                      text-[#94A3B8]
                      transition-all
                      duration-300
                      hover:border-[#3B82F6]/50
                      hover:bg-[#3B82F6]/10
                      hover:text-[#93C5FD]
                    "
                  >
                    <Facebook size={17} />
                  </a>

                  {/* INSTAGRAM */}
                  <a
                    aria-label="Instagram"
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-white/[0.08]
                      bg-white/[0.03]
                      text-[#94A3B8]
                      transition-all
                      duration-300
                      hover:border-[#06B6D4]/50
                      hover:bg-[#06B6D4]/10
                      hover:text-[#67E8F9]
                    "
                  >
                    <Instagram size={17} />
                  </a>

                </div>

              </div>

            </div>
          </motion.div>

          {/* =======================================================
              RIGHT SIDE - FORM
          ======================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="
              relative
              flex
              h-full
              flex-col
              overflow-hidden
              rounded-2xl
              border
              border-white/[0.08]
              bg-[rgba(10,10,15,0.72)]
              p-6
              backdrop-blur-xl
              sm:p-8
            "
          >
            {/* FORM CARD GLOW */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#06B6D4]/10 blur-[70px]" />

            <div className="relative z-10 flex h-full flex-col">

              {/* FORM HEADER */}
              <div>
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#06B6D4] shadow-[0_0_10px_rgba(6,182,212,0.8)]" />

                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#64748B]">
                    Start A Conversation
                  </span>
                </div>

                <h2 className="text-2xl font-semibold text-[#F8FAFC]">
                  Get in Touch
                </h2>

                <p className="mt-2 text-sm leading-6 text-[#64748B]">
                  Fill the form and our team will contact you soon.
                </p>
              </div>

              {/* ===================================================
                  FORM
              ==================================================== */}
              <form
                onSubmit={handleSubmit}
                className="mt-7 flex flex-1 flex-col gap-4"
              >

                {/* NAME */}
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  autoComplete="name"
                  required
                  className="
                    w-full
                    rounded-xl
                    border
                    border-white/[0.08]
                    bg-white/[0.03]
                    px-4
                    py-3
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

                {/* EMAIL */}
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  autoComplete="email"
                  required
                  className="
                    w-full
                    rounded-xl
                    border
                    border-white/[0.08]
                    bg-white/[0.03]
                    px-4
                    py-3
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

                {/* PHONE */}
                <div
                  className="
                    rounded-xl
                    border
                    border-white/[0.08]
                    bg-white/[0.03]
                    px-4
                    py-3
                    transition-all
                    duration-300
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

                {/* LOCATION */}
                <input
                  type="text"
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  placeholder="Location"
                  autoComplete="address-level2"
                  required
                  className="
                    w-full
                    rounded-xl
                    border
                    border-white/[0.08]
                    bg-white/[0.03]
                    px-4
                    py-3
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

                {/* =================================================
                    CONSENT
                ================================================== */}
                <div className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 text-xs text-[#64748B]">

                  <input
                    type="checkbox"
                    checked={accepted}
                    onChange={() => setAccepted(!accepted)}
                    required
                    className="
                      mt-1
                      h-3.5
                      w-3.5
                      shrink-0
                      cursor-pointer
                      accent-[#8B5CF6]
                    "
                  />

                  <p className="leading-5">

                    By opting in for text messages, you agree to receive
                    appointment reminders and important updates from brightitinc
                    at the number provided. Message frequency varies. Msg & data
                    rates may apply. Reply STOP to unsubscribe. Reply HELP for
                    help. View our{" "}

                    <span
                      onClick={() => navigate("/privacy-policy")}
                      className="
                        cursor-pointer
                        font-medium
                        text-[#A78BFA]
                        transition-colors
                        hover:text-[#67E8F9]
                      "
                    >
                      Privacy Policy
                    </span>

                    {" "}and{" "}

                    <span
                      onClick={() => navigate("/terms-conditions")}
                      className="
                        cursor-pointer
                        font-medium
                        text-[#A78BFA]
                        transition-colors
                        hover:text-[#67E8F9]
                      "
                    >
                      Terms & Conditions
                    </span>

                    {" "}for more information.

                  </p>
                </div>

                {/* =================================================
                    ERROR
                ================================================== */}
                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="
                      rounded-lg
                      border
                      border-red-500/20
                      bg-red-500/[0.05]
                      px-3
                      py-2
                      text-xs
                      text-red-400
                    "
                  >
                    {error}
                  </motion.p>
                )}

                {/* =================================================
                    SUCCESS
                ================================================== */}
                {success && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="
                      rounded-lg
                      border
                      border-emerald-500/20
                      bg-emerald-500/[0.05]
                      px-3
                      py-2
                      text-xs
                      text-emerald-400
                    "
                  >
                    {success}
                  </motion.p>
                )}

                {/* =================================================
                    SUBMIT BUTTON
                ================================================== */}
                <motion.button
                  type="submit"
                  whileHover={{
                    scale: loading ? 1 : 1.02,
                  }}
                  whileTap={{
                    scale: loading ? 1 : 0.98,
                  }}
                  disabled={loading}
                  className="
                    relative
                    mt-auto
                    overflow-hidden
                    rounded-xl
                    bg-gradient-to-r
                    from-[#8B5CF6]
                    via-[#3B82F6]
                    to-[#06B6D4]
                    py-3
                    text-sm
                    font-semibold
                    text-white
                    shadow-[0_8px_30px_rgba(139,92,246,0.18)]
                    transition-all
                    duration-300
                    hover:brightness-110
                    hover:shadow-[0_10px_35px_rgba(59,130,246,0.25)]
                    disabled:cursor-not-allowed
                    disabled:opacity-70
                  "
                >
                  {/* BUTTON SHINE */}
                  <span
                    className="
                      absolute
                      inset-0
                      -translate-x-full
                      bg-gradient-to-r
                      from-transparent
                      via-white/15
                      to-transparent
                      transition-transform
                      duration-700
                      hover:translate-x-full
                    "
                  />

                  <span className="relative">
                    {loading ? "Sending..." : "Submit"}
                  </span>
                </motion.button>

              </form>

            </div>
          </motion.div>

        </div>

        {/* =========================================================
            BOTTOM TECHNICAL BAR
        ========================================================== */}
        <div className="mt-8 flex items-center justify-center gap-3">

          <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#8B5CF6]/40" />

          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#475569]">
            Your Next Conversation Starts Here
          </span>

          <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#06B6D4]/40" />

        </div>

      </div>
    </section>
  );
}

export default ContactCTA;



