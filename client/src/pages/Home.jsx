import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


const Home =()=>{
    return(
        <div>
          <Container >  
                <Row>
                <Col className="pt-5">
            <h1 className="mb-5" style={{ color: "#6f42c1", textAlign: "center",fontSize:"4rem" }}>Take your time</h1>
            <h1 className="mb-5" style={{  color: "#9b59b6", textAlign: "center", fontSize: "3rem"  }}>And Learn From</h1>
            <h1 className="mb-7" style={{ color: "#6c757d", textAlign: "center", fontSize: "2rem" }}>Anywhere</h1>
          </Col> 
                  <Col>
                  <Image src="https://png.pngtree.com/png-clipart/20220125/original/pngtree-online-education-png-image_7217827.png" fluid />
                  </Col>
                </Row>
                </Container>


                
        </div>
    )
}

export default Home;