const Nav = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="grid grid-cols-3 items-center px-10 py-4">

        {/* Left - Logo */}
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500"></div>

          <h1 className="text-xl font-bold text-black">
            Dev Stack
          </h1>
        </div>

        {/* Center - Navigation */}
        <ul className="flex items-center justify-center gap-8">
          <li><a href="#">Home</a></li>
          <li><a href="#">Technologies</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        {/* Right - Buttons */}
        <div className="flex items-center justify-end gap-4">
          <button>Sign In</button>

          <button className="rounded-full bg-pink-600 px-5 py-2 text-white">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Nav;