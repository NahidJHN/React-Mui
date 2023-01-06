import { Box } from "@mui/material"

const MuiBox = () => {
    return (
        <Box display="flex" justifyContent="space-evenly" alignItems="flex-end" width="100vw" flexWrap="wrap">
            <Box sx={{
                padding: "16px",
                color: "secondary.dark",
                border: "2px solid black",
                width: "200px",
                height: "200px"
            }}>
                Hello box component
            </Box>
            <Box sx={{
                padding: "16px",
                color: "secondary.dark",
                border: "2px solid black",
                width: "200px",
                height: "200px"
            }}>
                Hello box component
            </Box> <Box sx={{
                padding: "16px",
                color: "secondary.dark",
                border: "2px solid black",
                width: "200px",
                height: "200px"
            }}>
                Hello box component
            </Box> <Box sx={{
                padding: "16px",
                color: "secondary.dark",
                border: "2px solid black",
                width: "200px",
                height: "200px"
            }}>
                Hello box component
            </Box> <Box sx={{


                padding: "16px",
                color: "secondary.dark",
                border: "2px solid black",
                width: "200px",
                height: "200px"
            }}>
                Hello box component
            </Box>
        </Box>
    )
}

export default MuiBox