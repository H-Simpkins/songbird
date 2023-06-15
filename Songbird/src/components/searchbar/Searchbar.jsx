import searchbarCSS from './searchbar.module.css'

export default function Searchbar() {

    return (
        <div className={searchbarCSS.searchbarContainer}>
            <form>
                <input
                    className={searchbarCSS.searchbar}
                    type="text"
                    placeholder="Song or Artist..."
                />
                <button type="submit" className={searchbarCSS.button}>Search</button>
            </form>
        </div>
    )
}