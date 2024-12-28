import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

const uploadOnCloudinary = async function (localFilePath) {
  try {
    if (!localFilePath) return NULL;

    const response = cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    console.log("File has been uploaded on cloudinary");
    console.log((await response).url); // Need to use await as response is a promise
    // I am only being able to unlink if i am awaiting the response before it like in the console what im doing rn.
    fs.unlinkSync(localFilePath);
    //The issue arises because cloudinary.uploader.upload is an asynchronous operation that returns a promise, and you need to ensure that the promise is resolved before calling fs.unlinkSync(localFilePath)
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath);
    return null;
  }
};

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export { uploadOnCloudinary };
