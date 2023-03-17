import React, {createContext, FC, ReactNode, useContext, useState} from 'react';

export enum FilterOptions {
  ALL = 0,
  WON = 1,
  redeemed = 2,
}

type FilterStateContextProps = {
  filter: FilterOptions;
  setFilter: Function;
};
const FilterStateContext = createContext<FilterStateContextProps>({
  filter: FilterOptions.ALL,
  setFilter: Function,
});

export type FilterStateProviderProps = {
  children: ReactNode;
};

const FilterStateProvider: FC<FilterStateProviderProps> = ({children}) => {
  const [filter, setFilter] = useState<FilterOptions>(FilterOptions.ALL);

  return (
    <FilterStateContext.Provider
      value={{
        filter,
        setFilter,
      }}>
      {children}
    </FilterStateContext.Provider>
  );
};
export const useFilterStateContext = () => useContext(FilterStateContext);

export default FilterStateProvider;
