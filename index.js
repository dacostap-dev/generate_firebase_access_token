import { Auth } from "googleapis";
import dotenv from 'dotenv';
dotenv.config();

//ENCODE_FCM_KEY is json converted base64
//https://codebeautify.org/json-to-base64-converter

const base64EncodedKey = process.env?.ENCODE_FCM_KEY ?? "";

if (!base64EncodedKey) {
    throw new Error("La variable de entorno ENCODE_FCM_KEY no está configurada.");
}

const credential = JSON.parse(
    Buffer.from(base64EncodedKey ?? "", "base64").toString()
);

const MESSAGING_SCOPE =
    "https://www.googleapis.com/auth/firebase.messaging";

const SCOPES = [MESSAGING_SCOPE];

const jwtClient = new Auth.JWT(
    credential.client_email,
    undefined,
    credential.private_key,
    SCOPES,
    undefined
);

try {
    const oAuthToken = await jwtClient.authorize();
    console.log("Autenticación exitosa:", oAuthToken);
    console.log("Access Token:", oAuthToken.access_token);
} catch (error) {
    console.error("Error al autorizar JWT:", error);
}

