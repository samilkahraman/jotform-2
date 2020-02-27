/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
// nodejs library that concatenates classes
// core components
import Header from 'components/Header/Header.js';
import Parallax from 'components/Parallax/Parallax.js';
// sections for this page
import HeaderLinks from 'components/Header/HeaderLinks.js';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui icons
import parallaxImage from 'assets/img/examples/clark-street-merc.jpg';
import profilePageStyle from 'assets/jss/material-kit-pro-react/views/profilePageStyle.js';
import Cards from './components/Cards';
import CategoryTable from './components/CategoryTable';

const useStyles = makeStyles(profilePageStyle);

// eslint-disable-next-line no-unused-vars
export default function AdminPage(props) {
  // Couldnt understand the destructuring problem coming from airbnb eslint

  // console.log(authenticationKey, categoryId);
  const classes = useStyles();
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
      />
      <Parallax image={parallaxImage} filter="dark" className={classes.parallax} />

      <Cards />
      <CategoryTable />
    </div>
  );
}
