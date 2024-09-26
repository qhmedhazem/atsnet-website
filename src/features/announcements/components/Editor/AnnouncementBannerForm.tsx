"use client";

import { ChangeEvent, FC, useEffect, useState } from "react";
import { Annoncement } from "@prisma/client";
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
import { ErrorMessage } from "@/components/ui/ErrorMessage";
import { useUsernameChange } from "@/features/auth/hooks/useUsernameChange";
import { useAnnouncementBanner } from "../../hooks/useAnnouncementBanner";
import Image from "next/image";

interface Props {
  announcement: Annoncement;
}

const AnnouncementBannerForm: FC<Props> = ({ announcement }) => {
  const {
    handleSubmit,
    serverError,
    isPending,
    isSuccess,
    form,
    handleFileChange,
    file,
  } = useAnnouncementBanner(announcement);

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <FormField
          control={form.control}
          name="file"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Banner</FormLabel>
              <FormControl>
                <Input
                  className="w-92"
                  type="file"
                  onChange={(e) => {
                    const selectedFile = e.target.files?.[0];
                    if (selectedFile) {
                      field.onChange(selectedFile);
                      handleFileChange(e);
                    }
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {announcement.imageURL && !file && (
          <img src={announcement.imageURL} alt="Banner Image" />
        )}
        {file && <img src={file} alt="Banner Image" />}
        <Button isLoading={isPending} type="submit" size="lg">
          Confirm
        </Button>
        {serverError && <ErrorMessage children={serverError} />}
      </form>
    </Form>
  );
};

export default AnnouncementBannerForm;
