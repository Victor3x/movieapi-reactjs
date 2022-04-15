import * as S from './styles'

function Home() {
  const movies = [
    {
      title: 'The Batman',
      image_url:
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRBkxgl2A2PhE_6tklFLT0bxn5NLhvhsnpXGhmXBt_zotrlVHmo'
    },
    {
      title: 'The Batman',
      image_url:
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRBkxgl2A2PhE_6tklFLT0bxn5NLhvhsnpXGhmXBt_zotrlVHmo'
    },
    {
      title: 'The Batman',
      image_url:
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRBkxgl2A2PhE_6tklFLT0bxn5NLhvhsnpXGhmXBt_zotrlVHmo'
    }
  ]

  return (
    <S.Container>
      <h1>Movies</h1>
      <S.MovieList>
        {movies.map((movies) => {
          return (
            <S.Movie key={movies.title}>
              <a href="https://google.com.br">
                <img src={movies.image_url} alt={movies.title} />
              </a>
              <span>{movies.title}</span>
            </S.Movie>
          )
        })}
      </S.MovieList>
    </S.Container>
  )
}

export default Home
