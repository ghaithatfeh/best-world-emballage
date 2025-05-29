import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
import {
	Sheet,
	SheetTrigger,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetDescription,
	SheetClose,
	SheetFooter,
} from "@/components/ui/sheet";
import { MenuIcon, X } from "lucide-react";

const Header = () => {
	// Navigation menu items
	const navItems = [
		{ name: "Home", href: "/", active: true },
		{ name: "About Us", href: "/about-us", active: false },
		{ name: "Products", href: "/products", active: false },
		{ name: "Contact Us", href: "/contact-us", active: false },
	];

	const components: { title: string; href: string; description: string }[] = [
		{
			title: "Alert Dialog",
			href: "/docs/primitives/alert-dialog",
			description:
				"A modal dialog that interrupts the user with important content and expects a response.",
		},
		{
			title: "Hover Card",
			href: "/docs/primitives/hover-card",
			description:
				"For sighted users to preview content available behind a link.",
		},
		{
			title: "Progress",
			href: "/docs/primitives/progress",
			description:
				"Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
		},
		{
			title: "Scroll-area",
			href: "/docs/primitives/scroll-area",
			description: "Visually or semantically separates content.",
		},
		{
			title: "Tabs",
			href: "/docs/primitives/tabs",
			description:
				"A set of layered sections of content—known as tab panels—that are displayed one at a time.",
		},
		{
			title: "Tooltip",
			href: "/docs/primitives/tooltip",
			description:
				"A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
		},
	];

	return (
		<header className="bg-transparent fixed top-0 left-0 w-full z-50">
			<div className="container mx-auto flex items-center justify-between py-4">
				<div className="flex items-center gap-2">
					<img src="/logo.svg" alt="logo" />
				</div>
				<nav className="hidden md:block">
					<ul className="flex items-center gap-6 lg:gap-12">
						{navItems.map((item) => (
							<li key={item.name} className="flex items-center gap-2">
								{item.active && (
									<img src="/group-8.png" alt="" className="w-6 h-6" />
								)}
								<Link href={item.href} className="text-white">
									{item.name}
								</Link>
							</li>
						))}
					</ul>
				</nav>
				<div className="hidden md:flex items-center gap-4">
					<a href="#" target="_blank" rel="noopener noreferrer">
						<FaFacebook className="w-5 h-5 text-white hover:text-blue-400 transition" />
					</a>
					<a href="#" target="_blank" rel="noopener noreferrer">
						<FaInstagram className="w-5 h-5 text-white hover:text-pink-400 transition" />
					</a>
					<a href="#" target="_blank" rel="noopener noreferrer">
						<FaLinkedin className="w-5 h-5 text-white hover:text-blue-400 transition" />
					</a>

					<DropdownMenu>
						<DropdownMenuTrigger className="text-white flex items-center gap-2 outline-none hover:text-red-500 transition">
							<GrLanguage className="w-5 h-5" />
							<span className="mt-1">EN</span>
						</DropdownMenuTrigger>
						<DropdownMenuContent className="bg-white p-3 flex flex-col gap-2">
							<DropdownMenuItem className="cursor-pointer">English</DropdownMenuItem>
							<DropdownMenuItem className="cursor-pointer">French</DropdownMenuItem>
							<DropdownMenuItem className="cursor-pointer" lang="ar">عربي</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>

				<Sheet>
					<SheetTrigger className="md:hidden">
						<MenuIcon className="w-8 h-8 text-white text-3xl" />
					</SheetTrigger>
					<SheetContent className="p-0 w-64 max-w-xs md:hidden">
						<nav className="flex flex-col h-full bg-white dark:bg-gray-900">
							<div className="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
								<span className="text-xl font-bold">Menu</span>
							</div>
							<ul className="flex-1 flex flex-col gap-2 p-6">
								<li>
									<a
										href="/"
										className="block py-2 px-4 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
									>
										Home
									</a>
								</li>
								<li>
									<a
										href="/about"
										className="block py-2 px-4 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
									>
										About
									</a>
								</li>
								<li>
									<a
										href="/products"
										className="block py-2 px-4 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
									>
										Products
									</a>
								</li>
								<li>
									<a
										href="/contact"
										className="block py-2 px-4 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
									>
										Contact
									</a>
								</li>
							</ul>
							<div className="p-6 border-t border-gray-200 dark:border-gray-700">
								<div className="flex justify-center gap-2 mb-4">
									<button className="px-2 py-1 rounded text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
										EN
									</button>
									<button className="px-2 py-1 rounded text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
										FR
									</button>
									<button className="px-2 py-1 rounded text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
										AR
									</button>
								</div>
								<div className="flex justify-center gap-4 mb-2">
									<a href="#" target="_blank" rel="noopener noreferrer">
										<FaFacebook className="w-5 h-5 text-gray-600 dark:text-white hover:text-blue-600 transition" />
									</a>
									<a href="#" target="_blank" rel="noopener noreferrer">
										<FaInstagram className="w-5 h-5 text-gray-600 dark:text-white hover:text-pink-500 transition" />
									</a>
									<a href="#" target="_blank" rel="noopener noreferrer">
										<FaLinkedin className="w-5 h-5 text-gray-600 dark:text-white hover:text-blue-800 transition" />
									</a>
								</div>
							</div>
						</nav>
					</SheetContent>
				</Sheet>
			</div>
		</header>
	);
};

export default Header;
