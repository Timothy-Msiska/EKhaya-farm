import { MapPin, Phone, Clock, Truck, Store, CheckCircle2 } from "lucide-react"

/*  Data */

const districts = [
  {
    name: "Lilongwe",
    stores: 3,
    locations: [
      {
        name: "Area 10 Store",
        address: "Area 10, Lilongwe",
        phone: "+265 1 234 001",
        hours: "7am - 8pm",
        mapUrl: "https://www.google.com/maps/search/Ekhaya+Store+Area+10+Lilongwe",
      },
      {
        name: "Gateway Mall Store",
        address: "Gateway Mall, Area 47, Lilongwe",
        phone: "+265 1 234 002",
        hours: "7am - 7pm",
        mapUrl: "https://www.google.com/maps/search/Ekhaya+Store+Gateway+Mall+Lilongwe",
      },
      {
        name: "Kanengo Store",
        address: "Kanengo Industrial Area, Lilongwe",
        phone: "+265 1 234 003",
        hours: "6am - 6pm",
        mapUrl: "https://www.google.com/maps/search/Ekhaya+Store+Kanengo+Lilongwe",
      },
    ],
  },
  {
    name: "Blantyre",
    stores: 2,
    locations: [
      {
        name: "Central Store",
        address: "Victoria Avenue, Blantyre",
        phone: "+265 1 234 004",
        hours: "7am - 8pm",
        mapUrl: "https://www.google.com/maps/search/Ekhaya+Store+Victoria+Avenue+Blantyre",
      },
      {
        name: "Limbe Store",
        address: "Main Road, Limbe",
        phone: "+265 1 234 005",
        hours: "7am - 7pm",
        mapUrl: "https://www.google.com/maps/search/Ekhaya+Store+Limbe+Blantyre",
      },
    ],
  },
  {
    name: "Zomba",
    stores: 1,
    locations: [
      {
        name: "Zomba Town Store",
        address: "Kamuzu Highway, Zomba",
        phone: "+265 1 234 007",
        hours: "7am - 7pm",
        mapUrl: "https://www.google.com/maps/search/Ekhaya+Store+Kamuzu+Highway+Zomba",
      },
    ],
  },
  {
    name: "Mangochi",
    stores: 1,
    locations: [
      {
        name: "Mangochi Store",
        address: "Main Street, Mangochi",
        phone: "+265 1 234 008",
        hours: "7am - 6pm",
        mapUrl: "https://www.google.com/maps/search/Ekhaya+Store+Main+Street+Mangochi",
      },
    ],
  },
  {
    name: "Kasungu",
    stores: 1,
    locations: [
      {
        name: "Kasungu Store",
        address: "Town Centre, Kasungu",
        phone: "+265 1 234 009",
        hours: "7am - 6pm",
        mapUrl: "https://www.google.com/maps/search/Ekhaya+Store+Town+Centre+Kasungu",
      },
    ],
  },
]

const distributionFeatures = [
  {
    icon: Truck,
    title: "Farm-Fresh Delivery",
    description:
      "Daily deliveries from our farms ensure produce reaches stores at peak freshness.",
  },
  {
    icon: Store,
    title: "12 Stores Nationwide",
    description:
      "Strategically located stores across all 8 districts for easy access.",
  },
  {
    icon: CheckCircle2,
    title: "Quality Guaranteed",
    description:
      "Every product undergoes quality checks before reaching our shelves.",
  },
]

/* Page */

export default function DistributionPage() {
  return (
    <>
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4">
            <div className="max-w-3xl">
              <span className="text-black font-medium text-sm tracking-wider uppercase mb-4 block">
                Distribution & Stores
              </span>

              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#b5942f] mb-6 text-balance">
                Find an Ekhaya Farm Food Store
              </h1>

              <p className="text-muted-foreground text-lg leading-relaxed">
                With 12 stores across 8 districts of Malawi, fresh Ekhaya Farms
                produce is never far away. Visit your nearest store to experience
                farm-fresh quality.
              </p>
            </div>
          </div>
        </section>

        {/* Distribution Features */}
        <section className="py-16 bg-background">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {distributionFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#b5942f]/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-6 h-6 text-[#b5942f]" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4">
            <div className="rounded-2xl overflow-hidden border border-border bg-card">
              <img
                src="/placeholder.svg?height=400&width=1200"
                alt="Map of Ekhaya Farm Food store locations"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </section>

        {/* Store Listings */}
        <section className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                All Store Locations
              </h2>
              <p className="text-muted-foreground">
                Click on a district to see store details
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {districts.map((district, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl border border-border overflow-hidden"
                >
                  <div className="bg-[#b5942f]/5 px-6 py-4 border-b border-border">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-lg text-foreground">
                        {district.name}
                      </h3>
                      <span className="text-sm text-muted-foreground">
                        {district.stores} store
                        {district.stores > 1 ? "s" : ""}
                      </span>
                    </div>
                  </div>

                  <div className="divide-y divide-border">
                    {district.locations.map((location, locIndex) => (
                      <div key={locIndex} className="p-5">
                        <h4 className="font-medium text-foreground mb-3">
                          {location.name}
                        </h4>

                        <div className="space-y-2 text-sm">
                          <div className="flex items-start gap-2 text-muted-foreground">
                            <MapPin className="w-4 h-4 mt-0.5 text-[#b5942f]" />
                            <span>{location.address}</span>
                          </div>

                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Phone className="w-4 h-4 text-[#b5942f]" />
                            <span>{location.phone}</span>
                          </div>

                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Clock className="w-4 h-4 text-[#b5942f]" />
                            <span>{location.hours}</span>
                          </div>

                          {location.mapUrl && (
                            <div className="mt-2">
                              <a
                                href={location.mapUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-[#b5942f] underline"
                              >
                                View on Map
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
