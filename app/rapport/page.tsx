"use client";
import { Navigation } from "@/app/components/nav";
import { Card } from "../components/card";

export default function Rapport() {
    return (
        <div className="bg-gradient-to-tl from-blue-500 via-zinc-600/20 to-blue-600">
            <Navigation/>
            <div className="  flex  min-h-screen px-4 mx-auto pt-[10vh]">
                <div className="  text-zinc-200 grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-2 lg:gap-2">
                    <Card>
                        <h2 className="text-3xl text-amber-400 mb-4">Rapport sur la Conception Visuelle et
                            l'Ergonomie</h2>

                        <div className="mb-4">
                            <h3 className="text-2xl text-orange-500 font-semibold mb-2">Choix des Couleurs</h3>
                            <p className="text-zinc-200 mb-2">
                                <strong>Amber-400 (Jaune Orangé) :</strong> Utilisé pour attirer
                                l'attention sur des éléments spécifiques comme les boutons d'action.
                            </p>
                            <p className="text-zinc-200 mb-2">
                                <strong>Bleu Foncé :</strong> Employé pour des arrière-plans ou des éléments de
                                mise en page, créant une profondeur et une stabilité.
                            </p>
                            <p className="text-zinc-200 mb-2">
                                <strong>Noir et Blanc :</strong> Le blanc contraste fortement avec le noir,
                                améliorant la lisibilité et attirant l'attention sur les informations clés.
                            </p>
                        </div>

                        <div className="text-zinc-200 mb-4">
                            <h3 className="text-2xl text-orange-500 font-semibold mb-2">Utilisation des Images</h3>
                            <p className="text-zinc-200 mb-2">
                                <strong>Génération d'Images par IA :</strong> Permet de créer des
                                visuels uniques adaptés aux besoins du projet.
                            </p>
                            <p>
                                <strong>Captures d'Écran des Pokémon :</strong> Garantit l'authenticité des visuels
                                utilisés pour cette section spécifique.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl text-orange-500 font-semibold mb-2">Disposition des Pages</h3>
                            <p className="text-zinc-200 mb-2">
                                <strong>Simplicité et Accessibilité :</strong> Conçue pour être
                                intuitive et facile à naviguer, minimisant la recherche d’informations.
                            </p>
                            <p className="text-zinc-200 mb-2">
                                <strong>Barre de Navigation :</strong> Conformité aux normes classiques pour une
                                navigation intuitive et rapide.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl text-orange-500 font-semibold mb-2">Avantage de l'utilisation de
                                Next.js et Vercel</h3>
                            <p className="text-zinc-200 mb-2">
                                Next.js permet de générer des pages de manière statique ou côté serveur, ce qui améliore
                                les performances et l'optimisation SEO en rendant les pages plus rapidement accessibles
                                aux utilisateurs..
                            </p>
                            <h3 className="text-zinc-200 text-lg font-semibold mb-2">Avantage de l'utilisation
                                Vercel</h3>
                            <p className="text-zinc-200 mb-8">
                                conçu pour déployer des applications Next.js avec une intégration parfaite, permettant des
                                déploiements continus en quelques clics ou via des push Git.
                            </p>

                            <p className="text-zinc-200 mb-2">
                                <strong>Vercel et NextJS :</strong> Next.js et Vercel incluent des optimisations automatiques,
                                telles que l’optimisation des images, le code splitting, et le chargement différé,
                                ce qui permet des performances accrues sans effort supplémentaire.
                            </p>

                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
