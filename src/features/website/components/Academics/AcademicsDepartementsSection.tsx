import { FC, ReactNode, useRef } from "react";
import Image from "next/image";
import AlternatingSection from "@/components/AlteratingSection";

const AcademicsDepartementsSection: FC = () => {
  return (
    <>
      <AlternatingSection
        title="Electrical Engineering"
        items={[
          "Electrical Circuits",
          "Power Systems",
          "Control Systems",
          "Instrumentation and Measurement",
          "Electrical Machines",
        ]}
        image={
          <Image
            src="/landing2.jpg"
            alt="School"
            width={500}
            height={500}
            className="rounded-md"
          />
        }
        reverse={false}
      >
        <p>
          The Electrical Engineering division focuses on the design,
          development, and application of electrical systems and components
          within the nuclear power industry.
        </p>
      </AlternatingSection>
      <AlternatingSection
        title="Electronics Engineering"
        items={[
          "Digital Electronics",
          "Analog Electronics",
          "Microelectronics",
          "Embedded Systems",
          "Communication Systems",
        ]}
        image={
          <Image
            src="/landing2.jpg"
            alt="School"
            width={500}
            height={500}
            className="rounded-md"
          />
        }
        reverse={true}
      >
        <p>
          The Electronics Engineering division focuses on development and
          application of electronic circuits and systems.
        </p>
      </AlternatingSection>
      <AlternatingSection
        title="Mechanical Engineering"
        items={[
          "Solid Mechanics",
          "Thermodynamics",
          "Fluid Mechanics",
          "Machine Design",
          "Materials Science",
        ]}
        image={
          <Image
            src="/landing2.jpg"
            alt="School"
            width={500}
            height={500}
            className="rounded-md"
          />
        }
        reverse={false}
      >
        The Mechanical Engineering division focuses on the application of
        mechanical systems and components.
      </AlternatingSection>
    </>
  );
};

export default AcademicsDepartementsSection;
