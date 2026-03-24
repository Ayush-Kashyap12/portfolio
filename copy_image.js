import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const src = 'C:\\Users\\kashy\\.gemini\\antigravity\\brain\\5ae7c6a4-daef-47f4-b4be-36b347550150\\profile_jpg_1774294449408.png';
const destDir = path.join(__dirname, 'public');
const dest = path.join(destDir, 'profile.jpg');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

fs.copyFileSync(src, dest);
console.log('Image copied successfully!');
