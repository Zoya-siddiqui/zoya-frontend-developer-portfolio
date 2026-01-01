import { cn } from "../../lib/utils";

/**
 * Modern Glassmorphism Timeline
 * - Vertical timeline with glowing nodes
 * - Glassy cards for content
 * - Dark/Light theme support
 */
export const Summery = () => {
  const events = [
  {
    year: "About Me",
    title: "Frontend Developer",
    description:
      "A passionate frontend developer focused on building clean, responsive, and user-friendly web interfaces. Experienced in working on real-world projects, collaborating with clients, and continuously learning modern frontend technologies.",
  },
  {
    year: "2024 – 2027",
    title: "Bachelor’s Degree (Online)",
    description:
      "Pursuing graduation from Uttaranchal University, Uttarakhand through online mode, balancing academic learning with hands-on industry experience.",
  },
  {
    year: "Languages",
    title: "Communication Skills",
    description: "languages", // handled separately in UI
  },
  {
    year: "2023",
    title: "Full Stack Development Course",
    description:
      "Completed a 1-year Full Stack Development course from 4Achievers, Noida Sector 15, Uttar Pradesh, gaining practical exposure to frontend-focused development and real-world project workflows.",
  },
  {
    year: "2023",
    title: "Achievements & Certification",
    description:
      "Awarded 1st position in Frontend Presentation at 4Achievers (2023) for demonstrating strong UI development skills, problem-solving, and project explanation abilities.",
  },
];


  return (
    <div className="relative max-w-3xl mx-auto py-12 px-4">
               <h1 className="text-4xl md:text-5xl text-white mb-6 px-4 font-extrabold uppercase">Summery</h1>

      <div className="absolute left-[18px] top-0 h-full w-[2px] bg-gradient-to-b from-green-600/50 to-white/20 dark:from-green-500/20 dark:to-white/20 backdrop-blur shadow-md" />

      <div className="space-y-12">
        {events.map((event, idx) => (
          <div key={idx} className="relative flex gap-6 items-start animate-fade-in">
            {/* Timeline node */}
            <div className="relative z-10">
              <div
                  className={cn(
                  "h-4 w-4 rounded-full -ml-1 border-2 border-white dark:border-green-800",
                  "bg-green-600",
                  "shadow-[0_0_12px_rgba(59,130,246,0.6)]",
                  "transition-transform duration-200 hover:scale-110"
                )}
              />
            </div>

           
            <div
              className={cn(
                "flex-1 rounded-lg p-4 backdrop-blur-xl",
                "bg-white/70 dark:bg-neutral-900/70",
                "border border-gray-200/50 dark:border-white/10",
                "shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]",
                "hover:shadow-[0_10px_36px_rgba(0,0,0,0.15)] transition-all duration-300"
              )}
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-green-500 dark:text-green-500">
                {event.year}
              </span>
              <h3 className="mt-1 text-lg font-semibold text-gray-900 dark:text-white">
                {event.title}
              </h3>
             {event.description !== "languages" && (
  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
    {event.description}
  </p>
  
)}
   {event?.year == "Languages" && (
  <div className="mt-3 space-y-3">
   
    <div>
      <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400">
        <span>English</span>
        <span>7 / 10</span>
      </div>
      <div className="h-2 rounded-full bg-gray-200 dark:bg-white/10">
        <div className="h-2 w-[70%] rounded-full bg-green-500" />
      </div>
    </div>

    {/* Hindi */}
    <div>
      <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400">
        <span>Hindi</span>
        <span>9 / 10</span>
      </div>
      <div className="h-2 rounded-full bg-gray-200 dark:bg-white/10">
        <div className="h-2 w-[90%] rounded-full bg-green-500" />
      </div>
    </div>
  </div>
)}
            </div>
          </div>
        ))}
      </div>
   

    </div>
  );
};