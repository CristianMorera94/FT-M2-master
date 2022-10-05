import React from 'react';
import Button  from 'react-bootstrap/Button';
import st from '../Styles/SearchBar.module.css';

export default function SearchBar(props) {
  // acá va tu código
  return (
  <div className={st.container}>
    <input type={"text"} placeholder={"Ciudad..."}/>
    <button className={st.btnSearch} onClick={() => props.onSearch("Buscando Cuidad ...")}>Agregar</button>  
  </div>
  )
};