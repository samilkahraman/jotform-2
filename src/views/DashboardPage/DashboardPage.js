/*eslint-disable*/
import React, { useEffect, useState } from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons
// core components
import Header from 'components/Header/Header.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';
import Parallax from 'components/Parallax/Parallax.js';
import profilePageStyle from 'assets/jss/material-kit-pro-react/views/profilePageStyle.js';

import Categories from './Sections/Categories';
import SectionCarousel from './Sections/SectionCarouesel';
import SectionHeader from './Sections/SectionHeader';

const useStyles = makeStyles(profilePageStyle);

export default function DashboardPage({ ...rest }) {
  const classes = useStyles();

  // getForm.GetForm("c47b317e13a455fd869b360b993c5198", "200261686124045").then(data=> {return data.json()}).then(res=>{console.log(res); setTest(res)})

  return (
    <div>
      <Header
        color="transparent"
        brand="JOTFORM"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: 'info'
        }}
        {...rest}
      />
      <Parallax
        image={require('assets/img/podo_12.png')}
        filter="dark"
        className={classes.parallax}
      ></Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <SectionCarousel />
          <hr />
          <Categories />
          <br />
          <br />
          <br />
          <SectionHeader />
        </div>
      </div>
    </div>
  );
}
