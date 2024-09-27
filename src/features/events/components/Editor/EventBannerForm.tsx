"use client";

import {
  ChangeEvent,
  ChangeEventHandler,
  FC,
  useEffect,
  useRef,
  useState,
} from "react";
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
import { useEventBanner } from "../../hooks/useEventBanner";
import { Event } from "@prisma/client";

interface Props {
  event: Event;
}

const EventBannerForm: FC<Props> = ({ event }) => {
  const {
    handleSubmit,
    serverError,
    isPending,
    isSuccess,
    form,
    handleFileChange,
    resetFile,
    file,
  } = useEventBanner(event);

  const ipRef = useRef<HTMLInputElement | null>(null);

  const openFile = () => {
    if (!ipRef.current) return;
    ipRef.current.click();
  };

  const onFileReset = () => {
    if (!ipRef.current) return;
    form.reset({
      file: undefined,
    });
    resetFile();
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit} className="space-y-4 w-full">
        <FormField
          control={form.control}
          name="file"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Banner</FormLabel>
              <FormControl>
                <div
                  className="relative overflow-hidden rounded-xl bg-white h-64 max-w-lg flex justify-center items-center group"
                  onClick={openFile}
                >
                  {file || event.imageURL ? (
                    <img
                      src={file || event.imageURL || undefined}
                      alt="Banner Image"
                      className="h-full object-center"
                    />
                  ) : (
                    <p>NO IMAGE</p>
                  )}

                  <Input
                    {...form.register("file")}
                    className="hidden"
                    type="file"
                    ref={ipRef}
                    onChange={(e) => {
                      if (!ipRef.current) return;
                      const selectedFile = ipRef.current.files?.[0];
                      field.onChange(selectedFile);
                      handleFileChange(e);
                    }}
                  />

                  <div className="cursor-pointer absolute flex justify-center items-center w-full h-full transition-opacity opacity-0 bg-black/75 hover:opacity-100">
                    <p className="text-white transition-opacity">
                      CHANGE BANNER
                    </p>
                  </div>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="space-x-2">
          <Button
            disabled={isPending}
            type="reset"
            onClick={onFileReset}
            size="lg"
            variant="destructive"
          >
            Reset
          </Button>
          <Button isLoading={isPending} type="submit" size="lg">
            Confirm
          </Button>
        </div>
        {serverError && <ErrorMessage children={serverError} />}
      </form>
    </Form>
  );
};

export default EventBannerForm;
