import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spartanburg SC Guide | Activities, Services & Attractions",
  description: "Discover the best tennis courts, golf courses, massage therapy, RV parks, and more in Spartanburg, South Carolina. Your complete local guide.",
};

export default function SpartanburgPage() {
  const categories = [
    { name: "Tennis Courts", slug: "tennis-courts", emoji: "🎾", count: "8+" },
    { name: "Golf Courses", slug: "golf-courses", emoji: "⛳", count: "10+" },
    { name: "Pickleball Courts", slug: "pickleball-courts", emoji: "🏓", count: "6+" },
    { name: "Hiking Trails", slug: "hiking", emoji: "🥾", count: "18+" },
    { name: "RV Parks", slug: "rv-parks", emoji: "🚐", count: "5+" },
    { name: "Gyms & Fitness", slug: "gyms", emoji: "💪", count: "20+" },
    { name: "Pools", slug: "pools", emoji: "🏊", count: "8+" },
    { name: "Parks", slug: "parks", emoji: "🌳", count: "15+" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <main className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Spartanburg, SC Guide
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Explore the best activities, services, and attractions in Spartanburg, South Carolina. 
            Your complete guide to everything Spartanburg has to offer.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/spartanburg/${category.slug}`}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all border-2 border-transparent hover:border-purple-500"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="text-5xl">{category.emoji}</div>
                <span className="text-sm font-semibold text-gray-500">{category.count}</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                {category.name}
              </h2>
              <p className="text-gray-600 text-sm">
                View all {category.name.toLowerCase()} in Spartanburg
              </p>
            </Link>
          ))}
        </div>

        {/* SEO Content */}
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            About Spartanburg, South Carolina
          </h2>
          <p className="text-gray-700 mb-4">
            Spartanburg is a thriving city in Upstate South Carolina, known for its rich history, excellent 
            recreation facilities, and strong business community. Whether you're searching for tennis courts, 
            golf courses, or professional services, our guide connects you with the best Spartanburg has to offer.
          </p>
          <p className="text-gray-700">
            From scenic parks to modern fitness facilities, Spartanburg provides residents and visitors with 
            diverse options for wellness, recreation, and daily needs. Explore our comprehensive directory to 
            find exactly what you're looking for in the Hub City.
          </p>
        </div>
      </main>

      <footer className="bg-gray-50 border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 text-center text-gray-600">
          <p>&copy; 2026 The Greenville SC Guide. Your local guide to Spartanburg, SC.</p>
        </div>
      </footer>
    </div>
  );
}
