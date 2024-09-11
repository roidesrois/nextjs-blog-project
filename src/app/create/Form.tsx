"use client";

import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  CircularProgress,
  Snackbar,
  Alert,
  SnackbarCloseReason,
} from "@mui/material";
import { Editor } from "../../components/Editor";
import { useRouter } from "next/navigation";

interface ISnackBarState {
  open: boolean;
  state: "error" | "success";
  message: string;
}

export const Form = () => {
  const router = useRouter();
  const [snackbarState, setSnackbarState] = useState<ISnackBarState>({
    open: false,
    state: "error",
    message: "",
  });
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (image) {
      formData.append("image", image);
    }

    try {
      const response = await fetch(`/api/blogs`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSnackbarState({
          open: true,
          state: "success",
          message: "Article has been created",
        });

        setTitle("");
        setContent("");
        setImage(null);
        router.push("/");
        router.refresh();
      } else {
        setSnackbarState({
          open: true,
          state: "error",
          message: "Failed to create article",
        });
      }
    } catch (error) {
      console.log(error);
      setSnackbarState({
        open: true,
        state: "error",
        message: "Something went wrong.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleClose = (
    _: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbarState((prevState) => ({ ...prevState, open: false }));
  };

  return (
    <>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
        <TextField
          label="Blog Title"
          variant="outlined"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={{ mb: 3, backgroundColor: "#fff" }}
        />

        <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
          Content
        </Typography>
        <Editor
          theme="snow"
          value={content}
          onChange={setContent}
          placeholder="Tell your story..."
          style={{
            width: "100%",
            backgroundColor: "#fff",
            borderRadius: "8px",
            padding: "1rem",
          }}
        />

        <Box sx={{ mt: 3, mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Upload Cover Image
          </Typography>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files?.[0] || null)}
            style={{
              padding: "0.5rem",
              backgroundColor: "#fff",
              borderRadius: "8px",
            }}
          />

          <Button
            sx={{
              float: "right",
              backgroundColor: "#1976d2",
              "&:hover": {
                backgroundColor: "#115293",
              },
              color: "white",
            }}
            variant="contained"
            type="submit"
            disabled={loading}
            endIcon={
              loading ? <CircularProgress size={20} color="inherit" /> : null
            }
          >
            {loading ? "Publishing..." : "Publish"}
          </Button>
        </Box>
      </Box>
      <Snackbar
        open={snackbarState.open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={snackbarState.state}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackbarState.message}
        </Alert>
      </Snackbar>
    </>
  );
};
