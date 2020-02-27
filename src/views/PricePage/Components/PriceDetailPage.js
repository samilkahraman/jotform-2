import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
// @material-ui/icons
// core components
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import Badge from 'components/Badge/Badge.js';
import { Link } from 'react-router-dom';
import profilePageStyle from 'assets/jss/material-kit-pro-react/views/profilePageStyle.js';
import GridItem from 'components/Grid/GridItem.js';
// import { BrowserRouter as Link } from "react-router-dom";

const useStyles = makeStyles(profilePageStyle);

export default function PriceDetailPage(props) {
  const { name, data } = props;
  console.log(wood);

  const classes = useStyles();

  return (
    <GridItem xs={12} sm={12} md={4}>
      <Card
        background
        style={{
          backgroundImage: `url(http://34.65.244.159:3000${wood[1].imgAB})`
        }}
      >
        <CardBody background className={classes.cardBody}>
          <Badge color="success" className={classes.badge}>
            Fiyatlar
          </Badge>
          <Link
            to={{
              pathname: `/price/${wood[0]}`,
              data: wood[1]
            }}
          >
            <h2 className={classes.cardTitleWhite}>{wood[0].length > 1 ? wood[0] : 'sorry'}</h2>
          </Link>
        </CardBody>
      </Card>
    </GridItem>
  );
}

SectionCategories.propTypes = {
  wood: PropTypes.array.isRequired
};
