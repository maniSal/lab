import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Card, Row, Col } from "react-bootstrap";
import { getAllCour } from "../JS/actions/courAction";
import ListCour from "../components/ListCour";

const Profile = () => {
  const dispatch = useDispatch();
  const cours = useSelector((state) => state.courReducer.cours);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    dispatch(getAllCour());
  }, [dispatch]);

  return (
    <Container className="py-5">
      {/* Header Section */}
      <div
        className="text-center mb-5 p-4"
        style={{
          backgroundColor: "#f8f9fa",
          borderRadius: "1rem",
          boxShadow: "0 0 10px rgba(0,0,0,0.05)",
        }}
      >
        <h1 style={{ color: "#6f42c1", fontWeight: "700" }}>
          Welcome, {user.name}
        </h1>
        <p className="text-muted" style={{ fontSize: "1.1rem" }}>
          Manage your profile and view your courses
        </p>
      </div>

      {/* Profile Info Card */}
      <Row className="justify-content-center mb-4">
        <Col md={8}>
          <Card className="shadow-sm p-4" style={{ borderRadius: "1rem" }}>
            <h4 style={{ color: "#9b59b6" }} className="mb-3">Profile Information</h4>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
          </Card>
        </Col>
      </Row>

      {/* Course List */}
      <Row className="justify-content-center">
        <Col md={10}>
          <h4
            className="text-center mb-3"
            style={{ color: "#6f42c1", fontWeight: "600" }}
          >
            Your Courses
          </h4>
          <ListCour cours={cours} />
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
