import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import { APIKey } from '../../config/key'

import * as S from './styles'

export const Details = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState({})
  const imgUrl = 'https://image.tmdb.org/t/p/w500'

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        const { title, release_date, overview, poster_path } = data

        const movie = {
          id,
          title,
          releaseDate: release_date,
          sinopse: overview,
          image: `${imgUrl}${poster_path}`
        }
        setMovie(movie)
      })
  }, [id])

  return (
    <S.Container>
      <div className="movie">
        <img src={movie.image} alt={movie.title} />
        <div className="details">
          <h1>{movie.title}</h1>
          <span>Sinopse: {movie.sinopse}</span>
          <span className="release-date">
            Release date: {movie.releaseDate}
          </span>
          <Link to="/">
            <button>Go Back</button>
          </Link>
        </div>
      </div>
    </S.Container>
  )
}
