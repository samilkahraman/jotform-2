import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons
import LocalShipping from '@material-ui/icons/LocalShipping';
import VerifiedUser from '@material-ui/icons/VerifiedUser';
import Favorite from '@material-ui/icons/Favorite';
// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import InfoArea from 'components/InfoArea/InfoArea.js';

import productStyle from 'assets/jss/material-kit-pro-react/views/productStyle.js';

const useStyles = makeStyles(productStyle);

export default function ProductServices() {
  const classes = useStyles();
  return (
    <div className={classNames(classes.features, classes.textCenter)}>
      <GridContainer>
        <GridItem md={4} sm={4}>
          <InfoArea
            title="2 Days Delivery"
            description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
            icon={LocalShipping}
            iconColor="info"
            vertical
          />
        </GridItem>
        <GridItem md={4} sm={4}>
          <InfoArea
            title="Refundable Policy"
            description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
            icon={VerifiedUser}
            iconColor="success"
            vertical
          />
        </GridItem>
        <GridItem md={4} sm={4}>
          <InfoArea
            title="Popular Item"
            description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
            icon={Favorite}
            iconColor="info"
            vertical
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
