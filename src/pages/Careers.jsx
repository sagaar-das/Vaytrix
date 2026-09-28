// import { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Code,
//   Database,
//   Server,
//   Layout,
//   Cpu,
//   BarChart3,
//   Cloud,
//   Settings,
//   Brain,
//   Briefcase,
//   Shield,
//   PenTool,
//   Users,
//   Network,
//   ArrowUpRight,
//   Sparkles,
// } from "lucide-react";
// import { Helmet } from "react-helmet-async";

// const rolesData = [
//   {
//     title: "Software Development Engineer (SDE)",
//     type: "IT",
//     description:
//       "Build, test, and maintain scalable software systems while working with cross-functional teams to improve performance, reliability, and engineering quality.",
//     skills: ["Java", "Python", "DSA", "OOP", "Git"],
//   },
//   {
//     title: "Full Stack Developer",
//     type: "IT",
//     description:
//       "Develop complete web applications across frontend and backend layers, connecting intuitive interfaces with reliable server-side systems and scalable technology.",
//     skills: ["React", "Node.js", "MongoDB", "REST APIs"],
//   },
//   {
//     title: "Backend Developer",
//     type: "IT",
//     description:
//       "Create reliable APIs, server-side applications, and database solutions with a strong focus on performance, scalability, security, and efficient business logic.",
//     skills: ["Java", "Python", "SQL", "Microservices"],
//   },
//   {
//     title: "Frontend Developer",
//     type: "IT",
//     description:
//       "Build responsive and engaging digital interfaces while working with design and engineering teams to deliver consistent experiences across devices and browsers.",
//     skills: ["HTML", "CSS", "JavaScript", "React", "Angular"],
//   },
//   {
//     title: "Python Developer",
//     type: "IT",
//     description:
//       "Develop scalable applications and backend services using Python, while building APIs, automating workflows, and integrating systems with maintainable code.",
//     skills: ["Python", "Django", "Flask", "SQL"],
//   },
//   {
//     title: "Data Scientist",
//     type: "IT",
//     description:
//       "Turn complex datasets into useful business insights by applying statistical methods, machine learning, and predictive analytics to real-world problems.",
//     skills: ["Python", "ML", "Statistics", "Pandas"],
//   },
//   {
//     title: "Data Engineer",
//     type: "IT",
//     description:
//       "Design and maintain scalable data pipelines that collect, transform, and organize information for analytics, reporting, and machine learning workloads.",
//     skills: ["SQL", "Spark", "ETL", "AWS"],
//   },
//   {
//     title: "Data Analyst",
//     type: "IT",
//     description:
//       "Analyze business data and convert findings into actionable insights through dashboards, reports, and visualizations that support better decisions.",
//     skills: ["Excel", "SQL", "Power BI", "Tableau"],
//   },
//   {
//     title: "Financial Analyst",
//     type: "IT",
//     description:
//       "Evaluate financial information, develop forecasts, and analyze budgets and investments to support business planning and stronger financial decisions.",
//     skills: ["Excel", "Forecasting", "Financial Modeling"],
//   },
//   {
//     title: "Cloud Engineer",
//     type: "IT",
//     description:
//       "Design and manage secure cloud infrastructure while improving application scalability, reliability, resource efficiency, and cloud-native delivery.",
//     skills: ["AWS", "Azure", "Docker", "Kubernetes"],
//   },
//   {
//     title: "DevOps Engineer",
//     type: "IT",
//     description:
//       "Automate development and deployment workflows through CI/CD, infrastructure management, and modern DevOps practices that enable reliable software delivery.",
//     skills: ["Jenkins", "Docker", "Kubernetes", "Git"],
//   },
//   {
//     title: "AI/ML Engineer",
//     type: "IT",
//     description:
//       "Develop and deploy intelligent machine learning solutions by working with data, optimizing models, and integrating AI capabilities into production applications.",
//     skills: ["Python", "TensorFlow", "NLP", "Deep Learning"],
//   },
//   {
//     title: "Business Analyst",
//     type: "IT",
//     description:
//       "Understand business requirements and translate them into practical technology solutions while working closely with stakeholders throughout the delivery process.",
//     skills: ["SQL", "Documentation", "Requirement Gathering"],
//   },
//   {
//     title: "QA / Test Engineer",
//     type: "IT",
//     description:
//       "Validate software quality through structured testing, defect identification, and collaboration with engineering teams to deliver dependable applications.",
//     skills: ["Selenium", "Manual Testing", "Automation"],
//   },
//   {
//     title: "UI/UX Designer",
//     type: "IT",
//     description:
//       "Create intuitive digital experiences through research, wireframes, prototypes, and thoughtful interface design focused on usability and consistency.",
//     skills: ["Figma", "Adobe XD", "Wireframing"],
//   },
//   {
//     title: "Cybersecurity Analyst",
//     type: "IT",
//     description:
//       "Protect applications, networks, and organizational data by identifying vulnerabilities, monitoring security events, and strengthening cybersecurity practices.",
//     skills: ["Network Security", "SIEM", "Ethical Hacking"],
//   },

