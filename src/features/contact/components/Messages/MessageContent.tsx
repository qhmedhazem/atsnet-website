import FeatureCard from "@/components/FeatureCard";

import { Message } from "@prisma/client";
import { FC } from "react";
import Markdown from "react-markdown";

interface Props {
  message: Message;
}

const MessageContent: FC<Props> = ({ message }) => {
  return (
    <FeatureCard title="Message Content" className="gap-2">
      <Markdown>{message.content}</Markdown>
    </FeatureCard>
  );
};

export default MessageContent;
