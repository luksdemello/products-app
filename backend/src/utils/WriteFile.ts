import { resolve } from 'path';
import { writeFileSync } from 'fs';
import { randomBytes } from 'crypto';

class WriteFile {
  private folderPath = resolve(__dirname, '..', '..', 'tmp');

  upload(base64: string, imageName: string): string {
    const imageNameHash = randomBytes(16).toString('hex');
    const fileName = `${imageNameHash}-${imageName}`;
    const filePath = `${this.folderPath}/${fileName}`;

    writeFileSync(filePath, base64, 'base64');

    return fileName;
  }
}

const writeFile = new WriteFile();

export { writeFile };
