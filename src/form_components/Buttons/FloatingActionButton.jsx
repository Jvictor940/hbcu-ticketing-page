import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import './FloatingActionButton.css'

export default function FloatingActionButtons() {
  return (
    <Box  sx={{ '& > :not(style)': { m: 1 } }}>
        <div className='add-athlete-box'>

            <Fab size='small' color="primary" aria-label="add">
                <AddIcon />
            </Fab>
            <p className='add-athlete-txt'>Add Another Athlete</p>
        </div>
    </Box>
  );
}