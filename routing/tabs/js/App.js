const App = () => (
	<Router>
		<div className='tabs'>
			<nav className='tabs__items'>
				<NavLink exact className='tabs__item' to='/' activeClassName='tabs__item-active'>Рефераты</NavLink>
				<NavLink exact className='tabs__item' to='/creator' activeClassName='tabs__item-active'>Криэйтор</NavLink>
				<NavLink exact className='tabs__item' to='/fortune' activeClassName='tabs__item-active'>Гадалка</NavLink>
			</nav>
			<div className='tabs__content'>
				<Switch>
					<Route path='/fortune' component={Fortune} />
					<Route path='/creator' component={Creator} />
					<Route path='/' component={Essay} />
				</Switch>
			</div>
		</div>
	</Router>
);
