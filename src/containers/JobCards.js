import React, { Component, useRef } from "react";
import { CircularProgress, Grid, LinearProgress } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux'
import { addJobs, addPages, setLoading, filterJobs } from "../store/jobStore";
import * as jobAPI from '../api/jobApi'
import JobCard from "./card";
import InfiniteScroll from "react-infinite-scroll-component";
const JobCards = () => {


    const dispatch = useDispatch();

    console.log('Job Rendered');
    const jobs = useSelector((state) => {
        if (state.jobStore) {
            return state.jobStore.filteredJobs
        }
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
    console.log(jobs, loading);

    const elementRef = React.useRef(null);

    const onIntersection = (entries) => {
        console.log('Intersection');
        if (entries[0].isIntersecting) {
            console.log('Working');
            // fetchJobs();
        }
    }

    React.useEffect(() => {
        const observer = new IntersectionObserver(onIntersection, { threshold: 0.5 });
        if (observer && elementRef.current) {
            observer.observe(elementRef.current);
        }
        return () => observer.disconnect();
    }, [jobs, elementRef.current, loading])

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


    return (
        <InfiniteScroll
            dataLength={jobs.length}
            next={() => { console.log('Next'); fetchJobs() }}
            hasMore={true}
            loader={<LinearProgress sx={{ width: "100%", marginTop: "30px" }} />}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
            <Grid container spacing={3}>
                {jobs.map((job) => (
                    <JobCard job={job} />
                ))}
                {/* {loading && <CircularProgress sx={{ width: "100%" }} />} */}
                {/* <div ref={elementRef} /> */}
            </Grid>
        </InfiniteScroll>
    )
};

export default JobCards