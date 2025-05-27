import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import {
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuItem,
	NavigationMenuTrigger,
	NavigationMenuContent,
	NavigationMenuLink,
} from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";

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
					<Link href="#" target="_blank">
						<FaFacebook className="w-5 h-5 text-white" />
					</Link>
					<Link href="#" target="_blank">
						<FaInstagram className="w-5 h-5 text-white" />
					</Link>
					<Link href="#" target="_blank">
						<FaLinkedin className="w-5 h-5 text-white" />
					</Link>

					<DropdownMenu>
						<DropdownMenuTrigger className="text-white flex items-center gap-2">
                            <GrLanguage className="w-5 h-5" />
							EN
						</DropdownMenuTrigger>
						<DropdownMenuContent className="bg-white p-3 flex flex-col gap-2">
							<DropdownMenuItem>English</DropdownMenuItem>
							<DropdownMenuItem>French</DropdownMenuItem>
							<DropdownMenuItem>Arabic</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</div>
		</header>
	);
};

export default Header;
