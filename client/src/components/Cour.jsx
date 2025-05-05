import { Card, Container, Button } from "react-bootstrap";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { delCour } from "../JS/actions/courAction";
import EditCour from "./EditCour";

const Cour = ({ cour }) => {
  const [showDetails, setShowDetails] = useState(false);
  const dispatch= useDispatch()
  const handleDelete=()=>{

    dispatch(delCour(cour._id))
  }

  return (
    <Container className="d-flex justify-content-center my-4">
      <Card style={{ width: "30rem" }} className="shadow-sm p-3">
        <Card.Header
          style={{
            backgroundColor: "#6f42c1",
            color: "white",
            fontWeight: "bold",
            fontSize: "1.5rem",
            textAlign: "center",
            borderRadius: "0.5rem 0.5rem 0 0",
          }}
        >
          {cour.title}
        </Card.Header>
        <Card.Body className="text-center">
          <Card.Subtitle className="mb-3 text-muted">
            Level: {cour.level}
          </Card.Subtitle>

          {showDetails && (
            <Card.Text className="mb-3" style={{ color: "#6c757d" }}>
              {cour.content}
            </Card.Text>
          )}

<div className="d-flex flex-column align-items-center mt-3">
  <Button
    style={{
      backgroundColor: "#6f42c1",
      borderColor: "#6f42c1",
      borderRadius: "2rem",
      padding: "0.5rem 1.8rem",
      fontWeight: "500",
      fontSize: "1rem",
      width: "60%",
    }}
    onClick={() => setShowDetails(!showDetails)}
  >
    {showDetails ? "Hide Details" : "Show Details"}
  </Button>

  <div className="d-flex justify-content-center gap-4 mt-3">
  <Button
  style={{
    backgroundColor: "#dc3545",
    borderColor: "#dc3545",
    borderRadius: "2rem",
    padding: "0.5rem 1.5rem",
    fontWeight: "500",
    minWidth: "100px",
  }}
  variant="danger"
  onClick={() => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      handleDelete();
    }
  }}
>
  Delete
</Button>
    <EditCour cour={cour}/>
  </div>
</div>


        </Card.Body>
      </Card>
    </Container>
  );
};

export default Cour;
