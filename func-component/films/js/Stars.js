'use strict';

function Stars({ count }) {
	let isVoted = false;
	let stars = [];
	
	if (count <= 5 && count >= 1 && typeof count === 'number') {
		isVoted = true;
		stars = Array.prototype.constructor(count).fill('.').map(star => <Star />);
	}

  return (
  	<ul className="card-body-stars u-clearfix">
  		<li>
  			{ isVoted && stars}
  		</li>
	  </ul>
  )
}
