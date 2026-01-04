import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tennis Courts in Greenville SC | Public & Private Courts",
  description: "Find the best tennis courts in Greenville, South Carolina. Public courts, private clubs, indoor facilities, and more. Updated hours and locations.",
  keywords: ["tennis courts greenville sc", "public tennis courts greenville", "tennis clubs greenville"],
};

export default function TennisCourtPage() {
  // Sample listings - you'll replace with real data later
  const courts = [
    {
      name: "Cleveland Park Tennis Courts",
      address: "651 Vance St, Greenville, SC 29605",
      type: "Public",
      courts: 8,
      surface: "Hard Court",
      description: "Popular public tennis facility with 8 well-maintained courts. Free to use, first-come first-served.",
    },
    {
      name: "Greenville Tennis Center",
      address: "400 E. Camperdown Way, Greenville, SC 29601",
      type: "Public",
      courts: 12,
      surface: "Hard Court",
      description: "Premier public tennis facility featuring 12 courts and professional instruction available.",
    },
    {
      name: "Pelham Racquet Club",
      address: "100 Pelham Springs Pl, Greenville, SC 29615",
      type: "Private",
      courts: 6,
      surface: "Clay & Hard",
      description: "Private club offering both clay and hard courts with professional coaching and league play.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
          <span className="mx-2 text-gray-500">/</span>
          <Link href="/greenville" className="text-blue-600 hover:text-blue-800">Greenville</Link>
          <span className="mx-2 text-gray-500">/</span>
          <span className="text-gray-700">Tennis Courts</span>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Tennis Courts in Greenville, SC
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Discover the best tennis courts in Greenville, South Carolina. Whether you're looking for 
            public courts, private clubs, or indoor facilities, we've got you covered.
          </p>
        </div>

        {/* Court Listings */}
        <div className="grid gap-6 mb-16">
          {courts.map((court, index) => (
            <article 
              key={index}
              className="bg-white p-8 rounded-lg shadow-md border border-gray-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                    <Link href={`/greenville/tennis-courts/${court.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
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
                  <span className="font-semibold mr-2">Surface:</span> {court.surface}
                </div>
              </div>
              
              <p className="text-gray-700">{court.description}</p>
            </article>
          ))}
        </div>

        {/* SEO Content */}
        <div className="max-w-4xl bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Guide to Tennis Courts in Greenville, SC
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              Public Tennis Courts in Greenville
            </h3>
            <p className="text-gray-700 mb-4">
              Greenville offers excellent public tennis facilities, with Cleveland Park and the Greenville Tennis Center 
              being the most popular options. These courts are free to use on a first-come, first-served basis and are 
              well-maintained by the city's parks and recreation department.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              Private Tennis Clubs
            </h3>
            <p className="text-gray-700 mb-4">
              For those seeking a more exclusive experience, Greenville has several private tennis clubs offering 
              clay courts, professional instruction, and competitive league play. Memberships typically include 
              access to other amenities like fitness facilities and social events.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              Indoor Tennis Facilities
            </h3>
            <p className="text-gray-700 mb-4">
              Year-round tennis is possible at Greenville's indoor facilities, perfect for playing during 
              inclement weather or extreme temperatures. These climate-controlled courts ensure you can 
              maintain your game regardless of the season.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              Tennis Lessons & Coaching in Greenville
            </h3>
            <p className="text-gray-700">
              Many facilities offer professional tennis instruction for all skill levels, from beginner lessons 
              to advanced coaching. Whether you're just starting or looking to refine your technique, 
              Greenville's tennis professionals can help you improve your game.
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-gray-50 border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 text-center text-gray-600">
          <p>&copy; 2026 The Greenville SC Guide. Find tennis courts in Greenville, SC.</p>
        </div>
      </footer>
    </div>
  );
}
