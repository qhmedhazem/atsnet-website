"use client";

import { FC } from "react";
import { Event } from "@prisma/client";
import { Button } from "@/components/ui/Button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";
import { ErrorMessage } from "@/components/ui/ErrorMessage";
import { useEventInfo } from "../../hooks/useEventInfo";
import DateAndTimePicker from "@/components/DateAndTimePicker"; // Updated import

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
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
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
              <FormLabel>Date and Time</FormLabel>
              <FormControl>
                <DateAndTimePicker {...field} onChange={field.onChange} />
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

export default EventInfoForm;
