import Link from "next/link";
import React, { FC } from "react";

interface Link {
  title: string;
  href: string;
}

interface Props {
  title: string;
  links: Link[];
}

const FooterLinksList: FC<Props> = ({ title, links }) => {
  return (
    <div className="flex flex-col gap-6">
      <h6 className="text-xl">{title}</h6>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.href} className="text-md text-gray-900">
            <Link href={link.href}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinksList;
