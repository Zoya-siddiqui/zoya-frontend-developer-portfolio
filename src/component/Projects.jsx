import React from "react"
import { ArrowUpRight, Calendar } from "lucide-react"
import pilates from '../assets/pilates.png'
import aranyud from '../assets/aranyud.png'
import gitexpo from '../assets/gitexpo.png'
import doclabz from '../assets/doclabz.png'
import { ShimmerButton } from "./ui/shimmer"





const Projects = () => {
    const projects = [
        {
            title: "The Pilates Room",
            subtitle:
                "A full-featured Pilates studio website offering class schedules, membership packages, teacher training programs, and secure online payments with Razorpay. Includes an admin dashboard for complete control.",
            tech: [
                "React",
                "JavaScript",
                "Tailwind CSS",
                "Redux",
                "Razorpay",
                "Admin Dashboard",
            ],
            image: pilates,
            link: "https://thepilatesroom.co.in/membership",
        },
        {
            title: "Aranyud Architects",
            subtitle:
                "An architecture portfolio website designed to showcase projects and services, improving client engagement and business visibility.",
            tech: [
                "React",
                "JavaScript",
                "Tailwind CSS",
                "EmailJS",
                "Domain Integration",
            ],
            image: aranyud,
            link: "https://aranyudarchitects.com/",
        },
        {
            title: "GitHub Profile Explorer",
            subtitle:
                "A developer-focused application to search GitHub users and view their profile details, repositories, and statistics using GitHub public APIs.",
            tech: [
                "React",
                "TypeScript",
                "JavaScript",
                "Tailwind CSS",
                "GitHub API",
            ],
            image: gitexpo,
            link: "#",
        },
        // {
        //     title: "DocLabz",
        //     subtitle:
        //         "A technology services website showcasing offerings, projects, and client solutions with easy meeting scheduling.",
        //     tech: [
        //         "React",
        //         "JavaScript",
        //         "Tailwind CSS",
        //         "Calendly Integration",
        //         "UI/UX Design",
        //     ],
        //     image: doclabz,
        //     link: "https://www.doclabz.com/",
        // },
    ]

    return (
        <section className="relative  py-20 px-6" id="portfolio">

            <div className="relative mx-auto md:max-w-5xl">
                <h2 className="text-5xl md:text-6xl font-extrabold uppercase text-white mb-4">
                    TOP <span className="text-white/20 backagrount-transparent backdrop-blur text-5xl md:text-6xl font-extrabold mb-4">Projects</span>
                </h2>

                {/* Projects list */}
                <div className="space-y-10">
                    {projects.map((project, index) => (
                        <a
                            key={index}
                            href={project.link}
                            target="_blank"
                            className="group flex flex-col md:flex-row items-center justify-between rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition hover:bg-white/10"
                        >
                            {/* Left content */}
                            <div className="flex flex-col md:flex-row items-center gap-5">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-32 max-w-60 rounded-lg object-cover object-top"
                                />

                                <div>
                                    <h3 className="text-lg font-semibold text-white">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-white/60">
                                        {project.subtitle}
                                    </p>
                                </div>

                                <div className="mt-2 flex flex-wrap gap-2">
                                    {project.tech.map((item, i) => (
                                        <ShimmerButton>
                                        <span
                                            key={i}
                                            className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/70 backdrop-blur"
                                        >
                                            {item}
                                        </span>
                                        </ShimmerButton>
                                    ))}
                                </div>

                            </div>

                            {/* Arrow */}
                            <span className="text-xl text-green-500 md:block hidden transition-transform group-hover:translate-x-1">
                                <ArrowUpRight />
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
