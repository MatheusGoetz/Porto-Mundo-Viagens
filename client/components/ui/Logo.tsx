import * as React from "react";

export type LogoProps = React.SVGProps<SVGSVGElement> & { title?: string };

export default function Logo({ title = "Porto Mundo", ...props }: LogoProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : "presentation"}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8d6914" />
          <stop offset="100%" stopColor="#ecc531" />
        </linearGradient>
        <clipPath id="g">
          <circle cx="32" cy="32" r="28" />
        </clipPath>
      </defs>
      <circle cx="32" cy="32" r="30" fill="none" stroke="url(#grad)" strokeWidth="4" />
      {/* Meridians */}
      <ellipse cx="32" cy="32" rx="18" ry="30" fill="none" stroke="url(#grad)" strokeWidth="2" />
      <ellipse cx="32" cy="32" rx="10" ry="30" fill="none" stroke="url(#grad)" strokeWidth="2" />
      {/* Parallels */}
      <ellipse cx="32" cy="22" rx="26" ry="12" fill="none" stroke="url(#grad)" strokeWidth="2" />
      <ellipse cx="32" cy="42" rx="26" ry="12" fill="none" stroke="url(#grad)" strokeWidth="2" />
      {/* Simple land shapes clipped inside globe */}
      <g clipPath="url(#g)" fill="url(#grad)" opacity="0.95">
        <path d="M6 28c8-6 16-9 22-8 3 .5 6 1.5 7.5 3.5 1.7 2.2-.3 4.4-2.2 5.4-2.3 1.2-4.9 1.3-7.3 1.5-3.8.4-7.3 1.6-10.6 3.7-3.6 2.3-7.4 1.6-9.4-1.3-1-1.5-.7-3.2.2-4.8z" />
        <path d="M44 26c4 1 9 4 12 8 3 4 4 8 1 10-2.3 1.7-6.6 1-10.4-1.2-3.2-1.9-6.2-4.6-8.6-7.6-2.2-2.8-1.2-6.1 2-7.4 1.1-.4 2.5-.5 4-.2z" />
      </g>
    </svg>
  );
}
