import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Greenville SC Guide | Activities, Services & Attractions",
  description: "Discover the best tennis courts, golf courses, massage therapy, RV parks, and more in Greenville, South Carolina. Your complete local guide.",
};

export default function GreenvillePage() {
  const categories = [
    { name: "Tennis Courts", slug: "tennis-courts", emoji: "🎾", count: "12+" },
    { name: "Golf Courses", slug: "golf-courses", emoji: "⛳", count: "15+" },
    { name: "Pickleball Courts", slug: "pickleball-courts", emoji: "🏓", count: "8+" },
    { name: "Hiking Trails", slug: "hiking", emoji: "🥾", count: "25+" },
    { name: "RV Parks", slug: "rv-parks", emoji: "🚐", count: "6+" },
    { name: "Gyms & Fitness", slug: "gyms", emoji: "💪", count: "30+" },
    { name: "Pools", slug: "pools", emoji: "🏊", count: "10+" },
    { name: "Parks", slug: "parks", emoji: "🌳", count: "20+" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <main className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Greenville, SC Guide
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Explore the best activities, services, and attractions in Greenville, South Carolina. 
            From tennis courts to professional services, find everything you need in the Upstate.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/greenville/${category.slug}`}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all border-2 border-transparent hover:border-green-500"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="text-5xl">{category.emoji}</div>
                <span className="text-sm font-semibold text-gray-500">{category.count}</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                {category.name}
              </h2>
              <p className="text-gray-600 text-sm">
                View all {category.name.toLowerCase()} in Greenville
              </p>
            </Link>
          ))}
        </div>

        {/* SEO Content */}
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            About Greenville, South Carolina
          </h2>
          <p className="text-gray-700 mb-4">
            Greenville is the vibrant heart of Upstate South Carolina, offering a perfect blend of outdoor recreation, 
            wellness services, and professional expertise. Whether you're a resident or visitor, our comprehensive guide 
            helps you discover the best tennis courts, golf courses, massage therapy centers, and much more.
          </p>
          <p className="text-gray-700 mb-4">
            Known for its beautiful downtown, Falls Park, and the Swamp Rabbit Trail, Greenville offers countless 
            opportunities for fitness, recreation, and relaxation. Find the perfect gym, discover hidden pickleball 
            courts, or locate the best RV parks for your next adventure.
          </p>
          <p className="text-gray-700">
            Our directory is regularly updated to ensure you have the most accurate information about hours, 
            locations, and services throughout the Greater Greenville area.
          </p>
        </div>
      </main>

      <footer className="bg-gray-50 border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 text-center text-gray-600">
          <p>&copy; 2026 The Greenville SC Guide. Your local guide to Greenville, SC.</p>
        </div>
      </footer>
    </div>
  );
}
