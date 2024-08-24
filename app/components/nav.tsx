"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export const Navigation: React.FC = () => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<header ref={ref}>
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-a  ${
					isIntersecting
						? "bg-zinc-900/0 border-transparent"
						: "bg-zinc-900/100  border-zinc-800 "
				}`}
			>
				<div className="container flex flex-row-reverse items-center justify-between p-4 w-full">
					<div className="flex justify-between gap-8">
						<Link
							href="/"
							className=" scale-110 duration-200 text-amber-400 hover:scale-125"
						>
							Accueil
						</Link>
						<Link
							href="/projects"
							className=" scale-110 duration-200 text-amber-400 hover:scale-125"
						>
							Projets
						</Link>
						<Link
							href="/rapport"
							className=" scale-110 duration-200 text-amber-400 hover:scale-125"
						>
							Rapport
						</Link>
						<Link
							href="/cv"
							className=" scale-110 duration-200 text-amber-400 hover:scale-125"
						>
							CV
						</Link>
						<Link
							href="/contact"
							className=" scale-110 duration-200 text-amber-400 hover:scale-125"
						>
							Contact
						</Link>
					</div>

					<Link
						href="/"
						className=" scale-150 duration-200 text-amber-400 hover:scale-125"
					>
						<ArrowLeft className="w-6 h-6 " />
					</Link>
				</div>
			</div>
		</header>
	);
};
