'use strict';

const ChartItem = props => {
    
   return (
       <div className={props.className || null}>
            <b style={props.style}>{props.item}</b>
       </div>
   )
}