import React, { useState, useContext } from 'react';
import axios from 'axios';

import BaseUrl from '../../BaseUrl';

import { AddNewItemContext } from "../../contexts/AddNewItemContext";

import {
  Grid,
  Typography,
  TextField,
  Button,
  CircularProgress
} from '@material-ui/core'

import { Alert } from "@material-ui/lab";

interface AlertStatus {
  errorStatus: boolean;
  message: string;
  hidden: boolean;
}

const errorAlertStatus = {
  errorStatus: true,
  message: "Ops... não foi possível realizar o cadastro. Tente novamente.",
  hidden: false
}

const successAlertStatus = {
  errorStatus: false,
  message: "Cadastro realizado com sucesso.",
  hidden: false
}

const RegisterText = () => {

  const [text, setText] = useState("Olá, meu nome é Mateus");
  const [alertStatus, setAlertStatus] = useState<AlertStatus>({
    errorStatus: false,
    message: "",
    hidden: true
  })
  const [loading, setLoading] = useState<boolean>(false)

  const { setAddNewItemContext } = useContext(AddNewItemContext)

  function handleTextChange(event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.target.value)
  }

  async function handleSubmit() {

    setLoading(true)
    try {
      const textSpeechItem = await axios.post(`${BaseUrl}texttospeech`, {
        text: text
      })

      setAddNewItemContext(textSpeechItem.data)
      
      setText("")
      setAlertStatus(successAlertStatus)
    } catch (error) {
      console.log(error)
      setAlertStatus(errorAlertStatus)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Grid
      container
      item
      direction="column"
      xs={4}
    >

      <Typography
        variant="h6"
        style={{
          marginBottom:30
        }}
      >
        Comentário
      </Typography>
      <TextField
        multiline
        rows={6}
        defaultValue={text}
        variant="outlined"
        onChange={handleTextChange}
      />
      <Button
        variant="contained"
        color={ loading ? "default" : "primary"}
        style={{
          marginTop:20
        }}
        disabled={ loading }
        onClick={handleSubmit}
      >
        {loading ?
          <CircularProgress /> :
          "Cadastrar"
        }
      </Button>

      {!alertStatus.hidden &&
        (<Alert 
          severity={ alertStatus.errorStatus ? "error" : "success"}
          style={{ marginTop:20 }}
        >
          { alertStatus.message }
        </Alert>)
      }
    </Grid>
  )
}

export default RegisterText