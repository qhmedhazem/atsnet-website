import { PageLayout } from "@/components/PageLayout";

import ContactInfo from "@/features/contact/components/ContactInfo";
import ContactForm from "@/features/contact/components/ContactForm";

export default function About() {
  return (
    <PageLayout
      imageSrc="/landing2.jpg"
      imageAlt="test"
      title="Contact Us"
      description="Contact with school staff."
      className="mt-8 w-full flex flex-col items-center"
    >
      <h1 className="text-3xl">Let's Start Converstion.</h1>
      <div className="mt-8 gap-8 flex flex-col w-full lg:grid lg:grid-cols-2">
        <ContactInfo />
        <ContactForm />
      </div>
    </PageLayout>
  );
}
