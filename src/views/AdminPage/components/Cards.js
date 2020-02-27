/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
// nodejs library that concatenates classes
import Card from 'components/Card/Card';
import CardBody from 'components/Card/CardBody';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
// sections for this page
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui icons
import Chart from 'react-apexcharts';
import profilePageStyle from 'assets/jss/material-kit-pro-react/views/profilePageStyle.js';

const useStyles = makeStyles(profilePageStyle);

export default function Cards() {
  // eslint-disable-next-line no-unused-vars
  const [chartSettings, setChartSettings] = useState({
    options: {
      chart: {
        id: 'basic-bar'
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      },
      colors: ['#fa8900', '#434343', '#a9a9a9']
    },
    series: [
      {
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ]
  });
  const donutChart = {
    options: { colors: ['#fa8900', '#434343', '#a9a9a9'] },
    series: [44, 55, 41, 17, 15],
    labels: ['A', 'B', 'C', 'D', 'E']
  };
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12} className={classes.gridItem}>
            <GridContainer className={classes.collections}>
              <GridItem xs={12} sm={12} md={6}>
                <Card style={{ height: '25rem' }}>
                  <CardBody className={classes.cardBody}>
                    <Chart
                      options={chartSettings.options}
                      series={chartSettings.series}
                      type="bar"
                      width="100%"
                      height="100%"
                    />
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <Card style={{ height: '25rem' }}>
                  <CardBody className={classes.cardBody}>
                    <div className="donut">
                      <Chart
                        options={donutChart.options}
                        series={donutChart.series}
                        type="donut"
                        height="200%"
                        position="absolute"
                        top="50%"
                        left="50%"
                        margin-right="-50%"
                        transform="translate(-50%, -50%)"
                      />
                    </div>
                  </CardBody>
                </Card>
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
