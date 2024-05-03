import * as React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Grid, Chip, Avatar, Stack, Accordion, AccordionSummary } from '@mui/material';
import { ElectricBolt, ExpandMore, ExpandLess } from '@mui/icons-material';

const JobCard = ({ job, innerRef }) => {

    const [expanded, setExpanded] = React.useState(false);

    const handleClick = () => {
        setExpanded(!expanded);
    };
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
                <Grid item xs={12} display="flex">
                    {job.logoUrl && <Avatar sx={{ width: 60, height: 60 }} alt="Company Logo" src={job.logoUrl} />}
                    <Stack marginInlineStart={3}>
                        {job.companyName && <Typography variant='subtitle1'>{job.companyName}</Typography>}
                        {job.location && <Typography variant='subtitle2'>{job.location}</Typography>}
                        {job.jobRole && <Typography variant='subtitle2'>{job.jobRole}</Typography>}
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='subtitle1'>
                        Salary Range {(job.minJdSalary) ? job.minJdSalary : '-'} - {(job.maxJdSalary) ? job.maxJdSalary : '-'}
                        &nbsp; {job.salaryCurrencyCode ? job.salaryCurrencyCode : ' '}
                    </Typography>
                </Grid>
                {job.jobDetailsFromCompany && <div style={{ width: "100%" }}>
                    <Typography variant='subtitle1'>About the Company</Typography>
                    <Typography variant="body2" >
                        {expanded ? job.jobDetailsFromCompany : `${job.jobDetailsFromCompany.substring(0, 100)}...`}
                    </Typography>
                    <Button onClick={handleClick} size="small">
                        {expanded ? <Button endIcon={<ExpandLess />}>Collapse</Button> : <Button endIcon={<ExpandMore />}>Read More</Button>}
                    </Button>
                </div>
                }
                <Typography variant='subtitle1'>Experiance Range : {job.minExp ? job.minExp : '-'} - {job.maxExp ? job.maxExp : '-'} </Typography>
                <Button variant='contained' startIcon={<ElectricBolt />} fullWidth disabled={job.jdLink == undefined} href={job.jdLink} target='_blank'> Easy Apply</Button>
            </Card>
        </Grid>
    );
};

export default JobCard;
