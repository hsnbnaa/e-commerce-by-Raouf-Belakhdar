import Navbar from "../../Elements/Navbar";

export default function Header() {
  return (
    <header className="pl-196 pr-172 py-8 bg-white flex flex-row items-center justify-between">
      <h1 className="font-bold text-light-blue text-2xl text-dark-grey">
        Bandage
      </h1>
      <Navbar />
      <div className="flex flex-row gap-6 items-center">
        <div className="flex flex-row items-center">
          <img src="../../../../public/images/user-icon.png" alt="User" />
          <h2 className="text-blue font-bold text-sm m-1">Login / Register</h2>
        </div>
        <img src="../../../../public/images/search-icon.png" alt="User" />
        <img src="../../../../public/images/cart-icon.png" alt="User" />
        <img src="../../../../public/images/fav-icon.png" alt="User" />
      </div>
    </header>
  );
}
