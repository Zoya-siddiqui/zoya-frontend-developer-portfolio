"use client"

import React, { forwardRef, useRef } from "react"

import { cn } from "../lib/utils"
import { AnimatedBeam } from "./ui/beam"
import { ShimmerButton } from "./ui/shimmer"


const Circle = forwardRef(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex flex-col md:flex-row size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  )
})

Circle.displayName = "Circle"

export function Skills() {
  const containerRef = useRef(null)
  const div1Ref = useRef(null)
  const div2Ref = useRef(null)
  const div3Ref = useRef(null)
  const div4Ref = useRef(null)
  const div5Ref = useRef(null)
  const div6Ref = useRef(null)
  const div7Ref = useRef(null)

  return (
    <div  className="relative flex flex-col md:flex-row md:max-w-5xl px-6  gap-x-8  mx-auto w-full items-center justify-center overflow-hidden py-20">

<div className="w-full">
<h1 className=" text-5xl md:text-6xl  w-full font-extrabold text-white uppercase">MY
  <span className="text-white/20 backagrount-transparent backdrop-blur text-5xl  md:text-6xl font-extrabold "> Skill's</span>
</h1>


  <ul className="mt-4 space-y-2 text-sm flex flex-wrap text-gray-200 gap-x-2 w-full">
    <ShimmerButton>
  <li className="rounded-full px-3 py-1 
  bg-white/10 
  backdrop-blur-md 
  border border-white/20 
  text-white
  shadow-lg">
  HTML5
</li>
</ShimmerButton>

    <ShimmerButton>

    <li className="rounded-full px-3 py-1 
  bg-white/10 
  backdrop-blur-md 
  border border-white/20 
  text-white
  shadow-lg"> CSS3 </li>
  </ShimmerButton>

    <ShimmerButton>

    <li className="rounded-full px-3 py-1 
  bg-white/10 
  backdrop-blur-md 
  border border-white/20 
  text-white
  shadow-lg">Tailwind CSS </li> </ShimmerButton>

    <ShimmerButton>

    <li className="rounded-full px-3 py-1 
  bg-white/10 
  backdrop-blur-md 
  border border-white/20 
  text-white
  shadow-lg"> Bootstrap</li> </ShimmerButton>

    <ShimmerButton>
  
    <li className="rounded-full px-3 py-1 
  bg-white/10 
  backdrop-blur-md 
  border border-white/20 
  text-white
  shadow-lg"> JavaScript (ES6+) </li>
  </ShimmerButton>


    <ShimmerButton>

    <li  className="rounded-full px-3 py-1 
  bg-white/10 
  backdrop-blur-md 
  border border-white/20 
  text-white
  shadow-lg"> React JS</li>
  </ShimmerButton>

    <ShimmerButton>

    <li className="rounded-full px-3 py-1 
  bg-white/10 
  backdrop-blur-md 
  border border-white/20 
  text-white
  shadow-lg"> Redux </li>

  </ShimmerButton>

    <ShimmerButton>

    <li className="rounded-full px-3 py-1 
  bg-white/10 
  backdrop-blur-md 
  border border-white/20 
  text-white
  shadow-lg"> TypeScript</li>
  </ShimmerButton>

    <ShimmerButton>

    <li className="rounded-full px-3 py-1 
  bg-white/10 
  backdrop-blur-md 
  border border-white/20 
  text-white
  shadow-lg"> Next.js</li>
  </ShimmerButton>

    <ShimmerButton>

    <li className="rounded-full px-3 py-1 
  bg-white/10 
  backdrop-blur-md 
  border border-white/20 
  text-white
  shadow-lg"> API integration</li> 
  </ShimmerButton>

    <ShimmerButton>

    <li className="rounded-full px-3 py-1 
  bg-white/10 
  backdrop-blur-md 
  border border-white/20 
  text-white
  shadow-lg"> Smooth UI animations using Framer-motion</li> </ShimmerButton>
  </ul>
</div>


    <div
      className="relative flex w-full w-full items-center justify-center overflow-hidden p-10"
      ref={containerRef}
    >
      <div className="flex size-full max-h-[200px] max-w-lg flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref}>
            <Icons.ReactLight />
          </Circle>
          <Circle ref={div5Ref}>
            <Icons.Typescript />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref}>
            <Icons.Javascript />
          </Circle>
          <Circle ref={div4Ref} className="size-16">
            <Icons.Github />
          </Circle>
          <Circle ref={div6Ref}>
            <Icons.HtmlSolid />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref}>
            <Icons.Css3 />
          </Circle>
          <Circle ref={div7Ref}>
            <Icons.Nextjs />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
    </div>
    </div>
  )
}

