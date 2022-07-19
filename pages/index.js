import Image from "next/image";
import { useState } from "react";
import "animate.css";
import ProjectCard from "../components/projectCard";
import Career from "../components/career";

export default function Home() {
  const [slider, setSlider] = useState(1);

  return (
    <div className="h-full w-full overflow-x-hidden relative bg-black">
      <div className="z-30 flex justify-center items-center bg-gradient-to-b from-black to-transparent inset-0 fixed z-10 h-[10vh]">
        <div className="w-3/4 flex flex-row justify-start items-center h-full">
          <img className="h-3/5" src="./logo1.svg" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center h-full space-y-16">
        {/* Hero section */}
        <div className="flex flex-col justify-center items-center h-[115vh] w-3/4 relative">
          <div className="flex flex-row justify-between items-start text-white">
            {/* hero writing part */}
            <div className="flex flex-col w-2/5 justify-center items-start h-full space-y-6">
              <div className="relative flex flex-row justify-start items-center">
                <h1 className="font-bold text-7xl text-zinc-900">
                  Product
                  <br /> Designer
                </h1>
                <div className="absolute left-0 top-8 z-10 flex flex-col justify-center items-start">
                  <h1 className="font-semibold text-xl">Hello, it's me</h1>
                  <h1 className="font-bold text-7xl">
                    Ojieame<span className="text-teal-800">.</span>
                  </h1>
                </div>
              </div>
              <h1 className="text-zinc-500 text-medium break-all font-semibold">
                An enthusiastic product designer currently shaping the future of
                software development by designing smooth user-interfaces that
                promote user interaction with information and data. While
                traveling around the world.
              </h1>
              <a
                href="#skill"
                className="uppercase border-b border-blue-500 text-[12px] w-fit py-2 tracking-[.25rem] cursor-pointer hover:px-1.5 hover:bg-blue-100/20"
              >
                scroll for more
              </a>
            </div>
            {/* hero image */}
            <div className="flex flex-col justify-end items-end flex-1 ">
              <img className="w-4/5" src="./hero_img.jpg" />
            </div>
          </div>
        </div>
        {/* skillset section */}
        <div
          id="skill"
          className="flex flex-row justify-between items-center h-[80vh] w-3/4 text-white space-x-10"
        >
          <div className="w-2/5 flex flex-col space-y-8">
            <h1 className="uppercase text-blue-500 font-semibold tracking-[2px]">
              my skillset
            </h1>
            <h1 className="capatalize font-bold text-4xl">
              Graphic Design, Interface Design & User Experience
            </h1>
            <a
              href="#process"
              className="uppercase border-b border-blue-500 text-[12px] w-fit py-2 tracking-[2px] cursor-pointer hover:px-1.5 hover:bg-blue-100/20"
            >
              my process
            </a>
          </div>
          <div className="w-1/2  break-all">
            <h1 className="text-lg text-zinc-500">
              I specialize in building complex web applications, leading
              front-end teams, digital product design and developing visual
              design systems. I enjoy creating effortless user experience and
              designing delightful digital products. The entire process of going
              from a concept to release and gathering user&apos;s feedback on
              either client&apos;s or my own products is what makes me wake up
              everyday!
              <br />I worked with numerous clients from all around the world
              from early startups to well-established companies. I always seek
              new opportunities for cooperation on projects around interesting
              dashboards, design systems or landing pages. Let&apos;s create
              something awesome together!
            </h1>
          </div>
        </div>
        {/* process */}
        <div
          id="process"
          className="flex flex-row justify-between items-start w-3/4 text-white"
        >
          <div className="flex flex-col space-y-16 w-4/5">
            <div className="flex flex-row justify-start items-center space-x-2 font-bold text-4xl">
              <h1 className="capitalize">process</h1>
              <span className="text-blue-500">+</span>
            </div>
            {/* grid process */}
            <div className="grid grid-cols-3 gap-y-16 text-white w-full">
              <div className="flex flex-col space-y-8">
                <div className="relative flex justify-center items-center">
                  <h1 className="absolute z-0 -left-8 text-zinc-800 text-7xl font-bold">
                    01
                  </h1>
                  <h1 className="absolute left-0 z-10 text-2xl font-bold">
                    Pre-Process
                  </h1>
                </div>
                <div className="flex flex-col space-y-3 capitalize">
                  <h1>Collect Informations</h1>
                  <h1>Personas</h1>
                  <h1>SetUp Goals</h1>
                  <h1>Project Folder + Moodboard</h1>
                </div>
              </div>
              <div className="flex flex-col space-y-8">
                <div className="relative flex justify-center items-center">
                  <h1 className="absolute z-0 -left-8 text-zinc-800 text-7xl font-bold">
                    02
                  </h1>
                  <h1 className="absolute left-0 z-10 text-2xl font-bold">
                    Low Fidelity
                  </h1>
                </div>
                <div className="flex flex-col space-y-3 capitalize">
                  <h1>Whiteboard</h1>
                  <h1>Maps Screen Info</h1>
                  <h1>Possible States</h1>
                  <h1>First Diagram</h1>
                </div>
              </div>
              <div className="flex flex-col space-y-8">
                <div className="relative flex justify-center items-center">
                  <h1 className="absolute z-0 -left-8 text-zinc-800 text-7xl font-bold">
                    03
                  </h1>
                  <h1 className="absolute left-0 z-10 text-2xl font-bold">
                    Work/ Design
                  </h1>
                </div>
                <div className="flex flex-col space-y-3 capitalize">
                  <h1>Moodboard</h1>
                  <h1>First Diagram</h1>
                  <h1>Write your copy</h1>
                  <h1>Intern Test</h1>
                </div>
              </div>
              <div className="flex flex-col space-y-8">
                <div className="relative flex justify-center items-center">
                  <h1 className="absolute z-0 -left-8 text-zinc-800 text-7xl font-bold">
                    04
                  </h1>
                  <h1 className="absolute left-0 z-10 text-2xl font-bold">
                    Assets & Delivery
                  </h1>
                </div>
                <div className="flex flex-col space-y-3 capitalize">
                  <h1>Specifications</h1>
                  <h1>Diagram</h1>
                  <h1>Final Prototype</h1>
                  <h1>Video x Notes</h1>
                </div>
              </div>
              <div className="flex flex-col space-y-8">
                <div className="relative flex justify-center items-center">
                  <h1 className="absolute z-0 -left-8 text-zinc-800 text-7xl font-bold">
                    05
                  </h1>
                  <h1 className="absolute left-0 z-10 text-2xl font-bold">
                    Final & Test
                  </h1>
                </div>
                <div className="flex flex-col space-y-3 capitalize">
                  <h1>Inspectlet x hotjar</h1>
                  <h1>Mixpanel</h1>
                  <h1>Google Analytics</h1>
                  <h1>Intercom</h1>
                </div>
              </div>
              <div className="flex flex-col space-y-8">
                <div className="relative flex justify-center items-center">
                  <h1 className="absolute z-0 -left-8 text-zinc-800 text-7xl font-bold">
                    06
                  </h1>
                  <h1 className="absolute left-0 z-10 text-2xl font-bold">
                    After Design
                  </h1>
                </div>
                <div className="flex flex-col space-y-3 capitalize">
                  <h1>Goals</h1>
                  <h1>Workspace</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 mt-10">
            <img className="scale-125 opacity-60" src="./microscope.png" />
          </div>
        </div>
        {/* project slider section */}
        <div className="relative flex flex-row justify-center items-center w-3/4 h-[100vh] text-white">
          {/* control btn */}
          <div
            onClick={() => {
              setSlider(1);
            }}
            className={`${
              slider == 1 ? "hidden" : ""
            } p-10 border-2 rounded-full border-blue-500 -ml-32 mr-6`}
          >
            <img className="w-[25px] h-[25px]" src="./back-arrow.png" />
          </div>
          {/* overlay */}
          <div className="absolute z-10 inset-0 bg-black h-[10rem] w-1/2 flex items-center">
            <h1 className="font-bold text-5xl">
              Recent
              <br />
              Projects <span className="text-blue-500">+</span>
            </h1>
          </div>
          <div className="absolute z-10 bottom-0 left-0 bg-black h-[10rem] w-1/2">
            <a
              href="http://www.dribbble.com/ojie"
              className="flex uppercase border-b border-blue-500 text-[12px] w-fit py-2 tracking-[.25rem] cursor-pointer hover:px-1.5 hover:bg-blue-100/20"
            >
              my dribbble <img className="w-5 ml-3" src="./dribbble.svg" />
            </a>
          </div>
          {/* sliders */}
          <div className="w-full h-full">
            {/* slider 1 */}
            <div
              className={`${
                slider == 1 ? "flex" : "hidden"
              } flex-row space-x-3 w-full h-full animate__animated animate__fadeInRight `}
            >
              <div className="flex flex-col justify-center items-center w-1/2">
                <ProjectCard name={"WammaMobile"} img={"./s1_p1.jpg"} />
              </div>
              <div className="flex flex-col justify-between items-center w-1/2 h-full space-y-3">
                <ProjectCard name={"UAE"} img={"./s1_p2.jpg"} />
                <ProjectCard name={"Xchangewise"} img={"./s1_p3.jpg"} />
              </div>
            </div>
            {/* slider 2 */}
            <div
              className={`${
                slider == 2 ? "flex" : "hidden"
              } flex-row space-x-3 w-full h-full animate__animated animate__fadeInRight `}
            >
              <div className="flex flex-col justify-center items-center w-1/2">
                <ProjectCard name={"Kisi Security"} img={"./s2_p1.jpg"} />
              </div>
              <div className="flex flex-col justify-between items-center w-1/2 h-full space-y-3">
                <ProjectCard name={"FBN"} img={"./s2_p2.png"} />
                <ProjectCard name={"VizarHomes"} img={"./s2_p3.jpg"} />
              </div>
            </div>
          </div>
          {/* control btn */}
          <div
            onClick={() => {
              setSlider(2);
            }}
            className={`${
              slider == 2 ? "hidden" : ""
            } p-10 border-2 rounded-full border-blue-500 -mr-32 ml-6`}
          >
            <img className="w-[25px] h-[25px]" src="./arrow.png" />
          </div>
        </div>
        {/* career section */}
        <div className="flex flex-col space-y-10 items-center w-3/4 h-[50vh] text-white">
          <div className="flex flex-row w-full justify-between items-center">
            <h1 className="font-bold text-4xl">
              Career <span className="text-blue-500">+</span>
            </h1>
            <a
              href="https://drive.google.com/file/d/1KHNSlkvQkYsgTvPojvLhLdWV-7QtdvNJ/view?usp=sharing"
              className="flex uppercase border-b border-blue-500 text-[12px] w-fit py-2 tracking-[.25rem] cursor-pointer hover:px-1.5 hover:bg-blue-100/20"
            >
              get cv <img className="w-5 ml-3" src="./document.svg" />
            </a>
          </div>
          <div className="grid grid-cols-4 text-white w-full">
            <Career />
            <Career />
            <Career />
            <Career />
          </div>
        </div>
        {/* about me section */}
        <div className="flex w-full h-[50vh] items-center justify-center">
          {/* background video */}
          <div className="w-full h-64 overflow-hidden loop">
            <video autoPlay muted src="./background.mp4" type="video/mp4" />
          </div>
          {/* top info */}
          <div className="absolute z-20 w-full h-64 bg-gradient-to-b from-black flex flex-col items-center text-white">
            <div className="w-3/4 h-full flex flex-row justify-between items-center w-full">
              <div className="flex flex-col h-full justify-between w-2/5">
                <h1 className="uppercase font-bold text-blue-500">about me</h1>
                <h1 className="text-4xl font-bold">
                  Designing with passion for Problem Solving
                </h1>
                <a
                  href="https://www.instagram.com/ash_ik95/"
                  className="flex uppercase border-b border-blue-500 text-[12px] w-fit py-2 tracking-[.25rem] cursor-pointer hover:px-1.5 hover:bg-blue-100/20"
                >
                  follow me on instagram
                  <img className="w-5 ml-3" src="./instagram.svg" />
                </a>
              </div>
              <div className="w-1/2">
                <h1 className="text-lg text-zinc-500 w-full break-all">
                  I&apos;ve always been passionate about pixels and design
                  projects and haven&apos;t stopped working and learning about
                  new technologies . Other than sitting in from of my display I
                  enjoy myself in casual sports, such as bowling or playing
                  football with friends.
                  <br />
                  <br />
                  I'm grateful that my job allows me to work from anywhere.
                  I&apos;m active on Instagram where I share most of the and all
                  info about my upcoming projects.
                  <br />
                  <br />I also like sharing my experiences on instagram
                </h1>
              </div>
            </div>
          </div>
          <div className="absolute z-10 w-full h-64 bg-gradient-to-t from-black"></div>
        </div>
        {/* case study section */}
        <div className="flex flex-col space-y-10 w-3/4 h-[100vh] text-white">
          <h1 className="font-bold text-5xl">
            Case Studies <span className="text-blue-500">+</span>
          </h1>
          <div className="flex flex-row w-full space-x-3 items-center">
            <ProjectCard name={"Soovu"} img={"./cs_p1.png"} />
            <ProjectCard name={"FirstbankQuest"} img={"./s2_p2.png"} />
          </div>
        </div>
        {/* what's next section */}
        <div className="relative flex flex-col items-center h-[80vh] text-white w-full">
          <div className="w-full h-[85%] relative">
            <img
              className="left-0 object-left object-scale-down w-full h-full"
              src="./wn_bg.png"
            />
          </div>
          <div className="absolute z-10 bg-black/50 w-full h-[85%] flex flex-col items-center justify-center text-white">
            <div className="w-1/2 h-full flex flex-col items-center justify-center space-y-8">
              <h1 className="uppercase font-semibold text-blue-500">
                what's next
              </h1>
              <h1 className="font-bold text-4xl">Lets work together!</h1>
              <h1 className="text-zinc-500 text-lg text-center">
                If you'd like to talk about a project you want help with or need
                an advice about product design, just drop me a message at
                <span className="text-white"> nathan@ojieame.design</span> I'm
                currently Available for any design systems projects, dashboard
                designs or landing pages gigs.
              </h1>
              <a
                href="mailto:ashikmamud123@gmail.com?subject=Front-end%20Job"
                className="flex uppercase border-b border-blue-500 text-[12px] w-fit py-2 tracking-[.25rem] cursor-pointer hover:px-1.5 hover:bg-blue-100/20"
              >
                write me an email
                <img className="w-5 ml-3" src="./email.svg" />
              </a>
            </div>
          </div>
        </div>
        {/* footer */}
        <div className="flex flex-row items-center w-3/4 h-24">
          <div className="flex flex-row justify-between items-center w-full h-16">
            <h1 className="uppercase tracking-[2px] font-semibold text-zinc-500">
              BUILT FROM SCRATCH BY ME :)
            </h1>
            <img className="h-full" src="./logo.svg" />
          </div>
        </div>
      </div>
    </div>
  );
}
