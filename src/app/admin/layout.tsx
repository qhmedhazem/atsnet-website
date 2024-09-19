import React, { ReactNode } from "react";
import SettingsLayout from "@/components/SettingsLayout";

interface Props {
  children: ReactNode;
}

export default function UserLayout({ children }: Props) {
  return <SettingsLayout children={children} />;
}
