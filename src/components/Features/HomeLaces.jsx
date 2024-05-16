import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { useSpring, animated } from "react-spring";
import { useNavigate } from "react-router-dom";
import laceimg from "../../assets/img/shoelaces/animal3.jpg";
import "../Featured-Home.css";

const Homelaces = () => {
    const [hovered, setHovered] = useState(false);
    const navigate = useNavigate();

    const laceAnimation = useSpring({
        transform: `scale(${hovered ? 1.03 : 1}) rotate(${hovered ? 3 : 0}deg)`,
    });

    return (
        <Container>
            <Row>
                <Col lg="6" sm="12">
                    <div className="d-flex flex-column justify-content-center align-items-end h-100">
                        <div className="home-box-div-text">
                            <h2>Revive Your Kicks</h2>
                            <p>Transform your sneakers with these stretchy, animal-printed shoelaces,
                                bringing your kicks to life with a touch of jungle flair.
                                Channel your inner Jersey and step out with style in every stride!</p>
                        </div>
                        <button className="home-buy-button2" onClick={() => navigate('/accessories/shoelaces/animal-print-laces')}>Buy Now!</button>
                    </div>
                </Col>

                <Col lg="6" sm="12">
                    <animated.div
                        style={{ ...laceAnimation }}
                        className="home-box-div-img"
                        onClick={() => navigate('/accessories/shoelaces/animal-print-laces')}
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                    >
                        <img src={laceimg} alt="displayBox" style={{
                            width: "100%",
                            maxHeight: "400px",
                            objectFit: "cover",
                            cursor: "pointer",
                        }} />
                    </animated.div>
                </Col>
            </Row>
        </Container>
    );
};

export default Homelaces;
