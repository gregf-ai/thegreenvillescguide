import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pools & Aquatic Centers in Greenville SC | Public Pools",
  description: "Find the best pools and aquatic centers in Greenville, South Carolina. Public pools, splash pads, and swimming facilities for the whole family.",
  keywords: ["pools greenville sc", "public pools greenville", "splash pads greenville", "swimming greenville"],
};

export default function PoolsPage() {
  const pools = [
    {
      name: "Pavilion Recreation Complex",
      address: "525 N Pleasantburg Dr, Greenville, SC 29607",
      type: "Public",
      features: ["Indoor Pool", "Lap Swimming", "Recreation Swimming", "Lessons"],
      season: "Year-Round",
      description: "Indoor aquatic facility offering lap swimming, recreation swim, and swim lessons year-round.",
    },
    {
      name: "Westside Park Pool",
      address: "107 Freeman Dr, Greenville, SC 29605",
      type: "Public",
      features: ["Outdoor Pool", "Splash Pad", "Family Swim"],
      season: "Summer (Memorial Day - Labor Day)",
      description: "Seasonal outdoor pool with splash pad area. Great for families with young children.",
    },
    {
      name: "Kroc Center Greenville",
      address: "2530 Millennium Campus Dr, Greenville, SC 29607",
      type: "Membership",
      features: ["Indoor Pool", "Lap Swimming", "Water Aerobics", "Youth Programs"],
      season: "Year-Round",
      description: "State-of-the-art aquatic center with multiple pools, water slides, and comprehensive swim programs.",
    },
    {
      name: "Parker Aquatic Center",
      address: "400 E Camperdown Way, Greenville, SC 29601",
      type: "Public",
      features: ["Competition Pool", "Diving Boards", "Lap Swimming"],
      season: "Year-Round",
      description: "Olympic-size indoor pool facility. Home to swim teams and open for public lap swimming.",
    },
    {
      name: "Cleveland Park Splash Pad",
      address: "651 Vance St, Greenville, SC 29605",
      type: "Free",
      features: ["Splash Pad", "Water Features", "Playground Nearby"],
      season: "Summer",
      description: "Free splash pad perfect for cooling off on hot summer days. Located near playground and picnic areas.",
    },
    {
      name: "YMCA Aquatics Programs",
      address: "Multiple Locations",
      type: "Membership",
      features: ["Indoor Pools", "Swim Lessons", "Water Aerobics", "Family Swim"],
      season: "Year-Round",
      description: "Multiple YMCA locations offer pools and comprehensive aquatics programs for all ages.",
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
          <span className="text-gray-700">Pools</span>
        </nav>

        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Pools & Aquatic Centers in Greenville, SC
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Discover the best pools and aquatic centers in Greenville, South Carolina. Public pools, 
            splash pads, and year-round swimming facilities for the whole family.
          </p>
        </div>

        <div className="grid gap-6 mb-16">
          {pools.map((pool, index) => (
            <article 
              key={index}
              className="bg-white p-8 rounded-lg shadow-md border border-gray-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                    <Link href={`/greenville/pools/${pool.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                      {pool.name}
                    </Link>
                  </h2>
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(pool.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 mb-1 inline-flex items-center gap-1"
                  >
                    📍 {pool.address}
                  </a>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  pool.type === 'Free' ? 'bg-green-100 text-green-800' :
                  pool.type === 'Public' ? 'bg-blue-100 text-blue-800' :
                  'bg-purple-100 text-purple-800'
                }`}>
                  {pool.type}
                </span>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center text-gray-700 mb-2">
                  <span className="font-semibold mr-2">Season:</span> {pool.season}
                </div>
                <div className="text-gray-700">
                  <span className="font-semibold">Features:</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {pool.features.map((feature, i) => (
                      <span key={i} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700">{pool.description}</p>
            </article>
          ))}
        </div>

        <div className="max-w-4xl bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Guide to Swimming Pools in Greenville, SC
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              Public Pools in Greenville
            </h3>
            <p className="text-gray-700 mb-4">
              Greenville offers several public pool options for residents and visitors. The Pavilion Recreation Complex 
              features an indoor pool open year-round, perfect for lap swimming and recreation. During summer months, 
              outdoor pools like Westside Park Pool provide refreshing fun for families. Most public pools charge 
              minimal admission fees.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              Splash Pads and Water Play Areas
            </h3>
            <p className="text-gray-700 mb-4">
              For families with young children, splash pads offer free water fun during hot summer months. Cleveland Park's 
              splash pad is a popular destination with nearby playgrounds and picnic areas. Westside Park combines a 
              traditional pool with splash pad features. These facilities typically operate from Memorial Day through Labor Day.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              Swim Lessons and Programs
            </h3>
            <p className="text-gray-700 mb-4">
              Many aquatic facilities in Greenville offer swim lessons for all ages and skill levels. The Kroc Center 
              and YMCA locations provide comprehensive swim programs including beginner lessons, stroke improvement, 
              and competitive swim teams. Parker Aquatic Center hosts competitive swimming and diving programs.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              Year-Round Swimming
            </h3>
            <p className="text-gray-700 mb-4">
              While outdoor pools are seasonal, several indoor facilities offer year-round swimming. The Pavilion Recreation 
              Complex, Kroc Center, and YMCA locations all feature indoor pools with climate control. These facilities offer 
              lap swimming, water aerobics, and open swim times throughout the year.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              Pool Safety and Rules
            </h3>
            <p className="text-gray-700">
              All public pools in Greenville have certified lifeguards on duty during operating hours. Children under certain 
              ages may require adult supervision in the water. Many facilities require swim tests for access to deep water 
              or diving areas. Check specific pool rules and regulations before your visit. Most pools offer family swim times, 
              lap swim times, and adult-only swim periods.
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-gray-50 border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 text-center text-gray-600">
          <p>&copy; 2026 The Greenville SC Guide. Find pools and aquatic centers in Greenville, SC.</p>
        </div>
      </footer>
    </div>
  );
}
