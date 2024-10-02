import { FC, ReactNode, useRef } from "react";
import Image from "next/image";
import AlternatingSection from "./pre/AlteratingSection";

const AcademicsDepartementsSection: FC = () => {
  return (
    <>
      <AlternatingSection
        title="Electronics Engineering"
        content="The Electronics Engineering division focuses on development and application of electronic circuits and systems."
        items={[
          "Digital Electronics",
          "Radiation Detectors",
          "Electronic Measuring Instruments",
          "Nuclear Devices Electronics",
          "Computer networks",
          "Control Systems",
          "Electriconic Maintenance",
          "Logic Circuits",
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
      />
      <AlternatingSection
        title="Electrical Engineering"
        content="The Electrical Engineering division focuses on the design, development, and application of electrical systems and components within the nuclear power industry."
        items={[
          "Electric devices and Equipements",
          "Electric machines",
          "Electric engineering",
          "Power electronics",
          "Power generation systems",
          "Electric measuring devices",
          "Electrical Drawing",
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
      />
      <AlternatingSection
        title="Mechanical Engineering"
        content="The Mechanical Engineering division focuses on the application of mechanical systems and components."
        items={[
          "Engineering Science",
          "Mechanical technology",
          "Maintenance and operation",
          "Machine Design",
          "Materials Science",
          "Measurement",
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
      />
    </>
  );
};

export default AcademicsDepartementsSection;
