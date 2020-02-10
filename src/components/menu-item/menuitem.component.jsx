import React from 'react';
import './menuitem.style.scss';
import {withRouter} from 'react-router-dom'

 const MenuItem = ({title,imageUrl,history,match,routeName}) => 
 {
  return (   
    <div 
    style={ { backgroundImage : `url(${imageUrl})` } }
    onClick={ () =>  history.push(`${match.url}${routeName}`) } 
    className={`menu-item`}>
        <div className="content">
            <h1 className="title"> {title} </h1>
        </div>
        
    </div>
)
}



export default withRouter(MenuItem)