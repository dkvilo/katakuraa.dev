import React from 'react';

function App() {
	const [theme, setTheme] = React.useState("light")
	React.useEffect(() => {
		if (window.matchMedia &&
			window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme("dark")
		}
	}, [theme, setTheme])

  return (
    <div className={`App ${theme}`}>
			<h1>Hey it's me, David (<code>Katakuraa</code>)</h1>
			<p>Can you please leave my website alone?!</p>
			<p>Thanks!</p>
			<br />
			<p>Last Modified at <strong>Sun, 03:12 Feb 16, 2020</strong></p>
    </div>
  );
}

export default App;