//   {
//     title: "Technical Architect",
//     type: "Leadership",
//     description:
//       "Define architecture for complex technology systems while making strategic technical decisions that support scalability, performance, and long-term growth.",
//     skills: ["System Design", "Cloud Architecture", "Microservices"],
//   },
//   {
//     title: "Engineering Manager",
//     type: "Leadership",
//     description:
//       "Guide engineering teams toward successful delivery by combining technical leadership, resource planning, mentoring, and strong collaboration.",
//     skills: ["Leadership", "Agile", "Team Management"],
//   },
//   {
//     title: "Product Manager",
//     type: "Leadership",
//     description:
//       "Shape product direction, strategy, and roadmaps around customer and market needs while coordinating teams to create valuable business outcomes.",
//     skills: ["Product Strategy", "Market Research", "Agile"],
//   },
//   {
//     title: "Project Manager",
//     type: "Leadership",
//     description:
//       "Coordinate projects from planning through delivery while managing timelines, budgets, risks, teams, and stakeholder communication.",
//     skills: ["PMP", "Agile", "Risk Management"],
//   },
//   {
//     title: "Delivery Manager",
//     type: "Leadership",
//     description:
//       "Drive end-to-end delivery by coordinating teams, maintaining quality and timelines, improving processes, and building strong client relationships.",
//     skills: ["Stakeholder Management", "Operations"],
//   },
//   {
//     title: "IT Director / Head of Technology",
//     type: "Leadership",
//     description:
//       "Lead technology strategy and operations while driving innovation, managing teams, and aligning technology initiatives with wider business priorities.",
//     skills: ["Leadership", "Strategy", "Enterprise Systems"],
//   },
//   {
//     title: "AI/ML Lead",
//     type: "Leadership",
//     description:
//       "Lead artificial intelligence initiatives by defining AI direction, guiding technical teams, and delivering machine learning solutions that create measurable business value.",
//     skills: ["Advanced ML", "Team Leadership", "AI Strategy"],
//   },
//   {
//     title: "Data Architect",
//     type: "Leadership",
//     description:
//       "Design enterprise data architecture, establish scalable data models, and support governance systems that enable analytics and data-driven decision-making.",
//     skills: ["Data Modeling", "Big Data", "Cloud"],
//   },
// ];

// const iconMap = {
//   "Software Development Engineer (SDE)": Code,
//   "Full Stack Developer": Code,
//   "Backend Developer": Server,
//   "Frontend Developer": Layout,
//   "Python Developer": Cpu,
//   "Data Scientist": Brain,
//   "Data Engineer": Database,
//   "Data Analyst": BarChart3,
//   "Financial Analyst": BarChart3,
//   "Cloud Engineer": Cloud,
//   "DevOps Engineer": Settings,
//   "AI/ML Engineer": Brain,
//   "Business Analyst": Briefcase,
//   "QA / Test Engineer": Settings,
//   "UI/UX Designer": PenTool,
//   "Cybersecurity Analyst": Shield,

