import { ChangeEvent, useState } from "react";
import { Annoncement } from "@prisma/client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useUpdateAnnouncementBanner } from "./useUpdateAnnouncementBanner";
import { annoncementBannerSchema } from "../validation/announcementBannerSchema";

export const useAnnouncementBanner = (announcement: Annoncement) => {
  const { update, isPending, isSuccess, serverError } =
    useUpdateAnnouncementBanner(announcement);
  const [filePreview, setFilePreview] = useState<string | null>(null);

  const form = useForm<z.infer<typeof annoncementBannerSchema>>({
    resolver: zodResolver(annoncementBannerSchema),
  });

  const onSubmit = (data: z.infer<typeof annoncementBannerSchema>) => {
    const formData = new FormData();
  
    if (data.file) {
      formData.append("file", data.file);
    }
  
    update(formData);
  };
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFilePreview(URL.createObjectURL(selectedFile));
    }
  };

  return {
    form,
    isPending,
    isSuccess,
    handleSubmit: form.handleSubmit(onSubmit),
    handleFileChange,
    file: filePreview,
    serverError,
  };
};
