import React from 'react';

interface Testimonial {
  quote: string;
  author: string;
  location: string;
  service: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    quote: "Got three bids for my roof replacement. The whole process took maybe 10 minutes. Ended up saving over $3,000!",
    author: "Michael T.",
    location: "Portland, OR",
    service: "Roofing",
    rating: 5
  },
  {
    quote: "I needed movers fast and didn't know where to start. Within an hour I had four quotes to compare. So easy!",
    author: "Jessica R.",
    location: "Austin, TX",
    service: "Moving",
    rating: 5
  },
  {
    quote: "Shopping for auto insurance used to be a nightmare. This site made it actually enjoyable. Highly recommend.",
    author: "David L.",
    location: "Chicago, IL",
    service: "Auto Insurance",
    rating: 5
  },
  {
    quote: "Our HVAC died in the middle of summer. Found a great contractor through QuoteOtter and had it fixed next day.",
    author: "Sarah M.",
    location: "Phoenix, AZ",
    service: "HVAC",
    rating: 5
  },
  {
    quote: "Best part? It's completely free. I thought there'd be a catch but nope—just helpful professionals competing for my business.",
    author: "Robert K.",
    location: "Seattle, WA",
    service: "Plumbing",
    rating: 5
  },
  {
    quote: "We used this for both our home insurance and finding a contractor. Saved time and money on both. Will use again!",
    author: "Amanda P.",
    location: "Denver, CO",
    service: "Home Insurance",
    rating: 5
  }
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      {/* Rating Stars */}
      <div className="flex mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <i key={i} className="pi pi-star-fill text-yellow-400 text-lg" />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-gray-700 leading-relaxed mb-6 flex-grow italic">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
        {/* Avatar */}
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
          {testimonial.author.charAt(0)}
        </div>
        
        {/* Info */}
        <div>
          <div className="font-bold text-gray-900">{testimonial.author}</div>
          <div className="text-sm text-gray-500">{testimonial.location}</div>
          <div className="text-xs text-indigo-600 font-medium mt-1">{testimonial.service}</div>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Real Stories from Real Customers
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See why thousands of people trust QuoteOtter to find the right professionals
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6 text-lg">
            Join over 50,000 satisfied users who found their perfect professional
          </p>
          <button className="px-10 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
            Get Your Free Quotes Now
            <i className="pi pi-arrow-right ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
