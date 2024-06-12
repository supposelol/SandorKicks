import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { useTransition, animated } from "react-spring";
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
    const [hovered, setHovered] = useState(null);
    const navigate = useNavigate();

    const transitions = (hoveredIndex, img1, img2) => {
        const isHovered = hovered === hoveredIndex;
        return useTransition(isHovered, {
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
            config: { duration: 300 },
        });
    };

    const renderImages = (hoveredIndex, img1, img2) => {
        const transition = transitions(hoveredIndex, img1, img2);
        return transition((style, item) =>
            item ? (
                <animated.img
                    src={img2}
                    style={{ ...style, position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }}
                    alt={`featured${hoveredIndex}hover`}
                />
            ) : (
                <animated.img
                    src={img1}
                    style={{ ...style, position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }}
                    alt={`featured${hoveredIndex}`}
                />
            )
        );
    };

    return (
        <Container>
            <Row>
                <Col lg="5" sm="12" xs="12">
                    <div
                        className="animated-img"
                        onClick={() => navigate('/shoes/adidas/yeezy')}
                        onMouseEnter={() => setHovered(1)}
                        onMouseLeave={() => setHovered(null)}
                        style={{ marginTop: "20px", position: "relative", height: "500px" }}
                    >
                        {renderImages(1, featured1, featured1hover)}
                        <div className="title1">Zebra Yeezys</div>
                    </div>
                </Col>
                <Col lg="4" sm="8" xs="12">
                    <div
                        className="animated-img"
                        onClick={() => navigate('/shoes/nike/travis-scott-dunk')}
                        onMouseEnter={() => setHovered(2)}
                        onMouseLeave={() => setHovered(null)}
                        style={{ marginTop: "20px", position: "relative", height: "500px" }}
                    >
                        {renderImages(2, featured2, featured2hover)}
                        <div className="title1">Travis Scott Dunks</div>
                    </div>
                </Col>
                <Col lg="3" sm="4" xs="12">
                    <Row>
                        <Col lg="12" sm="12" xs="6">
                            <div
                                className="animated-img"
                                onClick={() => navigate('/accessories/cleaning/crep-eraser')}
                                onMouseEnter={() => setHovered(3)}
                                onMouseLeave={() => setHovered(null)}
                                style={{ marginTop: "20px", position: "relative", height: "240px" }}
                            >
                                {renderImages(3, featured3, featured3hover)}
                                <div className="title1">Crep Eraser</div>
                            </div>
                        </Col>
                        <Col lg="12" sm="12" xs="6">
                            <div
                                className="animated-img"
                                onClick={() => navigate('/accessories/cleaning/crep-cleaning-kit')}
                                onMouseEnter={() => setHovered(4)}
                                onMouseLeave={() => setHovered(null)}
                                style={{ marginTop: "20px", position: "relative", height: "240px" }}
                            >
                                {renderImages(4, featured4, featured4hover)}
                                <div className="title1">Crep Kit</div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Featured;