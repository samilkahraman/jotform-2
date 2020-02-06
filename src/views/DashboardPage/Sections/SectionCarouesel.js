/*eslint-disable*/
import React, { useEffect, useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import carouselStyle from "assets/jss/material-kit-pro-react/views/componentsSections/carouselStyle.js";
import LocationOn from "@material-ui/icons/LocationOn";

import Card from "components/Card/Card.js";

import Carousel from "react-slick";

import image1 from "assets/img/1.jpg";
import image2 from "assets/img/2.jpg";
import image3 from "assets/img/3.jpg";

const useStyles2 = makeStyles(carouselStyle);

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true
};

export default function SectionCarousel({ ...rest }) {
  const classes2 = useStyles2();

  // getForm.GetForm("c47b317e13a455fd869b360b993c5198", "200261686124045").then(data=> {return data.json()}).then(res=>{console.log(res); setTest(res)})
  return (
    <div className={classes2.container}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12} className={classes2.marginAuto}>
          <Card>
            <Carousel {...settings}>
              <div>
                <img src={image1} alt="First slide" className="slick-image" />
                <div className="slick-caption">
                  <h4>
                    <LocationOn className="slick-icons" />
                    Yellowstone National Park, United States
                  </h4>
                </div>
              </div>
              <div>
                <img src={image2} alt="Second slide" className="slick-image" />
                <div className="slick-caption">
                  <h4>
                    <LocationOn className="slick-icons" />
                    Somewhere Beyond, United States
                  </h4>
                </div>
              </div>
              <div>
                <img src={image3} alt="Third slide" className="slick-image" />
                <div className="slick-caption">
                  <h4>
                    <LocationOn className="slick-icons" />
                    Yellowstone National Park, United States
                  </h4>
                </div>
              </div>
            </Carousel>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
