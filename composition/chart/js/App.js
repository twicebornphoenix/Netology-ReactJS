function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function compareNumbers(a, b) {
  return a - b;
}

function setSerieItemStyle(h, cls, c, i, s, serie, max, srt) {
	const hwVal = h === 'horizontal' ? 'width' : 'height';
	const op = cls === 'stacked' ? 1 : (i / max + 0.5);
	const r = cls === 'layered' ? ((srt.indexOf(i) / (serie.length + 1)) * 100) + '%' : '';
	return {
		backgroundColor: c,
		opacity: op,
		zIndex: i,
		[hwVal]: s + '%',
		right: r
	}
}

const chartSerieStyles = [
	{height: 250},
	{height: 'auto'}
]

class Chart extends React.Component {
	chooseSerieStyle(cls) {
		return cls ? chartSerieStyles[1] : chartSerieStyles[0];
	}
	render() {
		const { chartClass, serieItemClass, data, series, colors } = this.props;
		const serieStyle = this.chooseSerieStyle(chartClass);
		const max = data.reduce((max, serie) => Math.max(max, serie.reduce((serieMax, item) => Math.max(serieMax, item), 0)), 0);
		return (
			 <div className={`Charts ${chartClass}`}>
          { data.map((serie, serieIndex) => {
            var sortedSerie = serie.slice(0),
              sum;

            sum = serie.reduce((carry, current) => carry + current, 0);
            sortedSerie.sort(compareNumbers);
           
            return <ChartSerie className={serieItemClass} 
            									 style={serieStyle} 
            									 index={serieIndex} 
            									 series={series} 
            									 serie={serie} 
            									 colors={colors} 
            									 sum={sum}
            									 max={max}
            									 hwVal={chartClass}
            									 sorted={sortedSerie} />
          }) }
        </div>
		)
	}
}

class ChartSerie extends React.Component {
	render() {
		const { className, style, series, serie, colors, index, sum, max, hwVal, sorted } = this.props;
		return (
        <div className={`Charts--serie ${className}`}
          key={ index }
          style={style}
        >
        <Label series={series} index={index} />
        { serie.map((item, itemIndex) => {
          var color = colors[itemIndex], style, size;
          size = className === 'stacked' ? (item / sum) * 100 : (item / max) * 100;
					style = setSerieItemStyle(hwVal, className, color, item, size, max, sorted);

        return <ChartItem itemClass={className} 
        									style={style} 
        									item={item} 
        									itemIndex={itemIndex} 
        									color={color} />
        }) }
        </div>
      );
	}
}

class Label extends React.Component {
	render() {
		const { series, index } = this.props;
		return <label>{ series[index] }</label>
	}
}

class ChartItem extends React.Component {
	render() {
		const { itemClass, style, item, itemIndex, color } = this.props;
		return (
	      <div
	        className={`Charts--item ${itemClass}`}
	        style={ style }
	        key={ itemIndex }
	      >
	        <b style={{ color: color }}>{ item }</b>
	      </div>
    )
	}
}

class App extends React.Component {
	componentWillMount() {
		this.setState({
			data: [],
			series: ['France', 'Italy', 'England', 'Sweden', 'Germany'],
			labels: ['cats', 'dogs', 'horses', 'ducks', 'cows'],
			colors: ['#43A19E', '#7B43A1', '#F2317A', '#FF9824', '#58CF6C']
		})
	}

	componentDidMount() {
		this.populateArray();
		setInterval(this.populateArray.bind(this), 2000);
	}

	populateArray() {
		const	series = 5;
		const serieLength = 5;

    let data = new Array(series).fill(new Array(serieLength).fill(0));
    data = data.map(serie => serie.map(item => getRandomInt(0, 20)));

		this.setState({ data });
	}

	render() {
		const { data, colors, labels, series } = this.state;
		const max = data.reduce((max, serie) => Math.max(max, serie.reduce((serieMax, item) => Math.max(serieMax, item), 0)), 0);
    
		return (
			<section>
        <Chart data={data} colors={colors} series={series} />
        <Chart serieItemClass='stacked' data={data} colors={colors} series={series} />

        <div className="Charts">
  				{ data.map((serie, serieIndex) => {
  				 	var sortedSerie = serie.slice(0),
  				 		sum;

  				 	sum = serie.reduce((carry, current) => carry + current, 0);
  				 	sortedSerie.sort(compareNumbers);

  					return (
  						<div className="Charts--serie layered"
  				 			key={ serieIndex }
  							style={{ height: 250 }}
  						>
  						<label>{ series[serieIndex] }</label>
  						{ serie.map((item, itemIndex) => {
  							var color = colors[itemIndex], style,
  								size = item / (max) * 100;

  							style = {
  								backgroundColor: color,
  								opacity: (item/max + .05),
  								zIndex: item,
                  height: size + '%',
                  right: ((sortedSerie.indexOf(item) / (serie.length + 1)) * 100) + '%'
  							};

  						 return (
  							 <div
  							 	className="Charts--item layered"
  							 	style={ style }
  								key={ itemIndex }
  							>
  							 	<b style={{ color: color }}>{ item }</b>
  							 </div>
  						);
  						}) }
  						</div>
  					);
  				}) }
  			</div>

        <div className="Charts horizontal">
  				{ data.map((serie, serieIndex) => {
  				 	var sortedSerie = serie.slice(0),
  				 		sum;

  				 	sum = serie.reduce((carry, current) => carry + current, 0);
  				 	sortedSerie.sort(compareNumbers);

  					return (
  						<div className="Charts--serie"
  				 			key={ serieIndex }
  							style={{ height: 'auto' }}
  						>
  						<label>{ series[serieIndex] }</label>
  						{ serie.map((item, itemIndex) => {
  							var color = colors[itemIndex], style,
  								size = item / (max) * 100;

  							style = {
  								backgroundColor: color,
  								opacity: (item/max + .05),
  								zIndex: item,
                  width: size + '%'
  							};

  						 return (
  							 <div
  							 	className="Charts--item"
  							 	style={ style }
  								key={ itemIndex }
  							>
  							 	<b style={{ color: color }}>{ item }</b>
  							 </div>
  						);
  						}) }
  						</div>
  					);
  				}) }
  			</div>

        <div className="Legend">
    			{ labels.map((label, labelIndex) => {
    				return (
    				<div>
    					<span className="Legend--color" style={{ backgroundColor: colors[labelIndex % colors.length]  }} />
    					<span className="Legend--label">{ label }</span>
    				</div>
    				);
    			}) }
    		</div>
			</section>
		);
	}
}