import { useGlobalContext } from './context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  const handleSubmit = (e) => {
    e.preventDefault()
    const searchValue = e.target.elements.search.value
    setSearchTerm(searchValue)
  }
  return (
    <section>
      <h1 className="title">Unsplah Images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="cat"
          and
          className="form-input search-input"
        />
        <button className="btn" type="submit">
          Search
        </button>
      </form>
    </section>
  )
}
export default SearchForm
