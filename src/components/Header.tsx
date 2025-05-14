import React from 'react';

interface HeaderProps {
  name?: string;
  image?: string;
  isLoggedIn?: boolean;
}

const Header: React.FC<HeaderProps> = ({ name, image, isLoggedIn }) => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-bold">My Application</h1>
        <nav className="mt-2">
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="mt-4">
        {isLoggedIn && (
          <>
            <img
              src={image}
              alt={`${name}'s Avatar`}
              className="rounded-full w-10 h-10"
            />
            <span className="ml-2">Welcome, {name}!</span>
          </>
        )}
        {!isLoggedIn && (
          <a href="/login" className="text-blue-400 hover:underline">
            Login
          </a>
        )}
      </div>
    </header>
  );
};

export default Header;
