import connectMongo from "./connect-mongo";
import { Article } from "../../app/api/_schema/Article.model";

export const getArticlesList = async (page = 0, limit = 100) => {
  try {
    await connectMongo();

    const articles = await Article.find()
      .skip(page * limit)
      .limit(limit)
      .exec();

    return articles;
  } catch (error) {
    throw Error(error as string);
  }
};
