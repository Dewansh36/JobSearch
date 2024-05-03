import React, { Component, useRef } from "react";
import { Grid } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux'
import { addJobs, addPages, setLoading } from "../store/jobStore";
import * as jobAPI from '../api/jobApi'
import JobCard from "./card";
const JobCards = () => {

    console.log('Job Rendered');
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

    // const loader = useRef(null);

    // const handleObserver = React.useCallback((entries) => {
    //     const target = entries[0];
    //     if (target.isIntersecting) {
    //         console.log("Intersecting");
    //         fetchMoreJobs();
    //     }
    // }, []);

    // React.useEffect(() => {
    //     const option = {
    //         root: null,
    //         rootMargin: "50px",
    //         threshold: 0
    //     };
    //     const observer = new IntersectionObserver(handleObserver, option);
    //     if (loader.current) observer.observe(loader.current);
    // }, [handleObserver]);

    const dispatch = useDispatch();


    console.log(jobs, loading);

    const fetchJobs = async () => {
        if (!loading || jobs.length === 0) {
            dispatch(setLoading(true));
            const response = await jobAPI.fetchJobs(pages.limit, pages.offset);
            dispatch(addJobs(response.jdList));
            dispatch(addPages());
            dispatch(setLoading(false));
        }
    }

    React.useEffect(() => {
        fetchJobs();
    }, [])


    const fetchMoreJobs = () => {
        fetchJobs();
    };


    return (
        <Grid container spacing={3}>
            {jobs.map((job) => (
                <JobCard job={job} />
            ))}
            {loading && <h1>Loading...</h1>}
            {/* <div ref={loader} /> */}
        </Grid>
    )
};

export default JobCards