"use client";

import { FC } from "react";

import { Message } from "@prisma/client";
import { Switch } from "@/components/ui/Switch";
import { Label } from "@radix-ui/react-label";
import { useMessageUpdate } from "../../hooks/useMessageUpdate";
import FeatureCard from "@/components/FeatureCard";

interface Props {
  message: Message;
}

const ReplyMessage: FC<Props> = ({ message }) => {
  const { update, isPending } = useMessageUpdate(message, (msg) => {
    message.replied = msg.replied;
  });

  const toggleReplied = async () => {
    update({ replied: !message.replied });
  };

  return (
    <div className="flex gap-4 items-center">
      <Label>Replied: </Label>
      <Switch
        id="published"
        checked={isPending ? !message.replied : message.replied}
        onClick={toggleReplied}
        disabled={isPending}
      />
    </div>
  );
};

export default ReplyMessage;
