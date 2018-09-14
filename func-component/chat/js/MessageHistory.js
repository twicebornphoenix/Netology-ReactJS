'use strict';

function MessageHistory({ list }) {
	if (!list.length) return;

	const messageArr = list.map(message => {

		switch( message.type ) {
			case 'message': 
				return <Message from={message.from} message={message} />
			case 'response':
				return <Response from={message.from} message={message} />
			case 'typing':
				return <Typing from={message.from} message={message} />
		}

	})

	return (
			<ul>
				{ messageArr }
			</ul>
		)
}