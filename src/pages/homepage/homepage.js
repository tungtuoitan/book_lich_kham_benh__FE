import React from 'react'
import Slider1 from './slider1.js'
import Slider_2 from './slider-2.js'
import Header from '../../components/header.js'
import MainImageAndSearch from './main-image-and-search.js'
import data from '../../data/data-chuyen-khoa-pho-bien.js'

class HomePage extends React.Component{
    render (){
        return(
            <>
            <Header/>
            <MainImageAndSearch/>
            <Slider1/>
            <Slider_2 data={data}/>
            </>
        )
    }
}

export default HomePage