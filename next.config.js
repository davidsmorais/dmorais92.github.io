const MillionLint = require("@million/lint");
// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
	/* config options here */
};

module.exports = MillionLint.next({
	enabled: true,
	rsc: true,
})(nextConfig);
