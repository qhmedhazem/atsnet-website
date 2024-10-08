import React from "react";
import ReactMarkdown from "react-markdown";

interface Props {
  content: string;
}

const AnnouncementContent: React.FC<Props> = ({ content }) => {
  return (
    <article
      className="markdown-content prose lg:prose-xl flex justify-center w-full"
      dir="auto"
    >
      <ReactMarkdown className="max-w-2xl">{content}</ReactMarkdown>
    </article>
  );
};

export default AnnouncementContent;
