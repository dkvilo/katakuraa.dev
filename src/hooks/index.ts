import { useState, useLayoutEffect } from "react";

export function useLocalStorage(key: string, initialValue: any) {
	const [storedValue, setStoredValue] = useState(() => {
		try {
			const item = window.localStorage.getItem(key);
			return item ? JSON.parse(item) : initialValue;
		} catch (error) {
			console.log(error);
			return initialValue;
		}
	});

	const setValue = (value: any) => {
		try {
			const valueToStore =
				value instanceof Function ? value(storedValue) : value;
			setStoredValue(valueToStore);
			window.localStorage.setItem(key, JSON.stringify(valueToStore));
		} catch (error) {
			console.log(error);
		}
	};

	return [storedValue, setValue];
}

export function useThemeSwitch(defaultState: boolean) {
	const [theme, setTheme] = useLocalStorage("dark-mode", defaultState);

	const switchTheme = () => {
		setTheme((oldTheme: boolean) => !oldTheme);
	};

	useLayoutEffect(() => {
		if (theme) {
			document.body.className = "theme-dark bg-background";
		} else {
			document.body.className = "bg-background";
		}
	}, [theme]);

	return [theme, switchTheme];
}
