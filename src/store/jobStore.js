import React from "react"
import { createSlice } from '@reduxjs/toolkit'

export const jobSlice = createSlice({
    name: 'jobStore',
    initialState: {
        jobs: [],
        filteredJobs: [],
        totalJobs: 0,
        loading: true,
        filter: {},
        pagination: { limit: 9, offset: 0 }
    },
    reducers: {
        addJob: (state, action) => {
            state.jobs.push(action.payload);
        },
        addJobs: (state, action) => {
            state.jobs.push(...action.payload);
        },
        setFilter: (state, action) => {
            state.pagination.offset = 0;
            state.filter = action.payload;
        },
        addPages: (state) => {
            state.pagination.offset = state.jobs.length;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        filterJobs: (state) => {
            filteredJobs = state.jobs.filter((job) => {
                if (filter.minExperiance && job.minExp && job.minExp < filter.minExperiance) return false;

                if (filter.companyName && job.companyName && !job.companyName.toLowerCase().includes(filter.companyName.toLowerCase())) return false;

                if (filter.techStack && job.techStack && !job.techStack.some(tech => filter.techStack.includes(tech))) return false;

                if (filter.location && job.location && !filter.location.includes(job.location)) return false;

                if (filter.role && job.jobRole && job.jobRole !== filter.role) return false;

                if (filter.minBasePay && job.salary && job.salary < filter.minBasePay) return false;

                return true;
            });
        },
    }
})

export const { addJob, addJobs, setLoading, setFilter, addPages, filterJobs } = jobSlice.actions

export default jobSlice.reducer;