import Link from "next/link";
import React from "react";



const navigation = [
  { name: "Projets", href: "/projects" },
  { name: "Blog", href: "/contact" },
  {name : "CV", href: "/cv"},
  {name : "Rapport", href: "/rapport"},
  {name : "Accueil", href: "/"}

];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-blue-500 via-zinc-600/20 to-blue-600">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4 ">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className=" duration-500 text-zinc-300 hover:text-zinc-600 text-xl "
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

      <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Cosmos
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
      
        
      </div>
    </div>
  );

}
