import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hook/useFetch";
import { useEffect } from "react";
import "/src/components/PokedexPage/styles/PokeIdPage.css";
import { Link } from "react-router-dom";
import { useRef } from "react";

const PokeIdPage = () => {

  const { id } = useParams();

  const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;

  const [pokemon, getSinglePokemon] = useFetch(url);

  useEffect(() => {
    getSinglePokemon();
  }, [id]);

  const firstType = pokemon?.types[0].type.name;
  
  const pokeBaseStat = 300;

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/pokedex/${inputSearch.current.value.trim()}`)
  };
  const inputSearch = useRef();


  return (
    <article>
      <div className="home__header">
        <div className="home__header__red">
          <Link to="/">
            <img
              className="home__header__image"
              src="/images/pokedex.png"
              alt="Pokedex"
            />
          </Link>
        </div>
        <div className="home__header__black"></div>
        <div className="home__header__circle-outer">
          <div className="home__header__circle-inner"></div>
        </div>
      </div>

      <div className="container1">
        <header className={`pokemon__header ${firstType}-gradient`}>
          <img
            className="pokemon__image"
            src={pokemon?.sprites.other["official-artwork"].front_default}
            alt=""
          />
        </header>
        <h2 className={`pokemon__title__name ${firstType}-color`}>
          {pokemon?.name}
        </h2>

        <form className={`pokemon__form ${firstType}-color`} onSubmit={handleSubmit}>
          #
          <input
            className="pokemon__input"
            placeholder={pokemon?.id}
            ref={inputSearch}
            type="number"
          />
        </form>

        <ul className="pokemon__measures">
          <li className="pokemon__weight">
            <h4 className="pokemon__weight__title">Weight</h4>
            <span className="pokemon__weight__value">{pokemon?.weight}</span>
          </li>
          <li className="pokemon__height">
            <h4 className="pokemon__height__title">Height</h4>
            <span className="pokemon__height__value">{pokemon?.height}</span>
          </li>
        </ul>

        <ul className="pokemon__type__abilities">
          <div className="pokemon__type-container">
            <h4 className="pokemon__type__title">Type</h4>
            <div className="pokemon__type">
              {pokemon?.types.map((typeInfo) => (
                <li
                  className={`pokemon__type__list ${typeInfo.type.name}-background`}
                  key={typeInfo.type.url}
                >
                  {typeInfo.type.name}
                </li>
              ))}
            </div>
          </div>

          <div className="pokemon__abilities-container">
            <h4 className="pokemon__abilities__title">Abilities</h4>
            <div className={"pokemon__abilities"}>
              {pokemon?.abilities.map((abilityInfo) => (
                <li
                  className="pokemon__abilities__list"
                  key={abilityInfo.ability.url}
                >
                  {abilityInfo.ability.name}
                </li>
              ))}
            </div>
          </div>
        </ul>

        <div>
          <h4 className="pokemon__stats__title">Stats</h4>
          <ul className="pokemon__stats">
            {pokemon?.stats.map((statInfo) => (
              <li className="pokemon__stats__list" key={statInfo.stat.url}>
                <div className="pokemon__stats__text">
                  <p className="pokemon__stats__text-name">
                    {statInfo.stat.name}:
                  </p>
                  <p className="pokemon__stats__text-value">
                    {statInfo.base_stat} / 300
                  </p>
                </div>
                <div className="pokemon__stat__container">
                  <div
                    className="pokemon__stat__value"
                    style={{
                      width: `calc(${statInfo.base_stat} / ${pokeBaseStat} * 100%)`,
                    }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <div className="container2">
          <h4 className="pokemon__moves__title">Movements</h4>
          <ul className="pokemon__moves">
            {pokemon?.moves.map((moveInfo) => (
              <li className="pokemon__moves__list" key={moveInfo.move.url}>
                {moveInfo.move.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
};

export default PokeIdPage;
