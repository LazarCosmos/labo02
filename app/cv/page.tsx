import Head from 'next/head';
import { Navigation } from '../components/nav';
export default function CV() {
  return (
    <div>
      <Head>
    
        <title></title>
        <meta name="description" content="CV de Mon Nom" />
      </Head>

      <header className="bg-blue-600 text-white p-6">
        <Navigation></Navigation>
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Lazhar Bessadi</h1>
          <p className="text-xl"> Développeur d'applications mobiles</p>
        </div>
      </header>

      <main className="container mx-auto p-6">
      
        <section className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-semibold mb-4">Profil</h2>
          <h2>
            Ingénieur en écologie avec une solide expérience dans les projets de conservation, 
            le développement d'applications mobiles, et l'analyse de données. Passionné par 
            l'intégration de l'intelligence artificielle dans les projets environnementaux.
          </h2>
        </section>

        
        <section className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-semibold mb-4">Expérience Professionnelle</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Technicien en Maintenance Informatique</h3>
            <p className="text-gray-600">2013 - 2021 | Ma propre entreprise</p>
            <p>
              Maintenance et vente de matériel informatique, installation de réseaux, 
              et service à la clientèle.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Volontaire Écologique</h3>
            <p className="text-gray-600">Divers projets</p>
            <p>
              Participation à des projets de conservation, réintroduction d'espèces, 
              et reforestation en Kabylie.
            </p>
          </div>
        </section>

        
        <section className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-semibold mb-4">Compétences</h2>
          <ul className="list-disc list-inside">
            <li>Développement d'applications mobiles (Swift, Kotlin)</li>
            <li>Analyse de données et intelligence artificielle</li>
            <li>Maintenance et support informatique</li>
            <li>Projets de conservation écologique</li>
          </ul>
        </section>

        
        <section className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-semibold mb-4">Éducation</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">AEC en développement d'applications mobiles</h3>
            <p className="text-gray-600">CEGEP | En cours jusqu'en 2025</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Diplôme d'ingénieur en écologie</h3>
            <p className="text-gray-600">Université</p>
          </div>
        </section>
      </main>

      <footer className="bg-blue-600 text-white p-6 text-center">
        <p>© 2024 Cosmos-Technology.et. Tous droits réservés.</p>
      </footer>
    </div>
  );
}
