const fs = require("fs");
const path = require("path");

const folderPath = "./"; // Specify the path to your folder containing images
const prefix = "image-";

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }

  files.forEach((file, index) => {
    const extname = path.extname(file);
    const oldPath = path.join(folderPath, file);
    const newPath = path.join(folderPath, `${prefix}${index + 1}${extname}`);

    fs.rename(oldPath, newPath, (renameErr) => {
      if (renameErr) {
        console.error(`Error renaming ${file}:`, renameErr);
      } else {
        console.log(`${file} renamed to ${newPath}`);
      }
    });
  });
});
