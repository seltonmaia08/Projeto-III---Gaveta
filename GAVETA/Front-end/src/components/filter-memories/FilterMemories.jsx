import { CiFilter } from 'react-icons/ci'
import './filterMemories.css'
const FilterMemories = () => {
    return(
        <div className="filter-content">
            <button>
                <CiFilter className='icon-filter'/>
            </button>
        </div>
    )
}

export default FilterMemories