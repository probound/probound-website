import { HeartHandshake, PhoneCall, Briefcase } from "lucide-react";
import { Button } from "./ui/button";

// Empty workers array since we're removing Kelly
const workers: never[] = [];

export const DigitalWorkers = () => {
  return (
    <section className="py-24">
      <div className="container max-w-7xl">
        <div className="grid md:grid-cols-1 gap-8">
          {/* No content will be rendered since workers array is empty */}
          {workers.map((worker, index) => (
            <div key={index}></div>
          ))}
        </div>
      </div>
    </section>
  );
};