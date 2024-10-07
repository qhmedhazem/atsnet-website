import type { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";
import ActivitiesSection from "@/features/activities/components/ActivitiesSection";
import { fetchAllActivities } from "@/features/activities/services/activityService";

export const metadata: Metadata = {
  title: "Activities",
};

export default async function Activities() {
  const activities = await fetchAllActivities();

  return (
    <PageLayout
      imageSrc="/landing2.jpg"
      imageAlt="test"
      title="Activities"
      description="Competitions, Programs, Honours, etc."
    >
      <ActivitiesSection activities={activities} />
    </PageLayout>
  );
}
