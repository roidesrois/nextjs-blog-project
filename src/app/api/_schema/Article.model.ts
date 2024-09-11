import { Schema, model, models } from "mongoose";
import { IArticle } from "../.././../models";

const articleSchema = new Schema<IArticle>({
  title: {
    type: String,
  },

  content: {
    type: String,
    required: true,
  },

  imageUrl: {
    type: String,
    required: true,
  },

  createdOn: {
    type: Date,
    default: Date.now,
  },
});

export const Article =
  models.Article || model<IArticle>("Article", articleSchema);
