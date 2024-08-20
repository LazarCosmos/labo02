"use client";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import React from "react";

const socials = [
	{
		icon: <img src="/Poke_Ball_icon.svg" alt="Poké Ball" width={60} height={60} />,
		href: "https://poke-chi.vercel.app",
		label: "Voir le projet",
		handle: "Pokemon Card",
		img : <img src= "/Pokemon.jpg" alt="Poké Ball" />,
	},
	{
		icon: <img src="/Poke_Ball_icon.svg" alt="Poké Ball" width={60} height={60} />,
		href: "https://poke-chi.vercel.app",
		label: "Voir le projet",
		handle: "Pokemon Card",
		img : <img src= "/Pokemon.jpg" alt="Poké Ball" />,
	},
	{
		icon: <Mail size={20} />,
		href: "lazhar.contact@gmail.com",
		label: "Envoyer un email",
		handle: "Email",
	},
	{
		icon: <Github size={20} />,
		href: "https://github.com/LazarCosmos",
		label: "Github",
		handle: "Voir Github",
	},
];


export default function Project() {
	return (
		<div className=" bg-green-800">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-4 lg:gap-16">
					{socials.map((s) => (
						<Card>
							<Link
								href={s.href}
								target="_blank"
								className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
							>
								<span
									className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
									aria-hidden="true"
								/>
								<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
									{s.icon}
								</span>{" "}
								<div className="z-10 flex flex-col items-center">
									<span
										className="lg:text-xs font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
										{s.handle}
									</span>
									<span
										className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
										{s.label}
									</span>
									{s.img} {/* Affichage de l'image supplémentaire */}

								</div>
							</Link>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
