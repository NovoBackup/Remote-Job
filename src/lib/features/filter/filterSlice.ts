import { FilterBy } from '@/utils/interfaces'
import { createSlice, current } from '@reduxjs/toolkit'

export type Category = 'locations' | 'positions' | 'types' | 'benefits'

const initialState: FilterBy = {
  filterBy: {
    locations: [],
    positions: [],
    types: [],
    benefits: [],
    salary: 90000,
  },
  filterQuery: '',
  isFiltering: false,
  filterOpen: false,
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      const category = action.payload.category as Category
      const stateCategory = state.filterBy[category]
      const { newOption } = action.payload
      console.log(action.payload)
      // if option already exists, remove it
      if (stateCategory.includes(newOption)) {
        const optionToRemove = stateCategory.findIndex(
          (opt) => opt === newOption
        )
        stateCategory.splice(optionToRemove, 1)
      } else {
        // add new option if it does not exist
        state.filterBy = {
          ...state.filterBy,
          [category]: [...stateCategory, newOption],
        }
      }
    },
    changeSalary: (state, action) => {
      state.filterBy.salary = action.payload
    },
    setFilterQuery: (state, action) => {
      state.filterQuery = action.payload.query
      state.isFiltering = action.payload.isFiltering
    },
    setFilterOpen: (state, action) => {
      state.filterOpen = action.payload
    },
    resetFilter: (state) => {
      state.filterBy = {
        locations: [],
        positions: [],
        types: [],
        benefits: [],
        salary: 90000,
      }
    },
  },
})

export const {
  changeFilter,
  changeSalary,
  setFilterQuery,
  setFilterOpen,
  resetFilter,
} = filterSlice.actions
export default filterSlice.reducer
