import { useEffect, useState } from "react";

const DARK_MODE_KEY = "is_dark_mode";
export const useAppMode = () => {
	const [is_dark_mode, set_is_dark_mode] = useState(() => {
		// Check localStorage first, then system preference
		const savedMode = localStorage.getItem(DARK_MODE_KEY);
		if (savedMode !== null) {
			return JSON.parse(savedMode);
		}
		return (
			window.matchMedia &&
			window.matchMedia("(prefers-color-scheme: dark)").matches
		);
	});

	useEffect(() => {
		// Save to localStorage whenever is_dark_mode changes
		localStorage.setItem(DARK_MODE_KEY, JSON.stringify(is_dark_mode));

		// Listen for changes in system theme
		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
		const handleChange = (e: MediaQueryListEvent) => {
			const newMode = e.matches;
			set_is_dark_mode(newMode);
			localStorage.setItem(DARK_MODE_KEY, JSON.stringify(newMode));
		};
		mediaQuery.addListener(handleChange);
		return () => mediaQuery.removeListener(handleChange);
	}, [is_dark_mode]);

	const handleThemeChange = () => {
		set_is_dark_mode((previousValue: boolean) => !previousValue);
	};

	return { is_dark_mode, handleThemeChange };
};
