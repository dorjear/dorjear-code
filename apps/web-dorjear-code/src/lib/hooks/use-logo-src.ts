"use client"

import { useTheme } from "next-themes"

export function useLogoSrc(): string {
	const { resolvedTheme } = useTheme()
	return resolvedTheme === "light" ? "/dorjear-code-Logo-Horiz-blk.svg" : "/dorjear-code-Logo-Horiz-white.svg"
}
