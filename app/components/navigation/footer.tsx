import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-black rounded-lg shadow m-4 text-white">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm sm:text-center">© 2023 <a href="https://github.com/ccretterer" className="hover:underline text-white">Carly Retterer</a>. All Rights Reserved.</span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
                    <li>
                        <Link href="/aboutMe" legacyBehavior={true}>
                            <a className="hover:underline me-4 md:me-6">About Me</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects" legacyBehavior={true}>
                            <a className="hover:underline me-4 md:me-6">Projects</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/resume" legacyBehavior={true}>
                            <a className="hover:underline me-4 md:me-6">Resume</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" legacyBehavior={true}>
                            <a className="hover:underline">Contact</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
