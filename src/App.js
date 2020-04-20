import React from 'react';
import Logo from './logo.png'
import { Grid, Typography, TextField, Card, CardContent, Button, CircularProgress } from '@material-ui/core'

const App = () => {

  const [loading, setLoading] = React.useState(false)
  const [showResults, setShowResults] = React.useState(false)

  const submitForm = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }
  return (
    <Grid container justify="center" style={{ height: "100vh", padding: "20px 10px" }}>
      <Grid container item justify="center" xs={12}>
        <img src={Logo} alt="Google Play Store App Tester" style={{ marginBottom: 20, maxWidth: 400, maxHeight: 208 }} />
      </Grid>
      <Grid container justify="center" item xs={12}>
        <Grid item xs={12} sm={10} md={6}>
          <Typography style={{ color: "white", textAlign: "center", width: "100%" }} variant="h5">{"Enter information about your application that you will create or have created and we'll tell you how many installs we predict you'd get!"}</Typography>
        </Grid>
      </Grid>
      <Grid container justify="center" item xs={12}>
        <Grid item xs={12} sm={12} md={6}>
          <form onSubmit={(e) => submitForm(e)}>
            <Card>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField style={{ backgroundColor: "white" }} variant="outlined" label="App Name" />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField style={{ backgroundColor: "white" }} variant="outlined" label="App Name" />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField style={{ backgroundColor: "white" }} variant="outlined" label="App Name" />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField style={{ backgroundColor: "white" }} variant="outlined" label="App Name" />
                  </Grid>
                </Grid>
                <Grid style={{ marginTop: 30 }} container justify="flex-end" item xs={12}>
                  {loading ? <CircularProgress color="primary" /> :
                    <Button type="submit" variant="contained" color="primary">Submit</Button>
                  }
                </Grid>
              </CardContent>
            </Card>
          </form>
        </Grid>
      </Grid>
    </Grid>

  );
}

export default App;
