import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

const uploadOnCloudinary = async function (localFilePath) {
  try {
    if (!localFilePath) return NULL;

    const response = cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    console.log("File has been uploaded on cloudinary");
    console.log(response.url);
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
