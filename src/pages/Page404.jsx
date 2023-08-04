import { Link } from "react-router-dom"
import '/src/components/PokedexPage/styles/Page404.css'

const Page404 = () => {
  return (
    <h1>❌This page not found, please return <Link to='/'> Home Page 🏠</Link></h1>
  )
}

export default Page404