"use client";

import OdometerCounter from "./odometer-counter";

const STATS = [
  {
    label: "Students Trained",
    value: 18000,
    description: (
      <>
        Our students are now reaching new heights with{" "}
        <strong className="text-white">most advanced farms</strong>.
      </>
    ),
    bg: "bg-[#2D5A27]",
  },
  {
    label: "Sqft Hydroponic Farms Built",
    value: 110000,
    description: (
      <>
        Equipped with advanced technology, for{" "}
        <strong className="text-white">
          creating the sustainable and profitable future
        </strong>
      </>
    ),
    bg: "bg-[#8B7D3C]",
  },
  {
    label: "Acres of Land Covered",
    value: 600,
    description: (
      <>
        We are on a mission ever since, to{" "}
        <strong className="text-white">
          make farming possible to everyone
        </strong>
      </>
    ),
    bg: "bg-[#2D5A27]",
  },
];

export default function ImpactStats() {
  return (
    <div className="grid grid-cols-1 gap-0 md:grid-cols-3">
      {STATS.map((stat) => (
        <div key={stat.label} className={`${stat.bg} p-8 md:p-10 text-white`}>
          <p className="font-heading text-sm uppercase tracking-widest mb-2 text-white/80">
            {stat.label}
          </p>
          <OdometerCounter
            target={stat.value}
            className="font-heading text-5xl md:text-6xl mb-4"
          />
          <p className="text-white/80 leading-relaxed">{stat.description}</p>
        </div>
      ))}
    </div>
  );
}