//   "Technical Architect": Network,
//   "Engineering Manager": Users,
//   "Product Manager": Briefcase,
//   "Project Manager": Briefcase,
//   "Delivery Manager": Users,
//   "IT Director / Head of Technology": Users,
//   "AI/ML Lead": Brain,
//   "Data Architect": Database,
// };

// export default function Careers() {
//   const [filter, setFilter] = useState("All");

//   const filteredRoles = rolesData.filter((role) => {
//     if (filter === "All") return true;
//     return role.type === filter;
//   });

//   return (
//     <>
//       <Helmet>
//         <title>Careers | Vaytrix</title>

//         <meta
//           name="description"
//           content="Explore technology and leadership opportunities with Vaytrix and build your career across software, data, AI, cloud, cybersecurity, and digital innovation."
//         />

//         <link
//           rel="canonical"
//           href="https://www.vaytrix.com/careers"
//         />
//       </Helmet>

//       <section className="relative min-h-screen overflow-hidden bg-[#050508] px-4 py-16 text-[#F8FAFC] sm:px-6 sm:py-20 lg:px-8 lg:py-24">

//         {/* =========================================================
//             TECHNICAL GRID
//         ========================================================== */}
//         <div
//           className="pointer-events-none absolute inset-0 opacity-[0.035]"
//           style={{
//             backgroundImage: `
//               linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
//               linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
//             `,
//             backgroundSize: "48px 48px",
//           }}
//         />

//         {/* =========================================================
//             AMBIENT GLOWS
//         ========================================================== */}
//         <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#8B5CF6]/10 blur-[150px]" />

//         <div className="pointer-events-none absolute -right-40 top-[35%] h-96 w-96 rounded-full bg-[#06B6D4]/10 blur-[150px]" />

//         <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#3B82F6]/5 blur-[150px]" />

//         <div className="relative z-10 mx-auto max-w-7xl">

//           {/* =======================================================
//               HERO
//           ======================================================== */}
//           <div className="mx-auto max-w-4xl text-center">

//             {/* TECH LABEL */}
//             <motion.div
//               initial={{ opacity: 0, y: 15 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               className="
//                 mx-auto
//                 inline-flex
//                 items-center
//                 gap-3
//                 rounded-full
//                 border
//                 border-[#8B5CF6]/25
//                 bg-[#8B5CF6]/[0.07]
//                 px-4
//                 py-2
//                 backdrop-blur-xl
//               "
//             >
//               <Sparkles
//                 size={13}
//                 className="text-[#A78BFA]"
//               />

//               <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.22em] text-[#A78BFA] sm:text-[10px]">
//                 Careers / Vaytrix
//               </span>

//               <span className="h-1.5 w-1.5 rounded-full bg-[#06B6D4] shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
//             </motion.div>

//             {/* MAIN HEADING */}
//             <motion.h1
//               initial={{ opacity: 0, y: 25 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{
//                 delay: 0.1,
//                 duration: 0.7,
//               }}
//               className="
//                 mt-7
//                 text-4xl
//                 font-semibold
//                 leading-[1.05]
//                 tracking-[-0.045em]
//                 sm:text-5xl
//                 md:text-6xl
//                 lg:text-7xl
//               "
//             >
//               Build Your Future
//               <br />

//               <span className="bg-gradient-to-r from-[#8B5CF6] via-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">
//                 With Vaytrix
//               </span>
//             </motion.h1>

//             {/* SUBHEADING */}
//             <motion.p
//               initial={{ opacity: 0, y: 15 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{
//                 delay: 0.25,
//                 duration: 0.5,
//               }}
//               className="
//                 mx-auto
//                 mt-6
//                 max-w-2xl
//                 text-sm
//                 leading-7
//                 text-[#94A3B8]
//                 sm:text-base
//                 md:text-lg
//               "
//             >
//               Discover opportunities where technology, creativity, and
//               expertise come together to build meaningful digital solutions
//               and accelerate professional growth.
//             </motion.p>

