"use client";

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
import { useAuthForm } from "../hooks/useAuthForm";
import { Textarea } from "@/components/ui/Textarea";
import { ErrorMessage } from "@/components/ui/ErrorMessage";

const AuthForm = () => {
  const { mutation, form, handleSubmit, serverError } = useAuthForm();

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit} className="space-y-4 min-w-fit">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="user@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Password" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          isLoading={mutation.isPending}
          disabled={mutation.isSuccess}
          type="submit"
          size="lg"
        >
          Login
        </Button>
        {serverError && <ErrorMessage children={serverError} />}
      </form>
    </Form>
  );
};

export default AuthForm;
