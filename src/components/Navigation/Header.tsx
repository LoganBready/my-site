import Link from "next/link";
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className="shadow bg-neutral-600">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between">
        <h1 className="text-3xl font-bold text-white">Logan Bready</h1>
        <nav className="flex justify-center items-center">
          <ul className="flex flex-row h-full">
            <li className="mr-6">
              <Link href="/">
                <a className="text-white hover:text-gray-900">Home</a>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/about">
                <a className="text-white hover:text-gray-900">About</a>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/blog">
                <a className="text-white hover:text-gray-900">Projects</a>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/blog">
                <a className="text-white hover:text-gray-900">Blog</a>
              </Link>
            </li>
            <li className={`${'mr-6'} ${styles.ContactBtn}`}>
              <Link href="/blog">
                <a className="text-black hover:text-gray-900">Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
