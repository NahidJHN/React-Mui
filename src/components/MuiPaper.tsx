import { Box, Grid, Paper } from '@mui/material'
//paper is as usual use for make cards

function MuiPaper() {
    return (
        <Paper sx={{ padding: "2rem" }} elevation={0.5}>
            <Grid container columnSpacing={2} rowSpacing={1}>
                <Grid item xs={6}><Box bgcolor="primary.light" padding={4}>Item 1</Box> </Grid>
                <Grid item xs={6}><Box bgcolor="primary.main" padding={4}>Item 2</Box> </Grid>
                <Grid item xs={6}><Box bgcolor="primary.light" padding={4}>Item 3</Box> </Grid>
                <Grid item xs={6}><Box bgcolor="primary.light" padding={4}>Item 4</Box> </Grid>
            </Grid>
        </Paper>
    )
}

export default MuiPaper