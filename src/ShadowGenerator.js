import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from './Header';

function copyStyle() {
    var elm = document.getElementById("styleContent");
    if(window.getSelection) {
      var selection = window.getSelection();
      var range = document.createRange();
      range.selectNodeContents(elm);
      selection.removeAllRanges();
      selection.addRange(range);
      document.execCommand("Copy");
      
    } 
    var copied = document.getElementById("copied");
    copied.className="show"; 
    copied.innerHTML = "Copied!"
    setTimeout(function() {
        copied.className="hide";
    }, 1500);
  }

function ShadowGenerator() {
    const [Horizontal, setHorizontal] = useState(10);
    const [Verticale, setVerticale] = useState(10);
    const [Blur, setBlur] = useState(10)
    const [Color, setColor] = useState("black")
    const [BgColor, setBgColor] = useState("blueviolet")
    const [SpreadRadius, setSpreadRadius] = useState(10)
    const [CheckOn, setCheckOn] = useState(false);
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
                                    <Col lg="12">
                                        <div className="switch">
                                            <label>
                                                Outline
                        <input type="checkbox" checked={CheckOn} onChange={() => setCheckOn(!CheckOn)} />
                                                <span className="lever"></span>
                        Inset
                  </label>
                                        </div>
                                    </Col>
                                </div>
                                <div className="form-group row align-items-center b-bottom pb-2">
                                    <Col md={5}>
                                        <label>Horizontal Length</label>
                                    </Col>
                                    <Col md={{ span: 4, offset: 3 }}>
                                        <input type="text" id="" value={Horizontal} onChange={(e) => setHorizontal(e.target.value)} />
                                        <span>Px</span>
                                    </Col>
                                    <div className="col-sm-12 col-md-12 col-lg-12">
                                        <input type="range" id="" min="-200" max="200" value={Horizontal} onChange={(e) => setHorizontal(e.target.value)} />
                                    </div>
                                </div>

                                <div className="form-group row align-items-center b-bottom pb-2">
                                    <Col md={5}>
                                        <label>Verticale Length</label>
                                    </Col>
                                    <Col md={{ span: 4, offset: 3 }}>
                                        <input type="text" id="" value={Verticale} onChange={(e) => setVerticale(e.target.value)} />
                                        <span>Px</span>
                                    </Col>
                                    <div className="col-sm-12 col-md-12 col-lg-12">
                                        <input type="range" id="" min="-200" max="200" value={Verticale} onChange={(e) => setVerticale(e.target.value)} />
                                    </div>
                                </div>

                                <div className="form-group row align-items-center b-bottom pb-2">
                                    <Col md={5}>
                                        <label>Blur</label>
                                    </Col>
                                    <Col md={{ span: 4, offset: 3 }}>
                                        <input type="text" id="" value={Blur} onChange={(e) => setBlur(e.target.value)} />
                                        <span>Px</span>
                                    </Col>
                                    <div className="col-sm-12 col-md-12 col-lg-12">
                                        <input type="range" id="" min="-200" max="200" value={Blur} onChange={(e) => setBlur(e.target.value)} />
                                    </div>
                                </div>

                                <div className="form-group row align-items-center b-bottom pb-2">
                                    <Col md={5}>
                                        <label>Spread Radius</label>
                                    </Col>
                                    <Col md={{ span: 4, offset: 3 }}>
                                        <input type="text" id="" value={SpreadRadius} onChange={(e) => setSpreadRadius(e.target.value)} />
                                        <span>Px</span>
                                    </Col>
                                    <div className="col-sm-12 col-md-12 col-lg-12">
                                        <input type="range" id="" min="-200" max="200" value={SpreadRadius} onChange={(e) => setSpreadRadius(e.target.value)} />
                                    </div>
                                </div>

                                <div className="form-group row align-items-center b-bottom pb-2">
                                    <div className="col col-md-4 col-lg-4">
                                        <label>Shadow Color</label>
                                    </div>
                                    <div className="col col-md-4 col-lg-4">
                                        <input className="float-right" type="color" id="" value={Color} onChange={(e) => setColor(e.target.value)} />
                                    </div>
                                    <div className="col col-md-4 col-lg-4">
                                        <input className="float-right" type="text" id="" value={Color} onChange={(e) => setColor(e.target.value)} />
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
                            <div className="box" style={{ boxShadow: `${CheckOn ? "inset" : ""} ${Horizontal}px ${Verticale}px ${Blur}px ${SpreadRadius}px ${Color}`, backgroundColor: `${BgColor}` }}>
                            <button className="btn btn-light iconSave" onClick={copyStyle}><span className="material-icons">content_copy</span></button>
                            <span id="copied"></span>
                                <p id="styleContent">
                                    -webkit-box-shadow: {Horizontal}px {Verticale}px {Blur}px {SpreadRadius}px {Color}; <br />
                -moz-box-shadow:  {Horizontal}px {Verticale}px {Blur}px {SpreadRadius}px {Color}; <br />
                box-shadow:  {Horizontal}px {Verticale}px {Blur}px {SpreadRadius}px {Color};
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </main >
        </div>
    )
}
export default ShadowGenerator;