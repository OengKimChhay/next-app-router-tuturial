'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
const Header = () => {
	const pathname = usePathname();
	return (
		<header className=" bg-white shadow-lg">
			<nav className="container mx-auto px-4 flex items-center justify-between py-4 md:px-8">
				<Link href="/">
					<h1 className="text-2xl font-bold text-gray-800 hover:text-gray-700">
						Your Brand Name
					</h1>
				</Link>

				<ul className="hidden md:flex items-center">
					<li className="mr-4">
						<Link
							className={pathname === '/posts' ? 'active' : ''}
							href="/posts"
						>
							Posts
						</Link>
					</li>
					<li className="mr-4">
						<Link
							className={pathname === '/about' ? 'active' : ''}
							href="/about"
						>
							About
						</Link>
					</li>
					<li className="mr-4">
						<Link
							className={pathname === '/contact' ? 'active' : ''}
							href="/contact"
						>
							Contact
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};
export default Header;
