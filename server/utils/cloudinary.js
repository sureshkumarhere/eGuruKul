import { v2 as cloudinary } from 'cloudinary';
import { dotenv } from 'dotenv';


dotenv.config({});



cloudinary.config({
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
});



export const uploadMedia = async(file) => {
    try{
        const UploadResponse = await cloudinary.uploader.upload(file, {
            resourse_type : "auto",
        });

        return UploadResponse;
    }
    catch (error) {
        console.error("Error uploading media to cloudinary:", error);
    }
}

// we created the functions for deleting the media files as well as video files from the cloudinary 

export const deleteMediaFromCloudinary = async (publicId) => {
  try {
    await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    console.log(error);
  }
};

export const deleteVideoFromCloudinary = async (publicId) => {
    try {
        await cloudinary.uploader.destroy(publicId,{resource_type:"video"});
    } catch (error) {
        console.log(error);
        
    }
}

