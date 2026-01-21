"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4">
            <div className="max-w-3xl">
              <span className="text-black font-medium text-sm tracking-wider uppercase mb-4 block">
                Contact Us
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#b5942f] mb-6 text-balance">
                Get in Touch
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Have questions, feedback, or partnership inquiries? We'd love to hear from you. Reach out to our team
                and we'll respond as soon as possible.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-[#b5942f] mb-6">Send Us a Message</h2>
                {submitted ? (
                  <div className="bg-primary/10 rounded-2xl p-8 text-center">
                    <CheckCircle2 className="w-12 h-12 text-[#b5942f] mx-auto mb-4" />
                    <h3 className="font-semibold text-lg text-foreground mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">
                      Thank you for reaching out. Our team will get back to you within 24-48 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="Ekhaya" required className="rounded-xl" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Farm" required className="rounded-xl" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="ekhaya@example.com" required className="rounded-xl" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number (Optional)</Label>
                      <Input id="phone" type="tel" placeholder="+265 1 234 567" className="rounded-xl" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="How can we help?" required className="rounded-xl" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your inquiry..."
                        rows={5}
                        required
                        className="rounded-xl resize-none"
                      />
                    </div>
                    <Button type="submit" size="lg" className="rounded-xl gap-2 w-full sm:w-auto">
                      <Send className="w-4 h-4" />
                      Send Message
                    </Button>
                  </form>
                )}
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="bg-card rounded-2xl p-6 border border-border">
                    <h3 className="font-semibold text-foreground mb-4">Head Office</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-[#b5942f] mt-0.5 shrink-0" />
                        <div>
                          <p className="text-foreground">Ekhaya Farms Headquarters</p>
                          <p className="text-muted-foreground text-sm">Plot 456, Area 3, Lilongwe, Malawi</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-[#b5942f] shrink-0" />
                        <div>
                          <p className="text-foreground">+265 1 234 567</p>
                          <p className="text-muted-foreground text-sm">+265 1 234 568 (Fax)</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-[#b5942f] shrink-0" />
                        <div>
                          <p className="text-foreground">info@ekhayafarms.mw</p>
                          <p className="text-muted-foreground text-sm">support@ekhayafarms.mw</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-[#b5942f] mt-0.5 shrink-0" />
                        <div>
                          <p className="text-foreground">Office Hours</p>
                          <p className="text-muted-foreground text-sm">Monday - Friday: 8am - 5pm</p>
                          <p className="text-muted-foreground text-sm">Saturday: 9am - 1pm</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card rounded-2xl p-6 border border-border">
                    <h3 className="font-semibold text-foreground mb-4">Department Contacts</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Customer Service</span>
                        <span className="text-foreground">support@ekhayafarms.mw</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Farmer Partnerships</span>
                        <span className="text-foreground">partners@ekhayafarms.mw</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Media & Press</span>
                        <span className="text-foreground">media@ekhayafarms.mw</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Careers</span>
                        <span className="text-foreground">careers@ekhayafarms.mw</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Google Map */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4">
            <div className="rounded-2xl overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.123456789!2d33.774067!3d-13.998817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1940612efc6c1234%3A0xabcdef123456789!2sEkhaya%20Farms%20Headquarters!5e0!3m2!1sen!2smw!4v1705747200000!5m2!1sen!2smw"
                width="100%"
                height="400"
                className="border-0 w-full h-[400px]"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ekhaya Farms Headquarters Map"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
