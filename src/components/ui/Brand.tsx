import Image from "next/image";
import { site } from "@/config/site";

export function Brand() {
  return (
    <span className="brand">
      <Image
        src={site.logo}
        alt=""
        width={280}
        height={160}
        priority
        className="brand-logo"
      />
    </span>
  );
}
