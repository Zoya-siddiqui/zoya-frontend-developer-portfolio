"use client"

import React from "react"

import { useState } from "react"
import { ArrowUpRight, Calendar } from "lucide-react"
import { Phone, Mail, Github, Linkedin, User } from "lucide-react";
import { ShimmerButton } from "./shimmer";


export function LetsWorkTogether() {
    const [isHovered, setIsHovered] = useState(false)
    const [isClicked, setIsClicked] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)
    const [isButtonHovered, setIsButtonHovered] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()
        setIsClicked(true)

        setTimeout(() => {
            setShowSuccess(true)
        }, 500)
    }

    const handleBookCall = () => {
        window.open("https://cal.com/jatin-yadav05/15min", "_blank")
    }

    return (
        <section className="flex h-[90vh] py-8 items-center justify-center px-6">
            <div className="relative flex flex-col items-center gap-12">
                <div
                    className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{
                        opacity: showSuccess ? 1 : 0,
                        transform: showSuccess ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)",
                        pointerEvents: showSuccess ? "auto" : "none",
                    }}
                >
                    {/* Elegant heading */}
                    <div className="flex flex-col items-center gap-2">
                        <span
                            className="text-xs font-medium tracking-[0.3em] uppercase text-gray-100 transition-all duration-500"
                            style={{
                                transform: showSuccess ? "translateY(0)" : "translateY(10px)",
                                opacity: showSuccess ? 1 : 0,
                                transitionDelay: "100ms",
                            }}
                        >
                            Perfect
                        </span>
                        <h3
                            className="text-3xl font-light tracking-tight text-white transition-all duration-500 sm:text-6xl"
                            style={{
                                transform: showSuccess ? "translateY(0)" : "translateY(10px)",
                                opacity: showSuccess ? 1 : 0,
                                transitionDelay: "200ms",
                            }}
                        >
                            Let's talk
                        </h3>
                    </div>

                    <div className="flex  gap-x-4  items-center ">

                    <span
                        className="text-sm flex tracking-widest items-center uppercase text-gray-100/50 transition-all duration-500"
                        style={{
                            transform: showSuccess ? "translateY(0)" : "translateY(10px)",
                            opacity: showSuccess ? 1 : 0,
                            transitionDelay: "450ms",
                        }}
                    >
                       <Phone className="text-green-600"/> <p>+91 9811839410</p>
                    </span>
               

                 <span
                        className="text-sm flex items-center  gap-x-2 tracking-widest uppercase text-gray-100/50 transition-all duration-500"
                        style={{
                            transform: showSuccess ? "translateY(0)" : "translateY(10px)",
                            opacity: showSuccess ? 1 : 0,
                            transitionDelay: "450ms",
                        }}
                    >
                    <Mail className="text-green-600"/> <p>zoyas3423@gmail.com</p> 
                    </span>
                    </div>