//           </div>

          

//           {/* =======================================================
//               FILTER
//           ======================================================== */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="mt-14 flex flex-wrap justify-center gap-3"
//           >

//             {["All", "IT", "Leadership"].map((item) => {

//               const active = filter === item;

//               return (
//                 <motion.button
//                   key={item}
//                   whileTap={{ scale: 0.96 }}
//                   onClick={() => setFilter(item)}
//                   className={`
//                     relative
//                     overflow-hidden
//                     rounded-full
//                     border
//                     px-5
//                     py-2.5
//                     text-xs
//                     font-semibold
//                     transition-all
//                     duration-300
//                     ${
//                       active
//                         ? "border-[#8B5CF6]/50 bg-gradient-to-r from-[#8B5CF6] via-[#3B82F6] to-[#06B6D4] text-white shadow-[0_0_25px_rgba(139,92,246,0.18)]"
//                         : "border-white/[0.08] bg-white/[0.025] text-[#94A3B8] hover:border-[#8B5CF6]/40 hover:text-[#F8FAFC]"
//                     }
//                   `}
//                 >
//                   {item === "IT"
//                     ? "Technology Roles"
//                     : item === "Leadership"
//                       ? "Leadership Roles"
//                       : "All Opportunities"}
//                 </motion.button>
//               );
//             })}

//           </motion.div>

//           {/* =======================================================
//               RESULTS LABEL
//           ======================================================== */}
//           <div className="mt-10 flex items-center justify-between border-b border-white/[0.07] pb-4">

//             <div>
//               <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#64748B]">
//                 Available Opportunities
//               </p>

//               <p className="mt-1 text-sm font-medium text-[#CBD5E1]">
//                 {filteredRoles.length} career paths
//               </p>
//             </div>

//             <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#475569]">
//               Vaytrix / Careers
//             </span>

//           </div>

//           {/* =======================================================
//               ROLE GRID
//           ======================================================== */}
//           <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">

//             {filteredRoles.map((role, index) => {

//               const Icon = iconMap[role.title];

//               return (
//                 <motion.article
//                   key={role.title}
//                   initial={{
//                     opacity: 0,
//                     y: 25,
//                   }}
//                   whileInView={{
//                     opacity: 1,
//                     y: 0,
//                   }}
//                   viewport={{ once: true }}
//                   transition={{
//                     duration: 0.45,
//                     delay: Math.min(index * 0.035, 0.25),
//                   }}
//                   whileHover={{
//                     y: -5,
//                   }}
//                   className="
//                     group
//                     relative
//                     overflow-hidden
//                     rounded-2xl
//                     border
//                     border-white/[0.07]
//                     bg-[rgba(10,10,15,0.72)]
//                     p-5
//                     backdrop-blur-xl
//                     transition-all
//                     duration-300
//                     hover:border-[#8B5CF6]/40
//                     hover:bg-[rgba(13,13,22,0.86)]
//                     hover:shadow-[0_20px_50px_rgba(139,92,246,0.10)]
//                     sm:p-6
//                   "
//                 >

//                   {/* TOP ACCENT */}
//                   <div
//                     className="
//                       absolute
//                       left-0
//                       right-0
//                       top-0
//                       h-px
//                       bg-gradient-to-r
//                       from-transparent
//                       via-[#8B5CF6]
//                       to-[#06B6D4]
//                       opacity-0
//                       transition-opacity
//                       duration-300
//                       group-hover:opacity-100
//                     "
//                   />

//                   {/* AMBIENT CARD GLOW */}
//                   <div
//                     className="
//                       pointer-events-none
//                       absolute
//                       -right-16
//                       -top-16
//                       h-36
//                       w-36
//                       rounded-full
//                       bg-[#8B5CF6]/10
//                       blur-[55px]
//                       opacity-0
//                       transition-opacity
//                       duration-500
//                       group-hover:opacity-100
//                     "
//                   />

