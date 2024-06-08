import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Item = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
  backgroundColor: 'transparent', // Remove background
 
  border: 'none', // Remove border

  fontSize: 'medium',
}));

export default function Projects() {
  return (
    <Box>
      <Grid container >
        <Grid item xs={4}>
          <Item>Name:</Item>
        </Grid>
        <Grid item xs={8}>
          <Item><span style={{ fontWeight: 'bold' }}>Human following robot</span></Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Description:</Item>
        </Grid>
        <Grid item xs={8}>
          <Item> Human following robot it is used to transfer the loads,these robots enhance efficiency and
reduce strain on human workers.
</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Name:</Item>
        </Grid>
        <Grid item xs={8}>
          <Item><span style={{ fontWeight: 'bold' }}>PCR-Pole climbing robot
</span></Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Description:</Item>
        </Grid>
        <Grid item xs={8}>
          <Item> The robot's ability to perform repetitive tasks, such as crop inspection or spraying, reduces
the demand for manual labor, particularly in labor-intensive and hard-to-reach areas.
</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Name:</Item>
        </Grid>
        <Grid item xs={8}>
          <Item><span style={{ fontWeight: 'bold' }}>Automatic welding defect detection robot by using IOT and Image processing
</span></Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Description:</Item>
        </Grid>
        <Grid item xs={8}>
          <Item> Developed an IoT-enabled system that uses a robot to detect welding defects via image processing. 
            The system provides real-time feedback on weld quality, ensuring high standards in welding operations.
</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
