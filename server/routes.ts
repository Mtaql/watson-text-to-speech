import express from 'express';

import TextToSpeechController from './controllers/TextToSpeechController';

const routes = express.Router();

const TextToSpeech = new TextToSpeechController();

routes.post("/texttospeech", TextToSpeech.createText)

routes.get("/texttospeech", TextToSpeech.getTexts)

export default routes;