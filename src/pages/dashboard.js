import * as React from "react";
import { useEffect, useState } from "react";
import * as ReactDOM from "react-dom";
// import { useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Button, Row, Col } from "react-bootstrap";
import Box from "@mui/material/Box";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useParams,
} from "react-router-dom";

import "../css/page.css";
import DatePicker from "@mui/lab/DatePicker";

import { Divider } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faArrowAltCircleDown,
  faFilter,
  faExternalLinkAlt,
} from "@fortawesome/fontawesome-free-solid";

//Date input
import { TextField, createTheme, ThemeProvider } from "@material-ui/core";

//table

import "antd/dist/antd.css";

import { Table } from "antd";
import "../css/page.css";
import "../css/slide-wrapper.css";

import { styled } from "@mui/material/styles";
import moment from "moment";

//Currency
import NumberFormat from "react-number-format";
import { currencyFormat } from "../components/helper";

//Table

import SearchBar from "material-ui-search-bar";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

import logo from "../assets/img/light-mode.png";
import logoSmall from "../assets/img/logo-small.png";

import line1 from "../assets/img/section1/line-1.png";
import wall1 from "../assets/img/section1/3dwall1.png";
import scrolldown from "../assets/img/section1/scroll-down-button.png";
import background3ds2 from "../assets/img/section2/3dBackground2.png";
import line2 from "../assets/img/section2/line2.png";
import desktop1 from "../assets/img/section2/Desktop1.png";
import pointLine from "../assets/img/section2/point-line.png";
import line3 from "../assets/img/section3/line3.png";
import tablet1 from "../assets/img/section3/tablet1-3.png";
import tablet2 from "../assets/img/section3/tablet2-3.png";
import arrowCircleRight from "../assets/img/section3/arrow-circle-right.png";
import featuredProductTag from "../assets/img/section3/featuredProductTag.png";

import downloadButton from "../assets/img/section3/download-button.png";
import arrowLeft from "../assets/img/section4/arrowLeft.png";
import arrowRight from "../assets/img/section4/arrowRight.png";
import slider1 from "../assets/img/section4/slider1.png";
import slider2 from "../assets/img/section4/slider2.png";
import slider3 from "../assets/img/section4/slider3.png";
import slider4 from "../assets/img/section4/slider4.png";

import line4 from "../assets/img/section5/line4.png";
import jobAvailableButton from "../assets/img/section5/job-available-button.png";
import jobCard from "../assets/img/section5/job-card.png";
import simpleArrowLeft from "../assets/img/section5/arrow-left-simple.png";
import simpleArrowLeftWhite from "../assets/img/section5/simple-arrow-right-white.png";

import logoPurple from "../assets/img/section6/logo-purple.png";
import speechBubble from "../assets/img/section6/SpeachBubble.png";
import facebookFooter from "../assets/img/section6/facebook-footer.png";
import instagramFooter from "../assets/img/section6/instagram-footer.png";
import youtubeFooter from "../assets/img/section6/youtube-footer.png";
import arrowCircleRightWhite from "../assets/img/section6/arrow-circle-white.png";

const Slide = React.forwardRef((props, ref) =>
  React.Children.map(props.children, (child) => (
    <div className="simple-slide" ref={ref}>
      {child}
    </div>
  ))
);

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