const Icons = {

 ReactLight:(props)=>( 

    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 27"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M15.902 11.974a2.41 2.41 0 1 1-4.82 0a2.41 2.41 0 0 1 4.82 0"
      ></path>
      <path
        fill="currentColor"
        d="M13.491 17.494a27.3 27.3 0 0 1-8.749-1.206l.193.051a10.9 10.9 0 0 1-3.541-1.903l.021.016a3.41 3.41 0 0 1-1.41-2.467l-.001-.013c0-1.594 1.747-3.154 4.681-4.172c2.512-.827 5.403-1.304 8.405-1.304l.417.003h-.021a27.5 27.5 0 0 1 8.885 1.334l-.195-.055a11 11 0 0 1 3.433 1.814l-.024-.018a3.27 3.27 0 0 1 1.386 2.387l.001.013c0 1.656-1.954 3.332-5.103 4.374c-2.363.729-5.08 1.149-7.895 1.149q-.255 0-.508-.005h.025zm0-9.84c-.106-.002-.232-.002-.358-.002c-2.881 0-5.656.452-8.259 1.289l.191-.053c-2.698.941-3.908 2.228-3.908 3.087c0 .893 1.301 2.3 4.153 3.274c2.249.697 4.834 1.099 7.513 1.099q.352 0 .702-.009l-.034.001a26.5 26.5 0 0 0 8.205-1.138l-.187.049c2.96-.984 4.32-2.391 4.32-3.28a2.25 2.25 0 0 0-.966-1.515l-.008-.005a9.8 9.8 0 0 0-2.97-1.574l-.07-.02c-2.368-.766-5.093-1.208-7.92-1.208q-.213 0-.424.003h.021z"
      ></path>
      <path
        fill="currentColor"
        d="m8.023 23.986l-.053.001c-.453 0-.878-.119-1.245-.327l.013.007c-1.378-.8-1.858-3.092-1.28-6.141c.697-3.128 1.827-5.894 3.344-8.4l-.069.124a27.9 27.9 0 0 1 5.425-6.872l.02-.018A11 11 0 0 1 17.365.332l.073-.027c.407-.196.885-.31 1.39-.31c.501 0 .976.113 1.4.314l-.02-.008c1.435.826 1.911 3.36 1.238 6.606c-.72 2.967-1.818 5.58-3.262 7.959l.07-.123c-1.452 2.63-3.209 4.882-5.266 6.819l-.014.013a10.9 10.9 0 0 1-3.321 2.082l-.074.026c-.46.181-.992.292-1.549.305h-.006zM9.228 9.539l.499.288c-1.381 2.28-2.465 4.926-3.106 7.74l-.034.18c-.533 2.809-.019 4.498.72 4.926c.191.102.417.161.657.161l.061-.001h-.003c.955 0 2.458-.605 4.196-2.122a26.4 26.4 0 0 0 4.972-6.404l.068-.135a26 26 0 0 0 3.025-7.307l.038-.182c.629-3.058.086-4.93-.686-5.378a2.25 2.25 0 0 0-1.814.092l.013-.006a9.9 9.9 0 0 0-2.907 1.846l.007-.006a26.6 26.6 0 0 0-5.136 6.468l-.069.132z"
      ></path>
      <path
        fill="currentColor"
        d="M18.96 24c-1.306 0-2.96-.787-4.69-2.276a27.8 27.8 0 0 1-5.464-6.834l-.072-.137c-1.43-2.349-2.551-5.075-3.215-7.975l-.036-.185a10.8 10.8 0 0 1-.255-2.357q0-.79.108-1.551l-.007.058A3.27 3.27 0 0 1 6.701.344l.01-.007c1.43-.83 3.865.024 6.342 2.228a27.9 27.9 0 0 1 5.118 6.54l.072.138a26.8 26.8 0 0 1 3.242 7.798l.038.186c.163.709.257 1.524.257 2.36q0 .866-.13 1.696l.008-.062a3.42 3.42 0 0 1-1.429 2.456l-.011.007a2.44 2.44 0 0 1-1.207.316l-.054-.001h.003zm-9.228-9.823a27 27 0 0 0 5.271 6.656l.02.018c2.166 1.863 3.884 2.266 4.628 1.834c.773-.446 1.339-2.276.754-5.233c-.702-2.89-1.787-5.434-3.219-7.741l.065.112a26.8 26.8 0 0 0-4.948-6.384l-.012-.011C9.957 1.354 8.066.888 7.293 1.334a2.23 2.23 0 0 0-.825 1.593v.007a9.9 9.9 0 0 0 .162 3.499l-.013-.066c.673 2.952 1.747 5.559 3.182 7.924l-.066-.117z"
      ></path>
    </svg>
  )
,
Javascript:(props)=> 
   (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <rect width="16.5" height="16.5" x="3.75" y="3.75" rx="2"></rect>
        <path d="M11.5 11.25v5a1 1 0 0 1-1 1H9m8.25-6h-2a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-2"></path>
      </g>
    </svg>
  )
,

 Github:(props) =>
(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 25"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12.301 0h.093c2.242 0 4.34.613 6.137 1.68l-.055-.031a12.35 12.35 0 0 1 4.449 4.422l.031.058a12.2 12.2 0 0 1 1.654 6.166c0 5.406-3.483 10-8.327 11.658l-.087.026a.72.72 0 0 1-.642-.113l.002.001a.62.62 0 0 1-.208-.466v-.014v.001l.008-1.226q.008-1.178.008-2.154a2.84 2.84 0 0 0-.833-2.274a11 11 0 0 0 1.718-.305l-.076.017a6.5 6.5 0 0 0 1.537-.642l-.031.017a4.5 4.5 0 0 0 1.292-1.058l.006-.007a4.9 4.9 0 0 0 .84-1.645l.009-.035a7.9 7.9 0 0 0 .329-2.281l-.001-.136v.007l.001-.072a4.73 4.73 0 0 0-1.269-3.23l.003.003c.168-.44.265-.948.265-1.479a4.25 4.25 0 0 0-.404-1.814l.011.026a2.1 2.1 0 0 0-1.31.181l.012-.005a8.6 8.6 0 0 0-1.512.726l.038-.022l-.609.384c-.922-.264-1.981-.416-3.075-.416s-2.153.152-3.157.436l.081-.02q-.256-.176-.681-.433a9 9 0 0 0-1.272-.595l-.066-.022A2.17 2.17 0 0 0 5.837 5.1l.013-.002a4.2 4.2 0 0 0-.393 1.788c0 .531.097 1.04.275 1.509l-.01-.029a4.72 4.72 0 0 0-1.265 3.303v-.004l-.001.13c0 .809.12 1.591.344 2.327l-.015-.057c.189.643.476 1.202.85 1.693l-.009-.013a4.4 4.4 0 0 0 1.267 1.062l.022.011c.432.252.933.465 1.46.614l.046.011c.466.125 1.024.227 1.595.284l.046.004c-.431.428-.718 1-.784 1.638l-.001.012a3 3 0 0 1-.699.236l-.021.004c-.256.051-.549.08-.85.08h-.066h.003a1.9 1.9 0 0 1-1.055-.348l.006.004a2.84 2.84 0 0 1-.881-.986l-.007-.015a2.6 2.6 0 0 0-.768-.827l-.009-.006a2.3 2.3 0 0 0-.776-.38l-.016-.004l-.32-.048a1.05 1.05 0 0 0-.471.074l.007-.003q-.128.072-.08.184q.058.128.145.225l-.001-.001q.092.108.205.19l.003.002l.112.08c.283.148.516.354.693.603l.004.006c.191.237.359.505.494.792l.01.024l.16.368c.135.402.38.738.7.981l.005.004c.3.234.662.402 1.057.478l.016.002c.33.064.714.104 1.106.112h.007q.069.002.15.002q.392 0 .767-.062l-.027.004l.368-.064q0 .609.008 1.418t.008.873v.014c0 .185-.08.351-.208.466h-.001a.72.72 0 0 1-.645.111l.005.001C3.486 22.286.006 17.692.006 12.285c0-2.268.612-4.393 1.681-6.219l-.032.058a12.35 12.35 0 0 1 4.422-4.449l.058-.031a11.9 11.9 0 0 1 6.073-1.645h.098h-.005zm-7.64 17.666q.048-.112-.112-.192q-.16-.048-.208.032q-.048.112.112.192q.144.096.208-.032m.497.545q.112-.08-.032-.256q-.16-.144-.256-.048q-.112.08.032.256q.159.157.256.047zm.48.72q.144-.112 0-.304q-.128-.208-.272-.096q-.144.08 0 .288t.272.112m.672.673q.128-.128-.064-.304q-.192-.192-.32-.048q-.144.128.064.304q.192.192.32.044zm.913.4q.048-.176-.208-.256q-.24-.064-.304.112t.208.24q.24.097.304-.096m1.009.08q0-.208-.272-.176q-.256 0-.256.176q0 .208.272.176q.256.001.256-.175zm.929-.16q-.032-.176-.288-.144q-.256.048-.224.24t.288.128t.225-.224z"
      ></path>
    </svg>
  )


,

HtmlSolid:(props)=> 
   (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="currentColor"
        d="m3 2l1.578 17.824L12 22l7.467-2.175L21 2zm14.049 6.048H9.075l.172 2.016h7.697l-.626 6.565l-4.246 1.381l-4.281-1.455l-.288-2.932h2.024l.16 1.411l2.4.815l2.346-.763l.297-3.005H7.416l-.562-6.05h10.412z"
      ></path>
    </svg>
  )
,
Css3:(props) =>
(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="#1572B6"
        d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754l-45.243 12.543l-45.119-12.526z"
      ></path>
      <path
        fill="#33A9DC"
        d="m64.001 117.062l36.559-10.136l8.601-96.354h-45.16v106.49z"
      ></path>
      <path
        fill="#fff"
        d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711l-3.4 38.114h-30.95V51.429z"
      ></path>
      <path
        fill="#EBEBEB"
        d="m64.083 87.349l-.061.018l-15.403-4.159l-.985-11.031H33.752l1.937 21.717l28.331 7.863l.063-.018v-14.39z"
      ></path>
      <path
        fill="#fff"
        d="m81.127 64.675l-1.666 18.522l-15.426 4.164v14.39l28.354-7.858l.208-2.337l2.406-26.881H81.127z"
      ></path>
      <path
        fill="#EBEBEB"
        d="M64.048 23.435v13.831H30.64l-.277-3.108l-.63-7.012l-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108l-.631-7.012l-.33-3.711h16.447z"
      ></path>
    </svg>
  )
,
Typescript:(props)=> 
(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}
    >
      <g fill="none">
        <rect width="256" height="256" fill="#007ACC" rx="60"></rect>
        <path
          fill="#fff"
          d="m56.611 128.849l-.081 10.484h33.32v94.679h23.569v-94.679h33.32v-10.281c0-5.689-.121-10.443-.284-10.565c-.122-.162-20.399-.244-44.983-.203l-44.739.122zm149.956-10.741c6.501 1.626 11.459 4.511 16.01 9.224c2.357 2.52 5.851 7.112 6.136 8.209c.081.325-11.053 7.802-17.798 11.987c-.244.163-1.22-.894-2.317-2.519c-3.291-4.795-6.745-6.868-12.028-7.233c-7.761-.529-12.759 3.535-12.718 10.321c0 1.991.284 3.169 1.097 4.795c1.706 3.535 4.876 5.648 14.832 9.955c18.326 7.884 26.168 13.085 31.045 20.48c5.445 8.249 6.664 21.415 2.966 31.208c-4.063 10.646-14.141 17.879-28.323 20.277c-4.388.772-14.791.65-19.504-.203c-10.281-1.829-20.033-6.908-26.047-13.572c-2.357-2.601-6.949-9.387-6.664-9.875c.121-.162 1.178-.812 2.356-1.503c1.138-.65 5.446-3.129 9.509-5.486l7.355-4.267l1.544 2.276c2.154 3.291 6.867 7.802 9.712 9.305c8.167 4.308 19.383 3.698 24.909-1.259c2.357-2.154 3.332-4.389 3.332-7.68c0-2.967-.366-4.267-1.91-6.502c-1.991-2.844-6.054-5.242-17.595-10.24c-13.206-5.689-18.895-9.224-24.096-14.832c-3.007-3.25-5.852-8.452-7.03-12.8c-.975-3.616-1.219-12.678-.447-16.335c2.722-12.759 12.353-21.658 26.25-24.3c4.511-.853 14.994-.528 19.424.569"
        ></path>
      </g>
    </svg>
  )
