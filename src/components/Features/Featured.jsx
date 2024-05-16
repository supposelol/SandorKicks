import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { useSpring, animated } from "react-spring";
import { useNavigate } from "react-router-dom";
import featured1 from "../../assets/img/featured/yeezy1test.jpg";
import featured1hover from "../../assets/img/featured/yeezy2.jpeg";
import featured2 from "../../assets/img/featured/travis1test.jpeg";
import featured2hover from "../../assets/img/featured/travis2test.jpeg";
import featured3 from "../../assets/img/featured/eraser1.jpeg";
import featured3hover from "../../assets/img/featured/eraser2.jpeg";
import featured4 from "../../assets/img/featured/cleaningkit1.jpeg";
import featured4hover from "../../assets/img/featured/cleaningkit2.jpeg";
import "../../components/Featured-Home.css";

const Featured = () => {
    const [hovered1, setHovered1] = useState(false);
    const [hovered2, setHovered2] = useState(false);
    const [hovered3, setHovered3] = useState(false);
    const [hovered4, setHovered4] = useState(false);
    const navigate = useNavigate();

    const imageAnimation1 = useSpring({
        transform: hovered1 ? "scale(1.05)" : "scale(1)",
    });
    const imageAnimation2 = useSpring({
        transform: hovered2 ? "scale(1.05)" : "scale(1)",
    });
    const imageAnimation3 = useSpring({
        transform: hovered3 ? "scale(1.1)" : "scale(1)",
    });
    const imageAnimation4 = useSpring({
        transform: hovered4 ? "scale(1.1)" : "scale(1)",
    });

    return (
        <Container>
            <Row>
                <Col lg="5" sm="12" xs="12">
                    <animated.div
                        className="animated-img"
                        onClick={() => navigate('/shoes/adidas/yeezy')}
                        style={{ ...imageAnimation1, marginTop: "20px" }}
                        onMouseEnter={() => setHovered1(true)}
                        onMouseLeave={() => setHovered1(false)}
                    >
                        <img src={hovered1 ? featured1hover : featured1} alt="featured2"
                            style={{
                                width: "100%",
                                height: "500px",
                                objectFit: "cover",
                            }} />
                        <div className="title1">Zebra Yeezys</div>
                    </animated.div>
                </Col>
                <Col lg="4" sm="8" xs="12">
                    <animated.div
                        className="animated-img"
                        onClick={() => navigate('/shoes/nike/travis-scott-dunk')}
                        style={{ ...imageAnimation2, marginTop: "20px" }}
                        onMouseEnter={() => setHovered2(true)}
                        onMouseLeave={() => setHovered2(false)}
                    >
                        <img
                            src={hovered2 ? featured2hover : featured2} alt="featured1"
                            style={{
                                width: "100%",
                                height: "500px",
                                objectFit: "cover",
                            }} />
                        <div className="title1">Travis Scott Dunks</div>
                    </animated.div>
                </Col>
                <Col lg="3" sm="4" xs="12">
                    <Row>
                        <Col lg="12" sm="12" xs="6">
                            <animated.div
                                className="animated-img"
                                onClick={() => navigate('/accessories/cleaning/crep-eraser')}
                                style={{ ...imageAnimation3, marginTop: "20px" }}
                                onMouseEnter={() => setHovered3(true)}
                                onMouseLeave={() => setHovered3(false)}
                            >
                                <img
                                    src={hovered3 ? featured3hover : featured3} alt="featured3"
                                    style={{
                                        width: "100%",
                                        height: "240px",
                                        objectFit: "cover"
                                    }} />
                                <div className="title2">Crep Eraser</div>
                            </animated.div>
                        </Col>
                        <Col lg="12" sm="12" xs="6">
                            <animated.div
                                className="animated-img"
                                onClick={() => navigate('/accessories/cleaning/crep-cleaning-kit')}
                                style={{ ...imageAnimation4, marginTop: "20px" }}
                                onMouseEnter={() => setHovered4(true)}
                                onMouseLeave={() => setHovered4(false)}
                            >
                                <img
                                    src={hovered4 ? featured4hover : featured4} alt="featured4"
                                    style={{
                                        width: "100%",
                                        height: "240px",
                                        objectFit: "cover"
                                    }} />
                                <div className="title2">Crep Kit</div>
                            </animated.div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Featured;