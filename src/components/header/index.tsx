import Link from "next/link";

const Header = () => {
  return (
    <header className="text-center py-10">
      <Link className="text-5xl font-bold" href={"/"}>
        FOOD BLOG
      </Link>
    </header>
  );
};

export default Header;
