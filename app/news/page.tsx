"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const newsArticles = [
  {
    title: "Ekhaya Farms Expands to Karonga District",
    excerpt:
      "We're excited to announce the opening of our newest store in Karonga, bringing farm-fresh produce and livestock products to northern Malawi.",
    date: "December 15, 2025",
    category: "Announcement",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "Record Livestock Growth This Season",
    excerpt:
      "Thanks to sustainable farming practices, both maize harvests and livestock growth exceeded expectations, demonstrating our integrated farming success.",
    date: "December 10, 2025",
    category: "Farm Update",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "Community Training Program Graduates 100 Farmers",
    excerpt:
      "Our farmer partnership program celebrated another milestone as 100 local farmers learned advanced livestock management techniques, ensuring healthier animals and higher-quality meat and poultry production.",
    date: "November 28, 2025",
    category: "Community",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "New Solar Installation Powers Livestock Facilities",
    excerpt:
      "Ekhaya Farms’ livestock facilities are now sustainably powered by 80% renewable energy, improving efficiency and animal welfare while reducing environmental impact.",
    date: "November 15, 2025",
    category: "Sustainability",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "Poultry Season Special at All Stores",
    excerpt:
      "It’s peak season for our ethically raised poultry! Visit your nearest Ekhaya Farm Food Store for high-quality, farm-fresh meat and poultry products.",
    date: "November 5, 2025",
    category: "Seasonal",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "Partnership with Ministry of Agriculture",
    excerpt:
      "Ekhaya Farms signs an MOU with the Ministry of Agriculture to support national livestock development initiatives and improve meat and poultry production standards.",
    date: "October 20, 2025",
    category: "Partnership",
    image: "/placeholder.svg?height=300&width=500",
  },
];

const upcomingEvents = [
  {
    title: "Farmers Market Day",
    date: "January 15, 2026",
    location: "Lilongwe City Centre Store",
    description: "Meet our livestock farmers and enjoy fresh, ethically raised meat and poultry samples.",
  },
  {
    title: "Sustainable Livestock Workshop",
    date: "January 25, 2026",
    location: "Ekhaya Training Centre, Lilongwe",
    description: "Free workshop on sustainable livestock management and best practices for animal health and welfare.",
  },
  {
    title: "School Nutrition Program Launch",
    date: "February 5, 2026",
    location: "Blantyre Primary Schools",
    description: "Expanding our school nutrition initiative to 50 more schools, providing healthy, high-quality meat and poultry products.",
  },
];

export default function NewsPage() {
  return (
    <>
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4">
            <div className="max-w-3xl">
              <span className="text-black font-medium text-sm tracking-wider uppercase mb-4 block">
                News & Updates
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#b5942f] mb-6 text-balance">
                Stay Connected with Ekhaya
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                The latest news, farm updates, livestock highlights, community stories,
                and announcements from Ekhaya Farms from crop fields to livestock units.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-16 bg-background">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={newsArticles[0].image || "/placeholder.svg"}
                  alt={newsArticles[0].title}
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#b5942f]/10 text-[#b5942f] text-xs font-medium">
                    {newsArticles[0].category}
                  </span>
                  <span className="text-muted-foreground text-sm flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-[#b5942f]" />
                    {newsArticles[0].date}
                  </span>
                </div>
                <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                  {newsArticles[0].title}
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  {newsArticles[0].excerpt}
                </p>
                <Button className="rounded-xl gap-2 bg-[#b5942f] text-black hover:bg-[#d4af37]">
                  Read Full Story
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="font-serif text-2xl font-bold text-[#b5942f] mb-8">Latest News</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsArticles.slice(1).map((article, index) => (
                <article
                  key={index}
                  className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow group"
                >
                  <div className="overflow-hidden">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full aspect-[5/3] object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2 py-0.5 rounded-full bg-[#b5942f]/10 text-[#b5942f] text-xs font-medium">
                        {article.category}
                      </span>
                      <span className="text-muted-foreground text-xs flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-[#b5942f]" />
                        {article.date}
                      </span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2 line-clamp-2">{article.title}</h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">{article.excerpt}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="font-serif text-2xl font-bold text-[#b5942f] mb-8">Upcoming Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="bg-card rounded-2xl p-6 border border-border">
                  <div className="flex items-center gap-2 text-[#b5942f] text-sm font-medium mb-3">
                    <Calendar className="w-4 h-4" />
                    {event.date}
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{event.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{event.description}</p>
                  <p className="text-xs text-muted-foreground">{event.location}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
