import Layout from "@/components/layout.component";
import NavBar from "@/components/nav-bar.component";
import Image from "next/image";
import ProfilePic from '../../public/images/profile/developer-pic-1.png'
import AnimatedText from "@/components/animated-text.component";
import Link from "next/link";
import { LinkArrow } from "@/components/icons.component";
import HireMe from "@/components/hire-me.component";
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg'
import TransitionEffect from "@/components/transition-effect.component";


export default function Home() {
  return (
    <>
      <TransitionEffect/>
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:p-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image src={ProfilePic} alt='CodeBucks' className="w-full h-auto lg:hidden md:inline-block md:w-full "/>
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText text='Turning Vision Into Reality With Code And Design.' className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"/>
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
              As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
Explore my latest projects and articles, showcasing my expertise in React.js and web development.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link href='/dummy.pdf' target="_blank" className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark 
                dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:border-light hover:dark:text-light md:p-2 md:px-4 md:text-base '
                download={true}>Resume
                <LinkArrow className="w-6 ml-1"/>
                </Link>
                <Link href='mailto:abcd@gmail.com' target="_blank" className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base">Contact</Link>              
                </div>
            </div>
          </div>
        </Layout>
        <HireMe/>
        <div className="absolute right-8 bottom-8 inline-block w-24">
          <Image src={lightBulb} alt='Codebucks' className="w-full h-auto md:hidden"/>
        </div>
      </main>
    </>
  );
}
