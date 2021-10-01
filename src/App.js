import React from 'react'
import Navbar from "./components/Navbar"
import {Route,Switch,Redirect} from "react-router-dom"
import MovieList from './components/MovieList'
import { useSelector } from "react-redux";
import MovieDetail from './components/MovieDetail';

const App = () => {
  const state = useSelector(state => state.detailReducer)





  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={MovieList} />
        { Object.keys(state).length && 
          <Route exact path={`/details/${state.show.name}`} component={MovieDetail} />
        }
      </Switch>

    </>
  )
}

export default App
