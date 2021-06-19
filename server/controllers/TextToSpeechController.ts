import { Request, Response } from "express";
import {v4 as uuidv4} from 'uuid';

import TextToSpeechModel from "../models/TextToSpeechModel";
import WatsonTextToSpeechService from '../services/WatsonTextToSpeechService'

class TextToSpeechController {

    async createText(request: Request, response: Response) {
        const { text } = request.body

        let uuid = uuidv4();
        await WatsonTextToSpeechService(text, uuid)
        const textSpeech = await TextToSpeechModel.create({ text, filename: uuid })

        response.json(textSpeech)
    }

    async getTexts(request: Request, response: Response) {
        const items = await TextToSpeechModel.findAll()
        response.json(items)
    }
}

export default TextToSpeechController;