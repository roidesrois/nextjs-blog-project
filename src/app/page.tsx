import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Container from "@mui/material//Container";
import { Article } from "../components/Article";
import { IArticle } from "@/models";
import Header from "@/components/Header";
import { getArticlesList } from "../utils/backend/listFetcher";

export const revalidate = 0;

export default async function Page() {
  const articles = (await getArticlesList()) as IArticle[];

  return (
    <>
      <Header />
      <Container
        sx={{
          flexGrow: "1",
          paddingBottom: "80px",
        }}
      >
        <Box
          sx={{ display: "flex", flexDirection: "column", gap: 2, py: "25px" }}
        >
          <Box>
            <Typography variant="h1" gutterBottom mt={2}>
              Featured Posts
            </Typography>
          </Box>

          {articles.length > 0 ? (
            <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
              {articles.map((article, index) => (
                <Article
                  key={article._id}
                  tabIndex={index}
                  id={article._id}
                  title={article.title}
                  imageUrl={article.imageUrl}
                  content={article.content}
                  createdOn={article.createdOn.toString()}
                />
              ))}
            </Grid>
          ) : (
            <Typography variant="h6" textAlign="center" mt={4}>
              No articles found. Please check back later.
            </Typography>
          )}
        </Box>
      </Container>
    </>
  );
}
