"use client";
import { School} from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import React from "react";
import { ScrollingTechnologies } from "../components/scrollingTechnologies";


const socials= [
	{
		icon: <img src="/Poke_Ball_icon.svg" alt="Poké Ball" width={60} height={60} />,
		href: "https://poke-chi.vercel.app",
		label: "Voir le projet",
		handle: "Pokemon Card",
		img : (
			<div className="relative w-full hover:scale-150" style={{ paddingBottom: '56.25%' }}>
				<img src="/Pokemon.jpg" alt="Poké Ball" className="absolute top-0 left-0 w-full h-full object-cover rounded-lg" />
			</div>
		),
		icon2: <img src="/icons/icons8-vue-js.svg" alt="Vue.js" width={60} height={60} />
	},
	{
		icon: < img src ="icons/icons8-carte.png"/>,
		href: "https://lazhar-bessadi-2397382-labo01-partie-1.vercel.app/",
		label: "Voir le projet",
		handle: "Expérience React",
		img : (
			<div className="relative w-full" style={{ paddingBottom: '50.25%' }}> 
				<img src="/personne_01.jpeg" alt="personne" className="absolute top-0 left-0 w-full h-full object-cover rounded-lg" />
			</div>
		),
		icon2: <img src="/icons/icons8-react.svg" alt="Vue.js" width={60} height={60} />
		
	},
	{
		icon: < img src ="icons/icons8-document-32.png"/>,
		href: "https://angular-project-five-rust.vercel.app/accueil/",
		label: "Voir le projet",
		handle: "Expérience React",
		img : (
			<div className="relative w-full" style={{ paddingBottom: '50.25%' }}> 
				<img src="/institut.jpeg" alt="personne" className="absolute top-0 left-0 w-full h-full object-cover rounded-lg" />
			</div>
		),
		icon2: <img src="/icons/icons8-angularjs.svg" alt="Angular.js" width={60} height={60} />
	},
	{
		icon: <School size={40} />,
		href: "https://github.com/LazarCosmos/Calculatrice-Swift2",
		label: "Voir le projet",
		handle: "Expérience React",
		img : (
			<div className="relative w-full" style={{ paddingBottom: '50.25%' }}> 
				<img src="/calcul.jpeg" alt="personne" className="absolute top-0 left-0 w-full h-full object-cover rounded-lg" />
			</div>
		),
		icon2: <img src="/icons/icons8-swift.svg" alt="Vue.js" width={60} height={60} />
	},
];


export default function Project() {
	return (

		<div className="bg-gradient-to-tl from-blue-500 via-zinc-600/20 to-blue-600">
			<Navigation/>
			<div className="  flex  min-h-screen px-4 mx-auto pt-[10vh]">
				<div className="  grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-2 lg:gap-2">
					<div
						className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
						{socials.map((s, index) => (
							<Card key={index}>
								<Link
									href={s.href}
									target="_blank"
									className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-12 lg:pb-24 md:p-16"
								>
								<span
									className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
									aria-hidden="true"
								/>
									<span
										className="  z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
									{s.icon}
								</span>
									<div className="z-10 flex flex-col items-center">
									<span
										className="lg:text-xs font-medium duration-150 xl:text-2xl text-zinc-200 group-hover:text-white font-display">
										{s.handle}
									</span>
										<span
											className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
										{s.label}
									</span>

										{s.img}
									</div>
									<span
										className=" hover:rotate-45 rounded-full w-12 h-12 mr-0 relative flex items-center justify-center text-sm duration-1000 border text-zinc-200 group-hover:text-white">
									{s.icon2}
								</span>
								</Link>
							</Card>
						))}
					</div>

				</div>


			</div>
			<ScrollingTechnologies/>
		</div>
	);
}