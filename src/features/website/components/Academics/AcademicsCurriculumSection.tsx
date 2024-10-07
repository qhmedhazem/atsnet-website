import { Atom, Radiation, ShieldAlert } from "lucide-react";
import CurriculumCard from "./CurriculumCard";

const AcademicsCurriculumSection = () => {
  return (
    <section className="bg-blue-500 py-12 w-full">
      <div className="container mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <CurriculumCard
          icon={<Atom size={32} />}
          title="Patricial Physics"
          description="Delve into the essential theories that govern nuclear processes, including the behavior of subatomic particles and the forces at play. This foundation enables students to explore advanced concepts in nuclear reactions and energy production, equipping them for innovative work in the nuclear field."
        />
        <CurriculumCard
          icon={<Radiation size={32} />}
          title="Nuclear Engineering"
          description="Gain hands-on experience in the engineering aspects of nuclear power generation. Students will learn about reactor design, systems integration, and the technologies that ensure safe and efficient energy production. This program prepares future engineers to tackle the challenges of the nuclear industry while promoting sustainability and safety."
        />
        <CurriculumCard
          icon={<ShieldAlert size={32} />}
          title="Nuclear Safety"
          description="This area focuses on the critical importance of safety in the nuclear field. Students will explore best practices in radiation protection, risk assessment, and emergency preparedness. By understanding safety protocols, they are trained to prevent accidents and effectively respond to any incidents, ensuring the well-being of both personnel and the public."
        />
      </div>
    </section>
  );
};

export default AcademicsCurriculumSection;
