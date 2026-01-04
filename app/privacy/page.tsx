import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | The Greenville SC Guide',
  description: 'Privacy policy for The Greenville SC Guide, including information about cookies, advertising, and data collection.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <nav className="text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <span>Privacy Policy</span>
        </nav>

        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
          <section>
            <p className="text-sm text-gray-600 mb-4">Last Updated: January 4, 2026</p>
            <p className="text-gray-700">
              The Greenville SC Guide ("we," "our," or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
            <p className="text-gray-700 mb-3">
              We do not directly collect personal information from visitors. However, we use third-party services 
              that may collect information as described below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Google AdSense</h2>
            <p className="text-gray-700 mb-3">
              We use Google AdSense to display advertisements on our website. Google AdSense uses cookies and similar 
              technologies to serve ads based on your prior visits to our website or other websites.
            </p>
            <p className="text-gray-700 mb-3">
              Google's use of advertising cookies enables it and its partners to serve ads based on your visit to our 
              site and/or other sites on the Internet. You may opt out of personalized advertising by visiting 
              <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">
                Google's Ads Settings
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies</h2>
            <p className="text-gray-700 mb-3">
              Cookies are small text files that are placed on your device when you visit our website. We use cookies 
              and similar tracking technologies for the following purposes:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>To enable Google AdSense to display relevant advertisements</li>
              <li>To analyze website traffic and usage patterns</li>
              <li>To improve user experience</li>
            </ul>
            <p className="text-gray-700 mt-3">
              You can control cookies through your browser settings. However, disabling cookies may affect the 
              functionality of our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Links</h2>
            <p className="text-gray-700">
              Our website contains links to external websites (such as Google Maps for business locations). We are 
              not responsible for the privacy practices or content of these third-party sites. We encourage you to 
              review their privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Children's Privacy</h2>
            <p className="text-gray-700">
              Our website is not intended for children under the age of 13. We do not knowingly collect personal 
              information from children under 13.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the 
              new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions about this Privacy Policy, please contact us through our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
            <p className="text-gray-700 mb-3">
              Depending on your location, you may have certain rights regarding your data, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>The right to access information we have about you</li>
              <li>The right to request deletion of your data</li>
              <li>The right to opt out of certain data collection practices</li>
            </ul>
          </section>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <Link href="/" className="text-blue-600 hover:underline">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
