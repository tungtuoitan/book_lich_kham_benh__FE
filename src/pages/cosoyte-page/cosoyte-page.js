import React from 'react'
import HomeBar from './home-bar'
import SearchAndDisplay from './search-and-display-cosoyte'
import Header from '../../components/header'

class CosoytePage extends React.Component {
    render(){
        return(
            <>
            <Header/>
            <HomeBar/>
            <SearchAndDisplay/>
            
            </>
            
        )
    }

}

export default CosoytePage