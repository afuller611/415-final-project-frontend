import React from 'react';
import Logo from './logo.png'
import { Grid, Typography, Tabs, Tab, makeStyles } from '@material-ui/core'
import TestApplication from './TestApplication'
import AddApplication from './AddApplication'

const useStyles = makeStyles({
  indicator: {
    backgroundColor: "#96D098"
  }
})

const App = (props) => {

  const [tabValue, setTabValue] = React.useState(0)
  const classes = useStyles({ ...props });

  return (
    <Grid container justify="center" alignItems="flex-start" alignContent="flex-start" style={{ height: "100vh", padding: "20px 10px" }}>
      <Grid container item justify="center" xs={12} style={{ marginBottom: 20 }}>
        <img src={Logo} alt="Google Play Store App Tester" style={{ marginBottom: 0, maxWidth: 400, maxHeight: 208 }} />
      </Grid>
      <Grid container justify="center" style={{ marginBottom: 30 }}>
        <Tabs
          classes={{ indicator: classes.indicator }}
          value={tabValue}
          onChange={(event, value) => setTabValue(value)}
        >
          <Tab label={<Typography style={{ color: "#60B0F4" }}>{"Test Application"}</Typography>} />
          <Tab label={<Typography style={{ color: "#60B0F4" }}>{"Add Application to DB"}</Typography>} />
        </Tabs>
      </Grid>
      {tabValue === 0 && <TestApplication />}
      {tabValue === 1 && <AddApplication />}

    </Grid>

  );
}

export default App;
