'use strict';

function AuthForm(props) {
	return (
		<form action="/404/auth/" className="ModalForm" method="POST">
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