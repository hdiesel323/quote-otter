import HeaderQuoteOtter from "@/components/HeaderQuoteOtter";
import FooterQuoteOtter from "@/components/FooterQuoteOtter";
import { VERTICALS } from "@/types/verticals";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <>
      <HeaderQuoteOtter />
      <main className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <div className="mb-8">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-semibold group"
            >
              <i className="pi pi-arrow-left transform group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </div>

          {/* Page Header */}
          <div className="text-center mb-16 animate-[fadeInUp_0.8s_ease-out]">
            <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
              All Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse all 46+ services and get free quotes from trusted professionals
            </p>
          </div>

          {/* All Verticals */}
          {VERTICALS.map((vertical) => (
            <div key={vertical.id} className="mb-20">
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${vertical.color} flex items-center justify-center`}>
                  <i className={`pi ${vertical.icon} text-3xl text-white`} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">{vertical.name}</h2>
                  <p className="text-gray-600">{vertical.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {vertical.categories.map((category) => (
                  <Link
                    key={category.id}
                    href={`/quotes/${category.slug}`}
                    className="group relative p-6 rounded-xl border-2 border-gray-200 bg-white hover:border-indigo-500 hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex flex-col items-center space-y-3 text-center">
                      <div className="w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                        <i className={`pi ${category.icon} text-xl text-indigo-600 group-hover:text-white`} />
                      </div>
                      <h3 className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {category.description}
                      </p>
                      {category.popular && (
                        <span className="absolute top-2 right-2 px-2 py-1 bg-yellow-400 text-yellow-900 text-xs font-bold rounded-full">
                          Popular
                        </span>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
      <FooterQuoteOtter />
    </>
  );
}
