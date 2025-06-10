"use client"

import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import { useTranslations } from "next-intl";

const Footer = () => {
	const t = useTranslations();

	return (
		<footer className="bg-primary text-white pt-12 pb-4 relative overflow-hidden">
			<div className="container flex flex-col md:flex-row md:justify-between gap-12 relative z-10">
				{/* Left: Logo and Description */}
				<div className="md:w-2/5 flex flex-col items-start">
					<div className="footer-logo flex flex-col items-start mb-4">
                        <Link href="/" className="-ms-2">
                            <img src="/logo.svg" alt="logo" />
                        </Link>
					</div>
					<p className="footer-description text-base text-white/90 mt-2">
						{t("We are proud to offer a wide and distinct range of high-quality, healthy and uniquely designed plastic products that also meet the needs of our clients in Morocco and all over the world")}.
					</p>
				</div>
				{/* Center: Quick Links */}
				<div className="flex flex-col items-start mb-8 md:mb-0">
					<h3 className="text-xl font-bold mb-4">{t("Quick Links")}</h3>
					<ul className="space-y-2">
						<li><a href="#about" className="hover:text-secondary transition-colors">{t("About Us")}</a></li>
						<li><a href="#products" className="hover:text-secondary transition-colors">{t("Products")}</a></li>
						<li><a href="#contact" className="hover:text-secondary transition-colors">{t("Contact Us")}</a></li>
					</ul>
				</div>
				{/* Right: Contact Us */}
				<div className="flex flex-col items-start">
					<h3 className="text-xl font-bold mb-4">{t("Contact Us")}</h3>
					<form className="flex w-full max-w-xs mb-6" onSubmit={e => e.preventDefault()}>
						<input type="email" placeholder={t("Your Email")} className="flex-1 px-4 py-2 ltr:rounded-l-full rtl:rounded-r-full bg-transparent border border-white/60 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-secondary" />
						<button type="submit" className="bg-transparent border border-white/60 ltr:border-l-0 rtl:border-r-0 ltr:rounded-r-full rtl:rounded-l-full ps-3 pe-4 flex items-center justify-center hover:bg-secondary transition-colors">
                            <FaPaperPlane className=" text-white" />
						</button>
					</form>
					<div className="flex gap-6 mt-2">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="w-5 h-5 text-white hover:text-blue-600 transition" />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="w-5 h-5 text-white hover:text-pink-500 transition" />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="w-5 h-5 text-white hover:text-blue-800 transition" />
                        </a>
					</div>
				</div>
			</div>

			<div className="mt-12 container">
				<hr className="border-white/20 mb-4" />
				<div className="text-center text-white/60 text-sm">
					{t("Copyrights")} 2025 BWE
				</div>
			</div>

            <img src="/footer-bg.png" alt="footer-bg" className="absolute bottom-0 left-0 opacity-50" />
            <img src="/footer-bg-2.png" alt="footer-bg" className="absolute -top-2 md:-bottom-2 right-0 opacity-50" />
		</footer>
	);
};

export default Footer;
