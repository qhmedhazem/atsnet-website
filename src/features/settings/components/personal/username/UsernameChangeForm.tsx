"use client";

import { FC, useEffect } from "react";
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
import { useUsernameChange } from "@/features/settings/hooks/useUsernameChange";

interface Props {
  onClose?: () => void;
}

const UsernameChangeForm: FC<Props> = ({ onClose }) => {
  const { mutation, form, handleSubmit, serverError } = useUsernameChange();

  useEffect(() => {
    if (mutation.isSuccess && onClose) {
      onClose();
    }
  }, [mutation.isSuccess, onClose]);

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit} className="space-y-4 min-w-fit">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="username" {...field} />
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
                <Input placeholder="Your password" type="password" {...field} />
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
          Confirm
        </Button>
        {serverError && <ErrorMessage children={serverError} />}
      </form>
    </Form>
  );
};

export default UsernameChangeForm;
