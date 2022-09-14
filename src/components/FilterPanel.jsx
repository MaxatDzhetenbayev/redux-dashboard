import { useSelector, useDispatch } from 'react-redux'
import { selectAllFilters } from 'store/filter/filter-selector';
import { clearFilter, removeFilter } from 'store/filter/filter-actions';

import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';



const FilterPanel = () => {

   const dispatch = useDispatch()
   const filters = useSelector(selectAllFilters)

   if (filters.length === 0) {
      return null
   }

   return (
      <Card className="filter-panel">
         <div className="filter-panel-wrapper">
            <Stack>
               {
                  filters.map(filter => (
                     <Badge key={filter} onClear={() => dispatch(removeFilter(filter))} variant="clearable">{filter}</Badge>
                  ))
               }
            </Stack>

            <button onClick={() => dispatch(clearFilter)} className='link'>Clear</button>
         </div>
      </Card>
   )
}

export { FilterPanel };