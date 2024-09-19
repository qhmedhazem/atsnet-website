"use client";

import { FC } from "react";

interface Props {
  open: boolean;
}

import * as React from "react";

import useMediaQuery from "@/hooks/use-media-query";
import { Button } from "@/components/ui/Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/Drawer";
import UsernameChangeForm from "./UsernameChangeForm";

export function UsernameChangeModal() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="mb-2">Change Username</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Change Username</DialogTitle>
            <DialogDescription>
              Change your handle. Click confirm when you're done.
            </DialogDescription>
          </DialogHeader>
          <UsernameChangeForm onClose={() => setOpen(false)} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button className="mb-2">Change Username</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Change Username</DrawerTitle>
          <DrawerDescription>
            Change your handle. Click confirm when you're done.
          </DrawerDescription>
        </DrawerHeader>
        <UsernameChangeForm onClose={() => setOpen(false)} />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
