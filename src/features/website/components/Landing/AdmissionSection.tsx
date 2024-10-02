import { FC, HTMLAttributes } from "react";
import AlternatingSection from "@/components/AlteratingSection";
import Image from "next/image";
import StatItem from "./stats/StatItem";
import { LinkButton } from "@/components/ui/Button";

const AboutSectionImage = () => {
  return (
    <Image
      src="/landing1.jpg"
      alt="School"
      width={800}
      height={600}
      className="hidden lg:block w-full h-full object-cover "
    />
  );
};

interface Props extends HTMLAttributes<HTMLDivElement> {}

const AdmissionSection: FC<Props> = () => {
  return (
    <section id="admission" className="w-full bg-light-blue-800">
      <AlternatingSection
        className="px-0 py-4 lg:mx-0 lg:py-0 text-primary-foreground w-full max-w-full items-center"
        image={<AboutSectionImage />}
      >
        <div className="container w-full h-full space-y-8 py-16">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">Admission</h2>
            <h3 className="text-xl font-light">
              Applications open in July/August
            </h3>
          </div>
          <p>
            The admissions process for El Dabaa Nuclear School is highly
            competitive, reflecting the rigorous standards and demanding nature
            of the program. Only the most exceptional students who demonstrate
            excellence in academics, physical fitness, and personal qualities
            will be selected to join this prestigious institution. Apply now to
            join ATSNET through the Dual Education Official Application Portal.
          </p>
          <LinkButton
            className="justify-self-end"
            size="lg"
            href="https://dualedu.moe.gov.eg/"
          >
            {true ? "Visit DualEdu" : "Apply"}
          </LinkButton>
        </div>
      </AlternatingSection>
    </section>
  );
};

export default AdmissionSection;
