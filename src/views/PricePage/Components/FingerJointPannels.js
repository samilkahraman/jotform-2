import React from 'react';
// nodejs library that concatenates classes
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons

// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Clearfix from 'components/Clearfix/Clearfix.js';

import profilePageStyle from 'assets/jss/material-kit-pro-react/views/profilePageStyle.js';
import PropTypes from 'prop-types';
import SectionSingleCategory from './SectionSingleCategory';

// import { BrowserRouter as Link } from 'react-router-dom';
const useStyles = makeStyles(profilePageStyle);

export default function FingerJointPannels(props) {
  const { panels } = props;

  const classes = useStyles();
  return (
    <>
      <div className={classes.profileTabs}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12} className={classes.gridItem}>
            <GridContainer className={classes.collections}>
              {panels ? panels.map(el => <SectionSingleCategory wood={el} />) : 'sorry'}
            </GridContainer>
          </GridItem>
        </GridContainer>
      </div>

      <Clearfix />
    </>
  );
}

FingerJointPannels.propTypes = {
  panels: PropTypes.array.isRequired
};
