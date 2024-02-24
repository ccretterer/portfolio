import Image from "next/image";
import Link from "next/link";
import Carousel from "./components/images/carousel";

// Define a type for the props
type SectionLinkProps = {
  href: string;
  title: string;
  description: string;
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        {/* Vercel link and image */}
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <Link href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app" legacyBehavior={true}>
            <a className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0" target="_blank" rel="noopener noreferrer">
              This link connects to my vercel deployment{" "}
              <Image src="/vercel.svg" alt="Vercel Logo" className="dark:invert" width={100} height={24} priority />
            </a>
          </Link>
        </div>
      </div>
      {/* Feature Image*/} 
      <div className="my-12">
        <Image
          src="https://res.cloudinary.com/djui88jlr/image/upload/v1708634192/IMG_9205_2_qrlg3r.jpg" // Update the path to your image
          alt="Profile Photo"
          width={600} // Set the width you desire
          height={400} // Set the height you desire
          priority // Optional: if you want to prioritize loading
        />
      </div>

      {/* Section links */}
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <SectionLink href="/aboutMe" title="About Me" description="Learn more about me and my journey." />
        <SectionLink href="/projects" title="Projects" description="Check out my projects and contributions." />
        <SectionLink href="/resume" title="Resume" description="View my professional experience and skills." />
        <SectionLink href="/contact" title="Contact" description="Get in touch with me for collaborations." />
      </div>
    </main>
  );
}


// Use the type in your function component
function SectionLink({ href, title, description }: SectionLinkProps) {
  return (
    <Link href={href} legacyBehavior={true}>
      <a className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30" target="_blank" rel="noopener noreferrer">
        <h2 className="mb-3 text-2xl font-semibold">{title} <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">-&gt;</span></h2>
        <p className="m-0 max-w-[30ch] text-sm opacity-50">{description}</p>
      </a>
    </Link>
  );
}