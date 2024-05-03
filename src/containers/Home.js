import React, { useContext } from "react";
import { Grid } from "@mui/material";
import JobCards from "./JobCards";

const Home = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <h1>Filter </h1>
            </Grid>
            <Grid item xs={12}>
                <JobCards />
            </Grid>
        </Grid>
    )
};

export default Home;