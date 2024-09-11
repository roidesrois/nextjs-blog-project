import connectMongo from "../../../utils/backend/connect-mongo";
import { Article } from "../_schema/Article.model";
import { v4 as uuidv4 } from "uuid";
import * as Minio from "minio";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await connectMongo();

    const minioClient = new Minio.Client({
      endPoint: process.env.MINIO_URL as string,
      port: 443,
      useSSL: true,
      accessKey: process.env.ACCESS_KEYL as string,
      secretKey: process.env.SECRET_KEY as string,
    });

    const formData = await req.formData();
    const file = formData.get("image") as File;

    const buffer = await file.arrayBuffer();

    const fileName = `${uuidv4()}-${file.name}`;

    await minioClient.putObject(
      process.env.BUCKET_NAME as string,
      fileName,
      Buffer.from(buffer),
      file.size
    );

    const article = new Article({
      title: formData.get("title"),
      content: formData.get("content"),
      imageUrl: `https://${process.env.MINIO_URL}/${
        process.env.BUCKET_NAME as string
      }/${fileName}`,
    });

    const savedArticle = await article.save();
    return NextResponse.json(savedArticle, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error }, { status: 400 });
  }
}
