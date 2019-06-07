'use strict';

const accordeonData = [
	{
		id: 1,
		title: 'Компоненты',
		text: 'Каждый компонент являются законченной частью пользовательского интерфейса и сам управляет своим состоянием, а композиция компонентов (соединение) позволяет создавать более сложные компоненты. Таким образом, создается иерархия компонентов, причем каждый отдельно взятый компонент независим сам по себе. Такой подход позволяет строить сложные интерфейсы, где есть множество состояний, и взаимодействовать между собой.'
	},
	{
		id: 2,
		title: 'Выучил раз, используй везде',
		text: 'После изучения React вы сможете использовать его концепции не только в браузере, но также и при разработке мобильных приложений с использованием React Native.'
	},
	{
		id: 3,
		title: 'Использование',
		text: 'JSX является языком, расширяющим синтаксис стандартного Javascript. По факту он позволяет писать HTML-код в JS-скриптах. Такой подход упрощает разработку компонентов и повышает читаемость кода.'
	},
]

class Section extends React.Component {
	state = {
		status: false
	}

	toggleStatus = () => {
		this.setState({status: !this.state.status})
	}

	render() {
		const {sectionTitle, sectionText} = this.props;
		const open = this.state.status ? 'open' : '';
		
		return (
			<section onClick={this.toggleStatus} className={`section ${open}`}>
        <button>toggle</button>
        <h3 className="sectionhead">{sectionTitle}</h3>
        <div className="articlewrap">
          <div className="article">
	            {sectionText}
          </div>
        </div>
      </section>
		)
	}
}


class Accordeon extends React.Component {
	render() {
		const sections = this.props.data.map((el, idx) => 
			<Section key={idx} 
							 sectionTitle={el.title} 
							 sectionText={el.text} />
		);

		return (
			<main className="main">
				<h2 className="title">React</h2>
				{sections}
			</main>
		)
	}
}

class App extends React.Component {
	render() {
		return <Accordeon data={accordeonData} />
	}
}

ReactDOM.render(<App />, document.getElementById('accordian'))