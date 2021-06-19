import React, { useState, useEffect, useContext} from 'react';

import { Grid, Typography } from '@material-ui/core';
import Item, {TextToSpeechItem} from './Item';
import BaseUrl from '../BaseUrl';

import axios from 'axios';

import { AddNewItemContext } from "../contexts/AddNewItemContext";

const ItemList = () => {

    const [items, setItems] = useState<TextToSpeechItem[]>([]);
    const { addNewItemContext } = useContext(AddNewItemContext)

    useEffect(() => {
        axios.get(`${BaseUrl}texttospeech`)
            .then(response => {
                setItems(response.data)
            })
    }, [])

    useEffect(() => {
        if (addNewItemContext !== null) {

            const { text, filename}  = addNewItemContext
            let newItems = [...items];
            newItems.push({
                text,
                filename
            })
            setItems(newItems)
        }
    }, [addNewItemContext])

    function generateItems() {
        return items.map((item, index) => (
            <Item
                key={index}
                text={item.text}
                filename={item.filename}
            />
        ))
    }

    return (
        <Grid item>
            <Typography
                variant="h6"
                style={{
                    marginBottom:30
                }}
            >
                Comentários
            </Typography>

            {generateItems()}
        </Grid>
    )
}

export default ItemList;