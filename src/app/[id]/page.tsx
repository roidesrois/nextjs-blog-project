import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { Editor } from "../../components/Editor";
import { IArticle } from "@/models";
import dayjs from "dayjs";
import Image from "next/image";
import { Container } from "@mui/material";
import { getListItem } from "../../utils/backend/listItemFetcher";

interface IProps {
  params: { id: string };
}

export default async function Article({ params }: IProps) {
  const article = (await getListItem(params.id)) as IArticle;

  return (
    <Container maxWidth="md" sx={{ marginTop: 8 }}>
      <Box sx={{ p: 4 }}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            {article.title}
          </Typography>
          <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
            <Avatar src="path_to_avatar_image.jpg" alt="Author" />
            <Box ml={2}>
              <Typography variant="body1">Ruslan Salimoff</Typography>
              <Typography variant="body2" color="text.secondary">
                {dayjs(article.createdOn).format("MMMM D, YYYY")}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            position: "relative",
            height: "400px",
            mb: 4,
          }}
        >
          <Image
            priority
            src={article.imageUrl}
            alt={article.title}
            fill
            style={{
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        </Box>
        <Editor value={article.content} readOnly theme="bubble" />
      </Box>
    </Container>
  );
}
