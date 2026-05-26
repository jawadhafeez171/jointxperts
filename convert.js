const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = path.join(__dirname, 'public');

fs.readdir(dir, (err, files) => {
  if (err) throw err;
  
  files.forEach(file => {
    const ext = path.extname(file).toLowerCase();
    if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
      const inputPath = path.join(dir, file);
      const outputPath = path.join(dir, `${path.parse(file).name}.webp`);
      
      sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath)
        .then(() => {
          console.log(`Converted ${file} to WebP.`);
          // Delete original file to save space and force updates in codebase
          fs.unlinkSync(inputPath);
        })
        .catch(err => console.error(`Error converting ${file}:`, err));
    }
  });
});
