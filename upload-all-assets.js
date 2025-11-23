// upload-all-assets.js
require("dotenv").config();
const path = require("path");
const fs = require("fs");
const cloudinary = require("cloudinary").v2;

// 1. Configure Cloudinary from .env
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// 2. Root folder of your local assets
const LOCAL_ASSETS_ROOT = path.join(__dirname, "public", "assets");

// Helper: recursively get all files inside a directory
function getFilesRecursively(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files = files.concat(getFilesRecursively(fullPath));
    } else {
      files.push(fullPath);
    }
  }

  return files;
}

// Build Cloudinary upload params from a local file path
function buildUploadParams(fullPath) {
  // Example: fullPath = /.../public/assets/event3/1 (3).jpg
  const relative = path.relative(LOCAL_ASSETS_ROOT, fullPath); // "event3/1 (3).jpg"

  const dirName = path.dirname(relative); // "event3"
  const fileName = path.basename(relative); // "1 (3).jpg"

  // Clean file base name for public_id
  const baseName = path.parse(fileName).name; // "1 (3)"
  const cleanId = baseName
    .replace(/\s+/g, "_") // spaces → underscore
    .replace(/[()]/g, ""); // remove parentheses

  // Cloudinary folder: prefix with "assets/"
  // so dirName "event3" becomes "assets/event3"
  const folder = path.posix.join("assets", dirName.replace(/\\/g, "/"));

  // Tags: you can customize this; here we add "assets" + top-level folder
  const topLevelFolder = dirName.split(path.sep)[0] || "root";
  const tags = ["assets", topLevelFolder];

  return {
    folder,
    public_id: cleanId,
    relativePath: relative,
    tags,
  };
}

// Upload all folders inside LOCAL_ASSETS_ROOT
async function uploadAllAssets() {
  if (!fs.existsSync(LOCAL_ASSETS_ROOT)) {
    console.error(`❌ Assets root does not exist: ${LOCAL_ASSETS_ROOT}`);
    process.exit(1);
  }

  const entries = fs.readdirSync(LOCAL_ASSETS_ROOT, { withFileTypes: true });

  // Only process directories (folders) in /assets
  const folders = entries.filter((e) => e.isDirectory()).map((e) => e.name);

  if (folders.length === 0) {
    console.log("⚠️ No folders found in assets.");
    return;
  }

  console.log("🚀 Starting Cloudinary upload for folders:", folders, "\n");

  for (const folderName of folders) {
    const folderPath = path.join(LOCAL_ASSETS_ROOT, folderName);

    const files = getFilesRecursively(folderPath).filter((f) =>
      /\.(jpe?g|png|webp)$/i.test(f)
    );

    console.log(`\n📂 Uploading folder "${folderName}" (${files.length} image(s))...\n`);

    for (const fullPath of files) {
      const params = buildUploadParams(fullPath);

      console.log(
        `➡️  Uploading ${params.relativePath} → ${params.folder}/${params.public_id}`
      );

      try {
        const res = await cloudinary.uploader.upload(fullPath, {
          folder: params.folder,
          public_id: params.public_id,
          tags: params.tags,
        });

        console.log("   ✅ Uploaded:", res.secure_url);
      } catch (err) {
        console.error("   ❌ Error:", err.message);
      }
    }
  }

  console.log("\n🎉 Done uploading all assets folders!\n");
}

// Run
uploadAllAssets().catch((err) => {
  console.error("Unexpected error:", err);
});
