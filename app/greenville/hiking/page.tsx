import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hiking Trails Near Greenville SC | Best Hikes & Nature Trails",
  description: "Find the best hiking trails near Greenville, South Carolina. Easy walks to challenging mountain hikes, waterfalls, and scenic views in the Upstate.",
  keywords: ["hiking trails greenville sc", "hiking near greenville", "waterfalls greenville sc", "mountain trails upstate sc"],
};

export default function HikingPage() {
  const trails = [
    {
      name: "Paris Mountain State Park Trails",
      location: "2401 State Park Rd, Greenville, SC 29609",
      difficulty: "Easy to Moderate",
      length: "1.5 - 7 miles",
      features: ["Mountain Views", "Lake", "Multiple Trails", "Dog Friendly"],
      description: "Multiple trail options from easy lakeside walks to challenging mountain climbs. Popular trails include Sulphur Springs Trail and Mountain Trail with excellent views.",
    },
    {
      name: "Table Rock State Park",
      location: "158 E Ellison Ln, Pickens, SC 29671",
      difficulty: "Moderate to Strenuous",
      length: "3.6 - 7 miles",
      features: ["Summit Views", "Waterfall", "Rock Formations", "Backcountry"],
      description: "Iconic mountain hike with stunning summit views. The climb to Table Rock summit is challenging but rewards hikers with panoramic Blue Ridge views.",
    },
    {
      name: "Raven Cliff Falls Trail",
      location: "8155 F Van Clayton Memorial Hwy, Cleveland, SC 29635",
      difficulty: "Moderate",
      length: "4.4 miles",
      features: ["Waterfall", "Suspension Bridge", "Creek Views", "Scenic"],
      description: "Popular trail leading to a beautiful 420-foot waterfall. Features a suspension bridge with spectacular views. Best visited after rainfall.",
    },
    {
      name: "Falls Park Trail",
      location: "601 S Main St, Greenville, SC 29601",
      difficulty: "Easy",
      length: "1 mile",
      features: ["Waterfall", "Liberty Bridge", "Paved", "Wheelchair Accessible"],
      description: "Easy urban trail through downtown Greenville featuring the iconic Liberty Bridge and Reedy River Falls. Perfect for all ages and abilities.",
    },
    {
      name: "Swamp Rabbit Trail",
      location: "Multiple Access Points, Greenville to Travelers Rest",
      difficulty: "Easy",
      length: "22 miles",
      features: ["Paved", "Bike Friendly", "Multiple Access", "Scenic"],
      description: "22-mile paved multi-use trail connecting Greenville to Travelers Rest. Perfect for walking, running, or cycling with numerous parks and stops along the way.",
    },
    {
      name: "Jones Gap State Park",
      location: "303 Jones Gap Rd, Marietta, SC 29661",
      difficulty: "Moderate to Strenuous",
      length: "2.5 - 11 miles",
      features: ["Waterfalls", "Trout Stream", "Wilderness", "Backpacking"],
      description: "Mountain wilderness park with multiple waterfalls and pristine trout streams. Rainbow Falls Trail is a favorite for waterfall seekers.",
    },
    {
      name: "Caesars Head State Park",
      location: "8155 Geer Hwy, Cleveland, SC 29635",
      difficulty: "Easy to Moderate",
      length: "0.5 - 4 miles",
      features: ["Overlook Views", "Rock Formations", "Hawk Watching", "Scenic"],
      description: "Dramatic overlook with 3,266-foot views. Short accessible trail to the overlook and longer hikes into the gorge. Famous for hawk migration viewing.",
    },
    {
      name: "Campbell's Covered Bridge Trail",
      location: "33 Campbell Covered Bridge Rd, Landrum, SC 29356",
      difficulty: "Easy",
      length: "2 miles",
      features: ["Covered Bridge", "Creek Views", "Historic", "Family Friendly"],
      description: "Scenic trail featuring South Carolina's last remaining covered bridge. Easy walk along Beaverdam Creek with historic charm.",
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
          <span className="text-gray-700">Hiking Trails</span>
        </nav>

        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Hiking Trails Near Greenville, SC
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Discover the best hiking trails near Greenville, South Carolina. From easy urban walks to 
            challenging mountain summits, explore waterfalls, scenic overlooks, and pristine wilderness.
          </p>
        </div>

        <div className="grid gap-6 mb-16">
          {trails.map((trail, index) => (
            <article 
              key={index}
              className="bg-white p-8 rounded-lg shadow-md border border-gray-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                    <Link href={`/greenville/hiking/${trail.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                      {trail.name}
                    </Link>
                  </h2>
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(trail.location)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 mb-1 inline-flex items-center gap-1"
                  >
                    📍 {trail.location}
                  </a>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  trail.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                  trail.difficulty === 'Moderate' ? 'bg-yellow-100 text-yellow-800' :
                  trail.difficulty.includes('Moderate') ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {trail.difficulty}
                </span>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center text-gray-700 mb-2">
                  <span className="font-semibold mr-2">Distance:</span> {trail.length}
                </div>
                <div className="text-gray-700">
                  <span className="font-semibold">Features:</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {trail.features.map((feature, i) => (
                      <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700">{trail.description}</p>
            </article>
          ))}
        </div>

        <div className="max-w-4xl bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Guide to Hiking Near Greenville, SC
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              Mountain Hiking in the Blue Ridge
            </h3>
            <p className="text-gray-700 mb-4">
              The Greenville area sits at the foothills of the Blue Ridge Mountains, offering exceptional hiking 
              opportunities. Table Rock State Park and Caesars Head State Park feature some of the most dramatic 
              mountain scenery in South Carolina with challenging climbs and rewarding summit views. These hikes 
              range from moderate to strenuous and are best attempted by hikers in good physical condition.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              Waterfall Hikes
            </h3>
            <p className="text-gray-700 mb-4">
              The Upstate is blessed with numerous waterfall trails. Raven Cliff Falls is perhaps the most impressive, 
              featuring a 420-foot cascade accessible via a moderate 4.4-mile hike with a suspension bridge offering 
              spectacular views. Jones Gap State Park contains multiple waterfalls including Rainbow Falls, reached by 
              a scenic trail along a mountain trout stream. For the best waterfall viewing, visit after periods of 
              rainfall when flows are highest.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              Easy Urban & Family Trails
            </h3>
            <p className="text-gray-700 mb-4">
              For those seeking easier hikes, Greenville offers excellent options. Falls Park features a short, paved 
              loop perfect for all ages and abilities while showcasing downtown's natural beauty. The Swamp Rabbit Trail 
              provides 22 miles of paved walking and cycling through the city and countryside. Paris Mountain State Park 
              offers easier lakeside trails ideal for families with children.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              State Park Trail Systems
            </h3>
            <p className="text-gray-700 mb-4">
              South Carolina's state parks surrounding Greenville feature well-maintained trail systems with varying 
              difficulty levels. Paris Mountain, Table Rock, Caesars Head, and Jones Gap each offer multiple trails 
              allowing hikers to choose routes matching their ability and time constraints. Most state parks charge 
              a small admission fee ($5-8) and provide maps at entrance stations.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              Hiking Safety & Preparation
            </h3>
            <p className="text-gray-700 mb-4">
              Always check weather conditions before hiking and bring plenty of water, especially during hot summer months. 
              Wear appropriate footwear with good traction - many trails can be rocky or muddy. Let someone know your 
              hiking plans and expected return time. Cell service can be limited on mountain trails.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              Best Seasons for Hiking
            </h3>
            <p className="text-gray-700">
              Spring (March-May) and fall (September-November) offer the most pleasant hiking conditions with moderate 
              temperatures and beautiful scenery. Fall foliage peaks in mid-to-late October at higher elevations. 
              Summer hiking is possible but start early to avoid afternoon heat and thunderstorms. Winter hiking can 
              be enjoyable on clear days, though some high-elevation trails may be icy.
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-gray-50 border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 text-center text-gray-600">
          <p>&copy; 2026 The Greenville SC Guide. Find hiking trails near Greenville, SC.</p>
        </div>
      </footer>
    </div>
  );
}
