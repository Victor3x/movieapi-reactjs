import { useParams } from 'react-router-dom'

export const Details = () => {
  const { id } = useParams()
  console.log(id)

  return <h1>Page of details</h1>
}
