import React from 'react';
const Tags = ({ Text = 'text' }) => {
    var color = "yellow";
    if(text=="sanitation") color = "green";
    else if(text == "water quality" ) color = "orange";
    else if(text == "hygiene") color = "red";

	return (
		<div
        style={{
            display:"inline-block",
            height:"32px",
            backgroundColor:{color},
            padding:"8px 4px",
            margin:"4px 2px",
            borderRadius:"32px",
        }}
        >{Text}</div>

	);
};

export default Tags;