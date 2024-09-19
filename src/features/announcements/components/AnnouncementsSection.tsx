"use client";

import { FC, HTMLAttributes } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/Button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { ErrorMessage } from "@/components/ui/ErrorMessage";
import { cn } from "@/lib/utils";
import AnnouncementCard from "./Announcements/AnnouncementCard";

interface Props extends HTMLAttributes<HTMLDivElement> {
  announcements: IAnnouncement[];
}

const AnnouncementsSection: FC<Props> = ({ announcements, ...props }) => {
  return (
    <section className={cn("w-full", props.className)}>
      <ul className="w-full h-auto flex flex-col gap-4">
        {announcements.map((announcement) => (
          <AnnouncementCard key={announcement.id} announcement={announcement} />
        ))}
      </ul>
    </section>
  );
};

export default AnnouncementsSection;
