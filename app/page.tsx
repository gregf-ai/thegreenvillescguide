import Link from "next/link";

export default function Home() {
  const categories = [
    { name: "Tennis Courts", slug: "tennis-courts", emoji: "🎾" },
    { name: "Golf Courses", slug: "golf-courses", emoji: "⛳" },
    { name: "Pickleball Courts", slug: "pickleball-courts", emoji: "🏓" },
    { name: "Hiking Trails", slug: "hiking", emoji: "🥾" },
    { name: "RV Parks", slug: "rv-parks", emoji: "🚐" },
    { name: "Gyms & Fitness", slug: "gyms", emoji: "💪" },
    { name: "Pools", slug: "pools", emoji: "🏊" },
    { name: "Parks", slug: "parks", emoji: "🌳" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <main className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            The Greenville SC Guide
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your complete guide to tennis courts, golf courses, pickleball, RV parks, and more in Greenville & Spartanburg, South Carolina
          </p>
        </div>

        {/* Cities Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Explore by City
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Link 
              href="/greenville"
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border-2 border-transparent hover:border-blue-500"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Greenville
              </h3>
              <p className="text-gray-600">
                Discover the best activities, services, and attractions in Greenville, SC
              </p>
            </Link>
            <Link 
              href="/spartanburg"
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border-2 border-transparent hover:border-blue-500"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Spartanburg
              </h3>
              <p className="text-gray-600">
                Explore top-rated businesses and places in Spartanburg, SC
              </p>
            </Link>
          </div>
        </div>

        {/* Categories Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Browse by Category
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/${category.slug}`}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center border border-gray-200 hover:border-blue-400"
              >
                <div className="text-4xl mb-2">{category.emoji}</div>
                <h3 className="font-semibold text-gray-900">{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>

        {/* SEO Content */}
        <div className="mt-16 max-w-4xl mx-auto prose prose-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Your Local Guide to Upstate South Carolina
          </h2>
          <p className="text-gray-700 mb-4">
            Welcome to The Greenville SC Guide - your comprehensive resource for discovering the best activities, 
            recreation, and attractions in Greenville and Spartanburg, South Carolina. Whether you're looking for 
            tennis courts, golf courses, pickleball courts, RV parks, gyms, or outdoor recreation, we've got you covered.
          </p>
          <p className="text-gray-700">
            The Upstate South Carolina region offers a vibrant mix of recreational opportunities, wellness services, 
            and professional expertise. Our directory helps you find exactly what you need, with detailed information 
            about hours, locations, and services offered. Updated regularly to ensure accuracy.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 text-center text-gray-600">
          <p>&copy; 2026 The Greenville SC Guide. Your local guide to Upstate SC.</p>
        </div>
      </footer>
    </div>
  );
}


