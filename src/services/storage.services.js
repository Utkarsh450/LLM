    const ImageKit = require("imagekit");
    const mongoose = require("mongoose")

    const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT, // e.g., https://ik.imagekit.io/your_id
    });

    async function uploadFiles(file) {
        return new Promise((res, rej)=>{
        imagekit.upload({
            file: file.buffer,
            fileName: new mongoose.Types.ObjectId().toString(),
            folder: "/files"
        }, (error, result) => {
            if (error) {
                rej(error);
            } else {
                res(result);
            }
        });
    })
    }

    module.exports = uploadFiles;
