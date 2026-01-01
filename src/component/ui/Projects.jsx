import { cn } from "../../lib/utils";

/**
 * Modern Glassmorphism Timeline
 * - Vertical timeline with glowing nodes
 * - Glassy cards for content
 * - Dark/Light theme support
 */
export const Projects = () => {
  const events = [
    {
      year: "2021",
      title: "Founded yourThing",
      description: "The project started with a small passionate team.",
    },
    {
      year: "2022",
      title: "Launch v1.0",
      description: "Released our first public version with core features.",
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Scaled to thousands of users in over 40 countries.",
    },
    {
      year: "2024",
      title: "New Horizons",
      description: "Introduced AI-powered features and deeper integrations.",
    },
  ];

  return (
    <div className="relative max-w-3xl mx-auto py-12 px-4">
          <h1 className="text-xl text-white mb-6 px-4">Projects</h1>

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

            {/* Content Card */}
            <div
              className={cn(
                "flex-1 rounded-lg p-4 backdrop-blur-xl",
                "bg-white/70 dark:bg-neutral-900/70",
                "border border-gray-200/50 dark:border-white/10",
                "shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]",
                "hover:shadow-[0_10px_36px_rgba(0,0,0,0.15)] transition-all duration-300"
              )}
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
                {event.year}
              </span>
              <h3 className="mt-1 text-lg font-semibold text-gray-900 dark:text-white">
                {event.title}
              </h3>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};