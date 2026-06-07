import React from 'react';
import { Sprout, Users, TrendingUp, HeartHandshake, Home as HomeIcon, Leaf } from 'lucide-react';

export default function Impact() {
  const sdgs = [
    { num: 1, title: "No Poverty", color: "bg-red-500", desc: "Increasing farmer incomes by removing middlemen." },
    { num: 2, title: "Zero Hunger", color: "bg-yellow-500", desc: "Improving access to affordable, nutritious food." },
    { num: 8, title: "Decent Work & Economic Growth", color: "bg-red-800", desc: "Stimulating local agricultural economies." },
    { num: 9, title: "Industry, Innovation & Infrastructure", color: "bg-orange-500", desc: "Digitizing the traditional agricultural value chain." },
    { num: 11, title: "Sustainable Cities & Communities", color: "bg-yellow-600", desc: "Strengthening urban-rural food networks." },
    { num: 12, title: "Responsible Consumption & Production", color: "bg-yellow-700", desc: "Dramatically reducing post-harvest food waste." }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <section className="bg-green-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <svg className="absolute left-0 top-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon fill="currentColor" points="0,100 100,0 100,100" />
          </svg>
        </div>
        <div className="container mx-auto px-4 text-center max-w-3xl relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Impact</h1>
          <p className="text-lg text-green-100 leading-relaxed">
            Measuring success not just in revenue, but in livelihoods improved, communities nourished, and food waste prevented.
          </p>
        </div>
      </section>

      {/* Beneficiary Model */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Beneficiary Model</h2>
            <p className="text-lg text-gray-600">How Culti Mart creates a ripple effect of positive change.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Farmers */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-6">
                <Sprout size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Small-Scale Farmers</h3>
              <p className="text-gray-600 mb-4">Empowered with direct market access, securing higher profit margins and receiving valuable data on consumer demand to plan future harvests effectively.</p>
              <div className="text-sm font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full inline-block">
                Economic Empowerment
              </div>
            </div>

            {/* Consumers */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Local Consumers</h3>
              <p className="text-gray-600 mb-4">Provided with a reliable, affordable source of fresh, locally grown produce, improving household nutrition while spending less than at retail chains.</p>
              <div className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block">
                Food Security
              </div>
            </div>

            {/* Local Economy */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">The Local Economy</h3>
              <p className="text-gray-600 mb-4">Capital remains circulating within the community. Job creation through delivery logistics and support services strengthens the overall economic ecosystem.</p>
              <div className="text-sm font-semibold text-yellow-600 bg-yellow-50 px-3 py-1 rounded-full inline-block">
                Community Resilience
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SDG Alignment */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">UN Sustainable Development Goals</h2>
            <p className="text-lg text-gray-600">Our operations actively contribute to achieving the following global goals.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sdgs.map((sdg) => (
              <div key={sdg.num} className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-100">
                <div className={`h-3 w-full ${sdg.color}`}></div>
                <div className="p-6 bg-white">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 ${sdg.color} text-white font-bold text-xl flex items-center justify-center rounded-lg shadow-sm`}>
                      {sdg.num}
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg leading-tight">{sdg.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {sdg.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action Banner */}
      <section className="py-16 bg-green-50 border-t border-green-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-green-900 mb-6">Partner With Us for Greater Impact</h2>
          <p className="text-green-800 max-w-2xl mx-auto mb-8">
            Are you an NGO, corporate sponsor, or government entity looking to support sustainable agriculture in South Africa? We'd love to connect.
          </p>
          <a href="mailto:partnerships@cultimart.org" className="inline-flex items-center gap-2 px-6 py-3 bg-green-700 hover:bg-green-800 text-white font-medium rounded-lg transition-colors">
            <HeartHandshake size={20} />
            Contact Partnerships
          </a>
        </div>
      </section>
    </div>
  );
}
