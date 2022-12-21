import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathToPublicKey = path.join(__dirname, "..", "id_rsa_pub.pem");
const pathToPrivateKey = path.join(__dirname, "..", "id_rsa_priv.pem");

export const PUB_KEY = fs.readFileSync(pathToPublicKey, "utf8");
export const PRIV_KEY = fs.readFileSync(pathToPrivateKey, "utf8");
