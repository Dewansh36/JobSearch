import React from "react";
import { createSlice } from "@reduxjs/toolkit";

export const jobSlice = createSlice({
    name: "jobStore",
    initialState: {
        jobs: [],
        filteredJobs: [],
        totalJobs: 0,
        loading: true,
        filter: {},
        pagination: { limit: 9, offset: 0 },
    },
    reducers: {
        setFilter: (state, action) => {
            console.log("set filter called", action.payload);
            state.pagination.offset = 0;
            state.filter = action.payload;
            console.log(state.filter);
        },
        addPages: (state) => {
            state.pagination.offset = state.jobs.length;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        filterJobs: (state) => {
            state.filteredJobs = state.jobs.filter((job) => {
                const minFilterExp =
                    state.filter.minExperience != undefined
                        ? state.filter.minExperience
                        : 10000;
                const minJobExp = job.minExp ? job.minExp : 0;
                const maxJobExp = job.maxExp != undefined ? job.maxExp : 1000;
                console.log(minFilterExp, minJobExp);
                if (minFilterExp < minJobExp) {
                    return false;
                }
                if (
                    state.filter.companyName &&
                    job.companyName &&
                    !job.companyName
                        .toLowerCase()
                        .includes(state.filter.companyName.toLowerCase())
                ) {
                    return false;
                }
                if (
                    state.filter.location &&
                    job.location &&
                    !job.location
                        .toLowerCase()
                        .includes(state.filter.location.toLowerCase())
                ) {
                    return false;
                }

                if (state.filter.remote && job.location) {
                    if (
                        state.filter.remote === "remote" &&
                        job.location.toLowerCase() !== "remote"
                    ) {
                        return false;
                    }
                    if (
                        state.filter.remote === "onsite" &&
                        job.location.toLowerCase() === "remote"
                    ) {
                        return false;
                    }
                }

                let roleRegex = new RegExp(state.filter.role.join("|"), "i");
                if (state.filter.role && job.jobRole && !roleRegex.test(job.jobRole)) {
                    return false;
                }

                const minBasePay = state.filter.minBasePay || 0;
                const maxJobPay = job.maxJdSalary || 1000000000000;
                const minJon = job.minJdSalary || 0;
                if (minBasePay > maxJobPay) return false;

                return true;
            });
            console.log("Post Filtering: ", state.filteredJobs);
        },
        addJob: (state, action) => {
            state.jobs.push(action.payload);
            state.filteredJobs = state.jobs.filter((job) => {
                if (
                    state.filter.minExperiance &&
                    job.minExp &&
                    job.minExp < state.filter.minExperiance
                )
                    return false;

                if (
                    state.filter.companyName &&
                    job.companyName &&
                    !job.companyName
                        .toLowerCase()
                        .includes(state.filter.companyName.toLowerCase())
                )
                    return false;

                if (
                    state.filter.techStack &&
                    job.techStack &&
                    !job.techStack.some((tech) => state.filter.techStack.includes(tech))
                )
                    return false;

                if (
                    state.filter.location &&
                    job.location &&
                    !state.filter.location.includes(job.location)
                )
                    return false;

                if (
                    state.filter.role &&
                    job.jobRole &&
                    job.jobRole !== state.filter.role
                )
                    return false;

                if (
                    state.filter.minBasePay &&
                    job.salary &&
                    job.salary < state.filter.minBasePay
                )
                    return false;

                return true;
            });
        },
        addJobs: (state, action) => {
            state.jobs.push(...action.payload);
            state.filteredJobs = state.jobs.filter((job) => {
                if (
                    state.filter.minExperiance &&
                    job.minExp &&
                    job.minExp < state.filter.minExperiance
                )
                    return false;

                if (
                    state.filter.companyName &&
                    job.companyName &&
                    !job.companyName
                        .toLowerCase()
                        .includes(state.filter.companyName.toLowerCase())
                )
                    return false;

                if (
                    state.filter.techStack &&
                    job.techStack &&
                    !job.techStack.some((tech) => state.filter.techStack.includes(tech))
                )
                    return false;

                if (
                    state.filter.location &&
                    job.location &&
                    !state.filter.location.includes(job.location)
                )
                    return false;

                if (
                    state.filter.role &&
                    job.jobRole &&
                    job.jobRole !== state.filter.role
                )
                    return false;

                if (
                    state.filter.minBasePay &&
                    job.salary &&
                    job.salary < state.filter.minBasePay
                )
                    return false;

                return true;
            });
        },
    },
});

export const { addJob, addJobs, setLoading, setFilter, addPages, filterJobs } =
    jobSlice.actions;

export default jobSlice.reducer;
