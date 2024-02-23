import Logo from "../components/logo";

const Nav = () => {
  return (
    <nav className="pt-14 flex justify-between items-center">
      <Logo />
      <button
        className="text-white py-1 px-4 rounded-full font-medium tracking-wider text-sm focus:outline-4 focus:outline-[var(--primary)] focus:outline-offset-4"
        style={{ backgroundColor: "var(--primary)" }}
      >
        Join Now
      </button>
    </nav>
  );
};
export default Nav;
