import React from 'react';
import { Target, Lightbulb, Users, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <section className="bg-green-900 text-white py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Culti Mart</h1>
          <p className="text-lg text-green-100 leading-relaxed">
            We are a student-led social enterprise developed under Enactus UKZN, driven by the passion to revolutionize South Africa's agricultural value chain.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-green-50 p-10 rounded-2xl border border-green-100">
              <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center text-white mb-6">
                <Target size={28} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                To reduce distribution inefficiencies in the agricultural sector by providing a direct, transparent platform that connects small-scale farmers directly with local consumers, ensuring fair prices and reduced food waste.
              </p>
            </div>
            <div className="bg-yellow-50 p-10 rounded-2xl border border-yellow-100">
              <div className="w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center text-white mb-6">
                <Lightbulb size={28} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                To become South Africa's leading agricultural marketplace, fostering resilient local economies and ensuring food security for communities nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem & Solution */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why We Started</h2>
            <p className="text-lg text-gray-600">Addressing the critical failures in traditional agricultural markets.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <AlertCircle className="text-red-500 mt-1 shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">The Problem</h3>
                  <p className="text-gray-700">Small-scale farmers are often exploited by middlemen who dictate unfair prices. Furthermore, inefficient supply chains lead to significant post-harvest food waste, while consumers in urban areas face high retail prices for fresh produce.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 pt-6 border-t border-gray-200">
                <CheckCircle2 className="text-green-600 mt-1 shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">The Solution</h3>
                  <p className="text-gray-700">Culti Mart provides a decentralized digital marketplace. By bypassing middlemen, we empower farmers to set their own fair prices, minimize food spoilage through on-demand ordering, and offer consumers affordable, fresh, local food.</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-green-200 rounded-full absolute -top-10 -right-10 opacity-50 z-0"></div>
              <img src="https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?auto=format&fit=crop&w=800&q=80" alt="Farmer holding fresh produce" className="rounded-2xl shadow-xl relative z-10 object-cover w-full aspect-[4/3]" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <div className="w-16 h-16 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
            <Users size={32} />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Team</h2>
          <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
            Culti Mart is proudly driven by the <span className="font-semibold text-green-700">Enactus UKZN</span> team. We are a multidisciplinary group of students combining our expertise in research and development, software engineering, and community engagement to build scalable solutions that create tangible social impact.
          </p>
          <div className="inline-flex items-center justify-center gap-2 text-green-700 font-medium bg-green-50 px-6 py-3 rounded-full border border-green-100">
            Learn more about Enactus UKZN <span className="text-xl">&rarr;</span>
          </div>
        </div>
      </section>
    </div>
  );
}
