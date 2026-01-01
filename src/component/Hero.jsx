import React from "react";
import PixelBlast from "./ui/pixelbg";
import { Meteors } from "./ui/heroui";
import { ShimmerButton } from "./ui/shimmer";
import { ShinyButton } from "./ui/shinybutton";
import cv from '../assets/zoya.pdf'

const Hero = () => {
    const stats = [
    {
      value: "+1.5",
      label: "Years of\nExperience",
    },
    {
      value: "+20",
      label: "Projects\nCompleted",
    },
    {
      value: "+2",
      label: "Ongoing\nProjects",
    },
  ]

  return (
    <div id="home" className="relative top-0 min-h-screen bg-neutral-900 flex justify-center items-center overflow-hidden">


      <div className="absolute inset-0">
        <Meteors number={30} />
      </div>

      <div className="relative z-40 flex flex-col items-center text-center text-white mt-20 px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-2 ">
          Hi, I’m <span >Zoya</span>
        </h1>
        <h1 className="text-white/20 backagrount-transparent backdrop-blur text-4xl font-extrabold mb-4">
          FRONTEND DEVELOPER
        </h1>

        <p className="max-w-2xl text-lg md:text-lg text-white/60 mb-8">
          Frontend Developer crafting <span className="text-white font-medium">interactive, responsive </span>
          web experiences using <span className="text-white font-medium">React, Next.js, JavaScript , Tailwind CSS </span>
          &  <span className="text-white font-medium"> Typescript</span>.
        </p>
  <section className=" py-4 mb-6">
      <div className="mx-auto  px-6">
        <div className="grid grid-cols-3 gap-10 text-center sm:grid-cols-3">
          {stats.map((stat, index) => (
            <div key={index}>
              <h2 className="text-4xl font-bold text-white">
                {stat.value}
              </h2>
              <p className="mt-2 whitespace-pre-line text-xs uppercase tracking-widest text-white/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

        <ShimmerButton   onClick={() => {
    const link = document.createElement("a");
    link.href = cv;
    link.download = "Zoya_Resume.pdf";
    link.click();
      window.open(cv, "_blank", "noopener,noreferrer");
  }}>
       <a
  href={cv}
  download="Zoya_Resume.pdf"
  className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur shadow-xl px-6 py-3 text-sm md:text-base font-semibold text-white transition"
>
  Download Resume
</a>

        </ShimmerButton>
       
      </div>
    </div>
  );
};

export default Hero;