//                   <div className="relative z-10">

//                     {/* CARD META */}
//                     <div className="flex items-center justify-between">

//                       <span className="font-mono text-[9px] font-semibold tracking-[0.16em] text-[#475569]">
//                         {String(index + 1).padStart(2, "0")}
//                       </span>

//                       <span
//                         className={`
//                           rounded-full
//                           border
//                           px-2.5
//                           py-1
//                           font-mono
//                           text-[8px]
//                           uppercase
//                           tracking-[0.12em]
//                           ${
//                             role.type === "IT"
//                               ? "border-[#3B82F6]/20 bg-[#3B82F6]/[0.07] text-[#60A5FA]"
//                               : "border-[#8B5CF6]/20 bg-[#8B5CF6]/[0.07] text-[#A78BFA]"
//                           }
//                         `}
//                       >
//                         {role.type}
//                       </span>

//                     </div>

//                     {/* ICON */}
//                     <div
//                       className="
//                         mt-5
//                         flex
//                         h-11
//                         w-11
//                         items-center
//                         justify-center
//                         rounded-xl
//                         border
//                         border-[#8B5CF6]/20
//                         bg-gradient-to-br
//                         from-[#8B5CF6]/10
//                         to-[#06B6D4]/5
//                         text-[#A78BFA]
//                         transition-all
//                         duration-300
//                         group-hover:border-[#8B5CF6]/40
//                         group-hover:text-[#C4B5FD]
//                       "
//                     >
//                       {Icon && <Icon size={20} strokeWidth={1.7} />}
//                     </div>

//                     {/* TITLE */}
//                     <h2 className="mt-5 text-base font-semibold leading-6 text-[#F8FAFC] transition-colors duration-300 group-hover:text-white">
//                       {role.title}
//                     </h2>

//                     {/* DESCRIPTION */}
//                     <p className="mt-3 text-[13px] leading-6 text-[#64748B] transition-colors duration-300 group-hover:text-[#94A3B8]">
//                       {role.description}
//                     </p>

//                     {/* SKILLS */}
//                     <div className="mt-5 flex flex-wrap gap-2">

//                       {role.skills.map((skill) => (
//                         <span
//                           key={skill}
//                           className="
//                             rounded-lg
//                             border
//                             border-white/[0.07]
//                             bg-white/[0.025]
//                             px-2.5
//                             py-1.5
//                             font-mono
//                             text-[9px]
//                             text-[#64748B]
//                             transition-all
//                             duration-300
//                             group-hover:border-[#8B5CF6]/20
//                             group-hover:text-[#94A3B8]
//                           "
//                         >
//                           {skill}
//                         </span>
//                       ))}

//                     </div>

//                     {/* BOTTOM */}
//                     <div className="mt-6 flex items-center justify-between border-t border-white/[0.07] pt-4">

//                       <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-[#475569]">
//                         Career Track
//                       </span>

//                       <div
//                         className="
//                           flex
//                           h-7
//                           w-7
//                           items-center
//                           justify-center
//                           rounded-full
//                           border
//                           border-white/[0.08]
//                           text-[#64748B]
//                           transition-all
//                           duration-300
//                           group-hover:border-[#8B5CF6]/40
//                           group-hover:text-[#A78BFA]
//                         "
//                       >
//                         <ArrowUpRight size={13} />
//                       </div>

//                     </div>

//                   </div>

//                 </motion.article>
//               );
//             })}

//           </div>

//           {/* =======================================================
//               FOOTER
//           ======================================================== */}
//           <div className="mt-14 flex items-center justify-center gap-3">

//             <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#8B5CF6]/40" />

//             <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#475569]">
//               Explore Your Next Opportunity
//             </span>

//             <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#06B6D4]/40" />

//           </div>

//         </div>
//       </section>
//     </>
//   );
// }




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

