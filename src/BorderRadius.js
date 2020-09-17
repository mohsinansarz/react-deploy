import React, { useState } from 'react';
import { Col, Container, Row, Form } from 'react-bootstrap';
import Header from './Header';

function copyStyle() {
    var elm = document.getElementById("styleContent");
    if (window.getSelection) {
        var selection = window.getSelection();
        var range = document.createRange();
        range.selectNodeContents(elm);
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand("Copy");

    }
    var copied = document.getElementById("copied");
    copied.className = "show";
    copied.innerHTML = "Copied!"
    setTimeout(function () {
        copied.className = "hide";
    }, 1500);
}

function BorderRadius() {
    const [TopLeft, setTopLeft] = useState(0);
    const [TopRight, setTopRight] = useState(0);
    const [BottomLeft, setBottomLeft] = useState(0)
    const [BottomRight, setBottomRight] = useState(0)
    const [BorderWidth, setBorderWidth] = useState(0)
    const [BorderColor, setBorderColor] = useState("black")
    const [Solid, setSolid] = useState("solid")
    const [BgColor, setBgColor] = useState("blueviolet")
    return (
        <div className="contact">
            <header>
                <Header />
            </header>
            <main>
                <Container className="pt-5 mt-4">
                    <Row className="text-left align-items-center justify-content-center h-vh">
                        <Col lg={4}>
                            <form action="#">
                                <div className="form-group row align-items-center b-bottom pb-2">
                                    <Col md={5}>
                                        <label>Top Left</label>
                                    </Col>
                                    <Col md={{ span: 4, offset: 3 }}>
                                        <input type="text" id="" value={TopLeft} onChange={(e) => setTopLeft(e.target.value)} />
                                        <span>Px</span>
                                    </Col>
                                    <div className="col-sm-12 col-md-12 col-lg-12">
                                        <input type="range" id="" min="0" max="200" value={TopLeft} onChange={(e) => setTopLeft(e.target.value)} />
                                    </div>
                                </div>
                                <div className="form-group row align-items-center b-bottom pb-2">
                                    <Col md={5}>
                                        <label>Top Right</label>
                                    </Col>
                                    <Col md={{ span: 4, offset: 3 }}>
                                        <input type="text" id="" value={TopRight} onChange={(e) => setTopRight(e.target.value)} />
                                        <span>Px</span>
                                    </Col>
                                    <div className="col-sm-12 col-md-12 col-lg-12">
                                        <input type="range" id="" min="0" max="200" value={TopRight} onChange={(e) => setTopRight(e.target.value)} />
                                    </div>
                                </div>
                                <div className="form-group row align-items-center b-bottom pb-2">
                                    <Col md={5}>
                                        <label>Bottom Left</label>
                                    </Col>
                                    <Col md={{ span: 4, offset: 3 }}>
                                        <input type="text" id="" value={BottomLeft} onChange={(e) => setBottomLeft(e.target.value)} />
                                        <span>Px</span>
                                    </Col>
                                    <div className="col-sm-12 col-md-12 col-lg-12">
                                        <input type="range" id="" min="0" max="200" value={BottomLeft} onChange={(e) => setBottomLeft(e.target.value)} />
                                    </div>
                                </div>
                                <div className="form-group row align-items-center b-bottom pb-2">
                                    <Col md={5}>
                                        <label>Bottom Right</label>
                                    </Col>
                                    <Col md={{ span: 4, offset: 3 }}>
                                        <input type="text" id="" value={BottomRight} onChange={(e) => setBottomRight(e.target.value)} />
                                        <span>Px</span>
                                    </Col>
                                    <div className="col-sm-12 col-md-12 col-lg-12">
                                        <input type="range" id="" min="0" max="200" value={BottomRight} onChange={(e) => setBottomRight(e.target.value)} />
                                    </div>
                                </div>


                                <div className="form-group row align-items-center b-bottom pb-2">
                                    <Col md={5}>
                                        <label>Border Width</label>
                                    </Col>
                                    <Col md={{ span: 4, offset: 3 }}>
                                        <input type="text" id="" value={BorderWidth} onChange={(e) => setBorderWidth(e.target.value)} />
                                        <span>Px</span>
                                    </Col>
                                    <div className="col-sm-12 col-md-12 col-lg-12">
                                        <input type="range" id="" min="0" max="200" value={BorderWidth} onChange={(e) => setBorderWidth(e.target.value)} />
                                    </div>
                                </div>

                                <div className="form-group row align-items-center b-bottom pt-3 pb-3">
                                <Col md={5}>
                                        <label>Border Style</label>
                                    </Col>
                                    <Col md={{ span: 4, offset: 3 }}>
                                    <Form.Control as="select" value={Solid} className="float-right text-right" onChange={(e) => setSolid(e.target.value)}>
                                        <option>solid</option>
                                        <option>dotted</option>
                                        <option>dashed</option>
                                        <option>double</option>
                                        <option>groove</option>
                                        <option>ridge</option>
                                        <option>inset</option>
                                        <option>outset</option>
                                        <option>inherit</option>
                                        <option>hidden</option>
                                        <option>none</option>
                                    </Form.Control>
                                    </Col>
                                </div>

                                <div className="form-group row align-items-center b-bottom pb-2">
                                    <div className="col col-md-4 col-lg-4">
                                        <label>Border Color</label>
                                    </div>
                                    <div className="col col-md-4 col-lg-4">
                                        <input className="float-right" type="color" id="" value={BorderColor} onChange={(e) => setBorderColor(e.target.value)} />
                                    </div>
                                    <div className="col col-md-4 col-lg-4">
                                        <input className="float-right" type="text" id="" value={BorderColor} onChange={(e) => setBorderColor(e.target.value)} />
                                    </div>
                                </div>

                                <div className="form-group row align-items-center b-bottom pb-2">
                                    <div className="col col-md-4 col-lg-4">
                                        <label>Box Color</label>
                                    </div>
                                    <div className="col col-md-4 col-lg-4">
                                        <input className="float-right" type="color" id="" value={BgColor} onChange={(e) => setBgColor(e.target.value)} />
                                    </div>
                                    <div className="col col-md-4 col-lg-4">
                                        <input className="float-right" type="text" id="" value={BgColor} onChange={(e) => setBgColor(e.target.value)} />
                                    </div>
                                </div>

                            </form>
                        </Col>
                        <Col md={{ span: 5, offset: 1 }}>
                            <div className="box" style={{ borderRadius: `${TopLeft}px ${TopRight}px ${BottomRight}px ${BottomLeft}px`, backgroundColor: `${BgColor}`, border: `${BorderWidth}px ${Solid} ${BorderColor}` }}>
                                <button className="btn btn-light iconSave" onClick={copyStyle}><span className="material-icons">content_copy</span></button>
                                <span id="copied"></span>
                                <p id="styleContent">
                                    -webkit-border-radius: {TopLeft}px  {TopRight}px {BottomLeft}px {BottomRight}px; <br />
                                -moz-border-radius: {TopLeft}px  {TopRight}px {BottomLeft}px {BottomRight}px; <br />
                                border-radius: {TopLeft}px  {TopRight}px {BottomLeft}px {BottomRight}px; <br />
                                border: {BorderWidth}px {Solid}  {BorderColor};
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </main >
        </div>
    )
}
export default BorderRadius;