import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import {
  services,
} from "../../content_option";


export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Our Services </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>

          <Row className="sec_sp">
          {/* <Col lang="5">
            <h3 className="color_sec py-4">services</h3>
          </Col> */}
          <Col lg="7">
            {services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title" style={{ fontFamily: 'Cinzel Decorative, cursive', fontSize: '48px', fontWeight: '600' }}>{data.title}</h5>
                  <p className="service_desc" style={{ fontFamily: 'Space Mono, monospace', fontWeight: '700', fontStyle: 'italic', marginTop: '2em' }}>{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>
    </Row>


        {/* <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={data.img} alt="" />
                <div className="content">
                  <p>{data.description}</p>
                  <a href={data.link}>view project</a>
                </div>
              </div>
            );
          })}
        </div> */}
      </Container>
    </HelmetProvider>
  );
};