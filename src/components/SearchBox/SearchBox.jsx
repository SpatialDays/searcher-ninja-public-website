import './SearchBox.scss'

const SearchBox = () => {

  return (
    <div className="search-box" style={
      {
        'display':'none'
      }
    }>
      <div className="search-box__input">
        <input type="text" disabled placeholder="See for yourself, Enter a search query here!" />
      </div>

      <div className="search-box__button">
        <button>
          <img alt="search icon" src="./icons/search.png" />
        </button>
      </div>
    </div>

  )
}

export default SearchBox;