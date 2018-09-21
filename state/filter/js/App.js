'use strict'

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: 'All'
		}
		this.changeState = this.changeState.bind(this)
	}

	changeState(filter) {
		this.setState({selected: filter})
	}
	
	filterFilters() {
		return (this.state.selected === 'All') 
			? projects 
			: projects.filter(proj => proj.category === this.state.selected);
	}

	render() {
		return (
		  <div>
		    <Toolbar
		      filters={filters}
		      selected={this.state.selected}
		      onSelectFilter={this.changeState} />
		    <Portfolio projects={this.filterFilters()} />
		  </div>
			)
	}
}
