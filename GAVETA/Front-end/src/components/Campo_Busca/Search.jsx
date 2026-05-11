import { IoSearchOutline } from "react-icons/io5";
import './search.css'

const Search = () => {
    return (
        <div className='search-content'>
            <IoSearchOutline className="icone-search" />
            <input type="text" placeholder='Resgate uma memória'/>
            
        </div>
    )
}

export default Search