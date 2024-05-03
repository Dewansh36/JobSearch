import React, { Component } from "react";
import { Grid } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux'
import { addJobs, addPages, setLoading } from "../store/jobStore";
import * as jobAPI from '../api/jobApi'
const JobCards = () => {

    const jobs = useSelector((state) => {
        if (state.jobStore)
            return state.jobStore.jobs;
        else
            return [];
    });


    const loading = useSelector((state) => {
        if (state.jobStore) {
            return state.jobStore.loading
        } else {
            return true
        }
    });


    const pages = useSelector((state) => {
        if (state.jobStore) {
            return state.jobStore.pagination
        } else {
            return { limit: 10, offset: 0 }
        }
    });

    const dispatch = useDispatch();


    console.log(jobs, loading);

    const fetchJobs = async () => {
        dispatch(setLoading(true));
        const response = await jobAPI.fetchJobs(pages.limit, pages.offset);
        dispatch(addJobs(response.jdList));
        dispatch(addPages());
        dispatch(setLoading(false));
    }

    React.useEffect(() => {
        fetchJobs();
    }, [])

    const fetchMoreJobs = () => {
        fetchJobs();
    };

    if (loading) {
        return (
            <Grid container spacing={3}>
                <h1>Loading...</h1>
            </Grid>
        )
    }


    return (
        <Grid container spacing={3}>

        </Grid>
    )
};

export default JobCards