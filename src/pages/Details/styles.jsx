import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 3rem;

  h1 {
    margin: 3rem 0;
  }

  .movie {
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
  }

  img {
    border-radius: 1rem;
    margin-bottom: 2rem;
    width: 300px;
  }

  span {
    font-weight: normal;
    font-size: 120%;
    line-height: 130%;
    margin-bottom: 1rem;
  }

  .release-date {
    font-size: 100%;
    opacity: 0.5s;
  }

  .details {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-left: 6rem;
    max-width: 50%;
  }

  button {
    background-color: #6654da;
    border: none;
    border-radius: 1rem;
    color: white;
    cursor: pointer;
    font-size: 100%;
    margin-top: 1rem;
    padding: 0.8rem 2rem;
    transition: all 0.3s;
  }

  button:hover {
    background-color: #5848c2;
  }
`
