'use strict';

function Listing({ list }) {
	
	function checkTitle({ title }) {
		// проверяем длинну тайтла
		return title.length > 49 ? title.slice(0, 50) + ' ...' : title;
	}

	function checkCurrency(item) {
		// проверяем валюту
		switch( item.currency_code ) {
			case 'USD':
			 return `$${item.price}`
			case 'EUR':
			 return `€${item.price}`
			default:
			 return `${item.price} ${item.currency_code}`
		}
	}

	function checkClassName(item) {
		// проверяем остаток
		if (item.quantity <= 10) return `item-quantity level-low`
		if (item.quantity <= 20) return `item-quantity level-medium`
		return `item-quantity level-high`
	}

	const itemList = list.map(item => {
		// заполняем карточки
		return (
			<div className="item">
				<div className="item-image">
					<a href={ item.title }>
						<img src={ item.MainImage.url_570xN } />
					</a>
				</div>
				<div className="item-details">
					<p className="item-title">{ checkTitle(item) }</p>
					<p className="item-price">{ checkCurrency(item) }</p>
					<p className={ checkClassName(item) }>{ item.quantity } left</p>
				</div>
			</div>
			)
	})

	return <div className="item-list">{ itemList }</div>
}