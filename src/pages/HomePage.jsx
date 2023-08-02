import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setTrainerG } from "../store/slices/trainer.slice"
import { useNavigate } from "react-router-dom"
import '/src/components/PokedexPage/styles/HomePage.css'

const HomePage = () => {

  const inputTrainer = useRef()

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleSubmit = (e) =>{
    //e.target => es el formulario
    //e.target.inputTrainer.value => capturar el valor del input
    e.preventDefault()
    dispatch(setTrainerG(inputTrainer.current.value.trim()))
    navigate('/pokedex')
  }

  return (
    
    <div className="home">
      <img className="home__poke__image" src="/images/pokedex.png" alt="Pokedex" />
      <h2 className="home__title">Hi trainer!</h2>
      <p className="home__text">To start with the app, please write your name</p>
      <form className="home__form" onSubmit={handleSubmit}>
        <input className="home__input__trainer"  placeholder="Write your name..." id="inputTrainer" ref={inputTrainer} type="text" />
        <button className="home__btn">Gotta catch'em all!</button>
      </form>
      <footer className="home__footer">
        <div className="home__footer__red"></div>
        <div className="home__footer__black"></div>
        <div className="home__footer__circle-outer">
          <div className="home__footer__circle-inner"></div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage