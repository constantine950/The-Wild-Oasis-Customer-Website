import { auth } from "../_lib/auth";

export const metadata = {
  title: "Guest area",
};

async function Page() {
  const session = await auth();
  const firstName = session?.user?.name?.split(" ")[0] || "Guest";

  return (
    <h2 className="text-2xl font-semibold text-center mt-10 text-accent-400 md:mt-0 md:text-left lg:text-3xl">
      Welcome, {firstName}☺️😍
    </h2>
  );
}

export default Page;
