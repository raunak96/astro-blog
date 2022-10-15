import React, { useState } from "react";

const Showcase = () => {
	const [showText, setShowText] = useState(true);
	return (
		<div>
			{showText && <h1>Showing Text</h1>}
			<button onClick={() => setShowText(prev => !prev)}>
				{showText ? "Hide" : "Show"} Text
			</button>
		</div>
	);
};

export default Showcase;
