
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Database,
  Server,
  Layout,
  Cpu,
  BarChart3,
  Cloud,
  Settings,
  Brain,
  Briefcase,
  Shield,
  PenTool,
  Users,
  Network,
  ArrowUpRight,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import CtaCareers from "../components/CtaCareers";

const rolesData = [
  {
    title: "Software Development Engineer (SDE)",
    type: "IT",
    description:
      "Build, test, and maintain scalable software systems while working with cross-functional teams to improve performance, reliability, and engineering quality.",
    skills: ["Java", "Python", "DSA", "OOP", "Git"],
  },
  {
    title: "Full Stack Developer",
    type: "IT",
    description:
      "Develop complete web applications across frontend and backend layers, connecting intuitive interfaces with reliable server-side systems and scalable technology.",
    skills: ["React", "Node.js", "MongoDB", "REST APIs"],
  },
  {
    title: "Backend Developer",
    type: "IT",
    description:
      "Create reliable APIs, server-side applications, and database solutions with a strong focus on performance, scalability, security, and efficient business logic.",
    skills: ["Java", "Python", "SQL", "Microservices"],
  },
  {
    title: "Frontend Developer",
    type: "IT",
    description:
      "Build responsive and engaging digital interfaces while working with design and engineering teams to deliver consistent experiences across devices and browsers.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Angular"],
  },
  {
    title: "Python Developer",
    type: "IT",
    description:
      "Develop scalable applications and backend services using Python, while building APIs, automating workflows, and integrating systems with maintainable code.",
    skills: ["Python", "Django", "Flask", "SQL"],
  },
  {
    title: "Data Scientist",
    type: "IT",
    description:
      "Turn complex datasets into useful business insights by applying statistical methods, machine learning, and predictive analytics to real-world problems.",
    skills: ["Python", "ML", "Statistics", "Pandas"],
  },
  {
    title: "Data Engineer",
    type: "IT",
    description:
      "Design and maintain scalable data pipelines that collect, transform, and organize information for analytics, reporting, and machine learning workloads.",
    skills: ["SQL", "Spark", "ETL", "AWS"],
  },
  {
    title: "Data Analyst",
    type: "IT",
    description:
      "Analyze business data and convert findings into actionable insights through dashboards, reports, and visualizations that support better decisions.",
    skills: ["Excel", "SQL", "Power BI", "Tableau"],
  },
  {
    title: "Financial Analyst",
    type: "IT",
    description:
      "Evaluate financial information, develop forecasts, and analyze budgets and investments to support business planning and stronger financial decisions.",
    skills: ["Excel", "Forecasting", "Financial Modeling"],
  },
  {
    title: "Cloud Engineer",
    type: "IT",
    description:
      "Design and manage secure cloud infrastructure while improving application scalability, reliability, resource efficiency, and cloud-native delivery.",
    skills: ["AWS", "Azure", "Docker", "Kubernetes"],
  },
  {
    title: "DevOps Engineer",
    type: "IT",
    description:
      "Automate development and deployment workflows through CI/CD, infrastructure management, and modern DevOps practices that enable reliable software delivery.",
    skills: ["Jenkins", "Docker", "Kubernetes", "Git"],
  },
  {
    title: "AI/ML Engineer",
    type: "IT",
    description:
      "Develop and deploy intelligent machine learning solutions by working with data, optimizing models, and integrating AI capabilities into production applications.",
    skills: ["Python", "TensorFlow", "NLP", "Deep Learning"],
  },
  {
    title: "Business Analyst",
    type: "IT",
    description:
      "Understand business requirements and translate them into practical technology solutions while working closely with stakeholders throughout the delivery process.",
    skills: ["SQL", "Documentation", "Requirement Gathering"],
  },
  {
    title: "QA / Test Engineer",
    type: "IT",
    description:
      "Validate software quality through structured testing, defect identification, and collaboration with engineering teams to deliver dependable applications.",
    skills: ["Selenium", "Manual Testing", "Automation"],
  },
  {
    title: "UI/UX Designer",
    type: "IT",
    description:
      "Create intuitive digital experiences through research, wireframes, prototypes, and thoughtful interface design focused on usability and consistency.",
    skills: ["Figma", "Adobe XD", "Wireframing"],
  },
  {
    title: "Cybersecurity Analyst",
    type: "IT",
    description:
      "Protect applications, networks, and organizational data by identifying vulnerabilities, monitoring security events, and strengthening cybersecurity practices.",
    skills: ["Network Security", "SIEM", "Ethical Hacking"],
  },
  {
    title: "Technical Architect",
    type: "Leadership",
    description:
      "Define architecture for complex technology systems while making strategic technical decisions that support scalability, performance, and long-term growth.",
    skills: ["System Design", "Cloud Architecture", "Microservices"],
  },
  {
    title: "Engineering Manager",
    type: "Leadership",
    description:
      "Guide engineering teams toward successful delivery by combining technical leadership, resource planning, mentoring, and strong collaboration.",
    skills: ["Leadership", "Agile", "Team Management"],
  },
  {
    title: "Product Manager",
    type: "Leadership",
    description:
      "Shape product direction, strategy, and roadmaps around customer and market needs while coordinating teams to create valuable business outcomes.",
    skills: ["Product Strategy", "Market Research", "Agile"],
  },
  {
    title: "Project Manager",
    type: "Leadership",
    description:
      "Coordinate projects from planning through delivery while managing timelines, budgets, risks, teams, and stakeholder communication.",
    skills: ["PMP", "Agile", "Risk Management"],
  },
  {
    title: "Delivery Manager",
    type: "Leadership",
    description:
      "Drive end-to-end delivery by coordinating teams, maintaining quality and timelines, improving processes, and building strong client relationships.",
    skills: ["Stakeholder Management", "Operations"],
  },
  {
    title: "IT Director / Head of Technology",
    type: "Leadership",
    description:
      "Lead technology strategy and operations while driving innovation, managing teams, and aligning technology initiatives with wider business priorities.",
    skills: ["Leadership", "Strategy", "Enterprise Systems"],
  },
  {
    title: "AI/ML Lead",
    type: "Leadership",
    description:
      "Lead artificial intelligence initiatives by defining AI direction, guiding technical teams, and delivering machine learning solutions that create measurable business value.",
    skills: ["Advanced ML", "Team Leadership", "AI Strategy"],
  },
  {
    title: "Data Architect",
    type: "Leadership",
    description:
      "Design enterprise data architecture, establish scalable data models, and support governance systems that enable analytics and data-driven decision-making.",
    skills: ["Data Modeling", "Big Data", "Cloud"],
  },
];

