import { Autocomplete, Grid, TextField, GroupHeader, GroupItems, Box } from "@mui/material";
import React, { Component } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { setFilter, filterJobs } from "../store/jobStore";

import { departments, salaryOptions, remoteOptions, experienceOptions } from "../utils/filterStatics";

const Filters = () => {
    const dispatch = useDispatch();
    const filters = useSelector((state) => {
        if (state.jobStore)
            return state.jobStore.filter;
        else
            return {};
    });

    const filteredJobs = useSelector((state) => {
        if (state.jobStore)
            return state.jobStore.filteredJobs;
        else
            return [];
    });


    React.useEffect(() => {
        dispatch(filterJobs());
    }, [filters])

    console.log(filters, filteredJobs);

    return (
        <Box container display="flex" justifyContent="flex-start" >
            <Autocomplete
                id="jobRoles"
                options={departments}
                groupBy={(option) => option.title} // Group by department title
                getOptionLabel={(option) => option.value} // Get title of first option within department
                sx={{ height: 50, width: 100, font: "small-caption" }}
                renderInput={(params) => <TextField {...params} label='Roles' />}
                onChange={(event, value, detailed) => {
                    console.log('Actual Value', value, detailed);
                    dispatch(setFilter({ ...filters, role: value.map((v) => v.value) }));
                }}
                multiple
                style={{ marginInline: 5 }}
            />
            <Autocomplete
                style={{ marginInline: 5 }}
                id="experience-demo"
                options={experienceOptions}
                getOptionLabel={(option) => option.title}
                sx={{ height: 50, width: 100, font: "small-caption" }}
                renderInput={(params) => <TextField {...params} label="Experience (Years)" />}
                onChange={(event, value) => {
                    dispatch(setFilter({ ...filters, minExperience: value?.value }));
                }}
            />

            <Autocomplete
                style={{ marginInline: 5 }}
                id="remote-demo"
                options={remoteOptions}
                getOptionLabel={(option) => option.title}
                sx={{ height: 50, width: 100, font: "small-caption" }}
                renderInput={(params) => <TextField {...params} label="Remote Work Option" />}
                onChange={(event, value) => {
                    dispatch(setFilter({ ...filters, remote: value?.value }));
                }}
            />

            <Autocomplete
                style={{ marginInline: 5 }}
                id="salary-demo"
                options={salaryOptions}
                getOptionLabel={(option) => option.title}
                sx={{ height: 50, width: 100, font: "small-caption" }}
                renderInput={(params) => <TextField {...params} label="Minimum Base Salary (Lakhs)" />}
                onChange={(event, value) => {
                    dispatch(setFilter({ ...filters, minBasePay: value?.value }));
                }}
            />

            <TextField id="companyinput" label="Company Name" variant="outlined"
                style={{ marginInline: 5 }}
                onChange={(event) => {
                    dispatch(setFilter({ ...filters, companyName: event.target.value }));
                }}
            />

            <TextField id="locationinput" label="Location" variant="outlined"
                style={{ marginInline: 5 }}
                onChange={(event) => {
                    dispatch(setFilter({ ...filters, location: event.target.value }));
                }}
            />
        </Box>
    )
};

export default Filters;