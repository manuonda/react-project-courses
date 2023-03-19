import { FILTERS_BUTTONS } from '../const'
import { FilterValue } from '../types'

interface Props {
  filterSelected: FilterValue
  onFilterChange: (filter: FilterValue) => void
}
export const Filters: React.FC<Props> = ({ filterSelected, onFilterChange }: Props) => {
  return (
        <ul className="filters">
            {
                Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
                  const isSelected = key === filterSelected
                  const className = isSelected ? 'selected' : ''
                  return (
                        <li key={key}>
                            <a href={href}
                                className={className}
                                onClick={handleClick(key)}
                            >
                                {literal}
                            </a>
                        </li>
                  )
                })
            }
        </ul>
  )
}
