import React, { useState } from 'react';
// nodejs library that concatenates classes
// plugin that creates slider
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
// @material-ui icons
import Favorite from '@material-ui/icons/Favorite';
// core components
import GridItem from 'components/Grid/GridItem.js';
import Card from 'components/Card/Card.js';
import CardHeader from 'components/Card/CardHeader.js';
import CardBody from 'components/Card/CardBody.js';
import CardFooter from 'components/Card/CardFooter.js';
import Button from 'components/CustomButtons/Button.js';
import styles from 'assets/jss/material-kit-pro-react/views/ecommerceSections/productsStyle.js';
import PropTypes from 'prop-types';
import { useTransition, animated } from 'react-spring';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(styles);

// Deleted formData

export default function CategoryProductPreview(props) {
  const { formData } = props;
  console.log(formData);
  const classes = useStyles();
  let arr = [];
  // eslint-disable-next-line no-unused-vars
  const [toggle, set] = useState(false);
  const transitions = useTransition(toggle, null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  function handleClick(e) {
    e.preventDefault();
    if (!toggle) {
      let preArr = JSON.parse(localStorage.getItem('Item'));
      if (preArr !== null) arr.concat(preArr);
      arr.push(formData.answers[3].answer);
      localStorage.setItem('Item', JSON.stringify(arr));
    }
    set(!toggle);
  }

  return (
    <>
      <GridItem md={4} sm={4}>
        <Link
          to={{
            pathname: '/product-detail',
            formData
          }}
        >
          <Card plain product>
            <CardHeader noShadow image>
              <img
                src={
                  formData
                    ? formData.answers[11].answer[0]
                    : 'https://www.jotform.com/resources/assets/logo/min/jotform-logo-dark-400x200.png'
                }
                style={{
                  width: 'auto',
                  height: '300px',
                  maxHeight: '70%',
                  maxWidth: '100%'
                }}
                alt=".."
              />
            </CardHeader>
            <CardBody plain>
              <h4 className={classes.cardTitle}>
                {formData ? formData.answers[4].answer : 'loading'}
              </h4>

              <p className={classes.description}>
                {formData ? formData.answers[6].answer : 'loading'}
              </p>
            </CardBody>
            <CardFooter plain className={classes.justifyContentBetween}>
              <div className={classes.priceContainer}>
                <span className={classes.price}>
                  {' '}
                  {formData ? formData.answers[3].answer : 'loading'}
                </span>
              </div>

              {// eslint-disable-next-line no-unused-vars
              transitions.map(({ item, key, propss }) =>
                item ? (
                  <animated.div style={propss}>
                    <Tooltip
                      id="tooltip-top"
                      title="Saved to Wishlist"
                      placement="left"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button
                        onClick={handleClick}
                        round
                        size="sm"
                        color="rose"
                        className={classes.pullRight}
                      >
                        <Favorite size="sm" />
                      </Button>
                    </Tooltip>
                  </animated.div>
                ) : (
                  <animated.div style={props}>
                    <Tooltip
                      id="tooltip-top"
                      title="Add to Wishlist"
                      placement="left"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button
                        onClick={handleClick}
                        round
                        size="sm"
                        color="default"
                        className={classes.pullRight}
                      >
                        <Favorite size="sm" />
                      </Button>
                    </Tooltip>
                  </animated.div>
                )
              )}
            </CardFooter>
          </Card>
        </Link>
      </GridItem>
    </>
  );
}

CategoryProductPreview.propTypes = {
  formData: PropTypes.object.isRequired
};
