import { CiFilter } from 'react-icons/ci'
import './filterMemories.css'
import { useState } from 'react'
import Tags from '../Tags/Tags'
const FilterMemories = () => {
    const [openFilter, setOpenFilter] = useState(false)

    const cardFilter = () => {
        return(
            <div className='card-filter-open'>
                <Tags needTitle={false}/>
            </div>
        )
    }

    return(
        <div className="filter-content">
            <button className='btn-filter' onClick={() => {openFilter ? setOpenFilter(false) : setOpenFilter(true)}}>
                <CiFilter className='icon-filter'/>
            </button>

            {

                openFilter ? cardFilter() : ''

            }
        </div>
    )
}

export default FilterMemories