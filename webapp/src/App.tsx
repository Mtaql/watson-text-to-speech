import React from 'react';
import AddNewItemProvider from './contexts/AddNewItemContext'

import {
  Card,
  Grid
} from '@material-ui/core'

import ItemList from './components/ItemList';
import RegisterText from './components/forms/RegisterText';

const App = () => {

  return (
    <Card
      style={{
        width: 900,
        margin: "auto",
        marginTop: "20vh"
      }}
    >
      <AddNewItemProvider>

        <Grid
          container
          spacing={3}
          style={{
            margin:50
          }}
        >
          <RegisterText />

          <Grid
            container
            item
            direction="column"
            xs={8}
          >
            <ItemList />
          </Grid>
        </Grid>
      </AddNewItemProvider>
    </Card>
  );
}

export default App;
