require('dotenv').config();
const cloudinary = require('cloudinary').v2;

 cloudinary.config({
     cloud_name: 'djkttdllp',
     api_key: '133199978988633',
     api_secret: 'kW3-oV_BZYOkaN6mFIW28GJUUko'
 });

module.exports = cloudinary;












// import { v2 as cloudinary } from 'cloudinary';
// import fs from "fs"

// // cloudinary.config({
// //     cloud_name: 'djkttdllp',
// //     api_key: '133199978988633',
// //     api_secret: 'kW3-oV_BZYOkaN6mFIW28GJUUko'
// // });

// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET
// });

// const uploadOnCloudinary = async (localFilePath) => {
//     try {
//         if (!localFilePath) return null
//         //upload the file on cloudinary
//         const response = await cloudinary.uploader.upload(localFilePath,{
//             resource_type: "auto"
//         })
//         // file has been uploaded successfull
//         //console.log("file is uploaded on cloudinary ", response.url);
//         fs.unlinkSync(localFilePath)
//         return response;

//     } catch (error) {
//         fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
//         return null;
//     }
// }



// export { uploadOnCloudinary }