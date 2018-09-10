function Calendar({ date }) {
	const config = {
		month: 'long',
		weekday: 'long',
		day: 'numeric'
	}

	const dateString = date.toLocaleString('ru', config).split(' ');
	// день недели со строчной буквы
	const rawDay = dateString[0];
	// название месяца со строчной буквы
	const rawMonth = date.toLocaleString('ru', {month: 'long'});

	// меняем первую букву дня недели и названия месяца на заглавную
	const day = rawDay.charAt(0).toUpperCase() + rawDay.slice(1, rawDay.length - 1);
	const month = rawMonth.charAt(0).toUpperCase() + rawMonth.slice(1);

	// функция, расставляющая числа месяца
	function setDays({ date }) {
		// создаем объект Data с первым числом месяца объекта, переданного в props
		const firstMonthDay = new Date(date.getFullYear(), date.getMonth(), 1);
		// определяем день недели первого числа
		const weekDayFMD = firstMonthDay.getDay();
		// определяем timestamp первого числа
		const MsFMD = firstMonthDay.getTime();
		// определяем timestamp дня, с которого стартует заполнение ячеек календаря
		let startMs = MsFMD - 86400000 * weekDayFMD;


		return Array.prototype.constructor(5).fill('.').map(row => {
			let className;

				return <tr>
						{ Array.prototype.constructor(7).fill('.').map(td => {
							startMs += 86400000;
							const day = new Date(startMs);
							// проверяем необходимость добавления класса
							className = (date.getMonth() !== day.getMonth()) ? 'ui-datepicker-other-month' : 
								(date.getDate() === day.getDate()) ? 'ui-datepicker-today' : ' ';
									
									return <td className={className}>{day.getDate()}</td>
							})
						}
					</tr>
			});
	}	

	return (
		<div className="ui-datepicker">
			<div className="ui-datepicker-material-header">
				<div className="ui-datepicker-material-day">{day}</div>
				<div className="ui-datepicker-material-date">
					<div className="ui-datepicker-material-day-num">{dateString[1]}</div>
					<div className="ui-datepicker-material-month">{dateString[2]}</div>
					<div className="ui-datepicker-material-year">{date.getFullYear()}</div>
				</div>
			</div>
			<div className="ui-datepicker-header">
				<div className="ui-datepicker-title">
					<span className="ui-datepicker-month">{month}</span>&nbsp;<span className="ui-datepicker-year">{date.getFullYear()}</span>
				</div>
			</div>
			<table className="ui-datepicker-calendar">
				<colgroup>
					<col />
					<col />
					<col />
					<col />
					<col />
					<col className="ui-datepicker-week-end" />
					<col className="ui-datepicker-week-end" />
				</colgroup>
				<thead>
					<tr>
						<th scope="col" title="Понедельник">Пн</th>
						<th scope="col" title="Вторник">Вт</th>
						<th scope="col" title="Среда">Ср</th>
						<th scope="col" title="Четверг">Чт</th>
						<th scope="col" title="Пятница">Пт</th>
						<th scope="col" title="Суббота">Сб</th>
						<th scope="col" title="Воскресенье">Вс</th>
					</tr>
				</thead>
				<tbody>

					{setDays({ date })}

				</tbody>
			</table>
		</div>
		)
}