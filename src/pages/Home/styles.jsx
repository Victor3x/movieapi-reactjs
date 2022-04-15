import styled from 'styled-components'

export const Container = styled.div`
  h1 {
    margin: 4rem 0;
    text-align: center;
  }
`
export const MovieList = styled.ul`
  column-gap: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  list-style: none;
  row-gap: 4rem;
`
export const Movie = styled.li`
  align-items: center;
  display: flex;
  flex-direction: column;

  img {
    border-radius: 1rem;
    margin-bottom: 2rem;
    width: 180px;
  }

  span {
    font-weight: bold;
    font-size: 120%;
  }

  a {
    transition: all 0.3s;
  }

  a:hover {
    transform: scale(1.1);
  }
`
