const createNextIntlPlugin = require("next-intl/plugin");

const MillionLint = require("@million/lint");

const withNextIntl = createNextIntlPlugin("src/i18n/requests.ts");
// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
	i18n: {
		locales: ["en-US", "es", "it", "pt-PT"],
		defaultLocale: "en-US",
	},
	/* config options here */
};

module.exports = MillionLint.next({
	enabled: true,
	rsc: true,
})(withNextIntl(nextConfig));
