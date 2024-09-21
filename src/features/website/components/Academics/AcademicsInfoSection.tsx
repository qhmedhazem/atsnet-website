import { FC, ReactNode, useRef } from "react";
import Image from "next/image";

const AcademicsInfoSection: FC = () => {
  return (
    <section className="container mx-auto flex flex-col gap-8 items-center lg:flex-row lg:items-start lg:space-x-8">
      <div className="space-y-4 lg:w-1/2">
        <h2 className="text-4xl font-bold lg:mt-8">Academics</h2>
        <p>
          The school provides a well-rounded curriculum aimed at preparing
          students for careers in nuclear engineering and related fields.
          Through a mix of theory and practical training, students gain
          essential skills in nuclear energy, safety protocols, and engineering
          systems, laying the groundwork for future roles in Egypt’s nuclear
          power industry and beyond.
        </p>
      </div>
      <div className="lg:w-1/2">
        <Image
          src="/books.jpg"
          alt="School"
          width={500}
          height={500}
          className="rounded-md"
        />
      </div>
    </section>
  );
};

export default AcademicsInfoSection;
