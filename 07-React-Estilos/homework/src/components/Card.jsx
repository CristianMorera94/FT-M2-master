import React from 'react';
import Styles from './Card.modules.css';

export default function Card(props) {
  // acá va tu código
  return (<div>
    <button onClick={props.onClose}>X</button>
    <h3>{props.name}</h3>
    <h5>Min</h5>
    <p>{props.min}</p>
    <h5>Max</h5>
    <p>{props.max}</p>
    <img src={'http://openweathermap.org/img/wn/${props.img}@2x.png'} all = {"img"}/>
  </div>)
};