<ShimmerButton  onClick={() => {
    window.open(
      "https://wa.me/919811839410",
      "_blank",
      "noopener,noreferrer"
    );
  }}>
                        <a
                        className="text-md flex tracking-widest items-center px-2 py-2 gap-x-2  uppercase text-gray-100/50 transition-all duration-500"
                        style={{
                            transform: showSuccess ? "translateY(0)" : "translateY(10px)",
                            opacity: showSuccess ? 1 : 0,
                            transitionDelay: "480ms",
                        }}
                    >
                       <img src="https://cdn-icons-png.freepik.com/512/12635/12635043.png"  className="text-green-600 w-10"/> <p>Let's Connect</p>
                    </a>
               </ShimmerButton>
                   
                </div>

                <div
                    className="flex items-center gap-3 transition-all duration-500"
                    style={{
                        opacity: isClicked ? 0 : 1,
                        transform: isClicked ? "translateY(-20px)" : "translateY(0)",
                        pointerEvents: isClicked ? "none" : "auto",
                    }}
                >
                    <span className="relative flex size-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                    </span>
                    <span className="text-sm font-medium tracking-widest uppercase text-gray-100">
                        Available for projects
                    </span>
                </div>

                <div
                    className="group relative cursor-pointer"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={(e) => handleClick(e)}
                    style={{
                        pointerEvents: isClicked ? "none" : "auto",
                    }}
                >
                    <div className="flex flex-col items-center gap-6">
                        <h2
                            className="relative text-center text-5xl font-light tracking-tight text-white sm:text-6xl md:text-7xl lg:text-7xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                            style={{
                                opacity: isClicked ? 0 : 1,
                                transform: isClicked ? "translateY(-40px) scale(0.95)" : "translateY(0) scale(1)",
                            }}
                        >
                            <span className="block overflow-hidden">
                                <span
                                    className="block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                                    style={{
                                        transform: isHovered && !isClicked ? "translateY(-8%)" : "translateY(0)",
                                    }}
                                >
                                    Let's work
                                </span>
                            </span>
                            <span className="block overflow-hidden">
                                <span
                                    className="block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-75"
                                    style={{
                                        transform: isHovered && !isClicked ? "translateY(-8%)" : "translateY(0)",
                                    }}
                                >
                                    <span className="text-gray-100/60">together</span>
                                </span>
                            </span>
                        </h2>

                        <div className="relative mt-4 flex size-16 items-center justify-center sm:size-18">
                            <div
                                className="pointer-events-none absolute inset-0 rounded-full border transition-all ease-out"
                                style={{
                                    borderColor: isClicked ? "#ffff" : isHovered ? "#dad4d4" : "white",
                                    backgroundColor: isClicked ? "transparent" : isHovered ? "var(--foreground)" : "transparent",
                                    transform: isClicked ? "scale(3)" : isHovered ? "scale(1.1)" : "scale(1)",
                                    opacity: isClicked ? 0 : 1,
                                    transitionDuration: isClicked ? "700ms" : "500ms",
                                }}
                            />
                            <ArrowUpRight
                                className="size-6 transition-all ease-[cubic-bezier(0.16,1,0.3,1)] sm:size-7"
                                style={{
                                    transform: isClicked
                                        ? "translate(100px, -100px) scale(0.5)"
                                        : isHovered
                                            ? "translate(2px, -2px)"
                                            : "translate(0, 0)",
                                    opacity: isClicked ? 0 : 1,
                                    color: isHovered && !isClicked ? "#dfd3d3" : "white",
                                    transitionDuration: isClicked ? "600ms" : "500ms",
                                }}
                            />
                        </div>
                    </div>

                    <div className="absolute -left-8 top-1/2 -translate-y-1/2 sm:-left-16">
                        <div
                            className="h-px w-8 bg-border transition-all duration-500 sm:w-12"
                            style={{
                                transform: isClicked ? "scaleX(0) translateX(-20px)" : isHovered ? "scaleX(1.5)" : "scaleX(1)",
                                opacity: isClicked ? 0 : isHovered ? 1 : 0.5,
                            }}
                        />
                    </div>
                    <div className="absolute -right-8 top-1/2 -translate-y-1/2 sm:-right-16">
                        <div
                            className="h-px w-8 bg-border transition-all duration-500 sm:w-12"
                            style={{
                                transform: isClicked ? "scaleX(0) translateX(20px)" : isHovered ? "scaleX(1.5)" : "scaleX(1)",
                                opacity: isClicked ? 0 : isHovered ? 1 : 0.5,
                            }}
                        />
                    </div>
                </div>

                <div
                    className=" flex flex-col items-center gap-4 text-center transition-all duration-500 delay-100"
                    style={{
                        opacity: isClicked ? 0 : 1,
                        transform: isClicked ? "translateY(20px)" : "translateY(0)",
                        pointerEvents: isClicked ? "none" : "auto",
                    }}
                >
                    <p className="max-w-md text-sm leading-relaxed text-gray-300">
                        Have a project in mind? I'd love to hear about it. Let's create something exceptional together.
                    </p>

                </div>
            </div>
        </section>
    )
}
