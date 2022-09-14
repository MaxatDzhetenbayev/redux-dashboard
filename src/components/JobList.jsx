import { useSelector, useDispatch } from 'react-redux';
import { selectVisiblePositions } from 'store/positions/positions-selectors';
import { selectAllFilters } from 'store/filter/filter-selector';
import { JobPosition } from './JobPosition';
import { addFilter } from 'store/filter/filter-actions';

const JobList = () => {
   const currentFilters = useSelector(selectAllFilters)
   const positions = useSelector((state => selectVisiblePositions(state, currentFilters)))
   const dispatch = useDispatch()

   const handleAddFilter = (filter) => {
      dispatch(addFilter(filter))
   }

   return (
      <div className='job-list'>
         {positions.map(item => (
            <JobPosition
               key={item.id}
               handleAddFilter={handleAddFilter}
               {...item}
            />
         ))}
      </div>
   )
}

export { JobList };