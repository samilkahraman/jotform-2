/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// core components
import Header from 'components/Header/Header.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Parallax from 'components/Parallax/Parallax.js';
// sections for this page
import HeaderLinks from 'components/Header/HeaderLinks.js';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui icons
import parallaxImage from 'assets/img/examples/clark-street-merc.jpg';
import styles from 'assets/jss/material-kit-pro-react/views/ecommerceStyle.js';
import CategoryProducts from './Components/CategoryProducts/CategoryProducts.js';

const useStyles = makeStyles(styles);

export default function AllProductsPage(props) {
  // Couldnt understand the destructuring problem coming from airbnb eslint

  const categoryId = props.match.params.id;

  const authenticationKey = props.match.params.key;

  // console.log(authenticationKey, categoryId);
  const classes = useStyles();
  return (
    <div>
      <Header
        brand="CATEGORY => "
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 300,
          color: 'info'
        }}
      />
      <Parallax image={parallaxImage} filter="dark" small>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              md={8}
              sm={8}
              className={classNames(classes.mlAuto, classes.mrAuto, classes.textCenter)}
            >
              <div className={classes.brand}>
                <h1 className={classes.title}>Single Category Page!</h1>
                <h4>
                  Free global delivery for all products. Use coupon <b>25summer</b> for an extra 25%
                  Off
                </h4>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <CategoryProducts categoryId={categoryId} authenticationKey={authenticationKey} />
      </div>
    </div>
  );
}
