import React from 'react'
import Details from './Components/Details/Details'
import Main from './Components/Main/Main'
import { Grid } from '@material-ui/core'
import useStyles from './Styles'
const App = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid className={classes.grid} container spacing={0} alignContent="center" justifyContent="center" style={{height: '100vh'}}>
        <Grid item xs={12} sm={4}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Details title="Expense"/>
        </Grid>
      </Grid>
    </div>
  )
}

export default App;