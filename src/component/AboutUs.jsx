import React from "react";
import { Phone, Mail, Github, Linkedin, User } from "lucide-react";

const AboutUs = () => {
  return (
    <section className=" text-white py-10 md:py-20 px-6" id="about">
      <div className="max-w-5xl mx-auto   items-center">
     
       
   
          <h2 className="text-5xl md:text-6xl font-extrabold uppercase mb-4">
            About <span className="text-white/20 backagrount-transparent backdrop-blur text-5xl md:text-6xl font-extrabold mb-4">Me</span>
          </h2>

          <p className="text-neutral-300 leading-relaxed mb-6">
            Hi, I’m <span className="text-white font-medium">Zoya</span>, a
            frontend developer passionate about building
            <span className="text-white font-medium">
              {" "}interactive, responsive, and user-friendly web applications
            </span>.
            I work primarily with <span className="text-white font-medium">
              React, Next.js, JavaScript
            </span>, and
            <span className="text-white font-medium"> Tailwind CSS</span>.
          </p>

          <p className="text-neutral-400 mb-8">
            I enjoy transforming ideas into clean UI experiences, focusing on
            performance, accessibility, and modern design. I’m constantly
            learning and improving my skills by building real-world projects
            and experimenting with new technologies.
          </p>

      
          <div className="grid grid-cols-2 md:text-md text-xs gap-y-4 mx-auto">
            <div className="flex items-center gap-3 text-neutral-300">
              <Phone size={18} className="text-green-400" />
              <span>+91 9811839410</span>
            </div>

            <div className="flex items-center gap-3 text-neutral-300">
              <Mail size={18} className="text-green-400" />
              <span>zoyas3423@gmail.com</span>
            </div>


            <div className="flex items-center gap-3 text-neutral-300">
              <a
                href="https://github.com/Zoya-siddiqui"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-neutral-300 hover:text-white transition"
              >
                <Github size={20} className="text-green-400"/>
                GitHub
              </a>

            
            </div>

              <div className="flex items-center gap-3 text-neutral-300">
            

              <a
                href="https://www.linkedin.com/in/zoya-siddiqui-5b598331a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                className="flex items-center gap-2 text-neutral-300 hover:text-white transition"
              >
                <Linkedin size={20} className="text-green-400" />
                LinkedIn
              </a>
            </div>
          </div>
    

      </div>
    </section>
  );
};

export default AboutUs;
