import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useGlobalContext } from './context'

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`

const Gallery = () => {
  const { searchTerm } = useGlobalContext()
  const response = useQuery({
    queryKey: ['images', searchTerm],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchTerm}`)
      return result.data
    },
  })
  if (response.isLoading)
    return (
      <section>
        <div>
          <h1> Loading ......</h1>
        </div>
      </section>
    )
  if (response.isError)
    return (
      <section>
        <div>
          <h1> There is an error</h1>
        </div>
      </section>
    )
  const results = response.data.results
  if (results.length < 1) {
    return (
      <section className="images-container">
        <h1>No Result Found ......</h1>
      </section>
    )
  }

  return (
    <section className="image-container">
      {results.map((item) => {
        const url = item?.urls?.regular
        return <img src={url} key={item.id} className="img" />
      })}
    </section>
  )
}
export default Gallery
