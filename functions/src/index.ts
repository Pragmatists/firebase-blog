import * as functions from 'firebase-functions';

export const serverTime = functions
    .region("europe-west1")
    .https.onRequest((request, response) => {
        response.json({serverTime: new Date()})
    });
