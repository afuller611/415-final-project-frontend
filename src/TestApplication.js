import React from 'react';
import { Grid, Typography, TextField, Card, CardContent, CircularProgress, Button } from '@material-ui/core'
import { categories, genres, contentRatings } from './utils/data'
import Autocomplete from '@material-ui/lab/Autocomplete';


const TestApplication = (props) => {
    const [loading, setLoading] = React.useState(false)
    const [showResults, setShowResults] = React.useState(false)
    const [installsResponse, setInstallsResponse] = React.useState(0)
    const [formValues, setFormValues] = React.useState({
        name: "",
        category: "",
        size: "",
        androidVersion: "",
        type: "",
        price: 0,
        contentRating: "",
        genres: [],
        version: "",
        lastUpdated: "",
        numReviews: "",
        averageRating: "",
        numInstalls: ""
    })

    const submitForm = (e) => {
        e.preventDefault()
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setShowResults(true)
            setInstallsResponse(500)
        }, 2000)
    }

    return (
        <>
            <Grid container justify="center" item xs={12} style={{ marginBottom: 20 }}>
                <Grid item xs={12} sm={10} md={6}>
                    <Typography style={{ color: "white", textAlign: "center", width: "100%" }} variant="h5">{"Enter information about your application that you will create or have created and we'll tell you how many installs we predict you'd get!"}</Typography>
                </Grid>
            </Grid>
            <Grid container justify="center" item xs={12}>
                <Grid item xs={12} sm={12} md={6} style={{ paddingBottom: 40 }}>
                    <form onSubmit={(e) => submitForm(e)}>
                        <Card>
                            <CardContent>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField value={formValues.name} onChange={(e) => setFormValues({ ...formValues, name: e.target.value })} fullWidth required style={{ backgroundColor: "white" }} variant="outlined" label="App Name" />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField value={formValues.category} onChange={(e) => setFormValues({ ...formValues, category: e.target.value })} fullWidth required select SelectProps={{ native: true }} style={{ backgroundColor: "white" }} variant="outlined" label="Category">
                                            <option value="" />
                                            {categories.map((cat, index) => (
                                                <option key={index} value="cat">{cat}</option>
                                            ))}
                                        </TextField>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField value={formValues.size} onChange={(e) => setFormValues({ ...formValues, size: e.target.value })} fullWidth required style={{ backgroundColor: "white" }} variant="outlined" label="Size (in MB)" />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField value={formValues.androidVersion} onChange={(e) => setFormValues({ ...formValues, androidVersion: e.target.value })} fullWidth required style={{ backgroundColor: "white" }} variant="outlined" label="Android Version Supported" />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField value={formValues.contentRating} onChange={(e) => setFormValues({ ...formValues, contentRating: e.target.value })} required select SelectProps={{ native: true }} fullWidth style={{ backgroundColor: "white" }} variant="outlined" label="Content Rating">
                                            <option value="" />
                                            {contentRatings.map((cr, index) => (
                                                <option key={index} value={cr}>{cr}</option>
                                            ))}
                                        </TextField>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Autocomplete
                                            value={formValues.genres}
                                            onChange={(e, v) => setFormValues({ ...formValues, genres: v })}
                                            multiple
                                            id="tags-outlined"
                                            options={genres}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    variant="outlined"
                                                    label="Genre"
                                                    placeholder="Genre"
                                                />
                                            )}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid style={{ marginTop: 30 }} container justify={showResults ? "space-between" : "flex-end"} item xs={12}>
                                    {showResults && <Typography variant="h5" style={{ color: "green" }}> We anticipate {installsResponse} installs!</Typography>}
                                    {loading ? <CircularProgress color="primary" /> :
                                        <Button type="submit" variant="contained" color="primary">Submit</Button>
                                    }
                                </Grid>
                            </CardContent>
                        </Card>
                    </form>
                </Grid>
            </Grid>
        </>
    )
}
export default TestApplication;