import * as React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Grid } from '@mui/material';

const JobCard = ({ job }) => {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={job.logoUrl || '[Image of placeholder logo]'} // Use logo or placeholder
                    alt="Company logo"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {job.jobDetailsFromCompany?.slice(0, 30) + '...'}  {/* Truncate & handle null */}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {job.location || 'Location not available'}  {/* Handle missing location */}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {job.minExp} - {job.maxExp} years exp
                    </Typography>
                    <Button variant="contained" sx={{ mt: 2, float: 'right' }}>
                        Easy Apply
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default JobCard;
