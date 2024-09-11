import { Container, Typography } from "@mui/material";
import { Form } from "./Form";

const CreatePost = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        backgroundColor: "#f7f7f7",
        borderRadius: "8px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        padding: "2rem",
        mt: 5,
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        textAlign="center"
        sx={{ fontWeight: "bold" }}
      >
        Create a New Blog Post
      </Typography>
      <Form />
    </Container>
  );
};

export default CreatePost;
