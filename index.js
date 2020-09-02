function getSeed( props ) {
	let number = props.number + 1138;
	let seed = Math.sin( number ++ ) * 10000;
	seed = seed - Math.floor( seed );
	return seed;
}
getSeed.defaultProps = {
	number: undefined
}

getSeed({number: 1})

function getMgStyle(props){
	let seed = getSeed({number: props.currentHeuristic})
	let mgStyle = 60 * seed + "%";
	return mgStyle;
}
getMgStyle.defaultProps = {
	currentHeuristic: undefined, getSeed: getSeed
}

getMgStyle({currentHeuristic: ""})