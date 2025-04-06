import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import TextExpander from "./TextExpander";
import Image from "next/image";

function Cabin({ cabin }) {
  const { name, maxCapacity, image, description } = cabin;
  return (
    <div className="md:grid md:grid-cols-[3fr_4fr] gap-20 md:border border-primary-800 md:py-3 md:px-10 mb-24">
      <div className="h-96 w-full aspect-square relative md:scale-[1.15] md:-translate-x-3">
        <Image
          src={image}
          fill
          className=" object-cover"
          alt={`Cabin ${name}`}
        />
      </div>

      <div>
        <h3 className="text-3xl mt-4 text-center md:text-left text-accent-100 font-black md:text-7xl md:mb-5 md:translate-x-[-254px] bg-primary-950 md:p-6 pb-1 md:w-[150%]">
          Cabin {name}
        </h3>

        <p className="md:text-lg text-primary-300 mb-10">
          <TextExpander>{description}</TextExpander>
        </p>

        <ul className="flex flex-col gap-4 mb-7">
          <li className="flex gap-3 items-center">
            <UsersIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <MapPinIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              Located in the heart of the{" "}
              <span className="font-bold">Dolomites</span> (Italy)
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <EyeSlashIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              Privacy <span className="font-bold">100%</span> guaranteed
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Cabin;
