import AlternatingSection from "@/components/AlteratingSection";
import Image from "next/image";
import StatItem from "./stats/StatItem";

const AboutSectionImage = () => {
  return (
    <Image
      src="/landing1.jpg"
      alt="School"
      width={500}
      height={500}
      className="rounded-md"
    />
  );
};

const AboutSection = () => {
  return (
    <AlternatingSection
      id="about"
      image={<AboutSectionImage />}
      title="About School"
    >
      <p>
        El-Dabaa Nuclear School is a premier institution dedicated to educating
        and training the next generation of nuclear engineers and scientists. We
        are proud to be a key component of Egypt's ambitious nuclear energy
        program.
      </p>
      <div className="grid grid-cols-2 gap-3 md:gap-6">
        <StatItem value="+300" label="Students" />
        <StatItem value="+60" label="Staff" />
        <StatItem value="100%" label="Discipline" />
      </div>
    </AlternatingSection>
  );
};

export default AboutSection;
