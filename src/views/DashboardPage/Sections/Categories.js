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
import oluEletu from 'assets/img/examples/olu-eletu.jpg';
import clemOnojeghuo from 'assets/img/examples/clem-onojeghuo.jpg';

import profilePageStyle from 'assets/jss/material-kit-pro-react/views/profilePageStyle.js';

// import { BrowserRouter as Link } from 'react-router-dom';

import * as getCategories from '../../../actions/folder/GetFolder';
import SectionSingleCategory from './SectionSingleCategory';

const useStyles = makeStyles(profilePageStyle);

export default function Categories() {
  const [categoryForms, setCategoryFroms] = useState([]);
  // const id = '200261686124045';
  // const key = 'c47b317e13a455fd869b360b993c5198';

  async function fetchCategories() {
    const result = await getCategories
      .GetFolder('c47b317e13a455fd869b360b993c5198', '5e380be24ec014393e4260b1')
      .then(data => data.json())
      .then(res => {
        setCategoryFroms(res.content.forms);

        return res.content.forms;
      });
    // eslint-disable-next-line no-console
    console.log(result);
  }

  useEffect(() => {
    fetchCategories();
  }, []);
  const classes = useStyles();
  return (
    <>
      <div className={classes.profileTabs}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12} className={classes.gridItem}>
            <GridContainer className={classes.collections}>
              {categoryForms
                ? categoryForms.map(el => <SectionSingleCategory categories={el} />)
                : 'sorry'}
              <GridItem xs={12} sm={12} md={4}>
                <Card
                  background
                  style={{
                    backgroundImage: `url(${clemOnojeghuo})`
                  }}
                >
                  <CardBody background className={classes.cardBody}>
                    <Badge color="info" className={classes.badge}>
                      Spring 2016
                    </Badge>
                    <a href="#pablo">
                      <h2 className={classes.cardTitleWhite}>High Heels</h2>
                    </a>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Card
                  background
                  style={{
                    backgroundImage: `url(${oluEletu})`
                  }}
                >
                  <CardBody background className={classes.cardBody}>
                    <Badge color="danger" className={classes.badge}>
                      Summer 2016
                    </Badge>
                    <a href="#pablo">
                      <h2 className={classes.cardTitleWhite}>Flats</h2>
                    </a>
                  </CardBody>
                </Card>
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
      </div>

      <Clearfix />
    </>
  );
}
