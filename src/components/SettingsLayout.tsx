"use client";

import { FC, HTMLAttributes, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/Sheet";
import { cn } from "@/lib/utils";
import { MenuIcon, Settings, XIcon } from "lucide-react";
import Link from "@/components/ui/Link";

// Sidebar items
const userSettings = [
  { label: "Personal Settings", href: "/settings/personal" },
];

const adminSettings = [
  { label: "Announcements", href: "/admin/announcements" },
  { label: "Events", href: "/admin/events" },
  { label: "Messages", href: "/admin/messages" },
  { label: "Users", href: "/admin/users" },
];

interface Props extends HTMLAttributes<HTMLDivElement> {}

const SettingsLayout: FC<Props> = ({ ...props }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col pt-24">
      {/* Mobile Menu */}
      <div className="md:hidden bg-primary p-4">
        <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
          <SheetTrigger asChild>
            <button className="text-white">
              <MenuIcon className="h-6 w-6" />
            </button>
          </SheetTrigger>

          <SheetContent side="left" className="p-4 bg-primary text-white">
            {/* Sidebar content */}
            <SidebarContent />
          </SheetContent>
        </Sheet>
      </div>

      {/* Sidebar for larger screens */}
      <div className="flex flex-col md:flex-row">
        <aside className="hidden md:block md:w-64 bg-primary text-white flex-shrink-0">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Settings</h2>
            <SidebarContent />
          </div>
        </aside>

        {/* Main Content Area */}
        <main className={cn(props.className, "flex-1 p-6 ")} {...props} />
      </div>
    </div>
  );
};

// Sidebar content extracted into a separate component for reuse
export const SidebarContent = () => (
  <div className="w-full mt-8 flex flex-col gap-8">
    {/* User Section */}
    <div>
      <h3 className="text-lg font-semibold">User</h3>
      <ul className="space-y-2 mt-2">
        {userSettings.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="block p-2 hover:bg-muted-foreground rounded-md"
              activeClass="bg-muted-foreground"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>

    {/* Admin Section */}
    <div>
      <h3 className="text-lg font-semibold">Admininstration</h3>
      <ul className="space-y-2 mt-2">
        {adminSettings.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="block p-2 hover:bg-muted-foreground rounded-md"
              activeClass="bg-muted-foreground"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default SettingsLayout;
