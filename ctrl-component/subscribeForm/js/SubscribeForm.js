const Message = (props) => {
	return (
			<div className="form-error">{props.messageText}</div>
		)
}

class SubscribeForm extends React.Component {
	constructor() {
		super();
		this.inputControl;
		this.state = {
			className: 'form form--subscribe'
		}
	}

	handleSubmint = e => {
		e.preventDefault();
		if (this.inputControl.validity.valid) {
			this.setState({
				className: 'form form--subscribe is-valid'
			})
		} else {
			this.setState({
				className: 'form form--subscribe is-error'
			})
		}
	}

	render() {
		return (
			<div className="subscribe__form">
			  <form className={this.state.className}>
			    <h4 className="form-title">Подписаться:</h4>
			    <div className="form-group">
			      <label htmlFor="input-email" className="sr-only">Email</label>
			      <input ref={field => this.inputControl = field} type="email" id="input-email" placeholder="Email" className="form-control"/>
			      <Message messageText='Пожалуйста, проверьте корректность адреса электронной почты' />
			      <button onClick={this.handleSubmint} type="submit" className="form-next">
			        <i className="material-icons">keyboard_arrow_right</i>
			      </button>
			    </div>
			  </form>
			</div>
		)
	}
};