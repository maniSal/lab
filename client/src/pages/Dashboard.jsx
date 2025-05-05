import React, { useEffect } from "react";
import ListUsers from "../components/ListUsers";
import { useDispatch } from "react-redux";
import { getUser } from "../JS/actions/userAction";
import { Container, Row, Col, Card } from "react-bootstrap";


const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <Container className="py-5">
      <Row className="justify-content-center mb-4">
        <Col md={8}>
          <Card className="shadow p-4">
            <h2 className="text-center mb-4" style={{ color: "#6f42c1" }}>
              Admin Dashboard
            </h2>
            <ListUsers />
       
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
