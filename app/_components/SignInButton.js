import { signInAction } from "../_lib/actions";

function SignInButton() {
  return (
    <form action={signInAction}>
      <button className="flex items-center gap-6 sm:text-lg border border-primary-300 px-7 py-4 font-medium">
        <img
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          className="h-5 w-5"
        />
        <span>Continue with Google</span>
      </button>
    </form>
  );
}

export default SignInButton;
