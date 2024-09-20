"use client";

import { FC, useEffect } from "react";
import { Event } from "@prisma/client";
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
import { useEventInfo } from "../../hooks/useEventInfo";
import DatePicker from "@/components/DatePicker";

interface Props {
  event: Event;
}

const EventInfoForm: FC<Props> = ({ event }) => {
  const { handleSubmit, serverError, isPending, form } = useEventInfo(event);

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
        <FormField
          control={form.control}
          name="registerLink"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Register Link</FormLabel>
              <FormControl>
                <Input {...field} className="w-92" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date</FormLabel>
              <FormControl>
                <DatePicker {...field} children={undefined} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button isLoading={isPending} type="submit" size="lg">
          Confirm
        </Button>
        {serverError && <ErrorMessage children={serverError} />}
      </form>
    </Form>
  );
};

export default EventInfoForm;
