import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";

function Header() {
  return (
    <header className="border-b border-primary-900 px-3 py-5 sm:px-5 md:px-10 lg:px-14">
      <div className="flex relative z-10 justify-between items-center sm:max-w-7xl mx-auto">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
