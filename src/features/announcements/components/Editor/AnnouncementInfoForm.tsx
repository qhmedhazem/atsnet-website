"use client";

import { FC, useEffect } from "react";
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
import { useAnnouncementInfo } from "../../hooks/useAnnouncementInfo";

interface Props {
  announcement: Annoncement;
}

const AnnouncementInfoForm: FC<Props> = ({ announcement }) => {
  const { handleSubmit, serverError, isPending, isSuccess, form } =
    useAnnouncementInfo(announcement);

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input {...field} className="w-92" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button isLoading={isPending} type="submit" size="lg">
          Confirm
        </Button>
        {serverError && <ErrorMessage>{serverError}</ErrorMessage>}
      </form>
    </Form>
  );
};

export default AnnouncementInfoForm;
