"use client";

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
import { useNewsLetterSubscribe } from "../../../hooks/useNewsLetterSubscribe";
import { ErrorMessage } from "@/components/ui/ErrorMessage";

const NewsLetterForm = () => {
  const { mutation, form, handleSubmit, serverError } =
    useNewsLetterSubscribe();

  const isSubscribed =
    mutation.isSuccess || mutation.isError || mutation.isPending;

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit} className="space-y-4 w-full lg:w-[50%]">
        <div className="flex justify-between items-center">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    disabled={isSubscribed}
                    className="text-black rounded-r-none"
                    placeholder="Enter your email address"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            disabled={
              mutation.isSuccess || mutation.isError || mutation.isPending
            }
            type="submit"
            size="lg"
            className="rounded-l-none"
          >
            {isSubscribed ? "Subscribed" : "Subscribe"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default NewsLetterForm;
