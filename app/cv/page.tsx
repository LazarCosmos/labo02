"use client";
import Link from "next/link";
import { Card } from "../components/card";
import {Navigation} from "../components/nav";

const cvSections = [
  {
    title: "Coordonnées",
    content: (
        <div>
          <p className="font-medium">Téléphone: 438 871 0600</p>
          <p>Email: <a href="mailto:lazhar.contact@gmail.com" className="text-blue-500">lazhar.contact@gmail.com</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/lazar-cosmos/" className="text-blue-500">Lazar Bessadi</a></p>
        </div>
    ),
  },
  {
    title: "Compétences",
    content: (
        <ul>
          <li>Esprit d’équipe & d’initiative</li>
          <li>Débrouillard</li>
          <li>Curieux</li>
          <li>Leadership</li>
        </ul>
    ),
  },
  {
    title: "Compétences Techniques",
    content: (
        <ul>
          <li>Développement de logiciels et applications mobiles</li>
          <li>Installation et maintenance de réseaux et matériels informatiques</li>
          <li>Support technique et dépannage</li>
        </ul>
    ),
  },
  {
    title: "Frameworks",
    content: (
        <ul>
          <li>Angular</li>
          <li>React</li>
          <li>Vue.Js</li>
          <li>Node.JS</li>
        </ul>
    ),
  },
  {
    title: "Langages de Programmation",
    content: (
        <ul>
          <li>Kotlin</li>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>MySQL</li>
          <li>Swift</li>
        </ul>
    ),
  },
  {
    title: "Projets et Réalisations",
    content: (
        <ul>
          <li>Projet PokemonCard avec Vuetify</li>
          <li>Optimisation Database (MySQL) de Walmart</li>
          <li>Calculatrice (Swift-Xcode)</li>
        </ul>
    ),
  },
  {
    title: "Langues",
    content: (
        <ul>
          <li>Français</li>
          <li>Kabyle (langue maternelle)</li>
          <li>Anglais (basique)</li>
        </ul>
    ),
  },
];

export default function CV() {
  return (
      <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
          <Navigation/>
        <div className="container flex items-center justify-center min-h-screen px-4 mx-auto pt-[10vh]">
          <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-4 lg:gap-16">
            {cvSections.map((section) => (
                <Card key={section.title}>
                  <div className="relative flex flex-col items-center gap-4 p-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16">
                <span
                    className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                    aria-hidden="true"
                />
                    <div className="z-10 flex flex-col items-center">
                      <h2 className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
                        {section.title}
                      </h2>
                      <div className="mt-4 text-sm text-center text-zinc-400 group-hover:text-zinc-200">
                        {section.content}
                      </div>
                    </div>
                  </div>
                </Card>
            ))}
          </div>
        </div>
      </div>
  );
}
