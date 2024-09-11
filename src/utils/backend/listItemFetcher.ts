import connectMongo from "./connect-mongo";
import { Article } from "../../app/api/_schema/Article.model";

export async function getListItem(id: string) {
  try {
    await connectMongo();

    const articles = await Article.findById(id);

    return articles;
  } catch (error) {
    throw Error(error as string);
  }
}
