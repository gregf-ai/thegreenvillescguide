import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parks in Greenville SC | Best Parks & Outdoor Spaces",
  description: "Find the best parks in Greenville, South Carolina. Playgrounds, hiking trails, dog parks, picnic areas, and beautiful outdoor spaces.",
  keywords: ["parks greenville sc", "playgrounds greenville", "hiking trails greenville", "dog parks greenville"],
};

export default function ParksPage() {
  const parks = [
    {
      name: "Falls Park on the Reedy",
      address: "601 S Main St, Greenville, SC 29601",
      size: "32 acres",
      features: ["Liberty Bridge", "Waterfalls", "Gardens", "Walking Paths", "Events"],
      description: "Greenville's crown jewel featuring stunning waterfalls, the iconic Liberty Bridge, and beautifully landscaped gardens. Perfect for walks, photos, and events.",
    },
    {
      name: "Cleveland Park",
      address: "651 Vance St, Greenville, SC 29605",
      size: "126 acres",
      features: ["Playground", "Tennis Courts", "Pickleball", "Picnic Areas", "Walking Trails", "Rock Climbing"],
      description: "Large community park offering diverse recreation including sports courts, playground, rock climbing wall, and scenic walking trails.",
    },
    {
      name: "Paris Mountain State Park",
      address: "2401 State Park Rd, Greenville, SC 29609",
      size: "1,540 acres",
      features: ["Hiking Trails", "Mountain Biking", "Lake Swimming", "Camping", "Picnicking"],
      description: "Expansive state park with challenging hiking and mountain biking trails, lake swimming, and camping. Beautiful mountain views.",
    },
    {
      name: "Conestee Nature Preserve",
      address: "680 Mallet Hill Rd, Greenville, SC 29605",
      size: "400 acres",
      features: ["Nature Trails", "Birdwatching", "Boardwalks", "Wildlife Viewing"],
      description: "Natural wetland preserve with miles of trails, excellent birdwatching, and educational programs. Free admission.",
    },
    {
      name: "Discovery Island at Furman University",
      address: "3300 Poinsett Hwy, Greenville, SC 29613",
      size: "42 acres",
      features: ["Walking Trail", "Lake Views", "Floating Dock", "Swans"],
      description: "Scenic walking trail around a beautiful lake. Popular spot for jogging, walking, and enjoying nature.",
    },
    {
      name: "Timmons Park",
      address: "2 Timmons Park Ln, Greenville, SC 29601",
      size: "9 acres",
      features: ["Playground", "Splash Pad", "Amphitheater", "Swamp Rabbit Trail Access"],
      description: "Modern park featuring excellent playground, splash pad, and direct access to the Swamp Rabbit Trail.",
    },
    {
      name: "Greenville Zoo",
      address: "150 Cleveland Park Dr, Greenville, SC 29601",
      size: "14 acres",
      features: ["Zoo Animals", "Educational Programs", "Picnic Areas"],
      description: "Small but well-maintained zoo within Cleveland Park. Home to giraffes, elephants, and many other animals.",
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
          <span className="text-gray-700">Parks</span>
        </nav>

        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Parks in Greenville, SC
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Discover the best parks and outdoor spaces in Greenville, South Carolina. From the iconic 
            Falls Park to sprawling nature preserves, find your perfect outdoor destination.
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
                    <Link href={`/greenville/parks/${park.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
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
                  <p className="text-sm text-gray-500">{park.size}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="text-gray-700">
                  <span className="font-semibold">Features:</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {park.features.map((feature, i) => (
                      <span key={i} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                        {feature}
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
            Guide to Parks in Greenville, SC
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              Falls Park on the Reedy
            </h3>
            <p className="text-gray-700 mb-4">
              No visit to Greenville is complete without experiencing Falls Park. The stunning Liberty Bridge offers 
              incredible views of the Reedy River Falls, while beautifully landscaped gardens provide peaceful walking 
              areas. The park hosts numerous events throughout the year and is a favorite spot for photos, especially 
              at sunset. Free admission and parking nearby.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              Parks for Families with Children
            </h3>
            <p className="text-gray-700 mb-4">
              Cleveland Park and Timmons Park are top choices for families. Cleveland Park offers a large playground, 
              rock climbing wall, and various sports facilities. Timmons Park features a modern playground and splash 
              pad, plus easy access to the Swamp Rabbit Trail. Both parks have ample picnic areas and restroom facilities.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              Hiking and Nature Parks
            </h3>
            <p className="text-gray-700 mb-4">
              Paris Mountain State Park offers the most extensive trail system with options ranging from easy lakeside 
              walks to challenging mountain climbs. Conestee Nature Preserve provides excellent birdwatching and wildlife 
              viewing on easy, accessible trails. Both parks are free (Paris Mountain charges for parking) and offer 
              unique natural experiences just minutes from downtown.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              Dog-Friendly Parks
            </h3>
            <p className="text-gray-700 mb-4">
              Many Greenville parks welcome leashed dogs. Cleveland Park is particularly popular with dog owners, offering 
              plenty of space for walking. The Swamp Rabbit Trail, accessible from multiple parks, is perfect for longer 
              walks with your furry friend. Always clean up after your pet and keep dogs on leash unless in designated 
              off-leash areas.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              Swamp Rabbit Trail Access
            </h3>
            <p className="text-gray-700">
              Several parks provide access to Greenville's famous Swamp Rabbit Trail, a 22-mile multi-use trail perfect 
              for walking, running, and cycling. Timmons Park and Falls Park both offer convenient trail access with 
              parking. The trail connects many of Greenville's parks and continues north to Travelers Rest, offering 
              scenic views and numerous stops along the way.
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-gray-50 border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 text-center text-gray-600">
          <p>&copy; 2026 The Greenville SC Guide. Find parks and outdoor spaces in Greenville, SC.</p>
        </div>
      </footer>
    </div>
  );
}
