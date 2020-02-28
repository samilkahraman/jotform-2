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
import MenuItem from '@material-ui/core/MenuItem';
import Warning from 'components/Typography/Warning.js';

import Icon from '@material-ui/core/Icon';
// @material-ui/icons
import Close from '@material-ui/icons/Close';
import Face from '@material-ui/icons/Face';
import Timeline from '@material-ui/icons/Timeline';
import Code from '@material-ui/icons/Code';
import Group from '@material-ui/icons/Group';
import Email from '@material-ui/icons/Email';
import TrendingDown from '@material-ui/icons/TrendingDown';
import Equalizer from '@material-ui/icons/Equalizer';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import ArrowForward from '@material-ui/icons/ArrowForward';
import color1 from 'assets/img/examples/color1.jpg';
import CardHeader from 'components/Card/CardHeader.js';

import Check from '@material-ui/icons/Check';
// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Button from 'components/CustomButtons/Button.js';
import CustomInput from 'components/CustomInput/CustomInput.js';
import InfoArea from 'components/InfoArea/InfoArea.js';
import { whiteColor } from 'assets/jss/material-kit-pro-react';
import CustomDropdown from 'components/CustomDropdown/CustomDropdown.js';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Radio from '@material-ui/core/Radio';
import Switch from '@material-ui/core/Switch';
import FiberManualRecord from '@material-ui/icons/FiberManualRecord';

