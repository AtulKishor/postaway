import fs from "fs";
import path from "path";

export const getUploadedImage =  (req, res) => {
    // Extract the wildcard parameter
    const fileName = req.params[0];
  
    // Assuming the image file is located in the same directory as your server file
    const imagePath = path.join("uploads", fileName);
  
    // Check if the file exists
    if (fs.existsSync(imagePath)) {
      // Set the Content-Type header to indicate the image format (Not mandatory)
      // res.setHeader("Content-Type", "image/jpeg");
  
      // Set the Content-Disposition header to make the image downloadable (Not mandatory)
      res.setHeader("Content-Disposition", `attachment; filename="${fileName}"`);
  
      // Create a readable stream from the file and pipe it to the response
      const stream = fs.createReadStream(imagePath); //mandatory for files
      stream.pipe(res); //Mandatory for files
    } else {
      // If the file is not found, return a 404 Not Found
      res.status(404).send({ error: "File not found" });
    }
  };