,

  zapier: () => (
    <svg
      width="105"
      height="28"
      viewBox="0 0 244 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M57.1877 45.2253L57.1534 45.1166L78.809 25.2914V15.7391H44.0663V25.2914H64.8181L64.8524 25.3829L43.4084 45.2253V54.7775H79.1579V45.2253H57.1877Z"
        fill="#201515"
      />
      <path
        d="M100.487 14.8297C96.4797 14.8297 93.2136 15.434 90.6892 16.6429C88.3376 17.6963 86.3568 19.4321 85.0036 21.6249C83.7091 23.8321 82.8962 26.2883 82.6184 28.832L93.1602 30.3135C93.5415 28.0674 94.3042 26.4754 95.4482 25.5373C96.7486 24.5562 98.3511 24.0605 99.9783 24.136C102.118 24.136 103.67 24.7079 104.634 25.8519C105.59 26.9959 106.076 28.5803 106.076 30.6681V31.7091H95.9401C90.7807 31.7091 87.0742 32.8531 84.8206 35.1411C82.5669 37.429 81.442 40.4492 81.4458 44.2014C81.4458 48.0452 82.5707 50.9052 84.8206 52.7813C87.0704 54.6574 89.8999 55.5897 93.3089 55.5783C97.5379 55.5783 100.791 54.1235 103.067 51.214C104.412 49.426 105.372 47.3793 105.887 45.2024H106.27L107.723 54.7546H117.275V30.5651C117.275 25.5659 115.958 21.6936 113.323 18.948C110.688 16.2024 106.409 14.8297 100.487 14.8297ZM103.828 44.6475C102.312 45.9116 100.327 46.5408 97.8562 46.5408C95.8199 46.5408 94.4052 46.1843 93.6121 45.4712C93.2256 45.1338 92.9182 44.7155 92.7116 44.246C92.505 43.7764 92.4043 43.2671 92.4166 42.7543C92.3941 42.2706 92.4702 41.7874 92.6403 41.3341C92.8104 40.8808 93.071 40.4668 93.4062 40.1174C93.7687 39.7774 94.1964 39.5145 94.6633 39.3444C95.1303 39.1743 95.6269 39.1006 96.1231 39.1278H106.093V39.7856C106.113 40.7154 105.919 41.6374 105.527 42.4804C105.134 43.3234 104.553 44.0649 103.828 44.6475Z"
        fill="#201515"
      />
      <path
        d="M175.035 15.7391H163.75V54.7833H175.035V15.7391Z"
        fill="#201515"
      />
      <path
        d="M241.666 15.7391C238.478 15.7391 235.965 16.864 234.127 19.1139C232.808 20.7307 231.805 23.1197 231.119 26.2809H230.787L229.311 15.7391H219.673V54.7775H230.959V34.7578C230.959 32.2335 231.55 30.2982 232.732 28.9521C233.914 27.606 236.095 26.933 239.275 26.933H243.559V15.7391H241.666Z"
        fill="#201515"
      />
      <path
        d="M208.473 17.0147C205.839 15.4474 202.515 14.6657 198.504 14.6695C192.189 14.6695 187.247 16.4675 183.678 20.0634C180.108 23.6593 178.324 28.6166 178.324 34.9352C178.233 38.7553 179.067 42.5407 180.755 45.9689C182.3 49.0238 184.706 51.5592 187.676 53.2618C190.665 54.9892 194.221 55.8548 198.344 55.8586C201.909 55.8586 204.887 55.3095 207.278 54.2113C209.526 53.225 211.483 51.6791 212.964 49.7211C214.373 47.7991 215.42 45.6359 216.052 43.3377L206.329 40.615C205.919 42.1094 205.131 43.4728 204.041 44.5732C202.942 45.6714 201.102 46.2206 198.521 46.2206C195.451 46.2206 193.163 45.3416 191.657 43.5837C190.564 42.3139 189.878 40.5006 189.575 38.1498H216.201C216.31 37.0515 216.367 36.1306 216.367 35.387V32.9561C216.431 29.6903 215.757 26.4522 214.394 23.4839C213.118 20.7799 211.054 18.5248 208.473 17.0147ZM198.178 23.9758C202.754 23.9758 205.348 26.2275 205.962 30.731H189.775C190.032 29.2284 190.655 27.8121 191.588 26.607C193.072 24.8491 195.268 23.972 198.178 23.9758Z"
        fill="#201515"
      />
      <path
        d="M169.515 0.00366253C168.666 -0.0252113 167.82 0.116874 167.027 0.421484C166.234 0.726094 165.511 1.187 164.899 1.77682C164.297 2.3723 163.824 3.08658 163.512 3.87431C163.2 4.66204 163.055 5.50601 163.086 6.35275C163.056 7.20497 163.201 8.05433 163.514 8.84781C163.826 9.64129 164.299 10.3619 164.902 10.9646C165.505 11.5673 166.226 12.0392 167.02 12.3509C167.814 12.6626 168.663 12.8074 169.515 12.7762C170.362 12.8082 171.206 12.6635 171.994 12.3514C172.782 12.0392 173.496 11.5664 174.091 10.963C174.682 10.3534 175.142 9.63077 175.446 8.83849C175.75 8.04621 175.89 7.20067 175.859 6.35275C175.898 5.50985 175.761 4.66806 175.456 3.88115C175.151 3.09424 174.686 2.37951 174.09 1.78258C173.493 1.18565 172.779 0.719644 171.992 0.414327C171.206 0.109011 170.364 -0.0288946 169.521 0.00938803L169.515 0.00366253Z"
        fill="#201515"
      />
      <path
        d="M146.201 14.6695C142.357 14.6695 139.268 15.8764 136.935 18.2902C135.207 20.0786 133.939 22.7479 133.131 26.2981H132.771L131.295 15.7563H121.657V66H132.942V45.3054H133.354C133.698 46.6852 134.181 48.0267 134.795 49.3093C135.75 51.3986 137.316 53.1496 139.286 54.3314C141.328 55.446 143.629 56.0005 145.955 55.9387C150.68 55.9387 154.277 54.0988 156.748 50.419C159.219 46.7392 160.455 41.6046 160.455 35.0153C160.455 28.6509 159.259 23.6689 156.869 20.0691C154.478 16.4694 150.922 14.6695 146.201 14.6695ZM147.345 42.9602C146.029 44.8668 143.97 45.8201 141.167 45.8201C140.012 45.8735 138.86 45.6507 137.808 45.1703C136.755 44.6898 135.832 43.9656 135.116 43.0574C133.655 41.2233 132.927 38.7122 132.931 35.5243V34.7807C132.931 31.5432 133.659 29.0646 135.116 27.3448C136.572 25.625 138.59 24.7747 141.167 24.7937C144.02 24.7937 146.092 25.6994 147.385 27.5107C148.678 29.322 149.324 31.8483 149.324 35.0896C149.332 38.4414 148.676 41.065 147.356 42.9602H147.345Z"
        fill="#201515"
      />
      <path d="M39.0441 45.2253H0V54.789H39.0441V45.2253Z" fill="#FF4F00" />
    </svg>
  ),
Nextjs:(props) =>
(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width="1em"
      height="1em"
      {...props}
    >
      <circle cx="64" cy="64" r="64"></circle>
      <path
        fill="url(#deviconNextjs0)"
        d="M106.317 112.014L49.167 38.4H38.4v51.179h8.614v-40.24l52.54 67.884a64 64 0 0 0 6.763-5.209"
      ></path>
      <path
        fill="url(#deviconNextjs1)"
        d="M81.778 38.4h8.533v51.2h-8.533z"
      ></path>
      <defs>
        <linearGradient
          id="deviconNextjs0"
          x1="109"
          x2="144.5"
          y1="116.5"
          y2="160.5"
          gradientTransform="scale(.71111)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff"></stop>
          <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="deviconNextjs1"
          x1="121"
          x2="120.799"
          y1="54"
          y2="106.875"
          gradientTransform="scale(.71111)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff"></stop>
          <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
        </linearGradient>
      </defs>
    </svg>
  )


}
