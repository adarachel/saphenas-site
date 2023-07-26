import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  meta,
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <img src="https://i.pinimg.com/564x/42/b1/6a/42b16a64f1b6462130d17efbeab579a4.jpg" alt="description" width="350" height="400"/>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">How We Operate</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', marginTop: '-3em' }}> 
              At 'Saphena's Luxury Enterprise', our services are individually tailored to the needs of each client.<br></br><br></br> Our designs are always impressive, owning to our attention to detail emphatic understanding of our clients' tastes and ambitions, as well as giving due consideration to time and budget constraints.<br></br><br></br> We work closely with our clients because we recognize that different clients have different values and lifestyle and all these have to be factored into the design.<br></br><br></br> These insights guide us in our quest to create an environment that is both functional and aesthetically pleasing.</p>
            </div>
          </Col>
        </Row>
        <img src="https://i.pinimg.com/564x/6b/17/1f/6b171f6586ef20ebd818797b74d23f64.jpg" alt="description" width="320" height="420"/>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Meet the CEO</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="7" className="d-flex align-items-center">
          <div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', marginTop: '-3em' }}> 
              Nkem Kimberly Onyemehian is a highly sought-after certified Interior Designer and the Chief Executive Officer of Saphena's Luxury Enterprise.<br></br><br></br> 
              Her specialty is creating sophisticated and elegant spaces that reflect her exceptional vision and attention to detail. Her creativity and passion for design are evident in every project she undertakes, earning her the loyalty of discerning clients.<br></br>
              <br></br>With her innovative approach and unwavering commitment to client satisfaction, she continues to redefine the boundaries of luxury interior design, leaving an indelible mark on the industry.</p>
            </div>
          </Col>
        </Row>
        {/* <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Work Timline</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Skills</h3>
          </Col>
          <Col lg="7">
            {skills.map((data, i) => {
              return (
                <div key={i}>
                  <h3 className="progress-title">{data.name}</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${data.value}%`,
                      }}
                    >
                      <div className="progress-value">{data.value}%</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">services</h3>
          </Col>
          <Col lg="7">
            {services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row> */}
      </Container>
    </HelmetProvider>
  );
};