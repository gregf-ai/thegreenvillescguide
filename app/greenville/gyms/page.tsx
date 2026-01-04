import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gyms & Fitness Centers in Greenville SC | Best Gyms",
  description: "Find the best gyms and fitness centers in Greenville, South Carolina. CrossFit, yoga studios, 24-hour gyms, and specialty fitness facilities.",
  keywords: ["gyms greenville sc", "fitness centers greenville", "crossfit greenville", "yoga greenville"],
};

export default function GymsPage() {
  const gyms = [
    {
      name: "LA Fitness",
      address: "1025 Woodruff Rd, Greenville, SC 29607",
      type: "Chain",
      specialties: ["Cardio", "Weights", "Pool", "Basketball Court", "Group Classes"],
      hours: "Mon-Fri: 5am-11pm, Weekends: 8am-8pm",
      description: "Full-service fitness center with extensive equipment, pool, basketball court, and group fitness classes.",
    },
    {
      name: "Planet Fitness",
      address: "Multiple Locations",
      type: "24-Hour",
      specialties: ["Cardio Machines", "Strength Training", "Judgment Free Zone"],
      hours: "24 Hours",
      description: "Budget-friendly 24-hour gym with multiple Greenville locations. Judgment-free environment perfect for beginners.",
    },
    {
      name: "Sweat Fitness",
      address: "401 E McBee Ave, Greenville, SC 29601",
      type: "Local",
      specialties: ["Personal Training", "Small Group Training", "Boutique Fitness"],
      hours: "Mon-Fri: 5:30am-8pm, Sat: 7am-12pm",
      description: "Boutique fitness studio specializing in personal and small group training. Community-focused atmosphere.",
    },
    {
      name: "CrossFit Greenville",
      address: "105 Edinburgh Ct, Greenville, SC 29607",
      type: "CrossFit",
      specialties: ["CrossFit", "Olympic Lifting", "Functional Fitness"],
      hours: "Mon-Fri: 5am-8pm, Sat: 8am-12pm",
      description: "Premier CrossFit box offering coached classes, Olympic lifting, and a strong community atmosphere.",
    },
    {
      name: "YMCA of Greenville",
      address: "Multiple Locations",
      type: "Community",
      specialties: ["Pool", "Childcare", "Senior Programs", "Youth Sports"],
      hours: "Varies by location",
      description: "Community-focused fitness center with pools, childcare, and programs for all ages. Multiple locations across Greenville.",
    },
    {
      name: "Orange Theory Fitness",
      address: "920 S Pleasantburg Dr, Greenville, SC 29607",
      type: "Boutique",
      specialties: ["HIIT", "Heart Rate Monitoring", "Group Classes"],
      hours: "Mon-Fri: 5am-8pm, Weekends: 7am-12pm",
      description: "High-intensity interval training with heart rate monitoring. One-hour coached group workouts.",
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
          <span className="text-gray-700">Gyms & Fitness</span>
        </nav>

        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Gyms & Fitness Centers in Greenville, SC
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Discover the best gyms and fitness centers in Greenville, South Carolina. From 24-hour gyms to 
            boutique studios, CrossFit boxes to yoga studios, find your perfect fitness match.
          </p>
        </div>

        <div className="grid gap-6 mb-16">
          {gyms.map((gym, index) => (
            <article 
              key={index}
              className="bg-white p-8 rounded-lg shadow-md border border-gray-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                    <Link href={`/greenville/gyms/${gym.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                      {gym.name}
                    </Link>
                  </h2>
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(gym.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 mb-1 inline-flex items-center gap-1"
                  >
                    📍 {gym.address}
                  </a>
                  <p className="text-sm text-gray-500">{gym.hours}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  gym.type === '24-Hour' ? 'bg-purple-100 text-purple-800' :
                  gym.type === 'CrossFit' ? 'bg-red-100 text-red-800' :
                  gym.type === 'Boutique' ? 'bg-pink-100 text-pink-800' :
                  gym.type === 'Community' ? 'bg-green-100 text-green-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {gym.type}
                </span>
              </div>
              
              <div className="mb-4">
                <div className="text-gray-700">
                  <span className="font-semibold">Specialties:</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {gym.specialties.map((specialty, i) => (
                      <span key={i} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700">{gym.description}</p>
            </article>
          ))}
        </div>

        <div className="max-w-4xl bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Guide to Gyms & Fitness in Greenville, SC
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              24-Hour Gyms in Greenville
            </h3>
            <p className="text-gray-700 mb-4">
              For those with non-traditional schedules, Greenville offers several 24-hour fitness options. 
              Planet Fitness has multiple locations across the city, providing affordable access to cardio and 
              strength equipment any time of day or night. Perfect for early risers and night owls alike.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              Boutique Fitness Studios
            </h3>
            <p className="text-gray-700 mb-4">
              Greenville's boutique fitness scene has exploded with specialized studios offering everything from 
              high-intensity interval training to yoga and Pilates. Orange Theory Fitness provides heart-rate monitored 
              group workouts, while Sweat Fitness focuses on personalized small group training. These studios offer 
              a more intimate, community-focused atmosphere.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              CrossFit and Functional Fitness
            </h3>
            <p className="text-gray-700 mb-4">
              CrossFit has a strong presence in Greenville with several boxes offering coached classes in Olympic 
              lifting, gymnastics, and metabolic conditioning. The community aspect of CrossFit makes it popular for 
              those seeking both fitness and camaraderie. Most boxes offer introductory classes for beginners.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              Full-Service Fitness Centers
            </h3>
            <p className="text-gray-700 mb-4">
              LA Fitness and the YMCA provide comprehensive fitness facilities including pools, basketball courts, 
              group fitness classes, and childcare. These full-service gyms are ideal for families and those seeking 
              variety in their workouts. The YMCA offers programs for all ages from youth sports to senior fitness.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              Choosing the Right Gym
            </h3>
            <p className="text-gray-700">
              When selecting a gym, consider your fitness goals, schedule, and budget. Most gyms offer free trials 
              or day passes - take advantage of these to find the best fit. Consider proximity to home or work, 
              available equipment, class schedules, and overall atmosphere. Don't hesitate to visit multiple gyms 
              before making a commitment.
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-gray-50 border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 text-center text-gray-600">
          <p>&copy; 2026 The Greenville SC Guide. Find gyms and fitness centers in Greenville, SC.</p>
        </div>
      </footer>
    </div>
  );
}
