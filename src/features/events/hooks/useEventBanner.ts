import { ChangeEvent, useState } from "react";
import { Event } from "@prisma/client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useUpdateEventBanner } from "./useUpdateEventBanner";
import { eventBannerSchema } from "../validation/eventBannerSchema";

export const useEventBanner = (event: Event) => {
  const { update, isPending, isSuccess, serverError } =
    useUpdateEventBanner(event);
  const [filePreview, setFilePreview] = useState<string | null>(null);

  const form = useForm<z.infer<typeof eventBannerSchema>>({
    resolver: zodResolver(eventBannerSchema),
  });

  const onSubmit = (data: z.infer<typeof eventBannerSchema>) => {
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
    } else {
      setFilePreview(null);
    }
  };

  const resetFile = () => {
    setFilePreview(null);
  };

  return {
    form,
    isPending,
    isSuccess,
    handleSubmit: form.handleSubmit(onSubmit),
    handleFileChange,
    resetFile,
    file: filePreview,
    serverError,
  };
};
