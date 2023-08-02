import React from "react";
import useFetch from "../hook/useFetch";
import { useEffect } from "react";
import "/src/components/PokedexPage/styles/SelectType.css";

const SelecType = ({ setSelectValue, setinputValue, selectValue }) => {
  const url = "https://pokeapi.co/api/v2/type";

  const [types, getAllTypes] = useFetch(url);

  useEffect(() => {
    getAllTypes();
  }, []);

  const handleChange = (e) => {
    setSelectValue(e.target.value);
  };

  return (
    <select
      className="select__container"
      value={selectValue}
      onChange={handleChange}
    >
      <option className="select__option" value="allPokemons">All Pokemons</option>
      {types?.results.map((type) => (
        <option className="select__types" key={type.url} value={type.url}>
          {type.name}
        </option>
      ))}
    </select>
  );
};

export default SelecType;
