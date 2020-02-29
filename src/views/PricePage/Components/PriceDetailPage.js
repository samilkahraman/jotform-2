/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons
// core components
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import javascriptStyles from 'assets/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.js';
import Slide from '@material-ui/core/Slide';

import InputAdornment from '@material-ui/core/InputAdornment';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import TagsInput from 'react-tagsinput';

import TrendingDown from '@material-ui/icons/TrendingDown';
import Equalizer from '@material-ui/icons/Equalizer';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import ArrowForward from '@material-ui/icons/ArrowForward';
import DragHandle from '@material-ui/icons/DragHandle';

// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Button from 'components/CustomButtons/Button.js';
import CustomInput from 'components/CustomInput/CustomInput.js';
import { whiteColor } from 'assets/jss/material-kit-pro-react';
import Radio from '@material-ui/core/Radio';
import Switch from '@material-ui/core/Switch';
import FiberManualRecord from '@material-ui/icons/FiberManualRecord';

import * as calc from '../calculators/priceCalculator';
const useStyles = makeStyles(javascriptStyles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function PriceDetail(props) {
  const { wood } = props;
  const [clear, setClear] = useState(false);
  const [currentPrice, setCurrentPrice] = useState(100);
  const [totalPrice, setTotalPrice] = useState(0);
  const [tags, setTags] = React.useState([]);
  const [en, setEn] = useState(121);
  const [boy, setBoy] = useState(305);
  const [kalinlik, setKalinlik] = useState(18);
  const [kalite, setKalite] = useState('A/B');
  const [adet, setAdet] = useState(1);
  const [iskonto, setIskonto] = useState(0);
  const [boyEkliMi, setBoyEkliMi] = useState(true);
  const [product, setProduct] = useState({
    en: 121,
    boy: 305,
    kalinlik: 18,
    kalite: 'A/B',
    adet: 1,
    iskonto: 0,
    isim: wood[0],
    detaylari: wood[1],
    boyEkliMi: true
  });
  useEffect(() => {
    let result = calc.sitelerMasifPanelFiyatHesaplayici(product);
    setCurrentPrice(result.price);
  }, [product]);
  useEffect(() => {
    let temp = allStorage();
    let temp2 = [];
    temp.map(el => {
      temp2.push(
        el.isim +
          ': ' +
          el.en +
          'cm * ' +
          el.boy +
          'cm * ' +
          el.kalinlik +
          'mm (' +
          el.adet +
          ' adet) = ' +
          el.price +
          '₺'
      );
    });
    setTags(temp2);
  }, []);

  useEffect(() => {
    let temp = allStorage();
    let temp2 = [];
    temp.map(el => {
      temp2.push(
        el.isim +
          ': ' +
          el.en +
          'cm * ' +
          el.boy +
          'cm * ' +
          el.kalinlik +
          'mm (' +
          el.adet +
          ' adet) = ' +
          el.price +
          '₺'
      );
    });
    setTags(temp2);
  }, [clear]);

  useEffect(() => {
    let values = 0,
      keys = Object.keys(localStorage),
      i = keys.length;

    while (i--) {
      values = values + parseFloat(JSON.parse(localStorage.getItem(keys[i])).price);
    }
    setTotalPrice(values);
    //setTotalPrice(values);
  }, [tags]);
  //const [tags, setTags] = React.useState([]);

  function allStorage() {
    var values = [],
      keys = Object.keys(localStorage),
      i = keys.length;

    while (i--) {
      values.push(JSON.parse(localStorage.getItem(keys[i])));
    }

    return values;
  }

  function makeid(length) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  const handleTags = e => {
    localStorage.setItem(makeid(9), JSON.stringify(product));
    const items = { ...localStorage };

    let temp = allStorage();
    let temp2 = [];
    temp.map(el => {
      temp2.push(
        el.isim +
          ': ' +
          el.en +
          'cm * ' +
          el.boy +
          'cm * ' +
          el.kalinlik +
          'mm (' +
          el.adet +
          ' adet) = ' +
          el.price +
          '₺'
      );
    });
    setTags(temp2);
  };
  const totalPrices = () => {
    let values = 0,
      keys = Object.keys(localStorage),
      i = keys.length;

    while (i--) {
      values = values + JSON.parse(localStorage.getItem(keys[i]).price);
    }
    setTotalPrice(values);
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    setProduct({
      en: en,
      boy: boy,
      kalinlik: kalinlik,
      adet: adet,
      iskonto: iskonto,
      kalite: kalite,
      boyEkliMi: boyEkliMi,
      isim: wood[0],
      detaylari: wood[1]
    });
  };
  const classes = useStyles();

  return (
    <>
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
            <h3 className={classes.socialTitle}>Panel ile ilgili detayları giriniz!</h3>
            <br />
            <br />
          </div>
          <form className={classes.form} onSubmit={handleSubmit}>
            <GridContainer>
              <GridItem xs={12} sm={6} md={6} lg={4}>
                <CustomInput
                  formControlProps={{
                    fullWidth: true,
                    className: classes.customFormControlClasses
                  }}
                  inputProps={{
                    startAdornment: (
                      <InputAdornment position="start" className={classes.inputAdornment}>
                        <ArrowForward className={classes.inputAdornmentIcon} />
                      </InputAdornment>
                    ),
                    placeholder: 'En(cm)'
                  }}
                  type="number"
                  value={en}
                  onChange={e => setEn(parseInt(e.target.value))}
                />
              </GridItem>
              <GridItem xs={12} sm={6} md={6} lg={4}>
                <CustomInput
                  formControlProps={{
                    fullWidth: true,
                    className: classes.customFormControlClasses
                  }}
                  inputProps={{
                    startAdornment: (
                      <InputAdornment position="start" className={classes.inputAdornment}>
                        <ArrowUpward className={classes.inputAdornmentIcon} />
                      </InputAdornment>
                    ),
                    placeholder: 'Boy(cm)'
                  }}
                  value={boy}
                  onChange={e => setBoy(parseInt(e.target.value))}
                />
              </GridItem>
              <GridItem xs={12} sm={6} md={6} lg={4}>
                <CustomInput
                  formControlProps={{
                    fullWidth: true,
                    className: classes.customFormControlClasses
                  }}
                  inputProps={{
                    startAdornment: (
                      <InputAdornment position="start" className={classes.inputAdornment}>
                        <DragHandle className={classes.inputAdornmentIcon} />
                      </InputAdornment>
                    ),
                    placeholder: 'Kalın(mm)'
                  }}
                  value={kalinlik}
                  onChange={e => setKalinlik(parseInt(e.target.value))}
                />
              </GridItem>
            </GridContainer>
            <br />
            <GridContainer>
              <GridItem xs={12} sm={6} md={6} lg={4}>
                <div
                  className={classes.checkboxAndRadio + ' ' + classes.checkboxAndRadioHorizontal}
                >
                  <FormControlLabel
                    control={
                      <Radio
                        checked={kalite === 'A/B'}
                        onChange={() => setKalite('A/B')}
                        value={kalite}
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
                  className={classes.checkboxAndRadio + ' ' + classes.checkboxAndRadioHorizontal}
                >
                  <FormControlLabel
                    control={
                      <Radio
                        checked={kalite === 'B/B'}
                        onChange={() => setKalite('B/B')}
                        value={kalite}
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
                  className={classes.checkboxAndRadio + ' ' + classes.checkboxAndRadioHorizontal}
                >
                  <FormControlLabel
                    control={
                      <Radio
                        checked={kalite === 'C/C'}
                        onChange={() => setKalite('C/C')}
                        value={kalite}
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
            <hr />
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
                  onChange={e => setAdet(parseInt(e.target.value))}
                  value={adet}
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
                  onChange={e => setIskonto(parseInt(e.target.value))}
                  value={iskonto}
                />
              </GridItem>
            </GridContainer>
            <br />

            <FormControlLabel
              control={
                <Switch
                  checked={boyEkliMi}
                  onChange={event => setBoyEkliMi(event.target.checked)}
                  value={boyEkliMi}
                  classes={{
                    switchBase: classes.switchBase,
                    checked: classes.switchChecked,
                    thumb: classes.switchIcon,
                    track: classes.switchBar
                  }}
                />
              }
              classes={{
                label: classes.label,
                root: classes.labelRoot
              }}
              label="Panel Boy Ekli mi?"
            />
            <br />
            <br />
            <GridContainer>
              <GridItem xs={12} sm={6} md={6} lg={6}>
                <div className={classes.textCenter}>
                  <Button round color="rose" onClick={handleTags}>
                    Hafızaya Ekle
                  </Button>
                </div>
              </GridItem>
              <GridItem xs={12} sm={6} md={6} lg={6}>
                <div className={classes.textCenter}>
                  <Button round color="primary" type="submit">
                    &nbsp;&nbsp;&nbsp;&nbsp; Hesapla &nbsp; &nbsp;&nbsp;&nbsp;
                  </Button>
                </div>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
        <GridItem xs={12} sm={1} md={1} lg={1} className={classes.mrAuto}></GridItem>

        <GridItem xs={12} sm={8} md={8} className={classes.mrAuto}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div className={classes.title}>
                <h3>Hafızadaki Ürünler = {totalPrice}₺</h3>
              </div>
              <TagsInput
                value={tags}
                onChange={handleTags}
                tagProps={{ className: 'react-tagsinput-tag rose' }}
              />
            </GridItem>

            <GridItem xs={12} sm={6} md={6}>
              <Button
                round
                color="info"
                onClick={() => {
                  localStorage.clear();
                  setClear(clear => !clear);
                }}
              >
                Hafızayı Temizle
              </Button>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </>
  );
}

{
  /*
   <GridItem xs={12} sm={5} md={5} className={classes.mrAuto}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6} className={classes.mrAuto}>
              <Card>
                <CardHeader image>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img src={`http://34.65.244.159:3000${wood[1].imgAB}`} alt="..." />
                  </a>
                </CardHeader>
                <CardBody>
                  <Warning>
                    <h6>A/B Kalite</h6>
                  </Warning>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={6} className={classes.mrAuto}>
              <Card>
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
                </CardHeader>
                <CardBody>
                  <Warning>
                    <h6>B/B Kalite</h6>
                  </Warning>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </GridItem>
 
*/
}
