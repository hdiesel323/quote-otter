"use client";

import { useRef, useState } from "react";
import type { JSX } from "react";

// <FAQ> component is a lsit of <Item> component
// Just import the FAQ & add your FAQ content to the const faqList arrayy below.

interface FAQItemProps {
  question: string;
  answer: JSX.Element;
}

const faqList: FAQItemProps[] = [
  {
    question: "Is QuoteOtter really free?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        <p>
          Yes! QuoteOtter is 100% free for consumers. We never charge you to request quotes
          or compare providers. Our service is funded by providers who pay to connect with
          customers like you.
        </p>
      </div>
    ),
  },
  {
    question: "How many quotes will I receive?",
    answer: (
      <p>
        Typically, you&apos;ll receive 3-5 competitive quotes from pre-screened providers in your
        area. The exact number depends on the service type and provider availability in your
        location. All quotes are obligation-free.
      </p>
    ),
  },
  {
    question: "How long does it take to get quotes?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        <p>
          Most quotes arrive within 24-48 hours. Many providers respond within a few hours.
          You&apos;ll receive quotes directly via email and phone, allowing you to compare and
          choose the best option for your needs.
        </p>
      </div>
    ),
  },
  {
    question: "Are the providers vetted?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        <p>
          Yes! All providers in our network are pre-screened for licensing, insurance, and
          customer satisfaction. We verify credentials and review ratings to ensure you&apos;re
          connected with reputable professionals.
        </p>
      </div>
    ),
  },
  {
    question: "Do I have to hire someone from QuoteOtter?",
    answer: (
      <p>
        Absolutely not. There&apos;s no obligation to accept any quote. Use QuoteOtter to compare
        options, ask questions, and make an informed decision. You&apos;re free to choose the
        provider that best fits your needs and budget—or walk away entirely.
      </p>
    ),
  },
  {
    question: "What information do I need to provide?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        <p>
          The information required varies by service, but typically includes your ZIP code,
          project details, and contact information. We only ask what&apos;s necessary to match
          you with the right providers. Your information is never sold to third parties.
        </p>
      </div>
    ),
  },
  {
    question: "Can I use QuoteOtter for multiple services?",
    answer: (
      <p>
        Yes! QuoteOtter covers 40+ services across home improvement, insurance, moving, legal,
        financial, and auto categories. You can request quotes for as many services as you
        need—all from one convenient platform.
      </p>
    ),
  },
  {
    question: "What if I'm not satisfied with the quotes?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        <p>
          If you&apos;re not satisfied with the quotes you receive, you&apos;re under no obligation
          to proceed. You can also submit a new request with more specific requirements, or
          contact us for assistance in finding the right provider for your needs.
        </p>
      </div>
    ),
  },
];

const FaqItem = ({ item }: { item: FAQItemProps }) => {
  const accordion = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
      >
        <span
          className={`flex-1 text-base-content ${isOpen ? "text-primary" : ""}`}
        >
          {item?.question}
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isOpen && "rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpen && "rotate-180 hidden"
            }`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{item?.answer}</div>
      </div>
    </li>
  );
};

const FAQ = () => {
  return (
    <section className="bg-base-200" id="faq">
      <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold text-primary mb-4">FAQ</p>
          <p className="sm:text-4xl text-3xl font-extrabold text-base-content">
            Frequently Asked Questions
          </p>
        </div>

        <ul className="basis-1/2">
          {faqList.map((item, i) => (
            <FaqItem key={i} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
