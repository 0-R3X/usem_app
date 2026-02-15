// upload-selected-events.js
// node upload-selected-events.js event12

require("dotenv").config();
const path = require("path");
const fs = require("fs");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

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

  const relative = path.relative(LOCAL_ASSETS_ROOT, fullPath); 
  const dirName = path.dirname(relative); 
  const fileName = path.basename(relative);

  // Clean file base name for public_id
  const baseName = path.parse(fileName).name; 
  const cleanId = baseName
    .replace(/\s+/g, "_") // spaces → underscore
    .replace(/[()]/g, ""); // remove parentheses  → "1_3"

  // Cloudinary folder: prefix with "assets/"
  const folder = path.posix.join("assets", dirName.replace(/\\/g, "/"));

  // Tags for organization/search (optional)
  const topLevelFolder = dirName.split(path.sep)[0] || "root";
  const tags = ["assets", topLevelFolder];

  return {
    folder,
    public_id: cleanId,
    relativePath: relative,
    tags,
  };
}

async function uploadEventFolder(eventFolder) {
  const eventPath = path.join(LOCAL_ASSETS_ROOT, eventFolder);

  if (!fs.existsSync(eventPath)) {
    console.warn(`⚠️  Folder not found: ${eventPath}`);
    return;
  }

  const files = getFilesRecursively(eventPath).filter((f) =>
    /\.(jpe?g|png|webp)$/i.test(f)
  );

  if (files.length === 0) {
    console.log(`ℹ️  No image files found in ${eventFolder}, skipping.`);
    return;
  }

  console.log(`\n📂 Uploading folder "${eventFolder}" (${files.length} image(s))...\n`);

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
        overwrite: false, // 🔒 don't overwrite existing assets
      });

      console.log("   ✅ Uploaded:", res.secure_url);
    } catch (err) {
      // If asset already exists and overwrite:false, Cloudinary may throw
      console.error("   ❌ Error:", err.message);
    }
  }
}

async function main() {
  // Folders passed via CLI: node upload-selected-events.js event10 event11
  const foldersFromCli = process.argv.slice(2);

  if (foldersFromCli.length === 0) {
    console.log(
      "Usage: node upload-selected-events.js event10 event11\n" +
        "Specify one or more event folders from public/assets."
    );
    process.exit(0);
  }

  console.log("🚀 Starting Cloudinary upload for folders:", foldersFromCli);

  for (const folderName of foldersFromCli) {
    await uploadEventFolder(folderName);
  }

  console.log("\n🎉 Done uploading selected event folders!\n");
}

main().catch((err) => {
  console.error("Unexpected error:", err);
});
