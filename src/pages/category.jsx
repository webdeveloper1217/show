import React from 'react';

import Sidebar from '../element/Sidebar'
import Headline from '../components/Headline';
import Categorylist from '../components/Categorylist';

const Category = () => {
    return (
        <React.Fragment>
            <div className="leftblog">
                <Sidebar/>
            </div>
            <div className="rigterblog">
                
                <Headline/>
                <Categorylist/>
            </div>
        </React.Fragment>
    )
}

export default Category