const iconMap = {
  "Software Development Engineer (SDE)": Code,
  "Full Stack Developer": Code,
  "Backend Developer": Server,
  "Frontend Developer": Layout,
  "Python Developer": Cpu,
  "Data Scientist": Brain,
  "Data Engineer": Database,
  "Data Analyst": BarChart3,
  "Financial Analyst": BarChart3,
  "Cloud Engineer": Cloud,
  "DevOps Engineer": Settings,
  "AI/ML Engineer": Brain,
  "Business Analyst": Briefcase,
  "QA / Test Engineer": Settings,
  "UI/UX Designer": PenTool,
  "Cybersecurity Analyst": Shield,
  "Technical Architect": Network,
  "Engineering Manager": Users,
  "Product Manager": Briefcase,
  "Project Manager": Briefcase,
  "Delivery Manager": Users,
  "IT Director / Head of Technology": Users,
  "AI/ML Lead": Brain,
  "Data Architect": Database,
};

function CareerOrbit() {
  const orbitNodes = [
    { icon: Code, label: "ENGINEERING", className: "left-0 top-[24%]" },
    { icon: Brain, label: "INTELLIGENCE", className: "right-0 top-[28%]" },
    { icon: Briefcase, label: "OPPORTUNITY", className: "bottom-[12%] left-[30%]" },
  ];

  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-[440px] items-center justify-center">
      <div className="absolute inset-[5%] rounded-full border border-[#8B5CF6]/20" />
      <div className="absolute inset-[13%] animate-[spin_32s_linear_infinite] rounded-full border border-dashed border-[#06B6D4]/25" />
      <div className="absolute inset-[23%] rounded-full border border-white/[0.08]" />

      <div className="absolute h-[70%] w-[70%] rounded-full bg-[#8B5CF6]/10 blur-[65px]" />
      <div className="absolute h-[45%] w-[45%] rounded-full bg-[#06B6D4]/10 blur-[45px]" />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[13%] rounded-full"
      >
        <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-[#A78BFA] shadow-[0_0_20px_#8B5CF6]" />
        <span className="absolute bottom-[10%] right-[8%] h-2.5 w-2.5 rounded-full bg-[#06B6D4] shadow-[0_0_16px_#06B6D4]" />
      </motion.div>

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 flex h-32 w-32 items-center justify-center rounded-full border border-[#8B5CF6]/40 bg-[#0A0A0F]/90 shadow-[0_0_65px_rgba(139,92,246,0.18)] sm:h-40 sm:w-40"
      >
        <div className="absolute inset-3 rounded-full border border-white/[0.08]" />
        <Network size={54} strokeWidth={1.1} className="text-[#A78BFA] sm:h-16 sm:w-16" />
      </motion.div>

      {orbitNodes.map((node, index) => {
        const Icon = node.icon;

        return (
          <motion.div
            key={node.label}
            animate={{ y: [0, index % 2 === 0 ? -7 : 7, 0] }}
            transition={{
              duration: 3.5 + index,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={`absolute z-20 ${node.className}`}
          >
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#0A0A0F]/95 px-3 py-3 shadow-xl backdrop-blur-xl sm:px-4">
              <Icon size={19} className="shrink-0 text-[#67E8F9]" />
              <span className="text-xs font-semibold tracking-wide text-slate-200 sm:text-sm">
                {node.label}
              </span>
            </div>
          </motion.div>
        );
      })}

      <div className="absolute left-[5%] top-[8%] font-mono text-xs tracking-wider text-slate-400">
        VX / 01
      </div>
      <div className="absolute bottom-[5%] right-[3%] font-mono text-xs tracking-wider text-slate-400">
        PEOPLE × TECH
      </div>
    </div>
  );
}

export default function Careers() {
  const [filter, setFilter] = useState("All");
  const [activeRole, setActiveRole] = useState(null);

  const filteredRoles = rolesData.filter(
    (role) => filter === "All" || role.type === filter
  );

  const itCount = rolesData.filter((role) => role.type === "IT").length;
  const leadershipCount = rolesData.filter(
    (role) => role.type === "Leadership"
  ).length;

  const filters = [
    { id: "All", label: "All Opportunities", count: rolesData.length },
    { id: "IT", label: "Technology", count: itCount },
    { id: "Leadership", label: "Leadership", count: leadershipCount },
  ];

  return (
    <>
      <Helmet>
        <title>Careers at Vaytrix Tech IT | Explore Opportunities</title>
        <meta
          name="description"
          content="Explore career opportunities at Vaytrix Tech IT and discover opportunities to grow your skills, build your career, and work with a forward-thinking technology team."
        />
        <meta
          name="keywords"
          content="Vaytrix Careers, IT Jobs, Technology Jobs, Software Jobs, Career Opportunities, Vaytrix Jobs"
        />
        <link rel="canonical" href="https://vaytrixtechit.com/careers" />
        <meta
          property="og:title"
          content="Careers at Vaytrix Tech IT | Explore Opportunities"
        />
        <meta
          property="og:description"
          content="Find your next opportunity and build your career with Vaytrix Tech IT."
        />
        <meta property="og:url" content="https://vaytrixtechit.com/careers" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://vaytrixtechit.com/og-image.jpg"
        />
      </Helmet>

      <section className="relative min-h-screen overflow-hidden bg-[#050508] px-5 py-16 text-[#F8FAFC] sm:px-8 sm:py-20 lg:px-10 lg:py-6">
        {/* Background grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#8B5CF6]/10 blur-[150px]" />
        <div className="pointer-events-none absolute -right-40 top-[45%] h-96 w-96 rounded-full bg-[#06B6D4]/10 blur-[150px]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          {/* Hero */}
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#8B5CF6]/30 bg-[#8B5CF6]/10">
                  <Sparkles size={21} className="text-[#A78BFA]" />
                </div>
                <span className="font-mono text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
                  Vaytrix / Careers
                </span>
              </div>

              <h1 className="max-w-2xl text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Find your next
                <span className="block bg-gradient-to-r from-[#A78BFA] via-[#3B82F6] to-[#06B6D4] bg-clip-text pb-2 text-transparent">
                  opportunity
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                Explore technology and leadership opportunities across
                software engineering, data, AI, cloud, cybersecurity, product,
                delivery, and technology leadership.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3 text-sm text-slate-300 sm:text-base">
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
                  24 Career Paths
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
                  Technology & Leadership
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="w-full"
            >
              <CareerOrbit />
            </motion.div>
          </div>

          {/* Career directory */}
          <div className="mt-16 w-full border-t border-white/10 pt-10 sm:mt-5 sm:pt-12">
            <div className="mb-7">
              <p className="font-mono text-sm uppercase tracking-[0.2em] text-[#A78BFA]">
                Career Directory
              </p>
              <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                  Explore Opportunities
                </h2>
                <p className="max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
                  Find a role that matches your skills and career goals.
                </p>
              </div>
            </div>

            {/* Filters are above the cards */}
            <div className="flex flex-wrap gap-3">
              {filters.map((item) => {
                const isSelected = filter === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setFilter(item.id);
                      setActiveRole(null);
                    }}
                    aria-pressed={isSelected}
                    className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold transition-all duration-300 sm:px-5 sm:text-base ${
                      isSelected
                        ? "border-[#8B5CF6]/60 bg-[#8B5CF6]/15 text-white shadow-[0_0_22px_rgba(139,92,246,0.12)]"
                        : "border-white/10 bg-[#0A0A0F] text-slate-300 hover:border-[#06B6D4]/40 hover:text-white"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`rounded-full px-2 py-0.5 text-sm ${
                        isSelected
                          ? "bg-[#8B5CF6]/20 text-[#C4B5FD]"
                          : "bg-white/[0.06] text-slate-300"
                      }`}
                    >
                      {item.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Results label directly above the cards */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-y border-white/10 py-4">
              <p className="text-base font-medium text-slate-200 sm:text-lg">
                Showing {filteredRoles.length} career opportunities
              </p>
              <span className="font-mono text-xs uppercase tracking-wider text-slate-400 sm:text-sm">
                VAYTRIX / CAREERS
              </span>
            </div>

            
{/* RECTANGULAR CAREER CARDS — ALL DETAILS VISIBLE */}
<div className="mt-6 grid w-full grid-cols-1 items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-3">
  <AnimatePresence mode="popLayout">
    {filteredRoles.map((role, index) => {
      const Icon = iconMap[role.title];

      return (
        <motion.article
          key={role.title}
          layout
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{
            duration: 0.25,
            delay: Math.min(index * 0.02, 0.15),
          }}
          className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0F] transition-all duration-300 hover:border-[#8B5CF6]/40 hover:bg-[#0D0D14] hover:shadow-[0_0_25px_rgba(139,92,246,0.08)]"
        >
          {/* Top gradient accent */}
          <div className="h-1 w-full shrink-0 bg-gradient-to-r from-[#8B5CF6] via-[#3B82F6] to-[#06B6D4] opacity-70 transition-opacity group-hover:opacity-100" />

          <div className="flex flex-1 flex-col p-5 sm:p-6">
            {/* Icon and role title */}
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#8B5CF6]/25 bg-[#8B5CF6]/10 text-[#C4B5FD] sm:h-14 sm:w-14">
                <Icon size={25} strokeWidth={1.7} />
              </span>

              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-semibold leading-snug text-white sm:text-xl lg:text-xl">
                  {role.title}
                </h3>

                <span
                  className={`mt-3 inline-flex rounded-full border px-3 py-1 text-xs font-semibold sm:text-[10px] ${
                    role.type === "IT"
                      ? "border-[#60A5FA]/20 bg-[#3B82F6]/10 text-[#93C5FD]"
                      : "border-[#A78BFA]/20 bg-[#8B5CF6]/10 text-[#C4B5FD]"
                  }`}
                >
                  {role.type === "IT" ? "Technology" : "Leadership"}
                </span>
              </div>
            </div>

            {/* Always-visible role description */}
            <div className="mt-6">
              <p className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-[#A78BFA]">
                Role Overview
              </p>

              <p className="mt-1 text-base text-slate-300 sm:text-[15px]">
                {role.description}
              </p>
            </div>

            {/* Always-visible skills */}
            <div className="mt-6">
              <p className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-[#67E8F9]">
                Core Skills
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {role.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-slate-200 sm:text-[12px]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.article>
      );
    })}
  </AnimatePresence>
</div>


            {/* Results footer */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5">
              <p className="text-sm text-slate-300 sm:text-base">
                Showing {filteredRoles.length} of {rolesData.length} career paths
              </p>
              <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-slate-400 sm:text-sm">
                <span className="h-2 w-2 rounded-full bg-[#06B6D4] shadow-[0_0_10px_rgba(6,182,212,0.7)]" />
                VAYTRIX / CAREERS
              </span>
            </div>
          </div>

          
        </div>


      <CtaCareers />

      </section>
    </>
  );
}
