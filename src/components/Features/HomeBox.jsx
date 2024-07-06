import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { useSpring, animated } from "react-spring";
import { useNavigate } from "react-router-dom";
import boxpic from "../../assets/img/box/box4.jpg";
import "../Featured-Home.css";

const Homebox = () => {
    const [hovered, setHovered] = useState(false);
    const navigate = useNavigate();

    const boxAnimation = useSpring({
        transform: `scale(${hovered ? 1.03 : 1}) rotate(${hovered ? -1 : 0}deg)`,
    });

    return (
        <Container>
            <Row>
                <Col lg="6" sm="12">
                    <animated.div
                        style={{ ...boxAnimation }}
                        className="home-box-div-img"
                        onClick={() => navigate('/accessories/Display%20Box/display-box')}
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                    >
                        <img src={boxpic} alt="displayBox" style={{
                            width: "100%",
                            maxHeight: "400px",
                            objectFit: "cover",
                            cursor: "pointer",
                        }} />
                    </animated.div>
                </Col>
                <Col lg="6" sm="12">
                    <div className="d-flex flex-column justify-content-center align-items-end h-100">
                        <div className="home-box-div-text">
                            <h2 id="home-box-title">Organize Your Kicks</h2>
                            <p>Organize and showcase your favorite sneakers with transparent shoe box storage for clear visibility.
                                If you want your kicks safe and clean, this display box is your perfect choice!</p>
                        </div>
                        <button className="home-buy-button" onClick={() => navigate('/accessories/Display%20Box/display-box')}>Buy Now!</button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Homebox;