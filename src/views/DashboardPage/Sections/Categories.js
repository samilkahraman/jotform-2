/*eslint-disable*/
import React, { useEffect, useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import People from "@material-ui/icons/People";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Badge from "components/Badge/Badge.js";
import Muted from "components/Typography/Muted.js";
import Clearfix from "components/Clearfix/Clearfix.js";
import oluEletu from "assets/img/examples/olu-eletu.jpg";
import clemOnojeghuo from "assets/img/examples/clem-onojeghuo.jpg";
import cynthiaDelRio from "assets/img/examples/cynthia-del-rio.jpg";
import mariyaGeorgieva from "assets/img/examples/mariya-georgieva.jpg";
import clemOnojegaw from "assets/img/examples/clem-onojegaw.jpg";
import darrenColeshill from "assets/img/examples/darren-coleshill.jpg";
import avatar from "assets/img/faces/avatar.jpg";
import marc from "assets/img/faces/marc.jpg";
import kendall from "assets/img/faces/kendall.jpg";
import cardProfile2Square from "assets/img/faces/card-profile2-square.jpg";

import profilePageStyle from "assets/jss/material-kit-pro-react/views/profilePageStyle.js";


import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'

import * as getForm from "../../../actions/form/GetFormQuestions";

const useStyles = makeStyles(profilePageStyle);



export default function Categories({ ...rest }) {
    const [data, setData] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const id = "200261686124045";
    const key = "c47b317e13a455fd869b360b993c5198";
    async function fetchForm() {
      let result = await getForm
        .GetFormQuestions("c47b317e13a455fd869b360b993c5198", "200261686124045")
        .then(data => {
          return data.json();
        })
        .then(res => {
            console.log(res)
          return res.content;
        });
        console.log(result[12],result[13].src);
      setData(result[13].src);
    }
  
    useEffect(() => {
      fetchForm();
    }, []);
    const classes = useStyles();
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);


    return (
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <br />
            <div className={classes.profileTabs}>
              <NavPills
                alignCenter
                color="primary"
                tabs={[
                  {
                    tabButton: "Work",
                    tabIcon: Palette,
                    tabContent: (
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={12} className={classes.gridItem}>
                          <h4 className={classes.title}>Main Categories {data}</h4>
                          <GridContainer className={classes.collections}>
                            <GridItem xs={12} sm={12} md={4}>
                              <Card
                                background
                                style={{
                                  backgroundImage: "url(" + data + ")"
                                }}
                              >
                                <CardBody background className={classes.cardBody}>
                                  <Badge color="warning" className={classes.badge}>
                                    Spring 2016
                                  </Badge>
                                  <Link to={"/category/"+ key+"/"+id+""}>
                                    <h2 className={classes.cardTitleWhite}>Stilleto</h2>
                                    </Link>
                                </CardBody>
                              </Card>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <Card
                                background
                                style={{
                                  backgroundImage: "url(" + clemOnojeghuo + ")"
                                }}
                              >
                                <CardBody background className={classes.cardBody}>
                                  <Badge color="info" className={classes.badge}>
                                    Spring 2016
                                  </Badge>
                                  <a href="#pablo">
                                    <h2 className={classes.cardTitleWhite}>
                                      High Heels
                                    </h2>
                                  </a>
                                </CardBody>
                              </Card>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <Card
                                background
                                style={{
                                  backgroundImage: "url(" + oluEletu + ")"
                                }}
                              >
                                <CardBody background className={classes.cardBody}>
                                  <Badge color="danger" className={classes.badge}>
                                    Summer 2016
                                  </Badge>
                                  <a href="#pablo">
                                    <h2 className={classes.cardTitleWhite}>Flats</h2>
                                  </a>
                                </CardBody>
                              </Card>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <Card
                                background
                                style={{
                                  backgroundImage: "url(" + darrenColeshill + ")"
                                }}
                              >
                                <CardBody background className={classes.cardBody}>
                                  <Badge color="success" className={classes.badge}>
                                    Winter 2016
                                  </Badge>
                                  <a href="#pablo">
                                    <h2 className={classes.cardTitleWhite}>
                                      Men{"'"}s Sneakers
                                    </h2>
                                  </a>
                                </CardBody>
                              </Card>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <Card
                                background
                                style={{
                                  backgroundImage: "url(" + mariyaGeorgieva + ")"
                                }}
                              >
                                <CardBody background className={classes.cardBody}>
                                  <Badge color="warning" className={classes.badge}>
                                    Spring 2016
                                  </Badge>
                                  <a href="#pablo">
                                    <h2 className={classes.cardTitleWhite}>Stilleto</h2>
                                  </a>
                                </CardBody>
                              </Card>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <Card
                                background
                                style={{
                                  backgroundImage: "url(" + mariyaGeorgieva + ")"
                                }}
                              >
                                <CardBody background className={classes.cardBody}>
                                  <Badge color="warning" className={classes.badge}>
                                    Spring 2016
                                  </Badge>
                                  <a href="#pablo">
                                    <h2 className={classes.cardTitleWhite}>Stilleto</h2>
                                  </a>
                                </CardBody>
                              </Card>
                            </GridItem>
                          </GridContainer>
                        </GridItem>
                      </GridContainer>
                    )
                  },
                  {
                    tabButton: "Connections",
                    tabIcon: People,
                    tabContent: (
                      <div>
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={5} className={classes.gridItem}>
                            <Card profile plain className={classes.card}>
                              <GridContainer>
                                <GridItem xs={12} sm={12} md={5}>
                                  <CardHeader image plain>
                                    <a href="#pablo">
                                      <img src={avatar} alt="..." />
                                    </a>
                                    <div
                                      className={classes.coloredShadow}
                                      style={{
                                        backgroundImage: "url(" + avatar + ")",
                                        opacity: "1"
                                      }}
                                    />
                                  </CardHeader>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={7}>
                                  <CardBody plain>
                                    <h4 className={classes.cardTitle}>Gigi Hadid</h4>
                                    <Muted>
                                      <h6>MODEL</h6>
                                    </Muted>
                                    <p className={classes.description}>
                                      Don{"'"}t be scared of the truth because we need
                                      to restart the human foundation in truth...
                                    </p>
                                  </CardBody>
                                </GridItem>
                              </GridContainer>
                            </Card>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={5} className={classes.gridItem}>
                            <Card profile plain className={classes.card}>
                              <GridContainer>
                                <GridItem xs={12} sm={12} md={5}>
                                  <CardHeader image plain>
                                    <a href="#pablo">
                                      <img src={marc} alt="..." />
                                    </a>
                                    <div
                                      className={classes.coloredShadow}
                                      style={{
                                        backgroundImage: "url(" + marc + ")",
                                        opacity: "1"
                                      }}
                                    />
                                  </CardHeader>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={7}>
                                  <CardBody plain>
                                    <h4 className={classes.cardTitle}>Marc Jacobs</h4>
                                    <Muted>
                                      <h6>DESIGNER</h6>
                                    </Muted>
                                    <p className={classes.description}>
                                      Don{"'"}t be scared of the truth because we need
                                      to restart the human foundation in truth...
                                    </p>
                                  </CardBody>
                                </GridItem>
                              </GridContainer>
                            </Card>
                          </GridItem>
                        </GridContainer>
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={5} className={classes.gridItem}>
                            <Card profile plain className={classes.card}>
                              <GridContainer>
                                <GridItem xs={12} sm={12} md={5}>
                                  <CardHeader image plain>
                                    <a href="#pablo">
                                      <img src={kendall} alt="..." />
                                    </a>
                                    <div
                                      className={classes.coloredShadow}
                                      style={{
                                        backgroundImage: "url(" + kendall + ")",
                                        opacity: "1"
                                      }}
                                    />
                                  </CardHeader>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={7}>
                                  <CardBody plain>
                                    <h4 className={classes.cardTitle}>
                                      Kendall Jenner
                                    </h4>
                                    <Muted>
                                      <h6>MODEL</h6>
                                    </Muted>
                                    <p className={classes.description}>
                                      I love you like Kanye loves Kanye. Don
                                      {"'"}t be scared of the truth.
                                    </p>
                                  </CardBody>
                                </GridItem>
                              </GridContainer>
                            </Card>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={5} className={classes.gridItem}>
                            <Card profile plain className={classes.card}>
                              <GridContainer>
                                <GridItem xs={12} sm={12} md={5}>
                                  <CardHeader image plain>
                                    <a href="#pablo">
                                      <img src={cardProfile2Square} alt="..." />
                                    </a>
                                    <div
                                      className={classes.coloredShadow}
                                      style={{
                                        backgroundImage:
                                          "url(" + cardProfile2Square + ")",
                                        opacity: "1"
                                      }}
                                    />
                                  </CardHeader>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={7}>
                                  <CardBody plain>
                                    <h4 className={classes.cardTitle}>George West</h4>
                                    <Muted>
                                      <h6>MODEL/DJ</h6>
                                    </Muted>
                                    <p className={classes.description}>
                                      I love you like Kanye loves Kanye.
                                    </p>
                                  </CardBody>
                                </GridItem>
                              </GridContainer>
                            </Card>
                          </GridItem>
                        </GridContainer>
                      </div>
                    )
                  },
                  {
                    tabButton: "Media",
                    tabIcon: Camera,
                    tabContent: (
                      <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={3}>
                          <img
                            alt="..."
                            src={mariyaGeorgieva}
                            className={navImageClasses}
                          />
                          <img
                            alt="..."
                            src={clemOnojegaw}
                            className={navImageClasses}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3}>
                          <img
                            alt="..."
                            src={clemOnojeghuo}
                            className={navImageClasses}
                          />
                          <img alt="..." src={oluEletu} className={navImageClasses} />
                          <img
                            alt="..."
                            src={cynthiaDelRio}
                            className={navImageClasses}
                          />
                        </GridItem>
                      </GridContainer>
                    )
                  }
                ]}
              />
            </div>
            <Clearfix />
          </div>
        </div>        );
}

