import { useSelector } from "react-redux";
import useFetch from "../hook/useFetch";
import { useEffect, useRef, useState } from "react";
import PokeCard from "../components/PokedexPage/PokeCard";
import "/src/components/PokedexPage/styles/PokedexPage.css";
import SelectType from "../components/SelectType";
import { Link } from "react-router-dom";
import ChangePage from "../components/ChangePage";

const PokedexPage = () => {

  const [inputValue, setinputValue] = useState("")

  const [selectValue, setSelectValue] = useState("allPokemons")

  const trainer = useSelector((reducer) => reducer.trainer)

  const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=1281"

  const [pokemons, getAllPokemons, getPokemonsByType] = useFetch(url)

  //PAGINATION

  const [currentPage, setCurrentPage] = useState(1)

  const [pokePerPage] = useState(6)
  //

  useEffect(() => {
    if (selectValue === "allPokemons") {
      getAllPokemons();
    } else {
      getPokemonsByType(selectValue);
    }
  }, [selectValue]);

  // PAGINATION TO CHANGE

  const indexOfLastPoke = currentPage * pokePerPage

  const indexOfFirstPoke = indexOfLastPoke - pokePerPage

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  //

  const inputSearch = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setinputValue(inputSearch.current.value.trim().toLowerCase());
    setSelectValue("allPokemons");
  };

  const cbFilter = (poke) => poke.name.includes(inputValue) //La logica del input

  return (
    <div className="pokedexPage__container">
      
      <header className="home__header">
        <div className="home__header__red">
          <Link to='/'>
            <img  className="home__header__image" src="/images/pokedex.png" alt="Pokedex" />
          </Link>
        </div>
        <div className="home__header__black"></div>
        <div className="home__header__circle-outer">
          <div className="home__header__circle-inner"></div>
        </div>
      </header>

      <p className="pokedex__text">
        <span className="pokedex__trainer__name">Welcome {trainer},</span> here
        you can find your favorite Pokemon!
      </p>
      
      <div className="pokedex__interactions">
        <form className="pokedex__form" onSubmit={handleSubmit}>
          <input
            className="pokedex__input"
            placeholder="Write your pokemon.."
            ref={inputSearch}
            type="text"
          />
          <button className="pokedex__btn">Search</button>
        </form>

        <SelectType
          selectValue={selectValue}
          setSelectValue={setSelectValue}
          setinputValue={setinputValue}
          className="pokedex__select"
        />
      </div>

      <div className="pokecard__container">
        {pokemons?.results.filter(cbFilter).map((poke) => (
          <PokeCard 
          key={poke.url} 
          url={poke.url} 
          />
          )
          )
          .slice(indexOfFirstPoke, indexOfLastPoke)
          }
      </div>

       <footer className="Pagination">
       <ChangePage
        pokePerPage={pokePerPage}
        totalPoke={url.length}
        paginate={paginate}
        />
       </footer>

    </div>
  );
};

export default PokedexPage;
