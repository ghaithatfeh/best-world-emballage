import { usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const useLinks = () => {
	const pathname = usePathname();
	const t = useTranslations();

	const links = [
		{
			name: t("Home"),
			href: "/",
			active: pathname === "/",
		},
		{
			name: t("About Us"),
			href: "/about",
			active: pathname.startsWith("/about"),
		},
		{
			name: t("Products"),
			href: "",
			active: pathname.startsWith("/products"),
		},
		{
			name: t("Contact Us"),
			href: "/contact",
			active: pathname.startsWith("/contact"),
		},
	];

	return { links };
};

export default useLinks;
