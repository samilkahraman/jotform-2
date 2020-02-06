import React, { useState, useEffect } from 'react';
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
import * as getForm from '../../../actions/form/GetFormQuestions';

const useStyles = makeStyles(profilePageStyle);

export default function SectionCategories(props) {
  const { categories } = props;
  const formId = categories.id;
  const [data, setData] = useState('');
  const [productData, setProductData] = useState('');
  const [categoryImage, setCategoryImage] = useState('');
  const classes = useStyles();

  useEffect(() => {
    const fetchForm = async () => {
      const result = await getForm
        .GetFormQuestions('c47b317e13a455fd869b360b993c5198', formId)
        .then(data2 => data2.json())
        .then(res => res.content);
      setProductData(result);
      const rebels = Object.values(result).filter(el => el.src);
      setCategoryImage(rebels[0].src);
      setData(result[1].text);
    };
    fetchForm();
  }, [formId]);
  return (
    <GridItem xs={12} sm={12} md={4}>
      <Card
        background
        style={{
          backgroundImage: `url(${categoryImage})`
        }}
      >
        <CardBody background className={classes.cardBody}>
          <Badge color="warning" className={classes.badge}>
            Spring 2016
          </Badge>
          <Link
            to={{
              pathname: `/category/c47b317e13a455fd869b360b993c5198/${formId}`,
              data: productData
            }}
          >
            <h2 className={classes.cardTitleWhite}>{data.length > 1 ? data : 'sorry'}</h2>
          </Link>
        </CardBody>
      </Card>
    </GridItem>
  );
}

SectionCategories.propTypes = {
  categories: PropTypes.object.isRequired
};
