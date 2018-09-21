'use strict'

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: 'All'
		}
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
		      onSelectFilter={this.changeState.bind(this)} />
		    <Portfolio projects={this.filterFilters()} />
		  </div>
			)
	}
}
