// #region
import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';

// @material-ui/icons
import Favorite from '@material-ui/icons/Favorite';
// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Button from 'components/CustomButtons/Button.js';
import Card from 'components/Card/Card.js';
import CardHeader from 'components/Card/CardHeader.js';
import CardBody from 'components/Card/CardBody.js';
import CardFooter from 'components/Card/CardFooter.js';
import Tooltip from '@material-ui/core/Tooltip';

// images
import cardProduct1 from 'assets/img/examples/card-product1.jpg';
import cardProduct3 from 'assets/img/examples/card-product3.jpg';
import cardProduct4 from 'assets/img/examples/card-product4.jpg';
import cardProduct2 from 'assets/img/examples/card-product2.jpg';

// Material Kit styling
import { makeStyles } from '@material-ui/core/styles';
import productStyle from 'assets/jss/material-kit-pro-react/views/productStyle.js';
// #endregion
const useStyles = makeStyles(productStyle);

export default function RelatedProducts() {
  const classes = useStyles();

  return (
    <div className={classes.relatedProducts}>
      <h3 className={classNames(classes.title, classes.textCenter)}>
        You may also be interested in:
      </h3>
      <GridContainer>
        <GridItem sm={6} md={3}>
          <Card product>
            <CardHeader image>
              <a href="#pablo">
                <img src={cardProduct1} alt="cardProduct" />
              </a>
            </CardHeader>
            <CardBody>
              <h6 className={classNames(classes.cardCategory, classes.textRose)}>Trending</h6>
              <h4 className={classes.cardTitle}>Dolce & Gabbana</h4>
              <div className={classes.cardDescription}>
                Dolce & Gabbana&apos;s &apos;Greta&apos; tote has been crafted in Italy from
                hard-wearing red textured-leather.
              </div>
            </CardBody>
            <CardFooter className={classes.justifyContentBetween}>
              <div className={classes.price}>
                <h4>$1,459</h4>
              </div>
              <div className={classes.stats}>
                <Tooltip
                  id="tooltip-top"
                  title="Save to Wishlist"
                  placement="top"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button justIcon color="info" simple>
                    <Favorite />
                  </Button>
                </Tooltip>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem sm={6} md={3}>
          <Card product>
            <CardHeader image>
              <a href="#pablo">
                <img src={cardProduct3} alt="cardProduct3" />
              </a>
            </CardHeader>
            <CardBody>
              <h6 className={classes.cardCategory}>Popular</h6>
              <h4 className={classes.cardTitle}>Balmain</h4>
              <div className={classes.cardDescription}>
                Balmain&apos;s mid-rise skinny jeans are cut with stretch to ensure they retain
                their second-skin fit but move comfortably.
              </div>
            </CardBody>
            <CardFooter className={classes.justifyContentBetween}>
              <div className={classes.price}>
                <h4>$459</h4>
              </div>
              <div className={classes.stats}>
                <Tooltip
                  id="tooltip-top"
                  title="Save to Wishlist"
                  placement="top"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button justIcon link>
                    <Favorite />
                  </Button>
                </Tooltip>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem sm={6} md={3}>
          <Card product>
            <CardHeader image>
              <a href="#pablo">
                <img src={cardProduct4} alt="cardProduct4" />
              </a>
            </CardHeader>
            <CardBody>
              <h6 className={classes.cardCategory}>Popular</h6>
              <h4 className={classes.cardTitle}>Balenciaga</h4>
              <div className={classes.cardDescription}>
                Balenciaga&apos;s black textured-leather wallet is finished with the label&apos;s
                iconic &apos;Giant&apos; studs. This is where you can...
              </div>
            </CardBody>
            <CardFooter className={classes.justifyContentBetween}>
              <div className={classes.price}>
                <h4>$590</h4>
              </div>
              <div className={classes.stats}>
                <Tooltip
                  id="tooltip-top"
                  title="Save to Wishlist"
                  placement="top"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button justIcon color="info" simple>
                    <Favorite />
                  </Button>
                </Tooltip>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem sm={6} md={3}>
          <Card product>
            <CardHeader image>
              <a href="#pablo">
                <img src={cardProduct2} alt="cardProduct2" />
              </a>
            </CardHeader>
            <CardBody>
              <h6 className={classNames(classes.cardCategory, classes.textRose)}>Trending</h6>
              <h4 className={classes.cardTitle}>Dolce & Gabbana</h4>
              <div className={classes.cardDescription}>
                Dolce & Gabbana&apos;s &apos;Greta&apos; tote has been crafted in Italy from
                hard-wearing red textured-leather.
              </div>
            </CardBody>
            <CardFooter className={classes.justifyContentBetween}>
              <div className={classes.price}>
                <h4>$1,459</h4>
              </div>
              <div className={classes.stats}>
                <Tooltip
                  id="tooltip-top"
                  title="Save to Wishlist"
                  placement="top"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button justIcon link>
                    <Favorite />
                  </Button>
                </Tooltip>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
