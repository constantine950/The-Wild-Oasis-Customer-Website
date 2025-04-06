import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

function Logo() {
  return (
    <Link href="/" className="flex gap-2 items-center">
      <div className="relative h-10 aspect-square">
        <Image
          src={logo}
          fill
          quality={100}
          className=" object-cover"
          alt="The Wild Oasis logo"
        />
      </div>
      <span className="font-semibold text-primary-100 md:text-lg lg:text-xl">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
