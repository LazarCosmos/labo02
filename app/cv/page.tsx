"use client";
import Link from "next/link";
import { Card } from "../components/card";
import { Navigation } from "../components/nav";

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
            <ul className="list-disc pl-5">
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
            <ul className="list-disc pl-5">
                <li>Développement de logiciels et applications mobiles</li>
                <li>Installation et maintenance de réseaux et matériels informatiques</li>
                <li>Support technique et dépannage</li>
            </ul>
        ),
    },
    {
        title: "Frameworks",
        content: (
            <ul className="list-disc pl-5">
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
            <ul className="list-disc pl-5">
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
            <ul className="list-disc pl-5">
                <li>Projet PokemonCard avec Vuetify</li>
                <li>Optimisation Database (MySQL) de Walmart</li>
                <li>Calculatrice (Swift-Xcode)</li>
            </ul>
        ),
    },
    {
        title: "Langues",
        content: (
            <ul className="list-disc pl-5">
                <li>Français</li>
                <li>Kabyle (langue maternelle)</li>
                <li>Anglais (basique)</li>
            </ul>
        ),
    },
    {
        title: "Expérience",
        content: (
            <div>
                <h3 className="font-semibold">G.S.D GROUP INC.</h3>
                <p>Soutien informatique (Avril 2023 - octobre 2023)</p>
                <p>Laval, Québec, Canada</p>
                <ul className="list-disc pl-5">
                    <li>Fournir une assistance téléphonique aux clients</li>
                    <li>Évaluer les retours d’équipement provenant des clients</li>
                    <li>Concevoir des tutoriels détaillés pour guider les clients dans l’utilisation des nouvelles
                        fonctionnalités
                    </li>
                </ul>

                <h3 className="font-semibold">Cosmos-Technology</h3>
                <p>Gérant (Mai 2013 - mars 2021)</p>
                <p>Tizi Ouzou, Algérie</p>
                <ul className="list-disc pl-5">
                    <li>Maintenir des équipements informatiques</li>
                    <li>Vendre différents équipements et logiciels informatiques</li>
                    <li>Installer des réseaux informatiques</li>
                    <li>Gérer la relation client et service après-vente</li>
                    <li>Développer des stratégies de vente et gestion des stocks</li>
                </ul>

                <h1 className="font-semibold">Vers le Vert</h1>
                <p>Responsable de projet environnemental (2013 - 2018)</p>
                <p>Tizi Ouzou, Algérie</p>
                <ul className="list-disc pl-5">
                    <li>Cordonner des projets en développement durable</li>
                    <li>Planifier et mettre en œuvre des projets visant à promouvoir le développement durable</li>
                    <li>Évaluer les résultats, sensibiliser et communiquer sur les initiatives durables</li>
                </ul>

                <h3 className="font-semibold">Université Mouloud Mammeri Tizi-Ouzou</h3>
                <p>Herpétologiste (2014)</p>
                <p>Tizi Ouzou, Algérie</p>
                <ul className="list-disc pl-5">
                    <li>Recenser les reptiles dans le parc national de Djurdjura en Algérie</li>
                    <li>Collecter des échantillons, identifier les espèces présentes, et dresser des relevés
                        forestiers
                    </li>
                </ul>

                <h3 className="font-semibold">Formateur de stagiaires en environnement</h3>
                <p>(2013 - 2014)</p>
                <p>Tizi Ouzou, Algérie</p>
                <ul className="list-disc pl-5">
                    <li>Encadrer et accompagner des étudiants en fin de cycle</li>
                    <li>Participer aux travaux de recherche sur le terrain et en laboratoire</li>
                    <li>Réaliser l'inventaire des populations vivantes dans l’environnement ciblé</li>
                </ul>
            </div>
        ),
    },
    {
        title: "Formation",
        content: (
            <div>
                <ul className="list-disc pl-5">
                    <h3 className="font-semibold">Collège Ahuntsic, Montréal</h3>
                    <p>Développement d’applications mobiles (AEC 1200 Heures) (Janvier 2024 - mars 2025)</p>

                    <h3 className="font-semibold">Université Mouloud Mammeri Tizi-Ouzou, Algérie</h3>
                    <p>Master 2 (M2), Entomologie (en attente de l'évaluation comparative du MIFI) (Décembre 2012 -
                        septembre 2015)</p>

                    <h3 className="font-semibold">Université Mouloud Mammeri Tizi-Ouzou, Algérie</h3>
                    <p>Ingénieur en écologie, évolution, dynamiques des populations (Septembre 2007 - septembre
                        2012)</p>
                    </ul>
            </div>
),
},

];

export default function CV() {
    return (
        <div className="bg-gradient-to-tl from-blue-500 via-zinc-600/20 to-blue-600">
            <Navigation />
            <div className="  flex  min-h-screen px-4 mx-auto pt-[10vh]">
                <div className="  grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-2 lg:gap-2">
                    {cvSections.map((section) => (
                        <Card key={section.title}>
                            <div >
                <span
                    className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                    aria-hidden="true"
                />
                                <div className="z-10 flex flex-col ">
                                    <h2 className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
                                        {section.title}
                                    </h2>
                                    <div className="mt-4 text-sm text-zinc-400 group-hover:text-zinc-200">
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
