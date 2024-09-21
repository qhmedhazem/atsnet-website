import { PageLayout } from "@/components/PageLayout";

import ContactInfo from "@/features/contact/components/ContactInfo";
import ContactForm from "@/features/contact/components/ContactForm";
import ScrollLineEffect from "@/features/website/components/ScrollSection";
import Image from "next/image";

export default function About() {
  return (
    <PageLayout
      imageSrc="/landing2.jpg"
      imageAlt="test"
      title="Contact Us"
      description="Contact with school staff."
    >
      <h1 className="text-3xl">Addmission</h1>

      <ScrollLineEffect />
    </PageLayout>
  );
}
