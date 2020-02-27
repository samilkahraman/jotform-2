/*eslint-disable*/
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
// @material-ui/icons
// core components
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import Badge from 'components/Badge/Badge.js';
import { Link } from 'react-router-dom';
import javascriptStyles from 'assets/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.js';
import Slide from '@material-ui/core/Slide';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Icon from '@material-ui/core/Icon';
// @material-ui/icons
import Close from '@material-ui/icons/Close';
import Face from '@material-ui/icons/Face';
import Timeline from '@material-ui/icons/Timeline';
import Code from '@material-ui/icons/Code';
import Group from '@material-ui/icons/Group';
import Email from '@material-ui/icons/Email';
import Check from '@material-ui/icons/Check';
// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Button from 'components/CustomButtons/Button.js';
import CustomInput from 'components/CustomInput/CustomInput.js';
import InfoArea from 'components/InfoArea/InfoArea.js';
import { whiteColor } from 'assets/jss/material-kit-pro-react';
// import { BrowserRouter as Link } from "react-router-dom";

const useStyles = makeStyles(javascriptStyles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function SectionCategories(props) {
  const { wood } = props;
  let currentPrice = 100;
  console.log(wood);
  const [notClicked, setNotClicked] = useState(true);
  const classes = useStyles();

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
          {/* BUTTON SIGNUP MODAL      <Button block round onClick={() => setSignupModal(true)}>
          <Assignment /> Signup
        </Button> */}

          {/* SIGNUP MODAL START */}
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
                <hr />
              </DialogTitle>
              <DialogContent id="signup-modal-slide-description" className={classes.modalBody}>
                <GridContainer>
                  <GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
                    <Card color="info">
                      <CardBody color>
                        <h5 className={classes.cardCategorySocialWhite}>Siteler Satış Ücreti</h5>
                        <h2
                          className={classes.cardTitleWhite}
                          style={{ color: whiteColor, textAlign: 'center' }}
                        >
                          {currentPrice}
                          <strong>₺</strong>
                        </h2>
                      </CardBody>
                    </Card>
                    <Card color="success">
                      <CardBody color>
                        <h5 className={classes.cardCategorySocialWhite}>
                          Ahsaplar.com Satış Ücreti
                        </h5>
                        <h2
                          className={classes.cardTitleWhite}
                          style={{ color: whiteColor, textAlign: 'center' }}
                        >
                          {currentPrice}
                          <strong>₺</strong>
                        </h2>
                      </CardBody>
                    </Card>
                    <Card color="danger">
                      <CardBody color>
                        <h5 className={classes.cardCategorySocialWhite}>N11.com Satış Ücreti</h5>
                        <h2
                          className={classes.cardTitleWhite}
                          style={{ color: whiteColor, textAlign: 'center' }}
                        >
                          {currentPrice}
                          <strong>₺</strong>
                        </h2>
                      </CardBody>
                    </Card>
                  </GridItem>
                  <GridItem xs={12} sm={5} md={5} className={classes.mrAuto}>
                    <div className={classes.textCenter}>
                      <Button justIcon round color="twitter">
                        <i className="fab fa-twitter" />
                      </Button>
                      {` `}
                      <Button justIcon round color="dribbble">
                        <i className="fab fa-dribbble" />
                      </Button>
                      {` `}
                      <Button justIcon round color="facebook">
                        <i className="fab fa-facebook-f" />
                      </Button>
                      {` `}
                      <h4 className={classes.socialTitle}>or be classical</h4>
                    </div>
                    <form className={classes.form}>
                      <CustomInput
                        formControlProps={{
                          fullWidth: true,
                          className: classes.customFormControlClasses
                        }}
                        inputProps={{
                          startAdornment: (
                            <InputAdornment position="start" className={classes.inputAdornment}>
                              <Face className={classes.inputAdornmentIcon} />
                            </InputAdornment>
                          ),
                          placeholder: 'First Name...'
                        }}
                      />
                      <CustomInput
                        formControlProps={{
                          fullWidth: true,
                          className: classes.customFormControlClasses
                        }}
                        inputProps={{
                          startAdornment: (
                            <InputAdornment position="start" className={classes.inputAdornment}>
                              <Email className={classes.inputAdornmentIcon} />
                            </InputAdornment>
                          ),
                          placeholder: 'Email...'
                        }}
                      />
                      <CustomInput
                        formControlProps={{
                          fullWidth: true,
                          className: classes.customFormControlClasses
                        }}
                        inputProps={{
                          startAdornment: (
                            <InputAdornment position="start" className={classes.inputAdornment}>
                              <Icon className={classes.inputAdornmentIcon}>lock_outline</Icon>
                            </InputAdornment>
                          ),
                          placeholder: 'Password...'
                        }}
                      />
                      <FormControlLabel
                        classes={{
                          label: classes.label
                        }}
                        control={
                          <Checkbox
                            tabIndex={-1}
                            onClick={() => handleToggle(1)}
                            checkedIcon={<Check className={classes.checkedIcon} />}
                            icon={<Check className={classes.uncheckedIcon} />}
                            classes={{
                              checked: classes.checked,
                              root: classes.checkRoot
                            }}
                          />
                        }
                        label={
                          <span>
                            I agree to the <a href="#pablo">terms and conditions</a>.
                          </span>
                        }
                      />
                      <div className={classes.textCenter}>
                        <Button round color="primary">
                          Get started
                        </Button>
                      </div>
                    </form>
                  </GridItem>
                </GridContainer>
              </DialogContent>
            </Card>
          </Dialog>
          {/* SIGNUP MODAL END */}
        </GridItem>
      )}
    </>
  );
}

SectionCategories.propTypes = {
  wood: PropTypes.array.isRequired
};
