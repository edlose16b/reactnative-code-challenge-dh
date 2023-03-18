import React, {createContext, FC, ReactNode, useContext, useState} from 'react';

export enum FilterOptions {
  ALL = 0,
  WON = 1,
  redeemed = 2,
}

type FilterStateContextProps = {
  filterData: FilterOptions;
  filter: Function;
};
export const FilterStateContext = createContext<FilterStateContextProps>({
  filterData: FilterOptions.ALL,
  filter: Function,
});

export type FilterStateProviderProps = {
  children: ReactNode;
};

const FilterStateProvider: FC<FilterStateProviderProps> = ({children}) => {
  const [filterData, setFilterData] = useState<FilterOptions>(
    FilterOptions.ALL,
  );

  const filter = (filterOption: FilterOptions) => {
    setFilterData(filterOption);
  };
  return (
    <FilterStateContext.Provider
      value={{
        filterData,
        filter,
      }}>
      {children}
    </FilterStateContext.Provider>
  );
};
export const useFilterStateContext = () => useContext(FilterStateContext);

export default FilterStateProvider;
