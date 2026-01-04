import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RV Parks Near Greenville SC | Campgrounds & RV Resorts",
  description: "Find the best RV parks and campgrounds near Greenville, South Carolina. Full hookups, amenities, and scenic locations in the Upstate.",
  keywords: ["rv parks greenville sc", "campgrounds near greenville", "rv camping upstate sc"],
};

export default function RVParksPage() {
  const parks = [
    {
      name: "Paris Mountain State Park",
      address: "2401 State Park Rd, Greenville, SC 29609",
      type: "State Park",
      hookups: "Electric & Water",
      amenities: ["Hiking Trails", "Lake", "Fishing", "Picnic Areas"],
      description: "Beautiful state park with RV sites offering electric and water hookups. Surrounded by nature with excellent hiking trails and lake access.",
    },
    {
      name: "Lake Hartwell RV Park",
      address: "14680 Clemson Blvd, Seneca, SC 29678",
      type: "Private",
      hookups: "Full Hookups",
      amenities: ["Lake Access", "Boat Ramp", "WiFi", "Pool"],
      description: "Full-service RV park on beautiful Lake Hartwell. Offers full hookups, boat ramp, and seasonal amenities.",
    },
    {
      name: "Croft State Park",
      address: "450 Croft State Park Rd, Spartanburg, SC 29302",
      type: "State Park",
      hookups: "Electric & Water",
      amenities: ["Equestrian Trails", "Fishing", "Hiking", "Mountain Biking"],
      description: "Spacious RV sites with equestrian facilities nearby. Great for outdoor enthusiasts with diverse trail systems.",
    },
    {
      name: "Poinsett State Park",
      address: "6660 Poinsett Park Rd, Wedgefield, SC 29168",
      type: "State Park",
      hookups: "Electric & Water",
      amenities: ["Swimming", "Fishing", "Hiking", "Nature Programs"],
      description: "Scenic state park offering peaceful camping with access to mountain biking and hiking trails.",
    },
    {
      name: "Greenville West KOA",
      address: "17 Old Pumpkintown Rd, Marietta, SC 29661",
      type: "KOA",
      hookups: "Full Hookups",
      amenities: ["WiFi", "Pool", "Playground", "Cabins", "Camp Store"],
      description: "Full-service KOA campground with modern amenities. Family-friendly with pool, playground, and organized activities.",
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
          <span className="text-gray-700">RV Parks</span>
        </nav>

        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            RV Parks Near Greenville, SC
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Discover the best RV parks and campgrounds near Greenville, South Carolina. From state parks 
            to full-service resorts, find your perfect camping destination.
          </p>
        </div>

        <div className="grid gap-6 mb-16">
          {parks.map((park, index) => (
            <article 
              key={index}
              className="bg-white p-8 rounded-lg shadow-md border border-gray-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                    <Link href={`/greenville/rv-parks/${park.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                      {park.name}
                    </Link>
                  </h2>
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(park.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 mb-1 inline-flex items-center gap-1"
                  >
                    📍 {park.address}
                  </a>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  park.type === 'State Park' ? 'bg-green-100 text-green-800' : 
                  park.type === 'KOA' ? 'bg-purple-100 text-purple-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {park.type}
                </span>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center text-gray-700 mb-2">
                  <span className="font-semibold mr-2">Hookups:</span> {park.hookups}
                </div>
                <div className="text-gray-700">
                  <span className="font-semibold">Amenities:</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {park.amenities.map((amenity, i) => (
                      <span key={i} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700">{park.description}</p>
            </article>
          ))}
        </div>

        <div className="max-w-4xl bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Guide to RV Parks Near Greenville, SC
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              State Parks with RV Camping
            </h3>
            <p className="text-gray-700 mb-4">
              The Greenville area is surrounded by excellent state parks offering RV camping. Paris Mountain State Park 
              is just minutes from downtown Greenville and offers beautiful wooded sites with electric and water hookups. 
              Croft State Park in Spartanburg provides spacious sites and unique equestrian facilities for those traveling 
              with horses.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              Full-Service RV Parks and Resorts
            </h3>
            <p className="text-gray-700 mb-4">
              For those seeking full hookups and modern amenities, private RV parks like Greenville West KOA offer 
              everything you need including WiFi, pools, and organized activities. Lake Hartwell RV Park provides 
              waterfront camping with boat access for fishing and water recreation.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              Best Times to Visit
            </h3>
            <p className="text-gray-700 mb-4">
              Spring (March-May) and fall (September-November) offer the most pleasant weather for RV camping in the 
              Upstate. Summer can be hot and humid but offers full access to swimming and water activities. Winter 
              camping is possible but some amenities may be limited. Book popular parks well in advance during peak seasons.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              Things to Do Near Greenville RV Parks
            </h3>
            <p className="text-gray-700">
              Most RV parks near Greenville offer excellent outdoor recreation including hiking, fishing, and mountain biking. 
              You're also just a short drive from downtown Greenville's restaurants, Falls Park, and the Swamp Rabbit Trail. 
              Lake Hartwell provides exceptional fishing and boating opportunities. Many parks offer ranger-led programs and 
              nature activities for families.
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-gray-50 border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 text-center text-gray-600">
          <p>&copy; 2026 The Greenville SC Guide. Find RV parks near Greenville, SC.</p>
        </div>
      </footer>
    </div>
  );
}
