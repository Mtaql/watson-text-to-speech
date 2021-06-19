import { Grid, Typography, Button } from "@material-ui/core";
import { BaseFilesUrl } from '../BaseUrl';

export interface TextToSpeechItem {
    text: string;
    filename: string;
}

const Item = ({ text, filename }: TextToSpeechItem) => {

    function playAudio() {
        const audio = new Audio(BaseFilesUrl + filename + '.wav')
        audio.play()
    }

    return (
        <Grid
            item
            container
            direction="row"
            style={{marginBottom:30}}
        >
            <Grid item xs={6}>
                <Typography
                    style={{ wordWrap: "break-word" }}
                >
                    { text }
                </Typography>
            </Grid>

            <Grid item xs={3}>
                <Button variant="outlined" onClick={playAudio}>
                    Ouvir
                </Button>
            </Grid>
        </Grid>
    )
}

export default Item;