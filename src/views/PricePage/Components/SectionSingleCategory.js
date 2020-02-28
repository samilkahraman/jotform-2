/*eslint-disable*/
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
// @material-ui/icons
// core components
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import Badge from 'components/Badge/Badge.js';

import javascriptStyles from 'assets/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.js';
import Slide from '@material-ui/core/Slide';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';

// @material-ui/icons
import Close from '@material-ui/icons/Close';

// core components
import GridItem from 'components/Grid/GridItem.js';
import Button from 'components/CustomButtons/Button.js';

import PriceDetail from './PriceDetailPage';

// import { BrowserRouter as Link } from "react-router-dom";

const useStyles = makeStyles(javascriptStyles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function SectionCategories(props) {
  const { wood } = props;
  console.log(wood);
  const [notClicked, setNotClicked] = useState(true);
  const [simpleSelect, setSimpleSelect] = React.useState('');

  const classes = useStyles();
  const handleSimple = event => {
    setSimpleSelect(event.target.value);
  };

  function handler() {
    setNotClicked(!notClicked);
  }
  return (
    <>
      {notClicked ? (
        <GridItem xs={12} sm={12} md={4}>
          <Card
            background
            style={{
              backgroundImage: `url(http://34.65.244.159:3000${wood[1].imgAB})`
            }}
            onClick={() => setNotClicked(false)}
          >
            <CardBody background className={classes.cardBody}>
              <br />
              <br />
              <Badge color="success" className={classes.badge}>
                Fiyatlar
              </Badge>
              <a href="#">
                <h2 className={classes.cardTitleWhite}>{wood[0].length > 1 ? wood[0] : 'sorry'}</h2>
              </a>
            </CardBody>
          </Card>
        </GridItem>
      ) : (
        <GridItem xs={12} sm={6} md={6} lg={6}>
          <Dialog
            classes={{
              root: classes.modalRoot,
              paper: classes.modal + ' ' + classes.modalSignup
            }}
            open={true}
            TransitionComponent={Transition}
            keepMounted
            onClose={() => setNotClicked(true)}
            aria-labelledby="signup-modal-slide-title"
            aria-describedby="signup-modal-slide-description"
          >
            <Card plain className={classes.modalSignupCard}>
              <DialogTitle
                id="signup-modal-slide-title"
                disableTypography
                className={classes.modalHeader}
              >
                <Button
                  simple
                  className={classes.modalCloseButton}
                  key="close"
                  aria-label="Close"
                  onClick={() => setNotClicked(true)}
                >
                  {' '}
                  <Close className={classes.modalClose} />
                </Button>
                <h3 className={classes.cardTitle + ' ' + classes.modalTitle}>
                  {wood[0].toUpperCase() + ' Masif Panel'}{' '}
                </h3>
              </DialogTitle>
              <DialogContent id="signup-modal-slide-description" className={classes.modalBody}>
                <PriceDetail wood={wood} /> <hr />
              </DialogContent>
            </Card>
          </Dialog>
        </GridItem>
      )}
    </>
  );
}

SectionCategories.propTypes = {
  wood: PropTypes.array.isRequired
};
