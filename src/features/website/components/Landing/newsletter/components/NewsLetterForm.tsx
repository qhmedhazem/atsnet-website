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
import { useNewsLetterSubscribe } from "../hooks/useNewsLetterSubscribe";
import { ErrorMessage } from "@/components/ui/ErrorMessage";

const NewsLetterForm = () => {
  const { mutation, form, handleSubmit, serverError } =
    useNewsLetterSubscribe();

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 w-[80%] flex justify-center flex-col xl:w-[50%]"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="text-black"
                  placeholder="Enter your email address"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          isLoading={mutation.isPending}
          disabled={mutation.isSuccess || mutation.isError}
          type="submit"
          size="lg"
        >
          Subscribe
        </Button>
        {serverError && <ErrorMessage children={serverError} />}
      </form>
    </Form>
  );
};

export default NewsLetterForm;