export default function Careers() {
  const [filter, setFilter] = useState("All");
  const [activeRole, setActiveRole] = useState(null);

  const filteredRoles = rolesData.filter((role) => {
    if (filter === "All") return true;
    return role.type === filter;
  });

  const itCount = rolesData.filter((role) => role.type === "IT").length;
  const leadershipCount = rolesData.filter(
    (role) => role.type === "Leadership"
  ).length;

  return (
    <>
      <Helmet>
        <title>Careers | Vaytrix</title>

        <meta
          name="description"
          content="Explore technology and leadership opportunities with Vaytrix and build your career across software, data, AI, cloud, cybersecurity, and digital innovation."
        />

        <link
          rel="canonical"
          href="https://www.vaytrix.com/careers"
        />
      </Helmet>

      <section className="relative min-h-screen overflow-hidden bg-[#050508] px-5 py-16 text-[#F8FAFC] sm:px-8 sm:py-20 lg:px-10 lg:py-24">

        {/* =====================================================
            BACKGROUND
        ====================================================== */}

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "56px 56px",
          }}
        />

        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#8B5CF6]/10 blur-[150px]" />

        <div className="pointer-events-none absolute -right-40 top-[45%] h-96 w-96 rounded-full bg-[#06B6D4]/10 blur-[150px]" />

        <div className="relative z-10 mx-auto max-w-7xl">

          {/* =====================================================
              HEADER
          ====================================================== */}

          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">

            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >

              <div className="mb-5 flex items-center gap-3">

                <div className="flex h-8 w-8 items-center justify-center border border-[#8B5CF6]/30 bg-[#8B5CF6]/10">
                  <Sparkles
                    size={14}
                    className="text-[#A78BFA]"
                  />
                </div>

                <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.22em] text-[#64748B]">
                  Vaytrix / Careers
                </span>

              </div>

              <h1 className="max-w-xl text-4xl font-semibold leading-[1.05] tracking-[-0.05em] text-[#F8FAFC] sm:text-5xl lg:text-6xl">

                Find your next
                <br />

                <span className="bg-gradient-to-r from-[#8B5CF6] via-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">
                  opportunity.
                </span>

              </h1>

            </motion.div>


            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="lg:pb-1"
            >

              <p className="max-w-xl text-sm leading-7 text-[#94A3B8] sm:text-base">
                Explore technology and leadership opportunities across
                software engineering, data, AI, cloud, cybersecurity,
                product, delivery, and technology leadership.
              </p>

            </motion.div>

          </div>


          {/* =====================================================
              MAIN DIRECTORY
          ====================================================== */}

          <div className="mt-14 grid gap-8 lg:grid-cols-[230px_1fr] lg:items-start">

            {/* ===================================================
                LEFT SIDEBAR
            ==================================================== */}

            <aside className="lg:sticky lg:top-24">

              <div className="border-y border-white/[0.08] py-5">

                <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#475569]">
                  Career Directory
                </p>

                <div className="mt-4">

                  {[
                    {
                      id: "All",
                      label: "All Opportunities",
                      count: rolesData.length,
                    },
                    {
                      id: "IT",
                      label: "Technology",
                      count: itCount,
                    },
                    {
                      id: "Leadership",
                      label: "Leadership",
                      count: leadershipCount,
                    },
                  ].map((item) => {

                    const active = filter === item.id;

                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          setFilter(item.id);
                          setActiveRole(null);
                        }}
                        className={`
                          group
                          flex
                          w-full
                          items-center
                          justify-between
                          border-b
                          border-white/[0.06]
                          py-3
                          text-left
                          transition-all
                          duration-300
                          ${
                            active
                              ? "text-[#F8FAFC]"
                              : "text-[#64748B] hover:text-[#CBD5E1]"
                          }
                        `}
                      >

                        <span className="flex items-center gap-3">

                          <span
                            className={`
                              h-1.5
                              w-1.5
                              rounded-full
                              transition-all
                              ${
                                active
                                  ? "bg-[#8B5CF6] shadow-[0_0_10px_rgba(139,92,246,0.8)]"
                                  : "bg-white/10"
                              }
                            `}
                          />

                          <span className="text-xs font-medium">
                            {item.label}
                          </span>

                        </span>

                        <span
                          className={`
                            font-mono
                            text-[9px]
                            ${
                              active
                                ? "text-[#A78BFA]"
                                : "text-[#475569]"
                            }
                          `}
                        >
                          {String(item.count).padStart(2, "0")}
                        </span>

                      </button>
                    );
                  })}

                </div>

              </div>


              {/* SMALL INFO BLOCK */}

              <div className="mt-5 hidden border border-white/[0.07] bg-white/[0.015] p-4 lg:block">

                <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-[#475569]">
                  Current View
                </p>

                <p className="mt-2 text-sm font-medium text-[#CBD5E1]">
                  {filteredRoles.length} available paths
                </p>

                <div className="mt-4 h-px bg-white/[0.07]" />

                <div className="mt-3 flex items-center justify-between">

                  <span className="font-mono text-[8px] text-[#475569]">
                    STATUS
                  </span>

                  <span className="flex items-center gap-1.5 font-mono text-[8px] text-[#06B6D4]">

                    <span className="h-1.5 w-1.5 rounded-full bg-[#06B6D4] shadow-[0_0_8px_rgba(6,182,212,0.8)]" />

                    ACTIVE

                  </span>

                </div>

              </div>

            </aside>


            {/* ===================================================
                ROLE DIRECTORY
            ==================================================== */}

            <div>

              {/* DIRECTORY HEADER */}

              <div className="mb-2 hidden grid-cols-[45px_1fr_110px_25px] items-center gap-4 px-4 md:grid">

                <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#475569]">
                  No.
                </span>

                <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#475569]">
                  Position
                </span>

                <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#475569]">
                  Track
                </span>

                <span />
              </div>


              {/* ROLE LIST */}

              <div className="border-t border-white/[0.08]">

                {filteredRoles.map((role, index) => {

                  const Icon = iconMap[role.title];
                  const isActive = activeRole === role.title;

                  return (
                    <motion.div
                      key={role.title}
                      layout
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.3,
                        delay: Math.min(index * 0.025, 0.2),
                      }}
                      className={`
                        group
                        relative
                        border-b
                        border-white/[0.07]
                        transition-all
                        duration-300
                        ${
                          isActive
                            ? "bg-white/[0.025]"
                            : "hover:bg-white/[0.018]"
                        }
                      `}
                    >

                      {/* ACTIVE LINE */}

                      <div
                        className={`
                          absolute
                          bottom-0
                          left-0
                          top-0
                          w-[2px]
                          bg-gradient-to-b
                          from-[#8B5CF6]
                          to-[#06B6D4]
                          transition-transform
                          duration-300
                          ${
                            isActive
                              ? "scale-y-100"
                              : "scale-y-0 group-hover:scale-y-100"
                          }
                        `}
                      />


                      {/* MAIN ROW */}

                      <button
                        onClick={() =>
                          setActiveRole(
                            isActive ? null : role.title
                          )
                        }
                        className="w-full px-3 py-4 text-left sm:px-4"
                      >

                        <div className="grid grid-cols-[35px_1fr_auto] items-center gap-3 md:grid-cols-[45px_1fr_110px_25px] md:gap-4">

                          {/* NUMBER */}

                          <span
                            className={`
                              font-mono
                              text-[9px]
                              tracking-[0.12em]
                              transition-colors
                              ${
                                isActive
                                  ? "text-[#A78BFA]"
                                  : "text-[#475569]"
                              }
                            `}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>


                          {/* TITLE + ICON */}

                          <div className="flex min-w-0 items-center gap-3">

                            <div
                              className={`
                                hidden
                                h-7
                                w-7
                                shrink-0
                                items-center
                                justify-center
                                border
                                transition-all
                                duration-300
                                sm:flex
                                ${
                                  isActive
                                    ? "border-[#8B5CF6]/30 bg-[#8B5CF6]/10 text-[#A78BFA]"
                                    : "border-white/[0.07] text-[#475569] group-hover:border-[#8B5CF6]/20 group-hover:text-[#94A3B8]"
                                }
                              `}
                            >
                              <Icon size={13} strokeWidth={1.7} />
                            </div>

                            <span
                              className={`
                                truncate
                                text-sm
                                font-medium
                                transition-colors
                                duration-300
                                ${
                                  isActive
                                    ? "text-[#F8FAFC]"
                                    : "text-[#CBD5E1] group-hover:text-[#F8FAFC]"
                                }
                              `}
                            >
                              {role.title}
                            </span>

                          </div>


                          {/* TYPE */}

                          <span
                            className={`
                              hidden
                              font-mono
                              text-[8px]
                              uppercase
                              tracking-[0.12em]
                              md:block
                              ${
                                role.type === "IT"
                                  ? "text-[#60A5FA]"
                                  : "text-[#A78BFA]"
                              }
                            `}
                          >
                            {role.type === "IT"
                              ? "Technology"
                              : "Leadership"}
                          </span>


                          {/* ARROW */}

                          <span
                            className={`
                              flex
                              h-6
                              w-6
                              items-center
                              justify-center
                              text-[#475569]
                              transition-all
                              duration-300
                              ${
                                isActive
                                  ? "rotate-180 text-[#A78BFA]"
                                  : "group-hover:text-[#06B6D4]"
                              }
                            `}
                          >
                            <ChevronDown size={14} />
                          </span>

                        </div>

                      </button>


                      {/* EXPANDED CONTENT */}

                      <AnimatePresence initial={false}>

                        {isActive && (
                          <motion.div
                            initial={{
                              height: 0,
                              opacity: 0,
                            }}
                            animate={{
                              height: "auto",
                              opacity: 1,
                            }}
                            exit={{
                              height: 0,
                              opacity: 0,
                            }}
                            transition={{
                              duration: 0.3,
                            }}
                            className="overflow-hidden"
                          >

                            <div className="grid gap-6 border-t border-white/[0.06] px-4 pb-5 pt-4 sm:px-16 md:grid-cols-[1fr_auto]">

                              {/* DESCRIPTION */}

                              <div>

                                <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-[#475569]">
                                  Role Overview
                                </p>

                                <p className="mt-2 max-w-2xl text-xs leading-6 text-[#94A3B8]">
                                  {role.description}
                                </p>

                              </div>


                              {/* SKILLS */}

                              <div className="md:min-w-[230px]">

                                <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-[#475569]">
                                  Core Skills
                                </p>

                                <div className="mt-2 flex flex-wrap gap-1.5">

                                  {role.skills.map((skill) => (
                                    <span
                                      key={skill}
                                      className="
                                        border
                                        border-white/[0.07]
                                        bg-white/[0.025]
                                        px-2
                                        py-1
                                        font-mono
                                        text-[8px]
                                        text-[#64748B]
                                      "
                                    >
                                      {skill}
                                    </span>
                                  ))}

                                </div>

                              </div>

                            </div>

                          </motion.div>
                        )}

                      </AnimatePresence>

                    </motion.div>
                  );
                })}

              </div>


              {/* BOTTOM */}

              <div className="mt-5 flex items-center justify-between">

                <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-[#475569]">
                  Showing {filteredRoles.length} career paths
                </span>

                <span className="hidden items-center gap-2 font-mono text-[8px] uppercase tracking-[0.16em] text-[#475569] sm:flex">

                  VAYTRIX

                  <span className="h-px w-5 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4]" />

                  CAREERS

                </span>

              </div>

            </div>

          </div>


          {/* =====================================================
              FOOTER
          ====================================================== */}

          <div className="mt-14 flex items-center justify-center gap-3">

            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#8B5CF6]/40" />

            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#475569]">
              Explore Your Next Opportunity
            </span>

            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#06B6D4]/40" />

          </div>

        </div>

      </section>
    </>
  );
}