/*eslint-disable*/
import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons
// core components

import Parallax from 'components/Parallax/Parallax.js';
import profilePageStyle from 'assets/jss/material-kit-pro-react/views/profilePageStyle.js';
import Categories from './Components/Categories';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
const useStyles = makeStyles(profilePageStyle);

export default function PricePage({ ...rest }) {
  const classes = useStyles();

  // getForm.GetForm("c47b317e13a455fd869b360b993c5198", "200261686124045").then(data=> {return data.json()}).then(res=>{console.log(res); setTest(res)})

  return (
    <div>
      <Parallax
        image={require('assets/img/giris.jpg')}
        filter="transparent"
        className={classes.parallax}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem md={8} className={classes.textCenter}>
              <h1 className={classes.cardTitleWhite}>Price Calculation Screen</h1>

              <h4 className={classes.subtitle}>Beta</h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <hr />
          <br />
          <Categories />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}
