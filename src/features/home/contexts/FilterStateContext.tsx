import React, {createContext, FC, ReactNode, useContext, useState} from 'react';

export enum FilterOptionsType {
  ALL = 0,
  WON = 1,
  redeemed = 2,
}

export type FilterOptions = {
  type: FilterOptionsType;
  date: Date | null;
};

export type FilterFunction = (filterOption: FilterOptions) => void;
type FilterStateContextProps = {
  filterData: FilterOptions;
  filter: FilterFunction;
};
export const FilterStateContext = createContext<FilterStateContextProps>({
  filterData: {
    type: FilterOptionsType.ALL,
    date: null,
  },
  filter: () => {},
});

export type FilterStateProviderProps = {
  children: ReactNode;
};

const FilterStateProvider: FC<FilterStateProviderProps> = ({children}) => {
  const [filterData, setFilterData] = useState<FilterOptions>({
    type: FilterOptionsType.ALL,
    date: null,
  });

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
