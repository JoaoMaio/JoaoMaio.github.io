import { event } from "./gtag";

import { ReactNode } from "react";

interface OutboundLinkProps {
  href: string;
  action: string;
  language: string;
  children: ReactNode;
}

const OutboundLink = ({ href, action, language, children }: OutboundLinkProps) => {
  const handleClick = () => {
    if (typeof window !== "undefined") {
      event({
        action: action,
        category: "outbound",
        label: href,
        language: language,
      });
    }
  };

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" onClick={handleClick} className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-highlight inline-flex items-center">
      {children}
    </a>
  );
};

export default OutboundLink;
