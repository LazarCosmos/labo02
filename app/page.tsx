import Link from "next/link";
import React from "react";



const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Projets", href: "/projects" },
  {name : "Rapport", href: "/rapport"},
  {name : "CV", href: "/cv"},
  {name : "Contact", href: "contact/"}

];

export default function Home() {
  return (
      <div
          className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-blue-500 via-zinc-600/20 to-blue-600">
          <nav className="my-16 animate-fade-in">
              <ul className="flex items-center justify-center gap-4 ">
                  {navigation.map((item) => (
                      <Link
                          key={item.href}
                          href={item.href}
                          className=" duration-500 text-amber-400 hover:text-zinc-600 text-xl "
                      >
                          {item.name}
                      </Link>
                  ))}
              </ul>
          </nav>
          <div
              className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0"/>

          <h1 className="py-3.5 px-0.5 z-10 text-4xl text-amber-400 duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
              Cosmos
          </h1>
          <h1 className=" rotate-12 px-0.5 z-10 text-2xl text-amber-400 duration-1000 bg-white cursor-default text-edge-outline font-display sm:text-2xl md:text-4xl whitespace-pre-wrap bg-clip-text ">
              Portfolio
          </h1>
          <div
              className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0"/>
          <div className="my-16 text-center animate-fade-in">


          </div>
      </div>
  );

}
