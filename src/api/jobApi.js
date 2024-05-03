import React from 'react';


const baseUrl = 'https://api.weekday.technology/adhoc/getSampleJdJSON';

export const fetchJobs = async (limit = 10, offset = 0) => {
    console.log('Fetching jobs');
    const jobRequest = buildJobRequest(limit, offset);
    try {
        const response = await fetch(baseUrl, jobRequest);
        const jobData = await response.json();
        return jobData;
    } catch (error) {
        console.log('Error fetching jobs');
        console.error(error);
    }
}

const buildJobRequest = (limit, offset) => {

    const jobHeader = new Headers();
    jobHeader.append('Content-Type', 'application/json');
    const request = {
        method: 'POST',
        headers: jobHeader,
        body: JSON.stringify({ limit: limit, offset: offset })
    }

    return request;
}