function Dashboard() {
  useEffect(() => {
    console.log(width);
  }, []);

  const [activeYearSection2, setActiveYearSection2] = useState(0);
  const [activeJobSection5, setActiveJobSection5] = useState(null);

  const slider = [slider1, slider2, slider3, slider4];

  const { height, width } = useWindowDimensions();

  function SimpleSlider(props) {
    const [width, setWidth] = React.useState(0);
    const [offset, setOffset] = React.useState(0);
    const [slideCount, setSlideCount] = React.useState(0);

    const slideRef = React.createRef();
    const wrapperRef = React.createRef();
    const slideWindowRef = React.createRef();

    React.useLayoutEffect(() => {
      const rect = slideRef.current.getBoundingClientRect();
      setWidth(rect.width);
      setSlideCount(props.children.length);
      slideWindowRef.current.style.width = rect.width + "px";
    }, [slideRef, offset, slideWindowRef, props]);
    const { leftCallback = () => {}, rightCallback = () => {} } = props;

    const leftClick = (e) => {
      e.preventDefault();
      let currentRight = wrapperRef.current.style.right || 0;
      currentRight = parseInt(currentRight, 10);
      if (currentRight === 0) return false;
      const newOffset = currentRight - width;
      wrapperRef.current.style.right = newOffset + "px";
      setOffset(newOffset);
      leftCallback();
    };

    const rightClick = (e) => {
      e.preventDefault();
      let currentRight = wrapperRef.current.style.right || 0;
      currentRight = parseInt(currentRight, 10);

      if (currentRight === (slideCount - 1) * width) return false;

      const newOffset = offset + width;
      wrapperRef.current.style.right = newOffset + "px";
      setOffset(newOffset);
      rightCallback();
    };

    return (
      <>
        <Row
          className="justify-content-md-center"
          style={{ marginTop: "180px", display: "flex" }}
        >
          <Col xs="1">
            <img
              src={arrowLeft}
              onClick={leftClick}
              alt="Logo"
              style={{
                right: 0,
                userSelect: "none",
                position: "absolute",
                // height: "490px",
                marginTop: "340px",
                cursor: "pointer",
              }}
            />
          </Col>
          <Col xs="10" style={{}}>
            <div className="slide-window" ref={slideWindowRef}>
              <div className="slide-wrapper" ref={wrapperRef}>
                <Slide ref={slideRef}>{props.children}</Slide>
              </div>
            </div>
          </Col>
          <Col xs="1">
            <img
              src={arrowRight}
              onClick={rightClick}
              alt="Logo"
              style={{
                left: 0,
                userSelect: "none",
                position: "absolute",
                marginTop: "340px",
                cursor: "pointer",
              }}
            />
          </Col>
        </Row>
      </>
    );
  }

  return (
    <>
      {/* {result === "Pong" ? ( */}
      {width > 1000 ? (
        <div
          className="App"
          style={{ backgroundColor: "#FFFFFF", overflowX: "hidden" }}
        >
          <img
            src={line1}
            alt="Line-1"
            style={{
              zIndex: "0",

              marginLeft: "-10%",

              marginBottom: "-821px",
            }}
          />
          <div
            className="Header"
            style={{
              zIndex: "999",
              marginTop: "44px",
              width: "100%",
              marginBottom: "-64px",
              height: "64px",
              padding: "10px",
            }}
          >
            <Row>
              <Col xs="3">
                <img
                  src={logo}
                  alt="Logo"
                  style={{
                    width: "159px",
                    marginTop: "1px",
                    height: "40px",
                    cursor: "pointer",
                  }}
                />
              </Col>
              <Col xs="6">
                <Row className="justify-content-md-center">
                  <Col xs="auto" style={{ margin: "20px", marginTop: "8px" }}>
                    <p
                      style={{
                        fontSize: "18px",
                        color: "#5468E7",
                        cursor: "pointer",
                      }}
                    >
                      About
                    </p>
                  </Col>
                  <Col xs="auto" style={{ margin: "20px", marginTop: "8px" }}>
                    <p
                      style={{
                        fontSize: "18px",
                        color: "#8B8B8B",
                        cursor: "pointer",
                      }}
                    >
                      Work
                    </p>
                  </Col>
                  <Col xs="auto" style={{ margin: "20px", marginTop: "8px" }}>
                    <p
                      style={{
                        fontSize: "18px",
                        color: "#8B8B8B",
                        cursor: "pointer",
                      }}
                    >
                      Services
                    </p>
                  </Col>
                  <Col xs="auto" style={{ margin: "20px", marginTop: "8px" }}>
                    <p
                      style={{
                        fontSize: "18px",
                        color: "#8B8B8B",
                        cursor: "pointer",
                      }}
                    >
                      Jobs
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col xs="3">
                <Button
                  variant="dark"
                  style={{
                    backgroundColor: "#232340",
                    borderRadius: "8px",
                    fontSize: "18px",
                    height: "64px",
                    width: "180px",
                    marginTop: "-10px",
                  }}
                >
                  Contact us
                </Button>
              </Col>
            </Row>
          </div>
          <div
            className="section1"
            style={{ marginTop: "50px", paddingTop: "0px", padding: "130px" }}
          >
            <Row>
              <Col xs="4" style={{ marginTop: "-10px" }}>
                <p
                  style={{
                    fontSize: "84px",
                    textAlign: "Left",
                    color: "#232340",
                    lineHeight: "100px",
                    letterSpacing: "-1",
                  }}
                >
                  Stand Out from the Crowd.
                </p>
                <p
                  style={{
                    fontSize: "18px",
                    textAlign: "Left",
                    color: "#606060",
                    lineHeight: "32px",
                    fontWeight: "400",
                    marginTop: "-40px",
                    marginRight: "-20px",
                    // letterSpacing: "-1",
                  }}
                >
                  Agency is a full-service agency, busy designing and building
                  beautiful digital products, brands, and experiences.
                </p>
                <Row>
                  <Col xs="12">
                    <Button
                      style={{
                        marginLeft: "-200px",
                        marginTop: "40px",
                        width: "180px",
                        height: "64px",
                        backgroundColor: "#5468E7",
                        borderRadius: "8px",
                      }}
                    >
                      Recent Work
                    </Button>
                  </Col>
                  <Col xs="12">
                    <img
                      src={scrolldown}
                      alt="Logo"
                      style={{
                        marginLeft: "-220px",
                        marginTop: "100px",

                        // width: "159px",
                        // marginBottom: "15px",
                        // borderRadius: "40px",
                        // height: "40px",
                      }}
                    />
                  </Col>
                </Row>
              </Col>
              <Col xs="8">
                <img
                  src={wall1}
                  alt="Wall1"
                  style={{
                    width: "924px",
                    height: "722px",
                    marginLeft: "-130px",
                    marginTop: "-20px",
                    // marginBottom: "15px",
                    // borderRadius: "40px",
                  }}
                />
              </Col>
            </Row>
          </div>
          <div
            className="section2"
            style={{
              height: "1670px",
              width: "100%",
              backgroundColor: "#232340",
              padding: "120px",
              position: "relative",
            }}
          >
            <img
              src={background3ds2}
              alt="Logo"
              style={{
                // marginRight: "-55%",
                marginTop: "-180px",
                right: 0,
                userSelect: "none",
                marginBottom: "-1052px",
                // width: "159px",
                // marginTop: "1px",
                position: "absolute",
                // marginBottom: "15px",
                // borderRadius: "40px",
                // height: "40px",
              }}
            />
            <img
              src={line2}
              alt="Logo"
              style={{
                left: 0,
                userSelect: "none",
                position: "absolute",
                height: "490px",
                marginTop: "-140px",
              }}
            />
            <Row>
              <Col xs="2">
                <img
                  src={logoSmall}
                  alt="Logo"
                  style={{
                    left: 0,
                    userSelect: "none",
                    marginLeft: "-50px",
                    marginRight: "50px",

                    // position: "absolute",
                    height: "24px",
                  }}
                />
              </Col>
              <Col xs="7">
                <Row>
                  <Col xs="1">
                    <p
                      style={{
                        fontSize: "18px",
                        lineHeight: "24px",
                        color: "#8B8B8B",
                        textAlign: "left",
                      }}
                    >
                      01
                    </p>
                  </Col>
                  <Col xs="11">
                    <p
                      style={{
                        marginLeft: "-10px",
                        fontSize: "18px",
                        lineHeight: "24px",
                        color: "#FFFFFF",
                        textAlign: "left",
                      }}
                    >
                      Who We Are
                    </p>
                  </Col>
                  <Col xs="12">
                    <p
                      style={{
                        fontSize: "64px",
                        lineHeight: "72px",
                        color: "#FFFFFF",
                        textAlign: "left",
                      }}
                    >
                      We Make Designs that Lead and Inpire.
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row style={{ marginTop: "120px" }}>
              <Col xs="3" style={{ zIndex: "9999" }}>
                <Row>
                  <Col
                    xs="12"
                    style={{ marginBottom: "60px", cursor: "pointer" }}
                    onClick={() => {
                      setActiveYearSection2(0);
                    }}
                  >
                    <Row>
                      <Col xs="2">
                        <p
                          style={{
                            marginLeft: "35px",
                            marginTop: "-10px",
                            fontSize: "20px",
                            color: "#FFFFFF",
                            fontWeight: "800",
                            textAlign: "left",
                          }}
                        >
                          {activeYearSection2 === 0 ? "__" : "_"}
                        </p>
                      </Col>
                      <Col xs="4">
                        <p
                          style={{
                            marginLeft: "35px",
                            fontSize: "18px",
                            color:
                              activeYearSection2 === 0
                                ? "rgba(255, 255, 255, 1)"
                                : "rgba(255, 255, 255, 0.6)",
                            fontWeight: "600",
                            textAlign: "left",
                          }}
                        >
                          2018
                        </p>
                      </Col>
                      {activeYearSection2 === 0 ? (
                        <Col xs="6">
                          <img
                            src={pointLine}
                            alt="Logo"
                            style={{
                              marginLeft: "20px",
                              marginTop: "3px",
                            }}
                          />
                        </Col>
                      ) : null}
                    </Row>
                  </Col>
                  <Col
                    xs="12"
                    style={{ marginBottom: "60px", cursor: "pointer" }}
                    onClick={() => {
                      setActiveYearSection2(1);
                    }}
                  >
                    <Row>
                      <Col xs="2">
                        <p
                          style={{
                            marginLeft: "35px",
                            marginTop: "-10px",
                            fontSize: "20px",
                            color: "#FFFFFF",
                            fontWeight: "800",
                            textAlign: "left",
                          }}
                        >
                          {activeYearSection2 === 1 ? "__" : "_"}
                        </p>
                      </Col>
                      <Col xs="4">
                        <p
                          style={{
                            marginLeft: "35px",
                            fontSize: "18px",
                            color:
                              activeYearSection2 === 1
                                ? "rgba(255, 255, 255, 1)"
                                : "rgba(255, 255, 255, 0.6)",
                            fontWeight: "600",
                            textAlign: "left",
                          }}
                        >
                          2019
                        </p>
                      </Col>

                      {activeYearSection2 === 1 ? (
                        <Col xs="6">
                          <img
                            src={pointLine}
                            alt="Logo"
                            style={{
                              marginLeft: "20px",
                              marginTop: "3px",
                            }}
                          />
                        </Col>
                      ) : null}
                    </Row>
                  </Col>
                  <Col
                    xs="12"
                    style={{ marginBottom: "60px", cursor: "pointer" }}
                    onClick={() => {
                      setActiveYearSection2(2);
                    }}
                  >
                    <Row>
                      <Col xs="2">
                        <p
                          style={{
                            marginLeft: "35px",
                            marginTop: "-10px",
                            fontSize: "20px",
                            color: "#FFFFFF",
                            fontWeight: "800",
                            textAlign: "left",
                          }}
                        >
                          {activeYearSection2 === 2 ? "__" : "_"}
                        </p>
                      </Col>
                      <Col xs="4">
                        <p
                          style={{
                            marginLeft: "35px",
                            fontSize: "18px",
                            color:
                              activeYearSection2 === 2
                                ? "rgba(255, 255, 255, 1)"
                                : "rgba(255, 255, 255, 0.6)",
                            fontWeight: "600",
                            textAlign: "left",
                          }}
                        >
                          2020
                        </p>
                      </Col>

                      {activeYearSection2 === 2 ? (
                        <Col xs="6">
                          <img
                            src={pointLine}
                            alt="Logo"
                            style={{
                              marginLeft: "20px",
                              marginTop: "3px",
                            }}
                          />
                        </Col>
                      ) : null}
                    </Row>
                  </Col>
                  <Col
                    xs="12"
                    style={{ marginBottom: "60px", cursor: "pointer" }}
                    onClick={() => {
                      setActiveYearSection2(3);
                    }}
                  >
                    <Row>
                      <Col xs="2">
                        <p
                          style={{
                            marginLeft: "35px",
                            marginTop: "-10px",
                            fontSize: "20px",
                            color: "#FFFFFF",
                            fontWeight: "800",
                            textAlign: "left",
                          }}
                        >
                          {activeYearSection2 === 3 ? "__" : "_"}
                        </p>
                      </Col>
                      <Col xs="4">
                        <p
                          style={{
                            marginLeft: "35px",
                            fontSize: "18px",
                            color:
                              activeYearSection2 === 3
                                ? "rgba(255, 255, 255, 1)"
                                : "rgba(255, 255, 255, 0.6)",
                            fontWeight: "600",
                            textAlign: "left",
                          }}
                        >
                          2021
                        </p>
                      </Col>
                      {activeYearSection2 === 3 ? (
                        <Col xs="6">
                          <img
                            src={pointLine}
                            alt="Logo"
                            style={{
                              marginLeft: "20px",
                              marginTop: "3px",
                            }}
                          />
                        </Col>
                      ) : null}
                    </Row>
                  </Col>
                  <Col
                    xs="12"
                    style={{ marginBottom: "60px", cursor: "pointer" }}
                    onClick={() => {
                      setActiveYearSection2(4);
                    }}
                  >
                    <Row>
                      <Col xs="2">
                        <p
                          style={{
                            marginLeft: "35px",
                            marginTop: "-10px",
                            fontSize: "20px",
                            color: "#FFFFFF",
                            fontWeight: "800",
                            textAlign: "left",
                          }}
                        >
                          {activeYearSection2 === 4 ? "__" : "_"}
                        </p>
                      </Col>
                      <Col xs="4">
                        <p
                          style={{
                            marginLeft: "35px",
                            fontSize: "18px",
                            color:
                              activeYearSection2 === 4
                                ? "rgba(255, 255, 255, 1)"
                                : "rgba(255, 255, 255, 0.6)",
                            fontWeight: "600",
                            textAlign: "left",
                          }}
                        >
                          2022
                        </p>
                      </Col>
                      {activeYearSection2 === 4 ? (
                        <Col xs="6">
                          <img
                            src={pointLine}
                            alt="Logo"
                            style={{
                              marginLeft: "20px",
                              marginTop: "3px",
                            }}
                          />
                        </Col>
                      ) : null}
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col xs="9">
                <img
                  src={desktop1}
                  alt="Logo"
                  style={{
                    marginTop: "-80px",
                    marginLeft: "-120px",
                  }}
                />
              </Col>
            </Row>
            <Row style={{ marginTop: "120px" }}>
              <Col xs="2">
                <div
                  style={{
                    width: "2px",
                    height: "80px",
                    backgroundColor: "#F1B2CC",
                    borderRadius: "1px",
                    marginLeft: "35px",
                  }}
                ></div>
              </Col>
              <Col xs="5" style={{ marginLeft: "0px" }}>
                <Row>
                  <Col xs="12">
                    <p
                      style={{
                        fontSize: "32px",
                        fontWeight: "500",
                        color: "#ffffff",
                        textAlign: "left",
                        lineHeight: "40px",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Col>
                  <Col xs="12">
                    <p
                      style={{
                        fontSize: "18px",
                        fontWeight: "400",
                        color: "#8B8B8B",
                        textAlign: "left",
                        lineHeight: "32px",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nam porta sodales leo vitae vestibulum. Nullam vel posuere
                      nisi. Donec in lobortis arcu.
                    </p>
                  </Col>
                  <Col xs="12">
                    <Button
                      variant="dark"
                      style={{
                        backgroundColor: "#5468E7",
                        borderRadius: "8px",
                        fontSize: "18px",
                        height: "64px",
                        width: "180px",
                        marginTop: "20px",
                        // marginLeft: "-100px",
                        position: "absolute",
                        left: 10,
                      }}
                    >
                      Contact us
                    </Button>
                  </Col>
                </Row>
              </Col>
              <Col xs="5">
                <div
                  style={{
                    marginTop: "-40px",
                    position: "absolute",
                    right: 30,
                    backgroundColor: "#232340",
                    boxShadow: "0px 23px 50px rgba(0, 0, 0, 0.25)",
                    width: "402px",
                    height: "402px",
                    borderRadius: "500px",
                  }}
                >
                  <Row>
                    <Col xs="12">
                      <p
                        style={{
                          fontSize: "200px",
                          color: "#ffffff",
                          marginTop: "20px",
                          // lineHeight: "239px",
                        }}
                      >
                        28
                      </p>
                    </Col>
                    <Col xs="12">
                      <p
                        style={{
                          fontSize: "24px",
                          color: "#ffffff",
                          marginTop: "-250px",
                        }}
                      >
                        Lorem Ipsum
                      </p>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
          <div
            className="section3"
            style={{
              height: "1348px",
              width: "100%",
              backgroundColor: "#FFFFFF",
              position: "relative",
              padding: "120px",
              zIndex: "2",
            }}
          >
            <img
              src={line3}
              alt="Logo"
              style={{
                top: 0,
                left: 0,
                userSelect: "none",
                position: "absolute",
              }}
            />
            <Row>
              <Col xs="2">
                <img
                  src={logoSmall}
                  alt="Logo"
                  style={{
                    left: 0,
                    userSelect: "none",
                    marginLeft: "-50px",
                    marginRight: "50px",

                    // position: "absolute",
                    height: "24px",
                  }}
                />
              </Col>
              <Col xs="7">
                <Row>
                  <Col xs="1">
                    <p
                      style={{
                        fontSize: "18px",
                        lineHeight: "24px",
                        color: "#5468E7",
                        textAlign: "left",
                      }}
                    >
                      02
                    </p>
                  </Col>
                  <Col xs="11">
                    <p
                      style={{
                        marginLeft: "-10px",
                        fontSize: "18px",
                        lineHeight: "24px",
                        color: "#5468E7",
                        textAlign: "left",
                      }}
                    >
                      You may also like
                    </p>
                  </Col>
                  <Col xs="12">
                    <p
                      style={{
                        fontSize: "84px",
                        lineHeight: "100px",
                        color: "#232340",
                        textAlign: "left",
                        marginLeft: "-5px",
                        fontWeight: "600",
                      }}
                    >
                      Recent Works
                    </p>
                  </Col>
                  <Col xs="9">
                    <p
                      style={{
                        fontSize: "18px",
                        lineHeight: "32px",
                        color: "#606060",
                        textAlign: "left",
                        marginLeft: "-5px",
                        marginTop: "-40px",
                        fontWeight: "400",
                      }}
                    >
                      Agency is a full-service agency, busy designing and
                      building beautiful digital products, brands, and
                      experiences.
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row
              className="justify-content-md-center"
              style={{ marginTop: "80px" }}
            >
              <Col xs="4">
                <Row>
                  <Col xs="12">
                    <div
                      style={{
                        backgroundColor: "#FFCE79",
                        height: "500px",
                        width: "367px",
                        borderRadius: "24px",
                        position: "relative",
                      }}
                    >
                      <img
                        src={featuredProductTag}
                        alt="Logo"
                        style={{
                          top: 40,
                          left: -40,
                          userSelect: "none",
                          position: "absolute",
                        }}
                      />
                      <img
                        src={tablet1}
                        alt="Logo"
                        style={{
                          top: 40,
                          left: -90,
                          userSelect: "none",
                          position: "absolute",
                        }}
                      />
                      <img
                        src={arrowCircleRight}
                        alt="Logo"
                        style={{
                          bottom: 60,
                          right: -33,
                          userSelect: "none",
                          position: "absolute",
                          cursor: "pointer",
                        }}
                      />
                    </div>
                  </Col>
                  <Col xs="12" style={{ marginTop: "50px" }}>
                    <p
                      style={{
                        fontSize: "40px",
                        lineHeight: "48px",
                        color: "#232340",
                        letterSpacing: "-0.4px",
                        textAlign: "left",
                      }}
                    >
                      Bento 3D Illustration
                    </p>
                    <p
                      style={{
                        fontSize: "18px",
                        lineHeight: "32px",
                        color: "#606060",
                        textAlign: "left",
                        // marginLeft: "-5px",
                        marginTop: "-20px",
                        fontWeight: "400",
                      }}
                    >
                      Agency is a full-service agency, busy designing and
                      building beautiful digital products, brands, and
                      experiences.
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col xs="4">
                <Row style={{ marginLeft: "70px" }}>
                  <Col xs="12">
                    <div
                      style={{
                        backgroundColor: "#D1ECFD",
                        height: "500px",
                        width: "367px",
                        borderRadius: "24px",
                        position: "relative",
                      }}
                    >
                      <img
                        src={tablet2}
                        alt="Logo"
                        style={{
                          top: 50,
                          left: -90,
                          userSelect: "none",
                          position: "absolute",
                        }}
                      />
                      <img
                        src={arrowCircleRight}
                        alt="Logo"
                        style={{
                          bottom: 60,
                          right: -33,
                          userSelect: "none",
                          position: "absolute",
                          cursor: "pointer",
                        }}
                      />
                    </div>
                  </Col>
                  <Col xs="12" style={{ marginTop: "50px" }}>
                    <p
                      style={{
                        fontSize: "40px",
                        lineHeight: "48px",
                        color: "#232340",
                        letterSpacing: "-0.4px",
                        textAlign: "left",
                      }}
                    >
                      Bento Vol. 3
                    </p>
                    <p
                      style={{
                        fontSize: "18px",
                        lineHeight: "32px",
                        color: "#606060",
                        textAlign: "left",
                        // marginLeft: "-5px",
                        marginTop: "-20px",
                        fontWeight: "400",
                        marginRight: "-100px",
                      }}
                    >
                      Agency is a full-service agency, busy designing and
                      building beautiful digital products, brands, and
                      experiences.
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          <div
            className="section4"
            style={{
              height: "1670px",
              width: "100%",
              backgroundColor: "#232340",
              padding: "120px",
              position: "relative",
            }}
          >
            <img
              src={background3ds2}
              alt="Logo"
              style={{
                // marginRight: "-55%",
                marginTop: "-180px",
                right: 0,
                userSelect: "none",
                marginBottom: "-1052px",
                // width: "159px",
                // marginTop: "1px",
                position: "absolute",
                // marginBottom: "15px",
                // borderRadius: "40px",
                // height: "40px",
              }}
            />
            <img
              src={line2}
              alt="Logo"
              style={{
                left: 0,
                userSelect: "none",
                position: "absolute",
                height: "490px",
                marginTop: "-140px",
              }}
            />
            <Row>
              <Col xs="2">
                <img
                  src={logoSmall}
                  alt="Logo"
                  style={{
                    left: 0,
                    userSelect: "none",
                    marginLeft: "-50px",
                    marginRight: "50px",

                    // position: "absolute",
                    height: "24px",
                  }}
                />
              </Col>
              <Col xs="7">
                <Row>
                  <Col xs="1">
                    <p
                      style={{
                        fontSize: "18px",
                        lineHeight: "24px",
                        color: "#8B8B8B",
                        textAlign: "left",
                      }}
                    >
                      03
                    </p>
                  </Col>
                  <Col xs="11">
                    <p
                      style={{
                        marginLeft: "-10px",
                        fontSize: "18px",
                        lineHeight: "24px",
                        color: "#FFFFFF",
                        textAlign: "left",
                      }}
                    >
                      Folio Agency
                    </p>
                  </Col>
                  <Col xs="12">
                    <p
                      style={{
                        fontSize: "64px",
                        lineHeight: "72px",
                        color: "#FFFFFF",
                        textAlign: "left",
                      }}
                    >
                      By the Numbers.
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row style={{ marginTop: "130px" }}>
              <Col xs="5">
                <Row
                  className="justify-content-md-center"
                  style={{ marginLeft: "180px" }}
                >
                  <Col xs="12">
                    <p
                      style={{
                        fontSize: "200px",
                        color: "#FFFFFF",
                        lineHeight: "238.67px",
                        textAlign: "left",
                      }}
                    >
                      20
                    </p>
                  </Col>
                  <Col xs="12">
                    <p
                      style={{
                        fontSize: "24px",
                        lineHeight: "32px",
                        textAlign: "left",
                        color: "#FFFFFF",
                        marginLeft: "20px",
                        marginTop: "-180px",
                      }}
                    >
                      Pre-build Scenes ????
                    </p>
                  </Col>
                  <Col xs="12">
                    <p
                      style={{
                        fontSize: "24px",
                        lineHeight: "32px",
                        textAlign: "left",
                        color: "#8B8B8B",
                        marginLeft: "20px",
                        marginTop: "-110px",
                        fontWeight: "400",
                      }}
                    >
                      ______________________
                    </p>
                  </Col>
                  <Col xs="12">
                    <p
                      style={{
                        fontSize: "18px",
                        lineHeight: "32px",
                        textAlign: "left",
                        fontWeight: "400",
                        color: "#8B8B8B",
                        marginLeft: "20px",
                        marginTop: "-20px",
                        marginRight: "-20px",
                      }}
                    >
                      Bento is the first fully editable, 3D visual design system
                      with global auto-updatable style guides built right in
                      Figma.
                    </p>
                  </Col>
                  <Col xs="12">
                    <img
                      src={downloadButton}
                      alt="Logo"
                      style={{
                        top: 30,
                        left: 30,
                        userSelect: "none",
                        position: "absolute",
                        cursor: "pointer",
                        // height: "490px",
                        // marginTop: "-140px",
                      }}
                    />
                  </Col>
                </Row>
              </Col>
              <Col xs="5">
                <Row
                  className="justify-content-md-center"
                  style={{
                    marginLeft: "100px",
                    marginTop: "-145px",
                  }}
                >
                  <Col xs="12">
                    <p
                      style={{
                        fontSize: "200px",
                        color: "#FFFFFF",
                        lineHeight: "238.67px",
                        textAlign: "left",
                      }}
                    >
                      40
                    </p>
                    <p
                      style={{
                        fontSize: "64px",
                        color: "#FFFFFF",
                        lineHeight: "72px",
                        textAlign: "left",
                        right: 100,
                        top: 20,
                        position: "absolute",
                      }}
                    >
                      +
                    </p>
                  </Col>
                  <Col xs="12">
                    <p
                      style={{
                        fontSize: "24px",
                        lineHeight: "32px",
                        textAlign: "left",
                        color: "#FFFFFF",
                        marginLeft: "20px",
                        marginTop: "-180px",
                      }}
                    >
                      Scene Object
                    </p>
                  </Col>
                  <Col xs="12">
                    <p
                      style={{
                        fontSize: "24px",
                        lineHeight: "32px",
                        textAlign: "left",
                        color: "#8B8B8B",
                        marginLeft: "20px",
                        marginTop: "-110px",
                        fontWeight: "400",
                      }}
                    >
                      ______________________
                    </p>
                  </Col>
                  <Col xs="12">
                    <p
                      style={{
                        fontSize: "18px",
                        lineHeight: "32px",
                        textAlign: "left",
                        fontWeight: "400",
                        color: "#8B8B8B",
                        marginLeft: "20px",
                        marginTop: "-20px",
                        marginRight: "50px",
                      }}
                    >
                      Bento is the first fully editable, 3D visual design system
                      with global auto-updatable style guides built right in
                      Figma.
                    </p>
                  </Col>
                  <Col xs="12">
                    <img
                      src={downloadButton}
                      alt="Logo"
                      style={{
                        top: 30,
                        left: 30,
                        userSelect: "none",
                        position: "absolute",
                        cursor: "pointer",
                        // height: "490px",
                        // marginTop: "-140px",
                      }}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
            <SimpleSlider>
              {slider.map((data) => {
                return (
                  <div style={{ paddingRight: "30px", paddingLeft: "10px" }}>
                    <img
                      src={data}
                      alt="Logo"
                      style={{
                        // top: 0,
                        // left: 25,
                        marginTop: "60px",
                        userSelect: "none",
                        // position: "absolute",
                        zIndex: "4",
                        width: "969px",
                        height: "598px",
                        // marginTop: "-140px",
                      }}
                    />
                  </div>
                );
              })}
            </SimpleSlider>
            {/* <Row
            className="justify-content-md-center"
            style={{ marginTop: "180px" }}
          >
            <Col xs="1">
              <img
                src={arrowLeft}
                alt="Logo"
                style={{
                  right: 0,
                  userSelect: "none",
                  position: "absolute",
                  // height: "490px",
                  marginTop: "340px",
                  cursor: "pointer",
                }}
              />
            </Col>
            <Col xs="10">
              <img
                src={slider1}
                alt="Logo"
                style={{
                  top: 0,
                  left: 25,
                  userSelect: "none",
                  position: "absolute",
                  zIndex: "4",
                  // height: "490px",s
                  // marginTop: "-140px",
                }}
              />
            </Col>
            <Col xs="1">
              <img
                src={arrowRight}
                alt="Logo"
                style={{
                  left: 0,
                  userSelect: "none",
                  position: "absolute",
                  marginTop: "340px",
                  cursor: "pointer",
                }}
              />
            </Col>
          </Row> */}
          </div>
          <div
            className="section5"
            style={{
              height: "1588px",
              width: "100%",
              backgroundColor: "#FFFFFF",
              position: "relative",
              zIndex: "1",
              padding: "120px",
              paddingTop: "430px",
            }}
          >
            <img
              src={line4}
              alt="Logo"
              style={{
                top: 300,
                left: 350,
                userSelect: "none",
                position: "absolute",

                // marginTop: "340px",
              }}
            />
            <Row>
              <Col xs="1">
                <img
                  src={logoSmall}
                  alt="Logo"
                  style={{
                    left: 0,
                    userSelect: "none",
                    marginLeft: "-50px",
                    marginRight: "50px",

                    // position: "absolute",
                    height: "24px",
                  }}
                />
              </Col>
              <Col xs="5">
                <Row>
                  <Col xs="1">
                    <p
                      style={{
                        fontSize: "18px",
                        lineHeight: "24px",
                        color: "#5468E7",
                        textAlign: "left",
                      }}
                    >
                      04
                    </p>
                  </Col>
                  <Col xs="11">
                    <p
                      style={{
                        marginLeft: "-10px",
                        fontSize: "18px",
                        lineHeight: "24px",
                        color: "#5468E7",
                        textAlign: "left",
                      }}
                    >
                      We are hiring
                    </p>
                  </Col>
                  <Col xs="12">
                    <p
                      style={{
                        fontSize: "110px",
                        lineHeight: "131.27px",
                        color: "#232340",
                        textAlign: "left",
                        marginLeft: "-5px",
                        fontWeight: "600",
                      }}
                    >
                      Jobs
                    </p>
                  </Col>
                  <Col xs="9">
                    <p
                      style={{
                        fontSize: "18px",
                        lineHeight: "32px",
                        color: "#606060",
                        textAlign: "left",
                        marginLeft: "-5px",
                        marginTop: "-60px",
                        marginRight: "-20px",
                        fontWeight: "400",
                      }}
                    >
                      Agency is a full-service agency, busy designing and
                      building beautiful digital products, brands, and
                      experiences.
                    </p>
                  </Col>
                  <Col xs="12">
                    <img
                      src={jobAvailableButton}
                      alt="Logo"
                      style={{
                        top: 60,
                        left: 10,
                        position: "absolute",
                        cursor: "pointer",
                      }}
                    />
                  </Col>
                </Row>
              </Col>
              <Col xs="6">
                <Row>
                  <Col xs="12" style={{ marginBottom: "20px" }}>
                    <div
                      style={{
                        width: "568px",
                        height: "247px",
                        borderRadius: "40px",
                        backgroundColor:
                          activeJobSection5 === 0 ? "#232340" : "#FFFFFF",
                        boxShadow: "0px 23px 50px #EDEDED",
                        padding: "64px",
                        paddingTop: "54px",
                        cursor: "pointer",
                      }}
                      onMouseEnter={() => {
                        setActiveJobSection5(0);
                      }}
                      onMouseLeave={() => {
                        setActiveJobSection5(null);
                      }}
                    >
                      <Row>
                        <Col xs="8">
                          <p
                            style={{
                              fontSize: "32px",
                              fontWeight: "500",
                              color:
                                activeJobSection5 === 0 ? "#FFFFFF" : "#232340",
                              textAlign: "left",
                              lineHeight: "40px",
                            }}
                          >
                            Graphic Designer
                          </p>
                          <p
                            style={{
                              fontSize: "18px",
                              fontWeight: "400",
                              color: "#606060",
                              textAlign: "left",
                              lineHeight: "32px",
                              marginTop: "-20px",
                            }}
                          >
                            2 years experience
                          </p>
                          <img
                            src={
                              activeJobSection5 === 0
                                ? simpleArrowLeftWhite
                                : simpleArrowLeft
                            }
                            alt="Line-1"
                            style={{
                              marginTop: "20px",
                              left: 16,
                              position: "absolute", // zIndex: "0",
                              // marginLeft: "-10%",
                              // marginBottom: "-821px",
                            }}
                          />
                        </Col>
                        {activeJobSection5 === 0 ? (
                          <Col xs="4">
                            <img
                              src={jobCard}
                              alt="Line-1"
                              style={{
                                marginTop: "-38px",
                                marginLeft: "-30px",
                                top: 0,
                                left: 0,
                                position: "absolute", // zIndex: "0",
                                // marginLeft: "-10%",
                                // marginBottom: "-821px",
                              }}
                            />
                          </Col>
                        ) : null}
                      </Row>
                    </div>
                  </Col>
                  <Col xs="12" style={{ marginBottom: "20px" }}>
                    <div
                      style={{
                        width: "568px",
                        height: "247px",
                        borderRadius: "40px",
                        backgroundColor:
                          activeJobSection5 === 1 ? "#232340" : "#FFFFFF",
                        boxShadow: "0px 23px 50px #EDEDED",
                        padding: "64px",
                        paddingTop: "54px",
                        cursor: "pointer",
                      }}
                      onMouseEnter={() => {
                        setActiveJobSection5(1);
                      }}
                      onMouseLeave={() => {
                        setActiveJobSection5(null);
                      }}
                    >
                      <Row>
                        <Col xs="8">
                          <p
                            style={{
                              fontSize: "32px",
                              fontWeight: "500",
                              color:
                                activeJobSection5 === 1 ? "#FFFFFF" : "#232340",
                              textAlign: "left",
                              lineHeight: "40px",
                            }}
                          >
                            Visual Designer
                          </p>
                          <p
                            style={{
                              fontSize: "18px",
                              fontWeight: "400",
                              color: "#606060",
                              textAlign: "left",
                              lineHeight: "32px",
                              marginTop: "-20px",
                            }}
                          >
                            2 years experience
                          </p>
                          <img
                            src={
                              activeJobSection5 === 1
                                ? simpleArrowLeftWhite
                                : simpleArrowLeft
                            }
                            alt="Line-1"
                            style={{
                              marginTop: "20px",
                              left: 16,
                              position: "absolute", // zIndex: "0",
                              // marginLeft: "-10%",
                              // marginBottom: "-821px",
                            }}
                          />
                        </Col>
                        {activeJobSection5 === 1 ? (
                          <Col xs="4">
                            <img
                              src={jobCard}
                              alt="Line-1"
                              style={{
                                marginTop: "-38px",
                                marginLeft: "-30px",
                                top: 0,
                                left: 0,
                                position: "absolute", // zIndex: "0",
                                // marginLeft: "-10%",
                                // marginBottom: "-821px",
                              }}
                            />
                          </Col>
                        ) : null}
                      </Row>
                    </div>
                  </Col>
                  <Col xs="12" style={{ marginBottom: "20px" }}>
                    <div
                      style={{
                        width: "568px",
                        height: "247px",
                        borderRadius: "40px",
                        backgroundColor:
                          activeJobSection5 === 2 ? "#232340" : "#FFFFFF",
                        boxShadow: "0px 23px 50px #EDEDED",
                        padding: "64px",
                        paddingTop: "54px",
                        cursor: "pointer",
                      }}
                      onMouseEnter={() => {
                        setActiveJobSection5(2);
                      }}
                      onMouseLeave={() => {
                        setActiveJobSection5(null);
                      }}
                    >
                      <Row>
                        <Col xs="8">
                          <p
                            style={{
                              fontSize: "32px",
                              fontWeight: "500",
                              color:
                                activeJobSection5 === 2 ? "#FFFFFF" : "#232340",
                              textAlign: "left",
                              lineHeight: "40px",
                            }}
                          >
                            Art Director
                          </p>
                          <p
                            style={{
                              fontSize: "18px",
                              fontWeight: "400",
                              color: "#606060",
                              textAlign: "left",
                              lineHeight: "32px",
                              marginTop: "-20px",
                            }}
                          >
                            2 years experience
                          </p>
                          <img
                            src={
                              activeJobSection5 === 2
                                ? simpleArrowLeftWhite
                                : simpleArrowLeft
                            }
                            alt="Line-1"
                            style={{
                              marginTop: "20px",
                              left: 16,
                              position: "absolute", // zIndex: "0",
                              // marginLeft: "-10%",
                              // marginBottom: "-821px",
                            }}
                          />
                        </Col>
                        {activeJobSection5 === 2 ? (
                          <Col xs="4">
                            <img
                              src={jobCard}
                              alt="Line-1"
                              style={{
                                marginTop: "-38px",
                                marginLeft: "-30px",
                                top: 0,
                                left: 0,
                                position: "absolute", // zIndex: "0",
                                // marginLeft: "-10%",
                                // marginBottom: "-821px",
                              }}
                            />
                          </Col>
                        ) : null}
                      </Row>
                    </div>
                  </Col>
                  <Col xs="12" style={{ marginBottom: "20px" }}>
                    <div
                      style={{
                        width: "568px",
                        height: "247px",
                        borderRadius: "40px",
                        backgroundColor:
                          activeJobSection5 === 3 ? "#232340" : "#FFFFFF",
                        boxShadow: "0px 23px 50px #EDEDED",
                        padding: "64px",
                        paddingTop: "54px",
                        cursor: "pointer",
                      }}
                      onMouseEnter={() => {
                        setActiveJobSection5(3);
                      }}
                      onMouseLeave={() => {
                        setActiveJobSection5(null);
                      }}
                    >
                      <Row>
                        <Col xs="8">
                          <p
                            style={{
                              fontSize: "32px",
                              fontWeight: "500",
                              color:
                                activeJobSection5 === 3 ? "#FFFFFF" : "#232340",
                              textAlign: "left",
                              lineHeight: "40px",
                            }}
                          >
                            Web Designer
                          </p>
                          <p
                            style={{
                              fontSize: "18px",
                              fontWeight: "400",
                              color: "#606060",
                              textAlign: "left",
                              lineHeight: "32px",
                              marginTop: "-20px",
                            }}
                          >
                            2 years experience
                          </p>
                          <img
                            src={
                              activeJobSection5 === 3
                                ? simpleArrowLeftWhite
                                : simpleArrowLeft
                            }
                            alt="Line-1"
                            style={{
                              marginTop: "20px",
                              left: 16,
                              position: "absolute", // zIndex: "0",
                              // marginLeft: "-10%",
                              // marginBottom: "-821px",
                            }}
                          />
                        </Col>
                        {activeJobSection5 === 3 ? (
                          <Col xs="4">
                            <img
                              src={jobCard}
                              alt="Line-1"
                              style={{
                                marginTop: "-38px",
                                marginLeft: "-30px",
                                top: 0,
                                left: 0,
                                position: "absolute", // zIndex: "0",
                                // marginLeft: "-10%",
                                // marginBottom: "-821px",
                                transition: "all 1s",
                              }}
                            />
                          </Col>
                        ) : null}
                      </Row>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          <div
            className="section6"
            style={{
              height: "1515px",
              backgroundColor: "#FFFFFF",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Row className="justify-content-md-center">
              <Col
                xs="10"
                style={{ backgroundColor: "#5468E7", borderRadius: "40px" }}
              >
                <img
                  src={line1}
                  alt="Line-1"
                  style={{
                    zIndex: "0",
                    top: 0,
                    left: 0,
                    position: "absolute",
                    marginLeft: "10%",
                    opacity: "0.1",
                  }}
                />
                <Row style={{ margin: "0px" }}>
                  <Col
                    xs="12"
                    style={{
                      height: "512px",
                      borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    <Row className="justify-content-md-center">
                      <Col xs="6" style={{}}>
                        <img
                          src={logoPurple}
                          alt="Line-1"
                          style={{
                            // marginTop: "-38px",
                            marginLeft: "-10px",
                            top: 128,
                            // left: 0,
                            position: "absolute", // zIndex: "0",
                            // marginLeft: "-10%",
                            // marginBottom: "-821px",
                          }}
                        />
                        <p
                          style={{
                            fontSize: "18px",
                            color: "#FFFFFF",
                            marginTop: "192px",
                          }}
                        >
                          ???? Say hello
                        </p>
                        <p
                          style={{
                            fontSize: "32px",
                            color: "#FFFFFF",
                            lineHeight: "40px",
                            marginTop: "40px",

                            letterSpacing: "-0.5px",
                            textAlign: "center",
                          }}
                        >
                          A design team building a curated marketplace for UI
                          designers.
                        </p>
                      </Col>
                    </Row>
                  </Col>
                  <Col
                    xs="6"
                    style={{
                      height: "512px",
                      borderRight: "1px solid rgba(255, 255, 255, 0.1)",
                      padding: "120px",
                      paddingTop: "110px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "64px",
                        lineHeight: "72px",
                        color: "#FFFFFF",
                        textAlign: "left",
                      }}
                    >
                      Let???s talk about your next project
                    </p>
                  </Col>
                  <Col
                    xs="6"
                    style={{
                      height: "512px",
                      borderLeft: "1px solid rgba(255, 255, 255, 0.1)",
                      padding: "120px",
                      paddingTop: "110px",
                    }}
                  >
                    <img
                      src={speechBubble}
                      alt="Line-1"
                      style={{
                        // marginTop: "-38px",
                        marginLeft: "-10px",
                        top: 110,
                        left: 130,
                        width: "100px",
                        // left: 0,
                        position: "absolute", // zIndex: "0",
                        // marginLeft: "-10%",
                        // marginBottom: "-821px",
                      }}
                    />
                    <p
                      style={{
                        fontSize: "32px",
                        lineHeight: "40px",
                        color: "#FFFFFF",
                        marginTop: "140px",
                        textAlign: "left",
                      }}
                    >
                      Invest in your designs today!
                    </p>
                  </Col>
                  <img
                    src={arrowCircleRightWhite}
                    alt="Line-1"
                    style={{
                      marginLeft: "-10px",
                      bottom: 195,
                      right: 50,
                      position: "absolute",
                      cursor: "pointer",
                    }}
                  />
                </Row>
              </Col>
            </Row>
            <Row
              className="justify-content-md-center"
              style={{ marginTop: "128px", position: "relative" }}
            >
              <img
                src={line1}
                alt="Line-1"
                style={{
                  zIndex: "0",
                  top: -130,
                  right: 0,
                  position: "absolute",
                  marginLeft: "10%",
                  opacity: "0.5",
                }}
              />
              <Col xs="6">
                <Row className="justify-content-md-center">
                  <Col xs="12">
                    <img
                      src={logo}
                      alt="Logo"
                      style={{
                        width: "191px",
                        // marginTop: "1px",
                        height: "48px",
                      }}
                    />
                  </Col>
                  <Col xs="12" style={{ marginTop: "40px" }}>
                    <p
                      style={{
                        fontSize: "18px",
                        textAlign: "center",
                        color: "#606060",
                        lineHeight: "32px",
                        fontWeight: "400",
                        // marginTop: "-40px",
                        // marginRight: "-20px",
                        // letterSpacing: "-1",
                      }}
                    >
                      Agency is a full-service agency, busy designing and
                      building beautiful digital products, brands, and
                      experiences.
                    </p>
                  </Col>

                  <Col xs="12" style={{ marginTop: "20px" }}>
                    <Row className="justify-content-md-center">
                      <Col
                        xs="auto"
                        style={{ margin: "20px", marginTop: "8px" }}
                      >
                        <p
                          style={{
                            fontSize: "18px",
                            color: "#5468E7",
                            cursor: "pointer",
                          }}
                        >
                          About
                        </p>
                      </Col>
                      <Col
                        xs="auto"
                        style={{ margin: "20px", marginTop: "8px" }}
                      >
                        <p
                          style={{
                            fontSize: "18px",
                            color: "#8B8B8B",
                            cursor: "pointer",
                          }}
                        >
                          Work
                        </p>
                      </Col>
                      <Col
                        xs="auto"
                        style={{ margin: "20px", marginTop: "8px" }}
                      >
                        <p
                          style={{
                            fontSize: "18px",
                            color: "#8B8B8B",
                            cursor: "pointer",
                          }}
                        >
                          Services
                        </p>
                      </Col>
                      <Col
                        xs="auto"
                        style={{ margin: "20px", marginTop: "8px" }}
                      >
                        <p
                          style={{
                            fontSize: "18px",
                            color: "#8B8B8B",
                            cursor: "pointer",
                          }}
                        >
                          Jobs
                        </p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col xs="12">
                <p style={{ color: "#D8D8D8", textAlign: "center" }}>
                  ____________________________________________________________________________________________________________________________________________________
                </p>
              </Col>
              <Col
                xs="12"
                style={{ paddingLeft: "165px", paddingRight: "165px" }}
              >
                <Row>
                  <Col xs="9">
                    <p
                      style={{
                        fontSize: "16px",
                        textAlign: "left",
                        color: "#ADADAD",
                      }}
                    >
                      ?? 2020, UI8 LLC.
                    </p>
                  </Col>
                  <Col xs="2">
                    <p
                      style={{
                        fontSize: "16px",
                        textAlign: "left",
                        color: "#5468E7",
                        marginLeft: "70px",
                        // cursor: "pointer",
                      }}
                    >
                      Follow us
                    </p>
                  </Col>
                  <Col
                    xs="1"
                    style={{
                      marginLeft: "-15px",
                    }}
                  >
                    <Row>
                      <Col xs="4">
                        <img
                          src={facebookFooter}
                          alt="Logo"
                          style={{
                            cursor: "pointer",
                            // marginTop: "1px",
                          }}
                        />
                      </Col>
                      <Col xs="4">
                        <img
                          src={youtubeFooter}
                          alt="Logo"
                          style={{
                            cursor: "pointer",
                            // marginTop: "1px",
                          }}
                        />
                      </Col>
                      <Col xs="4">
                        <img
                          src={instagramFooter}
                          alt="Logo"
                          style={{
                            cursor: "pointer",
                            // marginTop: "1px",
                          }}
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      ) : (
        <div
          className="App"
          style={{ backgroundColor: "#FFFFFF", overflowX: "hidden" }}
        >
          <img
            src={line1}
            alt="Line-1"
            style={{
              zIndex: "0",
              marginTop: "-20%",
              marginLeft: "40%",

              marginBottom: "-821px",
            }}
          />
          <div
            className="Header"
            style={{
              zIndex: "999",
              width: "100%",
              // marginBottom: "-64px",
              top: "0",
              paddingTop: "20px",
              height: "64px",
              padding: "10px",
              position: "absolute",
              backgroundColor: "#FFFFFF",
            }}
          >
            <Row>
              <Col xs="3">
                <img
                  src={logo}
                  alt="Logo"
                  style={{
                    width: "128px",
                    marginTop: "7px",
                    marginLeft: "20px",
                    //   height: "40px",
                    cursor: "pointer",
                  }}
                />
              </Col>
            </Row>
          </div>
          <div
            className="section1"
            style={{
              marginTop: "50px",
              paddingTop: "0px",
              padding: "30px",
              marginTop: "80px",
            }}
          >
            <Row>
              <Col xs="12" style={{ marginTop: "-10px" }}>
                <p
                  style={{
                    fontSize: "48px",
                    textAlign: "Left",
                    color: "#232340",
                    lineHeight: "56px",
                    //   letterSpacing: "-1",
                  }}
                >
                  Stand Out from the Crowd.
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    textAlign: "Left",
                    color: "#606060",
                    lineHeight: "28px",
                    fontWeight: "400",
                    marginTop: "-20px",
                    marginRight: "-20px",
                    // letterSpacing: "-1",
                  }}
                >
                  Agency is a full-service agency, busy designing and building
                  beautiful digital products, brands, and experiences.
                </p>
                <Row>
                  <Col xs="12">
                    <Button
                      style={{
                        marginLeft: "-135px",
                        marginTop: "20px",
                        width: "160px",
                        height: "56px",
                        backgroundColor: "#5468E7",
                        borderRadius: "8px",
                      }}
                    >
                      Recent Work
                    </Button>
                  </Col>
                </Row>
              </Col>
              <Col xs="8">
                <img
                  src={wall1}
                  alt="Wall1"
                  style={{
                    //   width: "924px",
                    height: "278px",
                    //   marginLeft: "-130px",
                    marginTop: "-20px",
                    // marginBottom: "15px",
                    // borderRadius: "40px",
                  }}
                />
              </Col>
            </Row>
          </div>
          <div
            className="section2"
            style={{
              height: "1670px",
              width: "100%",
              backgroundColor: "#232340",
              padding: "20px",
              position: "relative",
              paddingTop: "40px",
            }}
          >
            <Row>
              <Col xs="12">
                <Row>
                  <Col xs="2">
                    <p
                      style={{
                        fontSize: "14px",
                        lineHeight: "18px",
                        color: "#8B8B8B",
                        textAlign: "left",
                      }}
                    >
                      01
                    </p>
                  </Col>
                  <Col xs="10">
                    <p
                      style={{
                        marginLeft: "-10px",
                        fontSize: "14px",
                        lineHeight: "18px",
                        color: "#FFFFFF",
                        textAlign: "left",
                      }}
                    >
                      Who We Are
                    </p>
                  </Col>
                  <Col xs="10">
                    <p
                      style={{
                        fontSize: "40px",
                        lineHeight: "48px",
                        color: "#FFFFFF",
                        textAlign: "left",
                      }}
                    >
                      We Make Designs that Lead and Inpire.
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row style={{ marginTop: "120px" }}>
              <Col xs="12">
                <img
                  src={desktop1}
                  alt="Logo"
                  style={{
                    width: "638px",
                    marginTop: "-80px",
                    marginLeft: "-120px",
                  }}
                />
              </Col>
            </Row>
            <Row style={{ marginTop: "120px" }}>
              <Col xs="12" style={{ marginLeft: "0px" }}>
                <Row>
                  <Col xs="12">
                    <p
                      style={{
                        fontSize: "24px",
                        fontWeight: "500",
                        color: "#ffffff",
                        textAlign: "left",
                        lineHeight: "32px",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Col>
                  <Col xs="12">
                    <p
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                        color: "#8B8B8B",
                        textAlign: "left",
                        lineHeight: "28px",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nam porta sodales leo vitae vestibulum. Nullam vel posuere
                      nisi. Donec in lobortis arcu.
                    </p>
                  </Col>
                  <Col xs="12">
                    <Button
                      variant="dark"
                      style={{
                        backgroundColor: "#5468E7",
                        borderRadius: "8px",
                        fontSize: "18px",
                        height: "56px",
                        width: "160px",
                        marginTop: "20px",
                        // marginLeft: "-100px",
                        position: "absolute",
                        left: 10,
                      }}
                    >
                      Contact us
                    </Button>
                  </Col>
                </Row>
              </Col>
              <Col xs="12">
                <div
                  style={{
                    //   marginTop: "-40px",
                    top: 135,
                    position: "absolute",
                    //   right: 30,
                    backgroundColor: "#232340",
                    boxShadow: "0px 23px 50px rgba(0, 0, 0, 0.25)",
                    width: "310px",
                    height: "310px",
                    borderRadius: "500px",
                  }}
                >
                  <Row>
                    <Col xs="12">
                      <p
                        style={{
                          fontSize: "140px",
                          color: "#ffffff",
                          marginTop: "20px",
                          // lineHeight: "239px",
                        }}
                      >
                        28
                      </p>
                    </Col>
                    <Col xs="12">
                      <p
                        style={{
                          fontSize: "18px",
                          color: "#ffffff",
                          marginTop: "-170px",
                        }}
                      >
                        Lorem Ipsum
                      </p>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
          <div
            className="section3"
            style={{
              height: "1732px",
              width: "100%",
              backgroundColor: "#FFFFFF",
              position: "relative",
              padding: "20px",
              paddingTop: "40px",
              zIndex: "2",
            }}
          >
            <img
              src={line3}
              alt="Logo"
              style={{
                top: 0,
                left: 0,
                userSelect: "none",
                position: "absolute",
              }}
            />
            <Row>
              <Col xs="12">
                <Row>
                  <Col xs="2">
                    <p
                      style={{
                        fontSize: "14px",
                        lineHeight: "18px",
                        color: "#5468E7",
                        textAlign: "left",
                      }}
                    >
                      02
                    </p>
                  </Col>
                  <Col xs="10">
                    <p
                      style={{
                        marginLeft: "-10px",
                        fontSize: "14px",
                        lineHeight: "18px",
                        color: "#5468E7",
                        textAlign: "left",
                      }}
                    >
                      You may also like
                    </p>
                  </Col>
                  <Col xs="10">
                    <p
                      style={{
                        fontSize: "40px",
                        lineHeight: "48px",
                        color: "#232340",
                        textAlign: "left",
                        marginLeft: "-5px",
                        fontWeight: "600",
                      }}
                    >
                      Recent Works
                    </p>
                  </Col>
                  <Col xs="12">
                    <p
                      style={{
                        fontSize: "16px",
                        lineHeight: "28px",
                        color: "#606060",
                        textAlign: "left",
                        marginLeft: "-5px",
                        marginTop: "-20px",
                        fontWeight: "400",
                      }}
                    >
                      Agency is a full-service agency, busy designing and
                      building beautiful digital products, brands, and
                      experiences.
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row
              className="justify-content-md-center"
              style={{ marginTop: "80px" }}
            >
              <Col xs="12">
                <Row>
                  <Col xs="12">
                    <div
                      style={{
                        backgroundColor: "#FFCE79",
                        height: "355px",
                        width: "311px",
                        borderRadius: "24px",
                        position: "relative",
                      }}
                    >
                      <img
                        src={tablet1}
                        alt="Logo"
                        style={{
                          top: 40,
                          left: -60,
                          width: "448.71px",
                          userSelect: "none",
                          position: "absolute",
                        }}
                      />
                    </div>
                  </Col>
                  <Col xs="12" style={{ marginTop: "50px" }}>
                    <p
                      style={{
                        fontSize: "24px",
                        lineHeight: "32px",
                        color: "#232340",
                        letterSpacing: "-0.2px",
                        textAlign: "left",
                      }}
                    >
                      Bento 3D Illustration
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        lineHeight: "28px",
                        color: "#606060",
                        textAlign: "left",
                        // marginLeft: "-5px",
                        marginTop: "-20px",
                        fontWeight: "400",
                      }}
                    >
                      Agency is a full-service agency, busy designing and
                      building beautiful digital products, brands, and
                      experiences.
                    </p>
                    <img
                      src={arrowCircleRight}
                      alt="Logo"
                      style={{
                        //   bottom: 60,
                        //   right: -33,
                        marginLeft: "-85%",
                        left: 0,
                        userSelect: "none",
                        width: "48px",
                        marginTop: "20px",
                        marginBottom: "40px",
                        //   position: "absolute",
                        cursor: "pointer",
                      }}
                    />
                  </Col>
                </Row>
              </Col>
              <Col xs="12">
                <Row style={{ marginLeft: "-15px" }}>
                  <Col xs="12">
                    <div
                      style={{
                        backgroundColor: "#D1ECFD",
                        height: "355px",
                        width: "311px",
                        borderRadius: "24px",
                        position: "relative",
                      }}
                    >
                      <img
                        src={tablet2}
                        alt="Logo"
                        style={{
                          top: 40,
                          left: -60,
                          width: "448.71px",
                          userSelect: "none",
                          position: "absolute",
                        }}
                      />
                    </div>
                  </Col>
                  <Col xs="12" style={{ marginTop: "50px" }}>
                    <p
                      style={{
                        fontSize: "24px",
                        lineHeight: "32px",
                        color: "#232340",
                        letterSpacing: "-0.2px",
                        textAlign: "left",
                      }}
                    >
                      Bento Vol. 3
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        lineHeight: "28px",
                        color: "#606060",
                        textAlign: "left",
                        // marginLeft: "-5px",
                        marginTop: "-20px",
                        fontWeight: "400",
                        //   marginRight: "-100px",
                      }}
                    >
                      Agency is a full-service agency, busy designing and
                      building beautiful digital products, brands, and
                      experiences.
                    </p>
                    <img
                      src={arrowCircleRight}
                      alt="Logo"
                      style={{
                        //   bottom: 60,
                        //   right: -33,
                        marginLeft: "-85%",
                        left: 0,
                        userSelect: "none",
                        width: "48px",
                        marginTop: "20px",
                        marginBottom: "40px",
                        //   position: "absolute",
                        cursor: "pointer",
                      }}
                    />
                  </Col>
                </Row>
              </Col>
              <Col xs="12">
                <Button
                  variant="dark"
                  style={{
                    backgroundColor: "#5468E7",
                    borderRadius: "8px",
                    fontSize: "18px",
                    height: "46px",
                    width: "94%",
                    marginTop: "20px",

                    position: "absolute",
                    left: 10,
                  }}
                >
                  Contact us
                </Button>
              </Col>
            </Row>
          </div>
          <div
            className="section4"
            style={{
              height: "1670px",
              width: "100%",
              backgroundColor: "#232340",
              padding: "20px",
              paddingTop: "40px",
              position: "relative",
            }}
          >
            <img
              src={background3ds2}
              alt="Logo"
              style={{
                // marginRight: "-55%",
                marginTop: "-180px",
                right: 0,
                userSelect: "none",
                marginBottom: "-1052px",
                // width: "159px",
                // marginTop: "1px",
                position: "absolute",

                // marginBottom: "15px",
                // borderRadius: "40px",
                // height: "40px",
              }}
            />
            <img
              src={line2}
              alt="Logo"
              style={{
                left: 0,
                userSelect: "none",
                position: "absolute",
                height: "490px",
                marginTop: "-140px",
              }}
            />
            <Row>
              <Col xs="12">
                <Row>
                  <Col xs="2">
                    <p
                      style={{
                        fontSize: "14px",
                        lineHeight: "18px",
                        color: "#8B8B8B",
                        textAlign: "left",
                      }}
                    >
                      03
                    </p>
                  </Col>
                  <Col xs="10">
                    <p
                      style={{
                        marginLeft: "-10px",
                        fontSize: "14px",
                        lineHeight: "18px",
                        color: "#FFFFFF",
                        textAlign: "left",
                      }}
                    >
                      Folio Agency
                    </p>
                  </Col>
                  <Col xs="10">
                    <p
                      style={{
                        fontSize: "40px",
                        lineHeight: "48px",
                        color: "#FFFFFF",
                        textAlign: "left",
                        marginTop: "20px",
                      }}
                    >
                      By the Numbers.
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row style={{ marginTop: "130px" }}>
              <Col xs="12">
                <Row
                  className="justify-content-md-center"
                  style={{
                    marginLeft: "0px",
                    marginTop: "-145px",
                  }}
                >
                  <Col xs="12">
                    <p
                      style={{
                        fontSize: "140px",
                        color: "#FFFFFF",
                        lineHeight: "238.67px",
                        textAlign: "left",
                        marginTop: "-20px",
                      }}
                    >
                      40
                    </p>
                    <p
                      style={{
                        fontSize: "45px",
                        color: "#FFFFFF",
                        lineHeight: "51px",
                        textAlign: "left",
                        right: 120,
                        top: 20,
                        position: "absolute",
                      }}
                    >
                      +
                    </p>
                  </Col>
                  <Col xs="12">
                    <p
                      style={{
                        fontSize: "18px",
                        lineHeight: "24px",
                        textAlign: "left",
                        color: "#FFFFFF",
                        //   marginLeft: "20px",
                        marginTop: "-150px",
                      }}
                    >
                      Scene Object
                    </p>
                  </Col>
                  <Col xs="12">
                    <p
                      style={{
                        fontSize: "24px",
                        lineHeight: "32px",
                        textAlign: "left",
                        color: "#8B8B8B",
                        //   marginLeft: "20px",
                        marginTop: "-110px",
                        fontWeight: "400",
                      }}
                    >
                      ______________________
                    </p>
                  </Col>
                  <Col xs="12">
                    <p
                      style={{
                        fontSize: "16px",
                        lineHeight: "28px",
                        textAlign: "left",
                        fontWeight: "400",
                        color: "#8B8B8B",

                        marginTop: "-40px",
                      }}
                    >
                      Bento is the first fully editable, 3D visual design system
                      with global auto-updatable style guides built right in
                      Figma.
                    </p>
                  </Col>
                  <Col xs="12">
                    <img
                      src={downloadButton}
                      alt="Logo"
                      style={{
                        top: 30,
                        left: 15,
                        userSelect: "none",
                        position: "absolute",
                        cursor: "pointer",
                        width: "121px",
                        // height: "490px",
                        // marginTop: "-140px",
                      }}
                    />
                  </Col>
                </Row>
              </Col>
              <Col xs="12" style={{ marginTop: "80px" }}>
                <Row
                  className="justify-content-md-center"
                  style={{ marginLeft: "10px" }}
                >
                  <Col xs="12">
                    <p
                      style={{
                        fontSize: "140px",
                        color: "#FFFFFF",
                        lineHeight: "238.67px",
                        textAlign: "left",
                        marginTop: "-20px",
                      }}
                    >
                      20
                    </p>
                  </Col>
                  <Col xs="12">
                    <p
                      style={{
                        fontSize: "18px",
                        lineHeight: "24px",
                        textAlign: "left",
                        color: "#FFFFFF",
                        //   marginLeft: "20px",
                        marginTop: "-150px",
                      }}
                    >
                      Pre-build Scenes ????
                    </p>
                  </Col>
                  <Col xs="12">
                    <p
                      style={{
                        fontSize: "24px",
                        lineHeight: "32px",
                        textAlign: "left",
                        color: "#8B8B8B",
                        //   marginLeft: "20px",
                        marginTop: "-110px",
                        fontWeight: "400",
                      }}
                    >
                      ______________________
                    </p>
                  </Col>
                  <Col xs="12">
                    <p
                      style={{
                        fontSize: "16px",
                        lineHeight: "28px",
                        textAlign: "left",
                        fontWeight: "400",
                        color: "#8B8B8B",

                        marginTop: "-40px",
                      }}
                    >
                      Bento is the first fully editable, 3D visual design system
                      with global auto-updatable style guides built right in
                      Figma.
                    </p>
                  </Col>
                  <Col xs="12">
                    <img
                      src={downloadButton}
                      alt="Logo"
                      style={{
                        top: 30,
                        left: 15,
                        userSelect: "none",
                        position: "absolute",
                        cursor: "pointer",
                        width: "121px",

                        // height: "490px",
                        // marginTop: "-140px",
                      }}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
            <SimpleSlider>
              {slider.map((data) => {
                return (
                  <div style={{ paddingRight: "30px", paddingLeft: "10px" }}>
                    <img
                      src={data}
                      alt="Logo"
                      style={{
                        // top: 0,
                        // left: 25,
                        marginTop: "60px",
                        userSelect: "none",
                        // position: "absolute",
                        zIndex: "4",
                        width: "969px",
                        height: "598px",
                        // marginTop: "-140px",
                      }}
                    />
                  </div>
                );
              })}
            </SimpleSlider>
            {/* <Row
            className="justify-content-md-center"
            style={{ marginTop: "180px" }}
          >
            <Col xs="1">
              <img
                src={arrowLeft}
                alt="Logo"
                style={{
                  right: 0,
                  userSelect: "none",
                  position: "absolute",
                  // height: "490px",
                  marginTop: "340px",
                  cursor: "pointer",
                }}
              />
            </Col>
            <Col xs="10">
              <img
                src={slider1}
                alt="Logo"
                style={{
                  top: 0,
                  left: 25,
                  userSelect: "none",
                  position: "absolute",
                  zIndex: "4",
                  // height: "490px",s
                  // marginTop: "-140px",
                }}
              />
            </Col>
            <Col xs="1">
              <img
                src={arrowRight}
                alt="Logo"
                style={{
                  left: 0,
                  userSelect: "none",
                  position: "absolute",
                  marginTop: "340px",
                  cursor: "pointer",
                }}
              />
            </Col>
          </Row> */}
          </div>
          <div
            className="section5"
            style={{
              height: "1588px",
              width: "100%",
              backgroundColor: "#FFFFFF",
              position: "relative",
              zIndex: "1",
              padding: "20px",
              paddingTop: "430px",
            }}
          >
            <Row>
              <Col xs="12">
                <Row>
                  <Col xs="2">
                    <p
                      style={{
                        fontSize: "14px",
                        lineHeight: "18px",
                        color: "#5468E7",
                        textAlign: "left",
                      }}
                    >
                      04
                    </p>
                  </Col>
                  <Col xs="10">
                    <p
                      style={{
                        marginLeft: "-10px",
                        fontSize: "14px",
                        lineHeight: "18px",
                        color: "#5468E7",
                        textAlign: "left",
                      }}
                    >
                      We are hiring
                    </p>
                  </Col>
                  <Col xs="12">
                    <p
                      style={{
                        fontSize: "40px",
                        lineHeight: "48px",
                        color: "#232340",
                        textAlign: "left",

                        fontWeight: "600",
                      }}
                    >
                      Jobs
                    </p>
                  </Col>
                  <Col xs="9">
                    <p
                      style={{
                        fontSize: "16px",
                        lineHeight: "28px",
                        color: "#606060",
                        textAlign: "left",
                        marginBottom: "60px",

                        marginRight: "-20px",
                        fontWeight: "400",
                      }}
                    >
                      Agency is a full-service agency, busy designing and
                      building beautiful digital products, brands, and
                      experiences.
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col xs="6">
                <Row>
                  <Col xs="12" style={{ marginBottom: "20px" }}>
                    <div
                      style={{
                        width: "311px",
                        height: "175px",
                        borderRadius: "24px",
                        backgroundColor:
                          activeJobSection5 === 0 ? "#232340" : "#FFFFFF",
                        boxShadow: "0px 23px 50px #EDEDED",
                        padding: "45px",
                        paddingTop: "40px",
                        cursor: "pointer",
                      }}
                      onMouseEnter={() => {
                        setActiveJobSection5(0);
                      }}
                      onMouseLeave={() => {
                        setActiveJobSection5(null);
                      }}
                    >
                      <Row>
                        <Col xs="12">
                          <p
                            style={{
                              fontSize: "24px",
                              fontWeight: "500",
                              color:
                                activeJobSection5 === 0 ? "#FFFFFF" : "#232340",
                              textAlign: "left",
                              lineHeight: "32px",
                            }}
                          >
                            Graphic Designer
                          </p>
                          <p
                            style={{
                              fontSize: "16px",
                              fontWeight: "400",
                              color: "#606060",
                              textAlign: "left",
                              lineHeight: "24px",
                              marginTop: "-20px",
                            }}
                          >
                            2 years experience
                          </p>
                          <img
                            src={
                              activeJobSection5 === 0
                                ? simpleArrowLeftWhite
                                : simpleArrowLeft
                            }
                            alt="Line-1"
                            style={{
                              marginTop: "20px",
                              left: 16,
                              position: "absolute",
                              width: "10px",
                              // zIndex: "0",
                              // marginLeft: "-10%",
                              // marginBottom: "-821px",
                            }}
                          />
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col xs="12" style={{ marginBottom: "20px" }}>
                    <div
                      style={{
                        width: "311px",
                        height: "175px",
                        borderRadius: "24px",
                        backgroundColor:
                          activeJobSection5 === 1 ? "#232340" : "#FFFFFF",
                        boxShadow: "0px 23px 50px #EDEDED",
                        padding: "45px",
                        paddingTop: "40px",
                        cursor: "pointer",
                      }}
                      onMouseEnter={() => {
                        setActiveJobSection5(1);
                      }}
                      onMouseLeave={() => {
                        setActiveJobSection5(null);
                      }}
                    >
                      <Row>
                        <Col xs="12">
                          <p
                            style={{
                              fontSize: "24px",
                              fontWeight: "500",
                              color:
                                activeJobSection5 === 1 ? "#FFFFFF" : "#232340",
                              textAlign: "left",
                              lineHeight: "32px",
                            }}
                          >
                            Visual Designer
                          </p>
                          <p
                            style={{
                              fontSize: "16px",
                              fontWeight: "400",
                              color: "#606060",
                              textAlign: "left",
                              lineHeight: "24px",
                              marginTop: "-20px",
                            }}
                          >
                            2 years experience
                          </p>
                          <img
                            src={
                              activeJobSection5 === 1
                                ? simpleArrowLeftWhite
                                : simpleArrowLeft
                            }
                            alt="Line-1"
                            style={{
                              marginTop: "20px",
                              width: "10px",
                              left: 16,
                              position: "absolute", // zIndex: "0",
                              // marginLeft: "-10%",
                              // marginBottom: "-821px",
                            }}
                          />
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col xs="12" style={{ marginBottom: "20px" }}>
                    <div
                      style={{
                        width: "311px",
                        height: "175px",
                        borderRadius: "24px",
                        backgroundColor:
                          activeJobSection5 === 2 ? "#232340" : "#FFFFFF",
                        boxShadow: "0px 23px 50px #EDEDED",
                        padding: "45px",
                        paddingTop: "40px",
                        cursor: "pointer",
                      }}
                      onMouseEnter={() => {
                        setActiveJobSection5(2);
                      }}
                      onMouseLeave={() => {
                        setActiveJobSection5(null);
                      }}
                    >
                      <Row>
                        <Col xs="12">
                          <p
                            style={{
                              fontSize: "24px",
                              fontWeight: "500",
                              color:
                                activeJobSection5 === 2 ? "#FFFFFF" : "#232340",
                              textAlign: "left",
                              lineHeight: "32px",
                            }}
                          >
                            Art Director
                          </p>
                          <p
                            style={{
                              fontSize: "16px",
                              fontWeight: "400",
                              color: "#606060",
                              textAlign: "left",
                              lineHeight: "24px",
                              marginTop: "-20px",
                            }}
                          >
                            2 years experience
                          </p>
                          <img
                            src={
                              activeJobSection5 === 2
                                ? simpleArrowLeftWhite
                                : simpleArrowLeft
                            }
                            alt="Line-1"
                            style={{
                              marginTop: "20px",
                              left: 16,
                              width: "10px",
                              position: "absolute", // zIndex: "0",
                              // marginLeft: "-10%",
                              // marginBottom: "-821px",
                            }}
                          />
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col xs="12" style={{ marginBottom: "20px" }}>
                    <div
                      style={{
                        width: "311px",
                        height: "175px",
                        borderRadius: "24px",
                        backgroundColor:
                          activeJobSection5 === 3 ? "#232340" : "#FFFFFF",
                        boxShadow: "0px 23px 50px #EDEDED",
                        padding: "45px",
                        paddingTop: "40px",
                        cursor: "pointer",
                      }}
                      onMouseEnter={() => {
                        setActiveJobSection5(3);
                      }}
                      onMouseLeave={() => {
                        setActiveJobSection5(null);
                      }}
                    >
                      <Row>
                        <Col xs="12">
                          <p
                            style={{
                              fontSize: "24px",
                              fontWeight: "500",
                              color:
                                activeJobSection5 === 3 ? "#FFFFFF" : "#232340",
                              textAlign: "left",
                              lineHeight: "32px",
                            }}
                          >
                            Web Designer
                          </p>
                          <p
                            style={{
                              fontSize: "16px",
                              fontWeight: "400",
                              color: "#606060",
                              textAlign: "left",
                              lineHeight: "24px",
                              marginTop: "-20px",
                            }}
                          >
                            2 years experience
                          </p>
                          <img
                            src={
                              activeJobSection5 === 3
                                ? simpleArrowLeftWhite
                                : simpleArrowLeft
                            }
                            alt="Line-1"
                            style={{
                              width: "10px",
                              marginTop: "20px",
                              left: 16,
                              position: "absolute", // zIndex: "0",
                              // marginLeft: "-10%",
                              // marginBottom: "-821px",
                            }}
                          />
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          <div
            className="section6"
            style={{
              height: "1515px",
              backgroundColor: "#FFFFFF",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Row className="justify-content-md-center">
              <Col
                xs="10"
                style={{
                  backgroundColor: "#5468E7",
                  borderRadius: "24px",
                  marginLeft: "8.5%",
                }}
              >
                <img
                  src={line1}
                  alt="Line-1"
                  style={{
                    zIndex: "0",
                    top: 0,
                    left: 0,
                    position: "absolute",
                    marginLeft: "10%",
                    opacity: "0.1",
                  }}
                />
                <Row style={{}}>
                  <Col
                    xs="12"
                    style={{
                      height: "412px",
                      borderLeft: "1px solid rgba(255, 255, 255, 0.1)",
                      padding: "10px",
                      paddingTop: "110px",
                    }}
                  >
                    <img
                      src={speechBubble}
                      alt="Line-1"
                      style={{
                        // marginTop: "-38px",
                        marginLeft: "-10px",
                        top: 110,
                        left: 130,
                        width: "100px",
                        // left: 0,
                        position: "absolute", // zIndex: "0",
                        // marginLeft: "-10%",
                        // marginBottom: "-821px",
                      }}
                    />
                    <p
                      style={{
                        fontSize: "18px",
                        lineHeight: "28px",
                        color: "#FFFFFF",
                        marginTop: "140px",
                        textAlign: "center",
                      }}
                    >
                      ???? Say hello
                    </p>
                    <p
                      style={{
                        fontSize: "18px",
                        lineHeight: "28px",
                        color: "#FFFFFF",
                        marginTop: "40px",
                        textAlign: "center",
                      }}
                    >
                      A design team building a curated marketplace for UI
                      designers.
                    </p>
                  </Col>
                  <Col
                    xs="12"
                    style={{
                      height: "412px",
                      borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                      padding: "10px",
                      paddingTop: "110px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "32px",
                        lineHeight: "40px",
                        color: "#FFFFFF",
                        textAlign: "center",
                      }}
                    >
                      Let???s talk about your next project
                    </p>
                    <Button
                      // variant="dark"
                      style={{
                        backgroundColor: "#FFFFFF",
                        borderRadius: "8px",
                        fontSize: "18px",
                        height: "46px",
                        width: "94%",
                        marginTop: "20px",
                        color: "#5468E7",
                        borderColor: "#FFFFFF",
                        position: "absolute",
                        left: 10,
                      }}
                    >
                      Contact us
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      )}
    </>
  );
}

export default Dashboard;
ReactDOM.render(Dashboard, document.querySelector("#root"));
