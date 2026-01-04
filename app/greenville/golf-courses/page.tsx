import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Golf Courses in Greenville SC | Public & Private Courses",
  description: "Find the best golf courses in Greenville, South Carolina. Championship courses, public courses, driving ranges, and more. Updated information and reviews.",
  keywords: ["golf courses greenville sc", "public golf greenville", "golf clubs greenville"],
};

export default function GolfCoursesPage() {
  // Sample listings - you'll replace with real data later
  const courses = [
    {
      name: "Verdae Greens Golf Club",
      address: "650 Verdae Blvd, Greenville, SC 29607",
      type: "Semi-Private",
      holes: 18,
      par: 72,
      description: "Beautiful championship course featuring rolling terrain and well-manicured greens. Designed by Bob Spence.",
    },
    {
      name: "Thornblade Club",
      address: "100 Thornblade Blvd, Greer, SC 29650",
      type: "Private",
      holes: 18,
      par: 72,
      description: "Exclusive private golf club with a championship Tom Fazio-designed course and exceptional amenities.",
    },
    {
      name: "The Preserve at Verdae",
      address: "650 Verdae Blvd, Greenville, SC 29607",
      type: "Public",
      holes: 18,
      par: 72,
      description: "Public golf course offering challenging play for all skill levels with scenic views throughout.",
    },
    {
      name: "Bonnie Brae Golf Course",
      address: "209 Oak Creek Dr, Greenville, SC 29605",
      type: "Public",
      holes: 18,
      par: 72,
      description: "Classic municipal course known for its tree-lined fairways and affordable pricing.",
    },
    {
      name: "Carolina Country Club",
      address: "150 Gower Rd, Spartanburg, SC 29301",
      type: "Private",
      holes: 18,
      par: 72,
      description: "Historic private country club featuring a championship golf course and elegant clubhouse.",
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
          <span className="text-gray-700">Golf Courses</span>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Golf Courses in Greenville, SC
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Discover the best golf courses in Greenville, South Carolina. From championship courses to 
            public courses perfect for casual play, find your next round of golf.
          </p>
        </div>

        {/* Course Listings */}
        <div className="grid gap-6 mb-16">
          {courses.map((course, index) => (
            <article 
              key={index}
              className="bg-white p-8 rounded-lg shadow-md border border-gray-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                    <Link href={`/greenville/golf-courses/${course.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                      {course.name}
                    </Link>
                  </h2>
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(course.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 mb-1 inline-flex items-center gap-1"
                  >
                    📍 {course.address}
                  </a>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  course.type === 'Public' ? 'bg-green-100 text-green-800' : 
                  course.type === 'Private' ? 'bg-blue-100 text-blue-800' :
                  'bg-purple-100 text-purple-800'
                }`}>
                  {course.type}
                </span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="flex items-center text-gray-700">
                  <span className="font-semibold mr-2">Holes:</span> {course.holes}
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="font-semibold mr-2">Par:</span> {course.par}
                </div>
              </div>
              
              <p className="text-gray-700">{course.description}</p>
            </article>
          ))}
        </div>

        {/* SEO Content */}
        <div className="max-w-4xl bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Guide to Golf Courses in Greenville, SC
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              Public Golf Courses in Greenville
            </h3>
            <p className="text-gray-700 mb-4">
              Greenville offers several excellent public golf courses that welcome players of all skill levels. 
              Bonnie Brae Golf Course is a beloved municipal course known for its challenging layout and 
              affordable rates. The Preserve at Verdae provides a more upscale public golf experience with 
              pristine conditions and scenic views.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              Private Golf Clubs
            </h3>
            <p className="text-gray-700 mb-4">
              For those seeking an exclusive golf experience, Greenville is home to prestigious private clubs 
              like Thornblade Club and Carolina Country Club. These facilities offer championship-caliber courses, 
              professional instruction, and exceptional amenities for members and their guests.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              Championship Golf in the Upstate
            </h3>
            <p className="text-gray-700 mb-4">
              The Greenville area features several championship golf courses designed by renowned architects. 
              Verdae Greens Golf Club, designed by Bob Spence, offers challenging play with beautiful scenery. 
              Tom Fazio's design at Thornblade Club is considered one of the finest in the Southeast.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              Golf Lessons & Practice Facilities
            </h3>
            <p className="text-gray-700 mb-4">
              Many Greenville golf courses offer professional instruction for players looking to improve their game. 
              Driving ranges and practice facilities are available at most courses, with some featuring extensive 
              short game areas and putting greens.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              Best Times to Play Golf in Greenville
            </h3>
            <p className="text-gray-700">
              Greenville's mild climate allows for year-round golf, with spring and fall offering ideal conditions. 
              Summer temperatures can be warm, making early morning or late afternoon tee times popular. Many courses 
              offer twilight rates for budget-conscious golfers. Book tee times in advance, especially on weekends.
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-gray-50 border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 text-center text-gray-600">
          <p>&copy; 2026 The Greenville SC Guide. Find golf courses in Greenville, SC.</p>
        </div>
      </footer>
    </div>
  );
}
