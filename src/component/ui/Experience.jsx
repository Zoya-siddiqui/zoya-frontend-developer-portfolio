import { cn } from "../../lib/utils";

/**
 * Modern Glassmorphism Timeline
 * - Vertical timeline with glowing nodes
 * - Glassy cards for content
 * - Dark/Light theme support
 */
export const Experience = () => {
 const events = [
  {
    year: "Aug 2024 – Dec 2025",
    company: "Diamondore Consulting Pvt. Ltd.",
    location: "Noida, Uttar Pradesh · On-site",
    role: "Frontend Developer (On-roll)",
    logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAWCAMAAADkSAzAAAAANlBMVEVHcEwOFzcVIk8WI1ITIEoUIU0WI1AUIk0RHUIVIk8WJFIWJFMXJVQMEy4WI1EWJFIWI1AWJFLTiVZLAAAAEnRSTlMAD09cNiZsQBsvrNn/Bpbwf8MuiJd/AAAAxUlEQVR4AWIgDwAaowsEgUEYAIKLBE8K/3/sCfRcp8UdHK98OE7qI5JeW1MuRWpNqSUfUugjI9ykUhRchVZAeh7uw/z+JHTBoF0cgpYiYjV7H0IaNue0sc6wGVWLxNDSNGtrjWs8aWyFY7KFBqzOR3fjypCGsjnl8AWAC3REDhEODQDZoE82jWZR2XajCaFzQ8qOAQ+w0ItXZ80AFIEyWcInBpAhaUh8IMGu6R0REsYXE6Co5slXnt1ac/nx4V2s/EiF/3oEvvgGPGKeDOkAAAAASUVORK5CYII=", // add logo in public folder
    description:
      "Working as a Frontend Developer on live client projects. Responsible for building responsive user interfaces, collaborating with clients, and handling projects from design to deployment. Gained hands-on experience in end-to-end project delivery, live production deployments, and domain & hosting management using GoDaddy.",
  },
  {
    year: "Jan 2024 – Jul 2024",
    company: "Diamondore Consulting Pvt. Ltd.",
    location: "Noida, Uttar Pradesh · On-site",
    role: "Frontend Developer Intern",
    logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAWCAMAAADkSAzAAAAANlBMVEVHcEwOFzcVIk8WI1ITIEoUIU0WI1AUIk0RHUIVIk8WJFIWJFMXJVQMEy4WI1EWJFIWI1AWJFLTiVZLAAAAEnRSTlMAD09cNiZsQBsvrNn/Bpbwf8MuiJd/AAAAxUlEQVR4AWIgDwAaowsEgUEYAIKLBE8K/3/sCfRcp8UdHK98OE7qI5JeW1MuRWpNqSUfUugjI9ykUhRchVZAeh7uw/z+JHTBoF0cgpYiYjV7H0IaNue0sc6wGVWLxNDSNGtrjWs8aWyFY7KFBqzOR3fjypCGsjnl8AWAC3REDhEODQDZoE82jWZR2XajCaFzQ8qOAQ+w0ItXZ80AFIEyWcInBpAhaUh8IMGu6R0REsYXE6Co5slXnt1ac/nx4V2s/EiF/3oEvvgGPGKeDOkAAAAASUVORK5CYII=",
    description:
      "Completed a 6-month frontend development internship, working on real-world projects under senior developers. Learned client communication, requirement analysis, UI development, and deployment workflows. Actively contributed to live projects and gained practical exposure to professional development environments.",
  },
];


  return (
    <div className="relative max-w-3xl mx-auto py-12 px-4">
          <h1 className="text-4xl md:text-5xl text-white mb-6 px-4 font-extrabold uppercase">Experience</h1>

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

  {/* Company row */}
  <div className="flex items-center gap-3 mt-2">
    <img
      src={event.logo}
      alt={event.company}
      className="h-10 w-10 rounded-full object-contain bg-white p-1"
    />
    <div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        {event.company}
      </h3>
      <p className="text-xs text-gray-500 dark:text-gray-400">
        {event.location}
      </p>
    </div>
  </div>

  {/* Role */}
  <p className="mt-2 text-sm font-medium text-gray-800 dark:text-gray-200">
    {event.role}
  </p>

  {/* Description */}
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