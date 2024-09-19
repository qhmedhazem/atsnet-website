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
import { usePasswordChange } from "@/features/settings/hooks/usePasswordChange";

interface Props {
  onClose?: () => void;
}

const PasswordChangeForm: FC<Props> = ({ onClose }) => {
  const { mutation, form, handleSubmit, serverError } = usePasswordChange();

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
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="Your old password"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="new_password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter new password"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirm_password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="Confirm your password"
                  type="password"
                  {...field}
                />
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

export default PasswordChangeForm;
