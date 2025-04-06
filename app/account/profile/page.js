import SelectCountry from "@/app/_components/SelectCountry";
import UpdateProfileForm from "@/app/_components/UpdateProfileForm";
import { auth } from "@/app/_lib/auth";
import { getGuest } from "@/app/_lib/data-service";

export const metadata = {
  title: "Update profile",
};

export default async function Page() {
  const session = await auth();
  const guest = await getGuest(session.user.email);

  return (
    <div className="flex mt-[15%] px-3 flex-col sm:mt-[5%] sm:px-0 md:mt-0 md:pl-3">
      <div className="mb-4">
        <h2 className="font-semibold text-2xl text-accent-400 mb-4">
          Update your guest profile
        </h2>

        <p className="sm:text-lg text-primary-200">
          Providing the following information will make your check-in process
          faster and smoother. See you soon!
        </p>
      </div>

      <div className="flex-1">
        <UpdateProfileForm guest={guest}>
          <SelectCountry
            name="nationality"
            id="nationality"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            defaultCountry={guest.nationality}
          />
        </UpdateProfileForm>
      </div>
    </div>
  );
}
