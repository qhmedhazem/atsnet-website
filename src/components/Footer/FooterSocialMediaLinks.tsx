import Link from "next/link";
import React, { FC } from "react";
import {
  Facebook,
  PhoneIcon,
  Instagram,
  Linkedin,
  MailIcon,
} from "lucide-react"; // Import Lucide icons

const FooterSocialMediaLinks: FC = () => {
  return (
    <ul className="flex gap-4">
      <SocialMediaLink
        href="https://facebook.com"
        icon={<Facebook size={20} />}
      />
      <SocialMediaLink
        href="https://linkedin.com"
        icon={<Linkedin size={20} />}
      />
      <SocialMediaLink
        href="https://instagram.com"
        icon={<Instagram size={20} />}
      />
      <SocialMediaLink
        href="https://twitter.com"
        icon={<MailIcon size={20} />}
      />
      <SocialMediaLink
        href="https://twitter.com"
        icon={<PhoneIcon size={20} />}
      />
    </ul>
  );
};

interface SocialMediaLinkProps {
  href: string;
  icon: React.ReactNode;
}

const SocialMediaLink: FC<SocialMediaLinkProps> = ({ href, icon }) => {
  return (
    <li>
      <Link href={href} target="_blank" rel="noopener noreferrer">
        <div className="border border-border/40 flex items-center justify-center w-10 h-10 rounded-full hover:bg-blue-500 hover:text-primary-foreground transition-colors duration-300">
          {icon}
        </div>
      </Link>
    </li>
  );
};

export default FooterSocialMediaLinks;
