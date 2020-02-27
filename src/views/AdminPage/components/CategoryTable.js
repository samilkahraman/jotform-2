/* eslint-disable no-nested-ternary */
/* eslint-disable no-restricted-syntax */
import React, { useState, useEffect } from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// material-ui icons
import Person from '@material-ui/icons/Person';
import Edit from '@material-ui/icons/Edit';
import Close from '@material-ui/icons/Close';
// core components
import Table from 'components/Table/Table.js';
import Button from 'components/CustomButtons/Button.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Card from 'components/Card/Card';
import CardBody from 'components/Card/CardBody';
import profilePageStyle from 'assets/jss/material-kit-pro-react/views/profilePageStyle.js';
// eslint-disable-next-line import/order
import * as getCategories from '../../../actions/folder/GetFolder';

import Slide from '@material-ui/core/Slide';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
// @material-ui/icons
// core components
import dg1 from 'assets/img/dg1.jpg';
import dg2 from 'assets/img/dg2.jpg';
import Icon from '@material-ui/core/Icon';
import Instruction from 'components/Instruction/Instruction.js';
import * as getFOrm from '../../../actions/form/GetFormQuestions';
import * as deleteForm from '../../../actions/form/DeleteForm';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles(profilePageStyle);

export default function CategoryTable() {
  const [categoryForms, setCategoryFroms] = useState([]);
  const [liveDemo, setLiveDemo] = React.useState(true);
  const [noticeModal, setNoticeModal] = React.useState(false);
  const [tempCategory, setTempCategory] = React.useState({});
  const [currentColor, setCurrentColor] = React.useState('danger');
  let keys = 0;
  const classes = useStyles();

  const fillButtons = (comingKey, comingData) => {
    return [
      { color: 'info', icon: Person },
      { color: 'success', icon: Edit },
      { color: 'danger', icon: Close }
    ].map(prop => {
      return (
        <Button
          justIcon
          size="sm"
          color={prop.color}
          key={comingKey}
          onClick={async () => {
            if (prop.color === 'danger') {
              // eslint-disable-next-line no-shadow
              setCurrentColor('danger');
              let image = await fetchForm(comingData[0]);
              if (typeof image[16] == 'undefined') {
                image = dg2;
              } else {
                image = image[16].src;
              }
              setTempCategory({
                id: comingData[0],
                name: comingData[1],
                img: image,
                products: comingData[2]
              });
              console.log({ id: comingData[0], name: comingData[1], img: image[16].src });

              setLiveDemo(liveDemo => !liveDemo);
              console.log(image[16].src);
              setNoticeModal(true);
            } else if (prop.color === 'success') {
              setCurrentColor('success');
              let image = await fetchForm(comingData[0]);
              if (typeof image[16] == 'undefined') {
                image = dg2;
              } else {
                image = image[16].src;
              }
              setTempCategory({
                id: comingData[0],
                name: comingData[1],
                img: image,
                products: comingData[2]
              });
              console.log({ id: comingData[0], name: comingData[1], img: image[16].src });

              setLiveDemo(liveDemo => !liveDemo);
              console.log(image[16].src);
              setNoticeModal(true);
            } else {
              setCurrentColor('info');
              let image = await fetchForm(comingData[0]);
              if (typeof image[16] == 'undefined') {
                image = dg2;
              } else {
                image = image[16].src;
              }
              setTempCategory({
                id: comingData[0],
                name: comingData[1],
                img: image,
                products: comingData[2]
              });
              console.log({ id: comingData[0], name: comingData[1], img: image[16].src });

              setLiveDemo(liveDemo => !liveDemo);
              console.log(image[16].src);
              setNoticeModal(true);
            }
          }}
        >
          <prop.icon />
        </Button>
      );
    });
  };
  async function deleteFormCompletely(formId) {
    const result = await deleteForm
      .DeleteForm('c47b317e13a455fd869b360b993c5198', formId)
      .then(data => data.json())
      .then(res => {
        console.log(res);
        return res.content;
      });
    console.log(result);
    return result;
  }
  async function fetchForm(formId) {
    const result = await getFOrm
      .GetFormQuestions('c47b317e13a455fd869b360b993c5198', formId)
      .then(data => data.json())
      .then(res => {
        console.log(res);
        return res.content;
      });
    console.log(result);
    return result;
  }
  async function fetchCategories() {
    let key = 0;
    const result = await getCategories
      .GetFolder('c47b317e13a455fd869b360b993c5198', '5e380be24ec014393e4260b1')
      .then(data => data.json())
      .then(res => {
        return res.content.forms;
      });
    const realResult = [];
    let tempArr = [];
    for (let i = 0; i < result.length; i += 1) {
      // eslint-disable-next-line guard-for-in
      for (const j in result[i]) {
        if (j === 'title' || j === 'id' || j === 'count' || j === 'url') tempArr.push(result[i][j]);
        if (j === 'id') {
          key = result[i][j];
        }
      }
      tempArr.push(fillButtons(key, tempArr));
      realResult.push(tempArr);
      tempArr = [];
    }
    console.log(realResult, 'reals');
    setCategoryFroms(realResult);
    // eslint-disable-next-line no-console
    console.log(result);
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <h2 style={{ textAlign: 'center' }}>Edit Categories</h2>
        {liveDemo ? (
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} className={classes.gridItem}>
              <GridContainer className={classes.collections}>
                <GridItem xs={12} sm={12} md={12}>
                  <Card>
                    <CardBody className={classes.cardBody}>
                      <Table
                        tableHead={['#id', 'Category Name', 'Products', 'Url', 'Actions']}
                        tableData={categoryForms}
                        customCellClasses={[
                          classes.textCenter,
                          classes.textRight,
                          classes.textRight
                        ]}
                        customClassesForCells={[0, 4, 5]}
                        customHeadCellClasses={[
                          classes.textCenter,
                          classes.textRight,
                          classes.textRight
                        ]}
                        customHeadClassesForCells={[0, 4, 5]}
                      />
                    </CardBody>
                  </Card>
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
        ) : currentColor === 'danger' ? (
          <GridContainer>
            <GridItem xs={12} sm={6} md={6} lg={4}>
              <Dialog
                classes={{
                  root: classes.modalRoot,
                  paper: classes.modal
                }}
                open={noticeModal}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => setNoticeModal(false)}
                aria-labelledby="notice-modal-slide-title"
                aria-describedby="notice-modal-slide-description"
              >
                <DialogTitle
                  id="notice-modal-slide-title"
                  disableTypography
                  className={classes.modalHeader}
                >
                  <Button
                    simple
                    className={classes.modalCloseButton}
                    key="close"
                    aria-label="Close"
                    onClick={() => setNoticeModal(false)}
                  >
                    {' '}
                    <Close className={classes.modalClose} />
                  </Button>
                  <h3 className={classes.modalTitle} style={{ textAlign: 'center' }}>
                    <strong>Are you sure about deleting the category below?</strong>
                  </h3>
                </DialogTitle>
                <DialogContent id="notice-modal-slide-description" className={classes.modalBody}>
                  <Instruction
                    title={tempCategory.name}
                    text={
                      <span>
                        <strong>Please </strong> check related products before delate <br />
                        <strong>ID:</strong> {tempCategory.id}
                        <br />
                        <strong>Products:</strong> {tempCategory.products}
                        <br />
                        <a
                          href={`https://www.jotform.com/sheets/${tempCategory.id}`}
                          target="_blank"
                        >
                          Products Related To Category
                        </a>
                      </span>
                    }
                    image={tempCategory.img}
                    className={classes.instructionNoticeModal}
                    imageClassName={classes.imageNoticeModal}
                  />

                  <p>After delation, all of your products related to this category will be lost!</p>
                </DialogContent>
                <DialogActions className={classes.modalFooter + ' ' + classes.modalFooterCenter}>
                  <Button
                    onClick={() => {
                      setNoticeModal(false);
                      setLiveDemo(true);
                    }}
                    color="info"
                    round
                  >
                    Give Up!
                  </Button>

                  <Button
                    onClick={() => {
                      setNoticeModal(false);
                      setLiveDemo(true);
                      deleteFormCompletely(tempCategory.id);
                      window.location.reload(false);
                    }}
                    color="danger"
                    round
                  >
                    I&apos;m sure, Delete
                  </Button>
                </DialogActions>
              </Dialog>
              {/* NOTICE MODAL END */}
            </GridItem>
          </GridContainer>
        ) : currentColor === 'success' ? (
          <GridContainer>
            <GridItem xs={12} sm={6} md={6} lg={4}>
              <Dialog
                classes={{
                  root: classes.modalRoot,
                  paper: classes.modal
                }}
                open={noticeModal}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => setNoticeModal(false)}
                aria-labelledby="notice-modal-slide-title"
                aria-describedby="notice-modal-slide-description"
              >
                <DialogTitle
                  id="notice-modal-slide-title"
                  disableTypography
                  className={classes.modalHeader}
                >
                  <Button
                    simple
                    className={classes.modalCloseButton}
                    key="close"
                    aria-label="Close"
                    onClick={() => setNoticeModal(false)}
                  >
                    {' '}
                    <Close className={classes.modalClose} />
                  </Button>
                  <h3 className={classes.modalTitle} style={{ textAlign: 'center' }}>
                    <strong>Are you sure about deleting the category below?</strong>
                  </h3>
                </DialogTitle>
                <DialogContent id="notice-modal-slide-description" className={classes.modalBody}>
                  <Instruction
                    title={tempCategory.name}
                    text={
                      <span>
                        <strong>Please </strong> check related products before delate <br />
                        <strong>ID:</strong> {tempCategory.id}
                        <br />
                        <strong>Products:</strong> {tempCategory.products}
                        <br />
                        <a
                          href={`https://www.jotform.com/sheets/${tempCategory.id}`}
                          target="_blank"
                        >
                          Products Related To Category
                        </a>
                      </span>
                    }
                    image={tempCategory.img}
                    className={classes.instructionNoticeModal}
                    imageClassName={classes.imageNoticeModal}
                  />

                  <p>After delation, all of your products related to this category will be lost!</p>
                </DialogContent>
                <DialogActions className={classes.modalFooter + ' ' + classes.modalFooterCenter}>
                  <Button
                    onClick={() => {
                      setNoticeModal(false);
                      setLiveDemo(true);
                    }}
                    color="info"
                    round
                  >
                    Back
                  </Button>
                  <Button
                    onClick={() => {
                      setNoticeModal(false);
                      setLiveDemo(true);
                    }}
                    color="success"
                    round
                  >
                    Approve Changes!
                  </Button>
                </DialogActions>
              </Dialog>
              {/* NOTICE MODAL END */}
            </GridItem>
          </GridContainer>
        ) : (
          <GridContainer>
            <GridItem xs={12} sm={6} md={6} lg={4}>
              <Dialog
                classes={{
                  root: classes.modalRoot,
                  paper: classes.modal
                }}
                open={noticeModal}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => setNoticeModal(false)}
                aria-labelledby="notice-modal-slide-title"
                aria-describedby="notice-modal-slide-description"
              >
                <DialogTitle
                  id="notice-modal-slide-title"
                  disableTypography
                  className={classes.modalHeader}
                >
                  <Button
                    simple
                    className={classes.modalCloseButton}
                    key="close"
                    aria-label="Close"
                    onClick={() => setNoticeModal(false)}
                  >
                    {' '}
                    <Close className={classes.modalClose} />
                  </Button>
                  <h3 className={classes.modalTitle} style={{ textAlign: 'center' }}>
                    <strong>Are you sure about deleting the category below?</strong>
                  </h3>
                </DialogTitle>
                <DialogContent id="notice-modal-slide-description" className={classes.modalBody}>
                  <Instruction
                    title={tempCategory.name}
                    text={
                      <span>
                        <strong>Please </strong> check related products before delate <br />
                        <strong>ID:</strong> {tempCategory.id}
                        <br />
                        <strong>Products:</strong> {tempCategory.products}
                        <br />
                        <a
                          href={`https://www.jotform.com/sheets/${tempCategory.id}`}
                          target="_blank"
                        >
                          Products Related To Category
                        </a>
                      </span>
                    }
                    image={tempCategory.img}
                    className={classes.instructionNoticeModal}
                    imageClassName={classes.imageNoticeModal}
                  />

                  <p>After delation, all of your products related to this category will be lost!</p>
                </DialogContent>
                <DialogActions className={classes.modalFooter + ' ' + classes.modalFooterCenter}>
                  <Button
                    onClick={() => {
                      setNoticeModal(false);
                      setLiveDemo(true);
                    }}
                    color="info"
                    round
                  >
                    Back
                  </Button>
                </DialogActions>
              </Dialog>
            </GridItem>
          </GridContainer>
        )}
      </div>
    </div>
  );
}

/*  <Dialog
            classes={{
              root: classes.modalRoot,
              paper: classes.modal
            }}
            open={liveDemo}
            TransitionComponent={Transition}
            keepMounted
            onClose={() => setLiveDemo(false)}
            aria-labelledby="classic-modal-slide-title"
            aria-describedby="classic-modal-slide-description"
          >
            <DialogTitle
              id="classic-modal-slide-title"
              disableTypography
              className={classes.modalHeader}
            >
              <Button
                simple
                className={classes.modalCloseButton}
                key="close"
                aria-label="Close"
                onClick={() => setLiveDemo(false)}
              >
                {' '}
                <Close className={classes.modalClose} />
              </Button>
              <h4 className={classes.modalTitle} style={{ textAlign: 'center' }}>
                WARNING!
              </h4>
            </DialogTitle>
            <DialogContent id="classic-modal-slide-description" className={classes.modalBody}>
              <p>Are you sure about deleting category?</p>
            </DialogContent>
            <DialogActions className={classes.modalFooter}>
              <Button onClick={() => setLiveDemo(false)} color="secondary">
                Close
              </Button>
              <Button color="danger">Delete!</Button>
            </DialogActions>
          </Dialog>
        */
