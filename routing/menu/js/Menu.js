const Menu = () => (
	<nav className="menu">
		<NavLink exact to='/' className='menu__item' activeClassName='menu__item-active'>Главная</NavLink>
		<NavLink exact to='/drift' className='menu__item' activeClassName='menu__item-active'>Дрифт-такси</NavLink>
		<NavLink exact to='/timeattack' className='menu__item' activeClassName='menu__item-active'>Time Attack</NavLink>
		<NavLink exact to='/forza' className='menu__item' activeClassName='menu__item-active'>Forza Karting</NavLink>
	</nav>
);