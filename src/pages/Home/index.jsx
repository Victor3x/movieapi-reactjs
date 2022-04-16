import * as S from './styles'
import { APIKey } from '../../config/key'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const imgUrl = 'https://image.tmdb.org/t/p/w500'

  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
  }, [])

  return (
    <S.Container>
      <h1>Movies</h1>
      <S.MovieList>
        {movies.map(({ id, poster_path, title }) => {
          return (
            <S.Movie key={id}>
              <Link to={`/details/${id}`}>
                <img src={`${imgUrl}${poster_path}`} alt={title} />
              </Link>
              <span>{title}</span>
            </S.Movie>
          )
        })}
      </S.MovieList>
    </S.Container>
  )
}

export default Home
