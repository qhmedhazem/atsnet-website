import FeatureCard from "@/components/FeatureCard";
import { Label } from "@/components/ui/Label";
import { getRelativeTime } from "@/lib/utils";
import { Message } from "@prisma/client";
import { FC } from "react";

interface Props {
  message: Message;
}

const MessageInfo: FC<Props> = ({ message }) => {
  return (
    <FeatureCard title="Message Info" className="gap-2">
      <p className="text-sm font-light">{getRelativeTime(message.createdAt)}</p>
      <div className="flex items-center gap-2">
        <Label>Email: </Label>
        <p className="text-md">{message.email}</p>
      </div>
      <div className="flex items-center gap-2">
        <Label>Phone Number: </Label>
        <p className="text-md">{message.phone}</p>
      </div>
    </FeatureCard>
  );
};

export default MessageInfo;
