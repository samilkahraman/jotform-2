/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
// nodejs library that concatenates classes
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons

// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import Badge from 'components/Badge/Badge.js';
import Clearfix from 'components/Clearfix/Clearfix.js';
import clemOnojeghuo from 'assets/img/urunler.jpg';

import profilePageStyle from 'assets/jss/material-kit-pro-react/views/profilePageStyle.js';

// import { BrowserRouter as Link } from 'react-router-dom';

import FingerJointPannels from './FingerJointPannels';

const useStyles = makeStyles(profilePageStyle);

export default function Categories() {
  const [panels, setPanels] = useState([]);
  const [fingerJointsStatus, setFingerJointsStatus] = useState(false);
  const url = 'http://34.65.59.53:3000/';
  // const id = '200261686124045';
  // const key = 'c47b317e13a455fd869b360b993c5198';

  useEffect(() => {
    fetch(url, { headers: { 'Access-Control-Allow-Origin': '*' } })
      .then(resp => resp.json())
      .then(resp => {
        const result = Object.entries(resp);

        setPanels(result);
      });
  }, []);
  const classes = useStyles();
  return (
    <>
      <div className={classes.profileTabs}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12} className={classes.gridItem}>
            <GridContainer className={classes.collections}>
              <GridItem xs={12} sm={12} md={12}>
                <Card
                  background
                  style={{
                    backgroundImage: `url(${clemOnojeghuo})`
                  }}
                  onClick={() => setFingerJointsStatus(true)}
                >
                  <CardBody background className={classes.cardBody}>
                    <Badge color="info" className={classes.badge}>
                      For Admins
                    </Badge>
                    <a href="#">
                      <h2 className={classes.cardTitleWhite}>Price Calculator</h2>
                    </a>
                  </CardBody>
                </Card>
              </GridItem>
            </GridContainer>
            {fingerJointsStatus && <FingerJointPannels panels={panels} />}
          </GridItem>
        </GridContainer>
      </div>

      <Clearfix />
    </>
  );
}
