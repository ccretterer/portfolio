import Link from 'next/link';

export default function NavBar() {
    return (
        <nav className="bg-black border-gray-700">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 text-white">
                <Link href="/" legacyBehavior={true}>
                    <a className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://res.cloudinary.com/djui88jlr/image/upload/v1708702590/IMG_6668_mhevnz.png" className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">CCR</span>
                    </a>
                </Link>
                <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
                    <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-700 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:p-0">
                        <li>
                            <Link href="/aboutMe" legacyBehavior={true}>
                                <a className="block py-2 px-3 rounded md:bg-transparent md:p-0">About Me</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/projects" legacyBehavior={true}>
                                <a className="flex items-center justify-between w-full py-2 px-3 md:hover:bg-transparent md:border-0 md:p-0 md:w-auto hover:bg-gray-700">Projects</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/resume" legacyBehavior={true}>
                                <a className="block py-2 px-3 rounded md:hover:bg-transparent md:border-0 md:p-0 hover:bg-gray-700">Resume</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" legacyBehavior={true}>
                                <a className="block py-2 px-3 rounded md:hover:bg-transparent md:border-0 md:p-0 hover:bg-gray-700">Contact</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
