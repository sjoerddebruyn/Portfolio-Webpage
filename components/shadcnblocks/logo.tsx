import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  url: string;
  children: React.ReactNode;
  className?: string;
}

interface LogoImageProps {
  src: string;
  alt: string;
  title: string;
  className?: string;
}

interface LogoTextProps {
  children: React.ReactNode;
  className?: string;
}

function Logo({ url, children, className }: LogoProps) {
  return (
    <Link href={url} className={cn("flex items-center gap-2", className)}>
      {children}
    </Link>
  );
}

function LogoImage({ src, alt, title, className }: LogoImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      title={title}
      width={40}
      height={40}
      className={className}
    />
  );
}

function LogoText({ children, className }: LogoTextProps) {
  return <span className={className}>{children}</span>;
}

export { Logo, LogoImage, LogoText };