export default function PriceDetail(props) {
  const { wood } = props;
  const [currentPrice, setCurrentPrice] = useState(100);
  console.log(wood);
  const [notClicked, setNotClicked] = useState(true);
  const [simpleSelect, setSimpleSelect] = React.useState('');
  const [selectedEnabled, setSelectedEnabled] = React.useState('b');

  const classes = useStyles();
  const handleSimple = event => {
    setSimpleSelect(event.target.value);
  };
  return (
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
                    <h5 className={classes.cardCategorySocialWhite}>Ahsaplar.com Satış Ücreti</h5>
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
                  {` `}
                  <br />
                  <h4 className={classes.socialTitle}>Panel ile ilgili detayları giriniz!</h4>
                </div>
                <form className={classes.form}>
                  <GridContainer>
                    <GridItem xs={12} sm={6} md={6} lg={4}>
                      <CustomInput
                        formControlProps={{
                          fullWidth: true,
                          className: classes.customFormControlClasses
                        }}
                        inputProps={{
                          placeholder: 'En(cm)'
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={6} md={6} lg={4}>
                      <CustomInput
                        formControlProps={{
                          fullWidth: true,
                          className: classes.customFormControlClasses
                        }}
                        inputProps={{
                          placeholder: 'Boy(cm)'
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={6} md={6} lg={4}>
                      <CustomInput
                        formControlProps={{
                          fullWidth: true,
                          className: classes.customFormControlClasses
                        }}
                        inputProps={{
                          placeholder: 'Kalınlık(mm)'
                        }}
                      />
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={6} md={6} lg={4}>
                      <div
                        className={
                          classes.checkboxAndRadio + ' ' + classes.checkboxAndRadioHorizontal
                        }
                      >
                        <FormControlLabel
                          control={
                            <Radio
                              checked={selectedEnabled === 'a'}
                              onChange={() => setSelectedEnabled('a')}
                              value="a"
                              name="radio button enabled"
                              aria-label="A"
                              icon={<FiberManualRecord className={classes.radioUnchecked} />}
                              checkedIcon={<FiberManualRecord className={classes.radioChecked} />}
                              classes={{
                                checked: classes.radio,
                                root: classes.radioRoot
                              }}
                            />
                          }
                          classes={{
                            label: classes.label,
                            root: classes.labelRoot
                          }}
                          label="A/B Kalite"
                        />
                      </div>
                    </GridItem>
                    <GridItem xs={12} sm={6} md={6} lg={4}>
                      <div
                        className={
                          classes.checkboxAndRadio + ' ' + classes.checkboxAndRadioHorizontal
                        }
                      >
                        <FormControlLabel
                          control={
                            <Radio
                              checked={selectedEnabled === 'b'}
                              onChange={() => setSelectedEnabled('b')}
                              value="b"
                              name="radio button enabled"
                              aria-label="B"
                              icon={<FiberManualRecord className={classes.radioUnchecked} />}
                              checkedIcon={<FiberManualRecord className={classes.radioChecked} />}
                              classes={{
                                checked: classes.radio,
                                root: classes.radioRoot
                              }}
                            />
                          }
                          classes={{
                            label: classes.label,
                            root: classes.labelRoot
                          }}
                          label="B/B Kalite"
                        />
                      </div>
                    </GridItem>
                    <GridItem xs={12} sm={6} md={6} lg={4}>
                      <div
                        className={
                          classes.checkboxAndRadio + ' ' + classes.checkboxAndRadioHorizontal
                        }
                      >
                        {/*//TODO Check it later*/}
                        <FormControlLabel
                          control={
                            <Radio
                              checked={selectedEnabled === 'a'}
                              onChange={() => setSelectedEnabled('a')}
                              value="a"
                              name="radio button enabled"
                              aria-label="A"
                              icon={<FiberManualRecord className={classes.radioUnchecked} />}
                              checkedIcon={<FiberManualRecord className={classes.radioChecked} />}
                              classes={{
                                checked: classes.radio,
                                root: classes.radioRoot
                              }}
                            />
                          }
                          classes={{
                            label: classes.label,
                            root: classes.labelRoot
                          }}
                          label="C/C Kalite"
                        />
                      </div>
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={6} md={6} lg={6}>
                      <CustomInput
                        formControlProps={{
                          fullWidth: true,
                          className: classes.customFormControlClasses
                        }}
                        inputProps={{
                          startAdornment: (
                            <InputAdornment position="start" className={classes.inputAdornment}>
                              <Equalizer className={classes.inputAdornmentIcon} />
                            </InputAdornment>
                          ),
                          placeholder: 'Adet'
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={6} md={6} lg={6}>
                      <CustomInput
                        formControlProps={{
                          fullWidth: true,
                          className: classes.customFormControlClasses
                        }}
                        inputProps={{
                          startAdornment: (
                            <InputAdornment position="start" className={classes.inputAdornment}>
                              <TrendingDown className={classes.inputAdornmentIcon} />
                            </InputAdornment>
                          ),
                          placeholder: 'İskonto'
                        }}
                      />
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={6} md={6} lg={6}>
                      <div className={classes.textCenter}>
                        <Button round color="rose">
                          Hafızaya Ekle
                        </Button>
                      </div>
                    </GridItem>
                    <GridItem xs={12} sm={6} md={6} lg={6}>
                      <div className={classes.textCenter}>
                        <Button round color="primary">
                          &nbsp;&nbsp;&nbsp;&nbsp; Hesapla &nbsp; &nbsp;&nbsp;&nbsp;
                        </Button>
                      </div>
                    </GridItem>
                  </GridContainer>
                </form>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={6}>
                        <Card blog>
                          <CardHeader image>
                            <a href="#pablo" onClick={e => e.preventDefault()}>
                              <img src={`http://34.65.244.159:3000${wood[1].imgAB}`} alt="..." />
                            </a>
                            <div
                              className={classes.coloredShadow}
                              style={{
                                backgroundImage: `url(http://34.65.244.159:3000${wood[1].imgAB})`,
                                opacity: '1'
                              }}
                            />
                          </CardHeader>
                          <CardBody>
                            <Warning>
                              <h6 className={classes.cardCategory}>A/B Kalite</h6>
                            </Warning>
                          </CardBody>
                        </Card>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={6}>
                        <Card blog>
                          <CardHeader image>
                            <a href="#pablo" onClick={e => e.preventDefault()}>
                              <img
                                src={
                                  wood[1].imgBB
                                    ? `http://34.65.244.159:3000${wood[1].imgBB}`
                                    : `http://34.65.244.159:3000${wood[1].imgAB}`
                                }
                              />
                            </a>
                            <div
                              className={classes.coloredShadow}
                              style={{
                                backgroundImage: `url(http://34.65.244.159:3000${wood[1].imgAB})`,
                                opacity: '1'
                              }}
                            />
                          </CardHeader>
                          <CardBody>
                            <Warning>
                              <h6 className={classes.cardCategory}>B/B Kalite</h6>
                            </Warning>
                          </CardBody>
                        </Card>
                      </GridItem>
                    </GridContainer>
                  </GridItem>
                </GridContainer>
              </GridItem>
            </GridContainer>
            <hr />
          </DialogContent>
        </Card>
      </Dialog>
    </GridItem>
  );
}
