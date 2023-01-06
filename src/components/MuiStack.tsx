import { Box, Stack } from "@mui/material"
//stack component working with only one dimension row or column
//by default it working with column
const MuiStack = () => {
    return <Stack direction="row" spacing={5} justifyContent="space-between">
        <Box width="200px" bgcolor="primary.main" height="200px" border="1px solid red"></Box>
        <Box width="200px" bgcolor="secondary.main" height="200px" border="1px solid red"></Box>
        <Box width="200px" bgcolor="success.dark" height="200px" border="1px solid red"></Box>
        <Box width="200px" bgcolor="warning.main" height="200px" border="1px solid red"></Box>
        <Box width="200px" bgcolor="error.main" height="200px" border="1px solid red"></Box>
    </Stack>
}

export default MuiStack