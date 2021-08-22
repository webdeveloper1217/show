import React from 'react'
import Sidebar from '../element/Sidebar'

const Home = () => {
    return (
        <React.Fragment>
            <div className="leftblog">
                <Sidebar/>
            </div>
            <div className="rigterblog">
                Home page
            </div>
        </React.Fragment>
    )
}

export default Home
