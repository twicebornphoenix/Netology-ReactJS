'use strict';

const ChartSerie = props => {
    console.log(props)
    var sortedSerie = props.serie.slice(0), sum;
    sum = props.serie.reduce((carry, current) => carry + current, 0);
    sortedSerie.sort(compareNumbers);
    return (
            <div className={`Chart--serie ${props.className || ''}`} 
                style={/horizontal/.test(props.className) ? {height: 'auto'} : {height: 250}}>
                <Label key={props.key} serie={props.serie} labels={props.labels} />
            </div>
        )
    
}