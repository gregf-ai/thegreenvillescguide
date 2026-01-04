import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pickleball Courts in Greenville SC | Indoor & Outdoor Courts",
  description: "Find the best pickleball courts in Greenville, South Carolina. Public courts, indoor facilities, and clubs. Updated locations and hours.",
  keywords: ["pickleball courts greenville sc", "pickleball greenville", "where to play pickleball greenville"],
};

export default function PickleballPage() {
  const courts = [
    {
      name: "Cleveland Park Pickleball Courts",
      address: "651 Vance St, Greenville, SC 29605",
      type: "Public",
      courts: 6,
      indoor: false,
      description: "Dedicated outdoor pickleball courts at Cleveland Park. Free to use, first-come first-served. Very popular morning spot.",
    },
    {
      name: "Kroc Center Greenville",
      address: "2530 Millennium Campus Dr, Greenville, SC 29607",
      type: "Membership",
      courts: 4,
      indoor: true,
      description: "Indoor pickleball courts available with membership. Climate-controlled facility with professional-grade courts.",
    },
    {
      name: "TD1 Sports Complex",
      address: "321 Rocky Creek Rd, Greenville, SC 29615",
      type: "Public",
      courts: 8,
      indoor: false,
      description: "Large outdoor pickleball facility with 8 courts. Well-lit for evening play. Open play and league options.",
    },
    {
      name: "Pavilion Recreation Complex",
      address: "525 N Pleasantburg Dr, Greenville, SC 29607",
      type: "Public",
      courts: 4,
      indoor: true,
      description: "Indoor courts available during specific hours. Check schedule for open play times and league information.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <nav className="mb-8 text-sm">
          <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
          <span className="mx-2 text-gray-500">/</span>
          <Link href="/greenville" className="text-blue-600 hover:text-blue-800">Greenville</Link>
          <span className="mx-2 text-gray-500">/</span>
          <span className="text-gray-700">Pickleball Courts</span>
        </nav>

        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Pickleball Courts in Greenville, SC
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Discover the best pickleball courts in Greenville, South Carolina. Find indoor and outdoor 
            courts, leagues, and open play opportunities.
          </p>
        </div>

        <div className="grid gap-6 mb-16">
          {courts.map((court, index) => (
            <article 
              key={index}
              className="bg-white p-8 rounded-lg shadow-md border border-gray-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                    <Link href={`/greenville/pickleball-courts/${court.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                      {court.name}
                    </Link>
                  </h2>
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(court.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 mb-1 inline-flex items-center gap-1"
                  >
                    📍 {court.address}
                  </a>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  court.type === 'Public' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                }`}>
                  {court.type}
                </span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="flex items-center text-gray-700">
                  <span className="font-semibold mr-2">Courts:</span> {court.courts}
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="font-semibold mr-2">Type:</span> {court.indoor ? 'Indoor' : 'Outdoor'}
                </div>
              </div>
              
              <p className="text-gray-700">{court.description}</p>
            </article>
          ))}
        </div>

        <div className="max-w-4xl bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Guide to Pickleball in Greenville, SC
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              Where to Play Pickleball in Greenville
            </h3>
            <p className="text-gray-700 mb-4">
              Pickleball has exploded in popularity in Greenville, with courts popping up across the city. 
              Cleveland Park offers dedicated outdoor courts that are free to use and very popular with the local 
              pickleball community. The TD1 Sports Complex features 8 courts, making it one of the largest 
              pickleball facilities in the area.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              Indoor vs Outdoor Pickleball Courts
            </h3>
            <p className="text-gray-700 mb-4">
              For year-round play, Greenville offers several indoor pickleball options including the Kroc Center 
              and Pavilion Recreation Complex. Indoor courts provide climate-controlled comfort and protection from 
              weather. Outdoor courts like those at Cleveland Park and TD1 offer a different playing experience with 
              natural conditions and often more available court time.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              Pickleball Leagues and Tournaments
            </h3>
            <p className="text-gray-700 mb-4">
              Many Greenville facilities host regular pickleball leagues for players of all skill levels. Check with 
              individual facilities for league schedules, skill divisions, and registration information. Tournaments 
              are held throughout the year at various locations.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              Getting Started with Pickleball
            </h3>
            <p className="text-gray-700">
              New to pickleball? Most facilities welcome beginners and offer open play sessions where you can learn 
              the game. Equipment is often available to borrow, though you may want to invest in your own paddle 
              once you're hooked. The pickleball community in Greenville is friendly and welcoming to new players.
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-gray-50 border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 text-center text-gray-600">
          <p>&copy; 2026 The Greenville SC Guide. Find pickleball courts in Greenville, SC.</p>
        </div>
      </footer>
    </div>
  );
}
