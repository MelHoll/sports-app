import { FC, useEffect, useState } from 'react';
import classes from './styles.module.scss';
import Button from 'components/button';
import Slider from 'assets/svg/slider.svg?react';


interface FilterProps {
  options: FilterOption[];
  label?: string;
  onChange?: (options: FilterOption[] | undefined) => void;
  onSubmit?: (options: FilterOption[] | undefined) => void;
  showFilterButton?: boolean;
}

export interface FilterOption {
  propertyKey: string;
  propertyName: string; 
  values: string[];
}

export const Filter: FC<FilterProps> = ({
  options, 
  label, 
  onChange, 
  onSubmit, 
  showFilterButton = false
}) => {
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [filters, setFilters] = useState<{ [id: string] : string[]; }>();

  useEffect(()=> {
    const initialFilter: {[id: string] : string[]} = {};
    options.forEach((option)=>{
      initialFilter[option.propertyKey as keyof typeof initialFilter] = [];
    });

    setFilters(initialFilter);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filterClicked = (key: string, value: string, currentlyChecked: boolean) => { //TODO
    //either delete from result, or add to result
    const filtersCopy = JSON.parse(JSON.stringify(filters));
    
    if(currentlyChecked) {
      filtersCopy[key] = filtersCopy[key].filter((val: string) => val != value);
    } else {
      filtersCopy[key].push(value);
    }

    const updated = {...filters, ...filtersCopy};
    setFilters(updated);
    onChange?.(getConveredtFilter(updated));
  }

  const getConveredtFilter = (data: {[id: string]: string[] }) => {
    const filtersOptions: FilterOption[] = [];

    Object.keys(data!).forEach((key) => {
      if(data![key].length > 0) {
        filtersOptions.push({
          propertyKey: key, 
          propertyName: '',
          values: [...data![key]]
        });
      }
    });

    return filtersOptions.length == 0 ? undefined : filtersOptions;
  }
  
  return (
    <div className={classes.container}>
    <Button 
      secondary={filters == undefined || getConveredtFilter(filters) == undefined}
      LeftIcon={Slider} 
      onClick={() => {
        setFiltersVisible(!filtersVisible);
      }}
    />
    { filtersVisible && filters && <div className={`${classes.mainPanel} ${classes.popup}`}>
      <div title={label}>{label}</div>
      {options.map((option) => {
        const selectedFilter = filters[option.propertyKey as keyof typeof filters];
        return (
        <div key={option.propertyKey}>
          <div title={option.propertyName}>{option.propertyName}</div>
          <div>{option.values.map((value) =>  
            <div 
              key={value} 
              title={value}
              >
              <input
                type="checkbox"
                checked={selectedFilter.includes(value)}
                onChange={() => filterClicked(option.propertyKey, value, selectedFilter.includes(value))}
              />
              {value}
            </div>
            )}
            </div>
        </div>
        );
      })}
      {showFilterButton && <Button 
        label='Filter' 
        onClick={() => {
          setFiltersVisible(false);
          onSubmit?.(getConveredtFilter(filters))
        }}/>}
    </div>
    }
    </div>
  );
};

Filter.displayName = 'Filter';

export default Filter;
