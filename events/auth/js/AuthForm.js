'use strict';

function AuthForm(props) {

	function getData(e) {
		e.preventDefault();
		if (typeof props.onAuth === 'function') {
			const data = {
				'name': document.querySelector('[type=text]').value,
				'email': document.querySelector('[type=email').value,
				'password': document.querySelector('[type=password').value
			}
			props.onAuth(data);
		}
	}

	function checkLetters(e) {
		let letter = (e.nativeEvent.key).charCodeAt(0);

		if (e.currentTarget.type === 'email') {
			if (letter > 122 || letter < 45 || letter == 47 || letter == 96 || (letter > 57 && letter < 64) ||
					(letter > 90 && letter < 95)) e.nativeEvent.returnValue = false;
				
		} else if (e.currentTarget.type === 'password') {
			if (letter > 122 || letter < 48 || (letter > 90 && letter < 97 && letter != 95) || (letter > 57 && letter < 65)) {
				e.nativeEvent.returnValue = false;
			}
		}
	}

	return (
		<form action="/404/auth/" className="ModalForm" method="POST" onSubmit={getData}> 
			<div className="Input">
				<input type="text" required placeholder="Имя"/>
				<label></label>
			</div>
			<div className="Input">
				<input type="email" placeholder="Электронная почта" onKeyDown={checkLetters} />
				<label></label>
			</div>
			<div className="Input">
				<input type="password" required placeholder="Пароль" onKeyDown={checkLetters} />
				<label></label>
			</div>
			<button type="submit">
				<span>Войти</span>
				<i className="fa fa-fw fa-chevron-right"></i>
			</button>
		</form>
		)
}