import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid2";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Author } from "../components/Author";
import dayjs from "dayjs";
import "dayjs/locale/en";
import Link from "next/link";
import { Editor } from "./Editor";
import { Box } from "@mui/material";

interface IProps {
  tabIndex: number;
  id: string;
  title: string;
  imageUrl: string;
  content: string;
  createdOn: string;
}

export function Article({
  id,
  tabIndex,
  title,
  imageUrl,
  content,
  createdOn,
}: IProps) {
  return (
    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={id}>
      <Link style={{ textDecoration: "none" }} href={`/${id}`}>
        <Card
          variant="outlined"
          tabIndex={tabIndex}
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: 0,
            height: "100%",
            backgroundColor: "background.paper",
            borderRadius: "12px",
            overflow: "hidden",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            "&:hover": {
              transform: "scale(1.03)",
              boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)",
              cursor: "pointer",
            },
            "&:focus-visible": {
              outline: "3px solid",
              outlineColor: "hsla(210, 98%, 48%, 0.5)",
              outlineOffset: "2px",
            },
          }}
        >
          <CardMedia
            loading="lazy"
            component="img"
            alt={title}
            image={imageUrl}
            sx={{
              borderBottom: "1px solid",
              borderColor: "divider",
              borderRadius: "12px 12px 0 0",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          />
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              padding: "16px",
              flexGrow: 1,
              backgroundColor: "#fafafa",

              "&:last-child": {
                paddingBottom: "16px",
              },
            }}
          >
            <Typography
              variant="caption"
              color="text.secondary"
              gutterBottom
              sx={{ textDecoration: "none" }}
            >
              {dayjs(createdOn).format("MMMM D, YYYY")}
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{
                fontWeight: "bold",
                color: "#333",
                letterSpacing: "0.5px",
                textDecoration: "none",
              }}
            >
              {title}
            </Typography>
            <Box
              sx={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 2,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "normal",
                color: "#666",
              }}
            >
              <Editor value={content} readOnly theme="bubble" />
            </Box>
          </CardContent>
          <Author
            author={{
              name: "Ruslan Salimbayoff",
              avatar: "/static/images/avatar/1.jpg",
            }}
          />
        </Card>
      </Link>
    </Grid>
  );
}
