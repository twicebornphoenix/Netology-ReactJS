'use strict';

function FeedbackForm(props) {
	const {data} = props;
	const {onSubmit} = props;
	// функция отправки формы
	function handleClick(e) {
		e.preventDefault();
		// константы формы, объекта для значений, массива для поля 'snacks'
		const form = e.currentTarget;
		const formData = {};
		const snacksArray = [];
		// перебираем поля и проверяем актуальность значений
		Array.from(form.elements).filter(el => el.name).forEach(el => {

			if (!el.checked && el.type !== 'radio' && el.type !== 'checkbox') formData[el.name] = el.value;

			if (el.name === 'salutation' && el.checked) formData[el.name] = el.value;
			
			if (el.name === 'snacks' && el.checked) {
					!snacksArray.includes(el.value) ? snacksArray.push(el.value) : '';
					formData[el.name] = snacksArray;
				}
		})
		// при отправке формы переводим объект с собранными значениями в JSON формат
		onSubmit(JSON.stringify(formData))
	}

	function FormFields(props) {
		// константы класса лейбла и типа поля формы для проверки 
		const clsRaw = props.className.replace(/input/g, 'label');
		const checkItem = props.className.split('--')[1];
		const clsLabel = checkItem === 'radio' || checkItem === 'checkbox' && checkItem !== 'textarea' ? 
			clsRaw : clsRaw.split(' ')[0]
		// определяем поля формы, заполняем форму данными
		const fields = Array.prototype.constructor(props.labels.length).fill('.').map((prop, index) => {
				const label = <label className={clsLabel} htmlFor={props.ids[index]}>{ props.labels[index] }</label>;

				switch (checkItem) {
					case 'radio':
					case 'checkbox':
						return ([
								<input className={props.className} id={props.ids[index]} 
								type={props.type} name={props.name} value={props.labels[index]}
								defaultChecked={props.defaultChecked.toString().toUpperCase() === props.labels[index].toUpperCase()} />,
								 label 
							]);
					case 'text':
					case 'email':
						return ([
								 label,
								<input className={props.className} id={props.ids[index]} 
								type={props.type} name={props.name} 
								defaultValue={props.defaultValue} />
							]);
					case 'textarea':
						return ([
								label,
								<textarea className={props.className} id={props.ids[index]}
								name={props.name} cols={props.cols} rows={props.rows} defaultValue={props.defaultValue} />
							]);
					case 'select':
						return ([
								label,
								<select className={props.className} id={props.ids[index]} name={props.name} 
								defaultValue={props.defaultValue}>
									<option>У меня проблема</option>
									<option>У меня важный вопрос</option>
								</select>
							])
				}
		})

		return (
				<div className="contact-form__input-group">
					{ /checkbox/g.test(props.className) ? 
						<p className="contact-form__label--checkbox-group">Хочу получить:</p> : null}
					{ fields }
				</div>
			)
	}

	return (
			<form className="content__form contact-form" onSubmit={handleClick}>
				<div className="testing">
					<p>Чем мы можем помочь?</p>
				</div>

					<FormFields 
					className='contact-form__input contact-form__input--radio' 
					name='salutation'
					ids={['salutation-mr', 'salutation-mrs', 'salutation-ms']} 
					labels={['Мистер', 'Мисис', 'Мис']} 
					type='radio' 
					defaultChecked={data.salutation} />

					<FormFields
					className='contact-form__input contact-form__input--text'
					name='name'
					ids={['name']}
					type='text'
					labels={['Имя']} 
					defaultValue={data.name} />

					<FormFields
					className='contact-form__input contact-form__input--email'
					name='email'
					ids={['email']}
					type='email'
					labels={['Адрес электронной почты']} 
					defaultValue={data.email} />

					<FormFields
					className='contact-form__input contact-form__input--select'
					name='subject'
					ids={['subject']}
					labels={['Чем мы можем помочь']}
					defaultValue={data.subject} />

					<FormFields
					className='contact-form__input contact-form__input--textarea'
					name='message'
					ids={['message']}
					labels={['Ваше сообщение']}
					rows={6}
					cols={65}
					defaultValue={data.message} />

					<FormFields
					className='contact-form__input contact-form__input--checkbox'
					name='snacks'
					ids={['snacks-pizza', 'snacks-cake']}
					labels={['Пицца', 'Пирог']}
					type='checkbox'
					defaultChecked={data.snacks} />

				<button className="contact-form__button" type="submit">Отправить сообщение!</button>
  			<output id="result" />
			</form>
		)
}