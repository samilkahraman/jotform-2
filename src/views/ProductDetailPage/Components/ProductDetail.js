/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
// react component used to create nice image meadia player
import ImageGallery from 'react-image-gallery';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
// @material-ui/icons
import ShoppingCart from '@material-ui/icons/ShoppingCart';
// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Button from 'components/CustomButtons/Button.js';
import Accordion from 'components/Accordion/Accordion.js';

// Material-kit styling
import productStyle from 'assets/jss/material-kit-pro-react/views/productStyle.js';

const useStyles = makeStyles(productStyle);

export default function ProductDetail(props) {
  const { formData } = props;
  const classes = useStyles();
  const [colorSelect, setColorSelect] = React.useState('0');
  const [sizeSelect, setSizeSelect] = React.useState('0');
  const images = [
    {
      original: formData.answers[11].answer[0],
      thumbnail: formData.answers[11].answer[0]
    },
    {
      original: formData.answers[11].answer[0],
      thumbnail: formData.answers[11].answer[0]
    },
    {
      original: formData.answers[11].answer[0],
      thumbnail: formData.answers[11].answer[0]
    },
    {
      original: formData.answers[11].answer[0],
      thumbnail: formData.answers[11].answer[0]
    }
  ];
  return (
    <GridContainer>
      <GridItem md={6} sm={6}>
        <ImageGallery
          showFullscreenButton={false}
          showPlayButton={false}
          startIndex={3}
          items={images}
        />
      </GridItem>
      <GridItem md={6} sm={6}>
        <h2 className={classes.title}>{formData ? formData.answers[1].text : 'loading'}</h2>
        <h3 className={classes.mainPrice}>{formData ? formData.answers[3].answer : 'loading'}</h3>
        <Accordion
          active={0}
          activeColor="info"
          collapses={[
            {
              title: 'Description',
              content: <p>{formData ? formData.answers[6].answer : 'loading'}</p>
            },
            {
              title: 'Designer Information',
              content: (
                <p>
                  An infusion of West Coast cool and New York attitude, Rebecca Minkoff is
                  synonymous with It girl style. Minkoff burst on the fashion scene with her
                  best-selling &apos; Morning After Bag &apos; and later expanded her offering with
                  the Rebecca Minkoff Collection - a range of luxe city staples with a &apos;
                  downtown romantic &apos; theme.
                </p>
              )
            },
            {
              title: 'Details and Care',
              content: (
                <ul>
                  <li>Storm and midnight-blue stretch cotton-blend</li>
                  <li>
                    Notch lapels, functioning buttoned cuffs, two front flap pockets, single vent,
                    internal pocket
                  </li>
                  <li>Two button fastening</li>
                  <li>84% cotton, 14% nylon, 2% elastane</li>
                  <li>Dry clean</li>
                </ul>
              )
            }
          ]}
        />
        <GridContainer className={classes.pickSize}>
          <GridItem md={6} sm={6}>
            <label>Select color</label>
            <FormControl fullWidth className={classes.selectFormControl}>
              <Select
                MenuProps={{
                  className: classes.selectMenu
                }}
                classes={{
                  select: classes.select
                }}
                value={colorSelect}
                onChange={event => setColorSelect(event.target.value)}
                inputProps={{
                  name: 'colorSelect',
                  id: 'color-select'
                }}
              >
                <MenuItem
                  classes={{
                    root: classes.selectMenuItem,
                    selected: classes.selectMenuItemSelected
                  }}
                  value="0"
                >
                  Rose
                </MenuItem>
                <MenuItem
                  classes={{
                    root: classes.selectMenuItem,
                    selected: classes.selectMenuItemSelected
                  }}
                  value="1"
                >
                  Gray
                </MenuItem>
                <MenuItem
                  classes={{
                    root: classes.selectMenuItem,
                    selected: classes.selectMenuItemSelected
                  }}
                  value="2"
                >
                  White
                </MenuItem>
              </Select>
            </FormControl>
          </GridItem>
          <GridItem md={6} sm={6}>
            <label>Select size</label>
            <FormControl fullWidth className={classes.selectFormControl}>
              <Select
                MenuProps={{
                  className: classes.selectMenu
                }}
                classes={{
                  select: classes.select
                }}
                value={sizeSelect}
                onChange={event => setSizeSelect(event.target.value)}
                inputProps={{
                  name: 'sizeSelect',
                  id: 'size-select'
                }}
              >
                <MenuItem
                  classes={{
                    root: classes.selectMenuItem,
                    selected: classes.selectMenuItemSelected
                  }}
                  value="0"
                >
                  Small
                </MenuItem>
                <MenuItem
                  classes={{
                    root: classes.selectMenuItem,
                    selected: classes.selectMenuItemSelected
                  }}
                  value="1"
                >
                  Medium
                </MenuItem>
                <MenuItem
                  classes={{
                    root: classes.selectMenuItem,
                    selected: classes.selectMenuItemSelected
                  }}
                  value="2"
                >
                  Large
                </MenuItem>
              </Select>
            </FormControl>
          </GridItem>
        </GridContainer>

        <GridContainer className={classes.pullRight}>
          <Button round color="info">
            Add to Cart &nbsp; <ShoppingCart />
          </Button>
        </GridContainer>
      </GridItem>
    </GridContainer>
  );
}

ProductDetail.propTypes = {
  formData: PropTypes.object.isRequired
};
