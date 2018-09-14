'use strict';

fetch('https://neto-api.herokuapp.com/etsy')
	.then(data => data.json())
	.then( json => {
		ReactDOM.render(
			<Listing list={ json } />,
			document.getElementById('root')
		)
	})