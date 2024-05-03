import React from "react";
import { Grid } from "@mui/material";
import JobCards from "./JobCards";
import Filters from "./Filters";

const Home = () => {
    console.log('Home rendered');
    return (
        <Grid container spacing={3} marginInlineStart={3} marginBlockStart={3}>
            <Grid item xs={12}>
                <Filters />
            </Grid>
            <Grid item xs={12}>
                <JobCards />
            </Grid>
        </Grid>
    )
};

export default Home;