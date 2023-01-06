import React from 'react'
import { Box, Grid } from '@mui/material'

// Grid component is use for make 2 dimentional layout 
function MuiGrid() {
    return (
        <Grid container columnSpacing={2} rowSpacing={1}>
            <Grid item xs={6}><Box bgcolor="primary.light" padding={4}>Item 1</Box> </Grid>
            <Grid item xs={6}><Box bgcolor="primary.main" padding={4}>Item 2</Box> </Grid>
            <Grid item xs={6}><Box bgcolor="primary.light" padding={4}>Item 3</Box> </Grid>
            <Grid item xs={6}><Box bgcolor="primary.light" padding={4}>Item 4</Box> </Grid>
        </Grid>
    )
}

export default MuiGrid