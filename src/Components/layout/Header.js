import React, { Fragment } from 'react';
import mealsImage from '../../assests/food.png';
import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';

const Header = (props) => {
    return (
    <Fragment>
        <header className= {classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton />
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt='A table full of delicious food!' />
        </div>

    </Fragment>
    );
};

export default Header;