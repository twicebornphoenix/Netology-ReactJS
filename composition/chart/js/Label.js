'use strict';

const Label = props => {
    console.log(props)
    return <label>{props.labels[props.key]}</label>
}