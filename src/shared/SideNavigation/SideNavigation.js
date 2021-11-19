import React from 'react';
import classes from "./SideNavigation.module.scss";
import { Games } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';
import BackDrop from "../BackDrop.js/BackDrop";


const SideNavigation = (props) => {
    const myclass =  [classes.SideNavigation];
    let backdrop = null ;
    if(props.show){
        myclass.push(classes.Show);
        backdrop =  <BackDrop sidebarhandler={props.sidebarhandler} />;
    }else{
        myclass.push(classes.Hide);
        

    }
    return (
        <React.Fragment>
           {backdrop}
        <div className={myclass.join(' ')}> 
        <NavLink to="/" >            
            <span onClick={props.sidebarhandler}>
            <Games className={classes.Icon} style={{fontSize:"2.5rem"}}/> 
            <span className={classes.IconText}>GameNation</span>
            </span>
            </NavLink>

            <br/>            
            <br/>            
            
            <h6 className={classes.Copyright}>@Copyright Shivam Nanda</h6>
        </div>
        </React.Fragment>
    )
}




export default SideNavigation;
