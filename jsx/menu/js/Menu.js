function Menu ({ items, opened = false }) {
	if (opened) {
		const list = items.map(item => <li key={item.href}><a href={item.href}>{item.title}</a></li>);
		
	return (
			<div className='menu menu-open'>
				<div className="menu-toggle">
					<span></span>
				</div>
				<nav>
					<ul>
						{ list }
					</ul>
				</nav>
			</div>
		)
	} else {
		
		return (
			<div className="menu">
				<div className="menu-toggle">
					<span></span>
				</div>
			</div>
			)
	}
}