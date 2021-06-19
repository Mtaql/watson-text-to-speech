import fs from 'fs';
import TextToSpeechV1 from 'ibm-watson/text-to-speech/v1';
import { IamAuthenticator } from 'ibm-watson/auth';

const watsonConfigJson = require('../config/watson.json')

const WatsonTextToSpeechService = async (text: string, filename: string) => {

  const { apikey, serviceUrl, synthesizeParams } = watsonConfigJson;

  const textToSpeech = new TextToSpeechV1({
    authenticator: new IamAuthenticator({
      apikey: apikey,
    }),
    serviceUrl: serviceUrl,
  });
  
  await textToSpeech.synthesize({ ...synthesizeParams, text})
    .then(response => {
      
      return textToSpeech.repairWavHeaderStream(response.result as any);
    })
    .then(buffer => {
      fs.writeFileSync(`files/${filename}.wav`, buffer);
    })
    .catch(err => {
      console.log('error:', err);
    });
}

export default WatsonTextToSpeechService