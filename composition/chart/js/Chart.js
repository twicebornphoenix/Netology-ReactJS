'use strict';

const Chart = props => {
    const labels = props.labels;
    const series = props.data.map((s,i) => <ChartSerie key={i} serie={s} labels={labels} />)
    return (
        <div className={`Charts ${props.className || ''}`}>
            {series}
        </div>
    )
}