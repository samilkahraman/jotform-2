import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridContainer from 'components/Grid/GridContainer.js';
import styles from 'assets/jss/material-kit-pro-react/views/ecommerceSections/productsStyle.js';
import PropTypes from 'prop-types';
import CategoryProductPreview from './Components/CategoryProductPreview';
import * as getSubs from '../../../../actions/form/GetFormSubmissions';

const useStyles = makeStyles(styles);

export default function CategoryProducts(props) {
  const [data, setData] = useState();
  const { authenticationKey, categoryId } = props;
  useEffect(() => {
    const fetchForm = async () => {
      const result = await getSubs
        .GetFormSubmissions(authenticationKey, categoryId)
        .then(data2 => {
          return data2.json();
        })
        .then(res => {
          return res.content;
        });
      setData(result);
    };
    fetchForm();
  }, []);
  const isDataReceived = () => {
    if (data) {
      return data.map(el => <CategoryProductPreview formData={el} />);
    }
    return <p>sry</p>;
  };

  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <h2>Find what you need</h2>
        <GridContainer>{isDataReceived()}</GridContainer>
      </div>
    </div>
  );
}

CategoryProducts.propTypes = {
  authenticationKey: PropTypes.string.isRequired,
  categoryId: PropTypes.string.isRequired
};
