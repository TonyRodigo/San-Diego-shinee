import { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

export default function Home() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-white text-black">
      <header className="bg-black text-white py-6 px-4 shadow-md">
        <h1 className="text-3xl font-bold">San Diego Shine - Car Detailing Experts</h1>
        <p className="text-lg mt-2">Mobile & In-Shop Auto Detailing Services in San Diego, CA</p>
      </header>

      <section className="py-10 px-4 grid gap-6 md:grid-cols-2">
        <Card className="shadow-xl">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Interior & Exterior Detailing</li>
              <li>Ceramic Coating</li>
              <li>Paint Correction</li>
              <li>Engine Cleaning</li>
              <li>Fleet Services</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-xl">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Book an Appointment</h2>
            <p className="mb-2">Enter your email and we'll get in touch with you shortly:</p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button>Submit</Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="py-10 px-4 bg-gray-100">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Locally owned and operated in San Diego</li>
          <li>Eco-friendly products and water-saving methods</li>
          <li>100% satisfaction guarantee</li>
          <li>Flexible scheduling – we come to you</li>
        </ul>
      </section>

      <section className="py-10 px-4">
        <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map(i => (
            <img key={i} src={`/images/detail${i}.jpg`} alt={`Detailing ${i}`} className="rounded-xl shadow" />
          ))}
        </div>
      </section>

      <section className="py-10 px-4 bg-gray-100">
        <h2 className="text-2xl font-semibold mb-4">Customer Testimonials</h2>
        <div className="space-y-4">
          <blockquote className="border-l-4 border-blue-500 pl-4 italic">“They made my car look brand new! Highly recommend San Diego Shine!” – Jessica M.</blockquote>
          <blockquote className="border-l-4 border-blue-500 pl-4 italic">“On-time, professional, and worth every penny.” – Carlos R.</blockquote>
          <blockquote className="border-l-4 border-blue-500 pl-4 italic">“I've used them for my fleet vehicles – consistent quality!” – Linda T.</blockquote>
        </div>
      </section>

      <section className="py-10 px-4">
        <h2 className="text-2xl font-semibold mb-4">Find Us</h2>
        <div className="w-full aspect-video">
          <iframe
            className="w-full h-full rounded-xl shadow"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13414.257205692526!2d-117.161087!3d32.715736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9549eccc8f46b%3A0x8b54f0f0df2a19c!2sSan%20Diego%2C%20CA!5e0!3m2!1sen!2sus!4v1716400000000"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <footer className="bg-black text-white py-6 px-4 text-center">
        <p>&copy; 2025 San Diego Shine. All rights reserved.</p>
      </footer>
    </div>
  );
}
