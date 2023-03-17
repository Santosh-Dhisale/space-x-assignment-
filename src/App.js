import React from 'react'
import Banner from './component/banner'
import DataGrid from './component/dataGrid'
import SearchForm from './component/searchForm'
import Header from './component/header'
import Pegination from './component/pagination'

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <SearchForm />
      <DataGrid />
      <Pegination />
    </div>
  )
}

export default App