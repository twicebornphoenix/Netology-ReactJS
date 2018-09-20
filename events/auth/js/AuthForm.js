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

	return (
		<form action="/404/auth/" className="ModalForm" method="POST" onSubmit={getData}> 
			<div className="Input">
				<input type="text" required placeholder="Имя"/>
				<label></label>
			</div>
			<div className="Input">
				<input type="email" placeholder="Электронная почта"/>
				<label></label>
			</div>
			<div className="Input">
				<input type="password" required placeholder="Пароль"/>
				<label></label>
			</div>
			<button type="submit">
				<span>Войти</span>
				<i className="fa fa-fw fa-chevron-right"></i>
			</button>
		</form>
		)
}