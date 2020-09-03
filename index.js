const COLOR_SCHEMES = [
	// First array are dark colors.
	// Second array are light colors.
	// Third array are random colors.
	[ [ '#aa3f00' ], [ '#faffc4' ], 
		[ '#aa3f00', '#eb9b00', '#83006f', '#b30074', '#ffd32a' ], ],

	[ [ '#2d7a00' ], [ '#efffc2' ], 
		[ '#389c00', '#a8ab00', '#da4800', '#ffbc07', '#e3ff94' ], ],

	[ [ '#ff9f60' ], [ '#00113c' ], 
		[ '#ff9f60', '#fff923', '#ff9a03', '#4a3800', '#9afdff' ], ],

	[ [ '#1115ff' ], [ '#fffab9' ], 
		[ '#1115ff', '#1294ff', '#11ffd0', '#fffab9', '#008ec4' ], ],

	[ [ '#6a26ff' ], [ '#bcfffe' ], 
		[ '#ff6be5', '#b777ff', '#ff15f5', '#6a26ff', '#53a4ff' ], ],

	[ [ '#470064' ], [ '#ecffc7' ], 
		[ '#470064', '#001559', '#1e003f', '#1900e1', '#ecffc7' ], ],
]
const colorSchemes=COLOR_SCHEMES;
function getLightColor( props ) {
	let colorSchemeIndex = props.schemeIndex % colorSchemes.length;
	let lightColor = colorSchemes[ colorSchemeIndex ][1][0];
	return lightColor;
}

getLightColor.defaultProps = {
	schemeIndex: undefined,// colorSchemes: COLOR_SCHEMES
} 

getLightColor({schemeIndex: 1})