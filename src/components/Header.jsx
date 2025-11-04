import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
    <h1> Aplicação de Filmes</h1>   
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/movies">Movies</Link></li>
    </ul>
    </>
  )
}
