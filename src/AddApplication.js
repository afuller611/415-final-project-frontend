import React from 'react';
import { Grid, Typography, TextField, Card, CardContent, CircularProgress, Button, FormControl, FormControlLabel, Radio } from '@material-ui/core'
import { categories, genres, contentRatings } from './utils/data'
import Autocomplete from '@material-ui/lab/Autocomplete';


const TestApplication = (props) => {
    const [loading, setLoading] = React.useState(false)
    const [showResults, setShowResults] = React.useState(false)
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
        }, 2000)
    }
    return (
        <>
            <Grid container justify="center" item xs={12}>
                <Grid item xs={12} sm={10} md={6}>
                    <Typography style={{ color: "white", textAlign: "center", width: "100%" }} variant="h5">
                        {"If you would like to enter your application to improve our model please do!"}
                    </Typography>
                </Grid>
            </Grid>
            <Grid container justify="center" item xs={12}>
                <Grid item xs={12} sm={12} md={6} style={{paddingBottom: 40}}>
                    <form onSubmit={(e) => submitForm(e)}>
                        <Card style={{ marginTop: 20 }}>
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
                                            getOptionLabel={(option) => option}
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
                                    <Grid item xs={12} sm={6}>
                                        <TextField value={formValues.version}
                                            onChange={(e) => setFormValues({ ...formValues, version: e.target.value })} required fullWidth style={{ backgroundColor: "white" }} variant="outlined" label="Current Version of App" />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField value={formValues.lastUpdated}
                                            onChange={(e) => setFormValues({ ...formValues, lastUpdated: e.target.value })} required fullWidth style={{ backgroundColor: "white" }} variant="outlined" label="Days Since Last Updated" />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField value={formValues.numReviews}
                                            onChange={(e) => setFormValues({ ...formValues, numReviews: e.target.value })} required fullWidth style={{ backgroundColor: "white" }} variant="outlined" label="Number of Reviews" />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField value={formValues.averageRating}
                                            onChange={(e) => setFormValues({ ...formValues, averageRating: e.target.value })} required fullWidth style={{ backgroundColor: "white" }} variant="outlined" label="Average Rating" />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField value={formValues.numInstalls}
                                            onChange={(e) => setFormValues({ ...formValues, numInstalls: e.target.value })} required fullWidth style={{ backgroundColor: "white" }} variant="outlined" label="Number of Installs" />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <FormControl
                                            required
                                            style={{ marginBottom: 20 }}>
                                            <Typography style={{ marginBottom: 10 }}>{"App Type"}</Typography>
                                            <FormControlLabel control={
                                                <Radio checked={formValues.type === "Free"} value={"Free"} onChange={(e) => setFormValues({ ...formValues, type: e.target.value })} />
                                            }
                                                label="Free" />
                                            <FormControlLabel control={
                                                <Radio checked={formValues.type === "Paid"} value={"Paid"} onChange={(e) => setFormValues({ ...formValues, type: e.target.value })} />
                                            }
                                                label="Paid" />
                                        </FormControl>
                                        {formValues.type === "Paid" && <TextField value={formValues.price} onChange={(e) => setFormValues({ ...formValues, price: e.target.value })} fullWidth required style={{ backgroundColor: "white" }} variant="outlined" label="Price" />}
                                    </Grid>
                                </Grid>
                                <Grid style={{ marginTop: 30 }} container justify={showResults ? "space-between" : "flex-end"} item xs={12}>
                                    {showResults && <Typography variant="h6" style={{ color: "green" }}>{"Thank you! This has been added to our Database."}</Typography>}
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