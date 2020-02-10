import React  from 'react';
import MenuItem from '../components/menu-item/menuitem.component'
import './directory.style.scss'
import SHOP_DATA from '../assets/shop-data';
class Directory extends React.Component{
    constructor(){
        super();
        this.state = {
            sections : SHOP_DATA
        }
    }

    render() {
        return (
            
                <div className="directory-menu">
                    {
                        this.state.sections.map(({id,...props}) => 
                        {
                        
                        return (
                            <MenuItem key={id} {...props} />)
                        }
                        )
                    }
                </div>
            
        )
    }
}
export default Directory