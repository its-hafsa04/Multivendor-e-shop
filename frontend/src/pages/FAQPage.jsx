import React, { useState } from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";

const FAQPage = () => {
  return (
    <div>
      <Header activeHeading={5} />
      <Faq />
      <Footer />
    </div>
  );
};

const Faq = () => {
  const [activeTab, setActiveTab] = useState(0)

  const toggleTab = (tab) => {
    if (activeTab === tab) {
      setActiveTab(0)
    } else {
      setActiveTab(tab)
    }
  }

  const faqData = [
    {
      id: 2,
      question: "What is your return policy?",
      answer:
        "If you're not satisfied with your purchase, we accept returns within 30 days of delivery. To initiate a return, please email us at support@myecommercestore.com with your order number and a brief explanation of why you're returning the item.",
    },
    {
      id: 3,
      question: "How do I track my order?",
      answer:
        "You can track your order by clicking the tracking link in your shipping confirmation email, or by logging into your account on our website and viewing the order details.",
    },
    {
      id: 4,
      question: "How do I contact customer support?",
      answer:
        "You can contact our customer support team by emailing us at support@myecommercestore.com, or by calling us at (555) 123-4567 between the hours of 9am and 5pm EST, Monday through Friday.",
    },
    {
      id: 5,
      question: "Can I change or cancel my order?",
      answer:
        "Unfortunately, once an order has been placed, we are not able to make changes or cancellations. If you no longer want the items you've ordered, you can return them for a refund within 30 days of delivery.",
    },
    {
      id: 6,
      question: "Do you offer international shipping?",
      answer: "Currently, we only offer shipping within the United States.",
    },
    {
      id: 7,
      question: "What payment methods do you accept?",
      answer: "We accept visa, mastercard, paypal payment method also we have cash on delivery system.",
    },
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
      <div className="mx-auto space-y-4">
        {faqData.map((faq) => (
          <div key={faq.id} className="border-b border-gray-200 pb-4">
            <button
              className="flex items-center justify-between w-full text-left hover:bg-gray-50 p-4 rounded-lg transition-colors duration-200"
              onClick={() => toggleTab(faq.id)}
            >
              <span className="text-lg font-medium text-gray-900 pr-4">{faq.question}</span>
              {activeTab === faq.id ? (
                // Up arrow when expanded
                <svg
                  className="h-6 w-6 text-gray-500 flex-shrink-0 transform transition-transform duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              ) : (
                // Down arrow when collapsed
                <svg
                  className="h-6 w-6 text-gray-500 flex-shrink-0 transform transition-transform duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </button>
            {activeTab === faq.id && (
              <div className="mt-4 px-4 pb-4">
                <p className="text-base text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQPage;
