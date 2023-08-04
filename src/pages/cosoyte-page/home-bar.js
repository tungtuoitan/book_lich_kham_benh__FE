import React from 'react'
import '../../styles/home-bar.scss'

class HomeBar extends React.Component {
    render(){
        return(
            <div className='home-bar-container'>
                <div className='homebar'>

                <i class="fa-solid fa-house home-icon"></i>
                <span className='slash'>/</span>
                <span className='title'>Tất cả cơ sở y tế</span>
                </div>
            </div>
        )
    }
}

export default HomeBar