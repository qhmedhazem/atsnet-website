import AlternatingSection from "@/components/AlteratingSection";
import Image from "next/image";
import StatItem from "../../../../components/StatItem";

const AcademicsSectionImage = () => {
  return (
    <Image
      src="/electric_motor.jpg"
      alt="School"
      width={1024}
      height={1024}
      className="rounded-md object-cover object-center"
    />
  );
};

const AcademicsSection = () => {
  return (
    <AlternatingSection
      id="academics"
      image={<AcademicsSectionImage />}
      subtitle="academics"
      title="Rich Technology Curriculum"
      reverse
    >
      <p>
        The school provides a well-rounded curriculum aimed at preparing
        students for careers in nuclear engineering and related fields. Through
        a mix of theory and practical training, students gain essential skills
        in nuclear energy, safety protocols, and engineering systems, laying the
        groundwork for future roles in Egypt’s nuclear power industry and
        beyond.
      </p>
      <div className="grid grid-cols-2 gap-3 md:gap-6">
        <StatItem value="8" label="Nuclear Courses" />
        <StatItem value="12" label="Tech Courses" />
      </div>
    </AlternatingSection>
  );
};

export default AcademicsSection;
