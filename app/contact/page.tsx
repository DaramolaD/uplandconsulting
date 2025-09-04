import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTag from "@/components/sections/SectionTag";
import SectionHeader from "@/components/sections/SectionHeader";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@upland.com",
      description: "Send us an email and we'll respond within 24 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Speak directly with our team during business hours"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Business District, Houston, TX 77001",
      description: "Our headquarters in the heart of Houston's energy sector"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Monday - Friday: 8:00 AM - 6:00 PM CST",
      description: "We're available to help during standard business hours"
    },
  ];

  const offices = [
    {
      city: "Houston",
      country: "United States",
      address: "123 Business District, Houston, TX 77001",
      phone: "+1 (555) 123-4567",
      isHeadquarters: true
    },
    {
      city: "London",
      country: "United Kingdom", 
      address: "456 Financial Quarter, London EC2A 4BX",
      phone: "+44 20 7123 4567",
      isHeadquarters: false
    },
    {
      city: "Singapore",
      country: "Singapore",
      address: "789 Marina Bay, Singapore 018956",
      phone: "+65 6123 4567",
      isHeadquarters: false
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center" style={{ backgroundColor: '#132A4D' }}>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <SectionTag variant="default">
              Get In Touch
            </SectionTag>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 font-serif leading-tight">
              Let&apos;s Start a Conversation
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-10 max-w-3xl mx-auto">
              Ready to transform your operations? We&apos;re here to help you navigate complex challenges and achieve your strategic goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <SectionHeader variant="dark">
                Send Us a Message
              </SectionHeader>
                          <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-6">
              Tell us about your project or challenge. We&apos;ll get back to you within 24 hours.
            </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#132A4D] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#132A4D] focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#132A4D] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#132A4D] focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#132A4D] focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#132A4D] focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="strategic-expansion">Strategic Market Expansion</option>
                    <option value="executive-advisory">Executive Advisory Services</option>
                    <option value="compliance">Compliance & Technical Excellence</option>
                    <option value="project-management">Project Management</option>
                    <option value="digital-transformation">Digital Transformation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    placeholder="Tell us about your project, challenge, or how we can help..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#132A4D] focus:border-transparent"
                  ></textarea>
                </div>

                <div className="text-center">
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-[#132A4D] hover:bg-[#1a3a5c] text-white px-8 py-4 text-lg font-semibold rounded-lg"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <SectionHeader variant="dark">
              Contact Information
            </SectionHeader>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
              Multiple ways to reach us. Choose what works best for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="w-16 h-16 bg-[#132A4D] rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-serif">
                  {info.title}
                </h3>
                <p className="text-[#132A4D] font-semibold mb-2">
                  {info.details}
                </p>
                <p className="text-gray-600 text-sm">
                  {info.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <SectionHeader variant="dark">
              Our Offices
            </SectionHeader>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
              We have offices in key business centers around the world to serve our global clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                {office.isHeadquarters && (
                  <div className="inline-block bg-[#132A4D] text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                    Headquarters
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2 font-serif">
                  {office.city}
                </h3>
                <p className="text-gray-600 mb-4">
                  {office.country}
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p className="flex items-center justify-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    {office.address}
                  </p>
                  <p className="flex items-center justify-center">
                    <Phone className="h-4 w-4 mr-2" />
                    {office.phone}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#132A4D]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-serif">
            Ready to Get Started?
          </h2>
                      <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Don&apos;t wait to transform your operations. Contact us today to schedule your consultation.
            </p>
          <Button
            size="lg"
            className="bg-white hover:bg-gray-100 text-[#132A4D] px-8 py-4 text-lg font-semibold rounded-lg"
          >
            Schedule Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

    </main>
  );
}
