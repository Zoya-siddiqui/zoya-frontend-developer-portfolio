'use client'
import React, { useState } from 'react'
import { Menu, MenuItem } from './ui/navbar-menu';
import { cn } from '../lib/utils';
import { ShimmerButton } from './ui/shimmer';
import cv from '../assets/zoya.pdf'



const Navbar = () => {
    const [active, setActive] = useState(null);

    const scrollToSection = (id) => {
        console.log(id)
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
  });
};
const downloadResume = () => {
  const link = document.createElement("a");
  link.href = cv;
  link.download = "Zoya_Resume.pdf";
    window.open(cv, "_blank", "noopener,noreferrer");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

    return (
        <div  className="relative w-full flex items-center justify-center">
            
                <div
                    className={cn("fixed top-10 inset-x-0 max-w-md mx-auto z-50 ")}
                    >
                    {/* <ShimmerButton className="mx-auto"> */}
                    <Menu setActive={setActive} className="z-80">
                        
                        <MenuItem setActive={setActive} active={active} item="Home" onClick={() => scrollToSection("home")}>
                      
                        </MenuItem>
                        <MenuItem setActive={setActive} active={active} item="About" onClick={() => scrollToSection("about")}>
                          
                        </MenuItem>
                    <MenuItem
  setActive={setActive}
  active={active}
  item="Resume"
  onClick={downloadResume}
>
</MenuItem>

                           <MenuItem setActive={setActive} active={active} item="Portfolio"onClick={() => scrollToSection("portfolio")}>
                          
                        </MenuItem>

                           <MenuItem className="border border-white/10" setActive={setActive} active={active} item="Hire Me" onClick={() => scrollToSection("contact")}>
                          
                        </MenuItem>
                    </Menu>
{/* </ShimmerButton> */}
                </div>
           
        </div>
    )
}

export default Navbar
