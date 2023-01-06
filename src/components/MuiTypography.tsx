import { Typography } from "@mui/material"

const MuiTypography = () => {
    return <>
        <Typography variant="h1">This is H1 Typography</Typography>
        <Typography variant="h2">This is h2 Typography</Typography>
        <Typography variant="h3" color="aqua">This is h3 Typography</Typography>
        <Typography variant="h4" >This is h4 Typography</Typography>
        <Typography variant="h5">This is h5 Typography</Typography>
        <Typography variant="h6">This is h6 Typography</Typography>
        <Typography variant="body1">This is body1 Typography</Typography>
        <Typography variant="body2">This is body2 Typography</Typography>
        <Typography variant="subtitle1">This is subtitle1 Typography</Typography>
        <Typography variant="subtitle2">This is subtitle2 Typography</Typography>
        <Typography variant="h6" component="h1">This is h6 Typography</Typography>
    </>
}

export default MuiTypography