import { Hexagon, Triangle, Circle, Square, Box } from "lucide-react";

export default function Partners() {
  const partners = [
    { name: "Boltshift", icon: Hexagon },
    { name: "Lightbox", icon: Box },
    { name: "FeatherDev", icon: Triangle },
    { name: "Spherule", icon: Circle },
    { name: "GlobalBank", icon: Square },
  ];

  return (
    <section className="py-12 border-y border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-gray-500 mb-8 tracking-wide">
          Various schools who trust us with their students
        </p>
        
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <div key={index} className="flex items-center gap-2 group cursor-pointer transition-all">
                <Icon size={28} className="text-primary group-hover:text-primary transition-colors" />
                <span className="font-bold text-xl text-gray-800 group-hover:text-gray-900">{partner.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
