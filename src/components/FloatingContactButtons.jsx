
import {
    FaWhatsapp,
    FaPhoneAlt,
    FaEnvelope,
} from "react-icons/fa";

function FloatingContactButtons() {
    const phoneNumber = "+16148024217";
    const whatsappNumber = "+1 614 812 0792";
   

    const message = "Hi, I need help regarding your services";

    const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;

   

    
    const emailLink =
        `https://mail.google.com/mail/?view=cm&fs=1&to=info@vaytrixtechit.com&su=Hiring%20Inquiry%20-%20VaytrixTechIT&body=Hello%20VaytrixTechIT%20Team%2C%0A%0AI%20am%20interested%20in%20discussing%20your%20staffing%20and%20hiring%20services.%20I%20would%20like%20to%20understand%20how%20VaytrixTechIT%20can%20support%20our%20hiring%20requirements.%0A%0APlease%20let%20me%20know%20a%20convenient%20time%20to%20connect.%0A%0ARegards%2C%0A%5BYour%20Name%5D`;

    const baseStyle =
        "group flex items-center justify-end gap-0 overflow-hidden rounded-full border border-white/40 bg-[#0A0A0F]/95 p-3 text-white shadow-lg backdrop-blur-xl transition-all duration-300 ease-out hover:gap-3 hover:pl-4 hover:pr-2 hover:-translate-x-1";

    const labelStyle =
        "max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium opacity-0 transition-all duration-300 group-hover:max-w-32 group-hover:opacity-100";

    return (
        <div className="fixed bottom-6 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-8 sm:right-6">

            {/* WhatsApp */}
            <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Need help? Chat on WhatsApp"
                title="Need Help?"
                className={`${baseStyle} hover:shadow-[0_0_25px_rgba(34,197,94,0.25)]`}
            >
                <span className={`${labelStyle} text-green-300`}>
                    Need Help?
                </span>

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-500/15 ring-1 ring-green-400/30 transition-colors duration-300 group-hover:bg-green-500/25">
                    <FaWhatsapp size={40} className="text-green-400" />
                </span>
            </a>

            {/* Call */}
            <a
                href={`tel:${phoneNumber}`}
                aria-label="Call Vaytrix Tech IT"
                title="Call Us"
                className={`${baseStyle} hover:shadow-[0_0_25px_rgba(6,182,212,0.25)]`}
            >
                <span className={`${labelStyle} text-cyan-300`}>
                    Call Us
                </span>

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-500/15 ring-1 ring-cyan-400/30 transition-colors duration-300 group-hover:bg-cyan-500/25">
                    <FaPhoneAlt size={30} className="text-cyan-400" />
                </span>
            </a>

            {/* Email */}
            <a
                href={emailLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email Vaytrix Tech IT"
                title="Email Us"
                className={`${baseStyle} hover:shadow-[0_0_25px_rgba(139,92,246,0.3)]`}
            >
                <span className={`${labelStyle} text-violet-300`}>
                    Email Us
                </span>

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet-500/15 ring-1 ring-violet-400/30 transition-colors duration-300 group-hover:bg-violet-500/25">
                    <FaEnvelope size={30} className="text-violet-400" />
                </span>
            </a>

        </div>
    );
}

export default FloatingContactButtons;


