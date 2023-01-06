import React, { useState } from "react"
import { FavoriteOutlined, } from "@mui/icons-material"
import { Box, Stack, Typography, FormControlLabel, Checkbox, FormControl, FormGroup, FormLabel } from "@mui/material"
import FavoriteIcon from '@mui/icons-material/Favorite';

const MuiCheckbox = () => {
    const [agreement, setAgreement] = useState<boolean>(false)
    const [favoriteSubject, setFavoriteSubject] = useState<string[]>([])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAgreement(event.target.checked)
    }


    const handleFavoriteSubject = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value

        if (favoriteSubject.includes(value)) {
            setFavoriteSubject(favoriteSubject.filter(item => item !== value))
        } else {
            setFavoriteSubject([...favoriteSubject, value])
        }
    }
    // console.log(favoriteSubject);

    return <Box width="400px" p={5}>
        <Typography>Check box Example</Typography>
        <Stack spacing={2} direction="column">
            <FormControlLabel label="I accept your terms and conditions" control={<Checkbox icon={<FavoriteOutlined />} checked={agreement} onChange={handleChange} checkedIcon={<FavoriteIcon />} color="error" />} />
        </Stack>
        <Typography>Multiple value/ Checkbox group</Typography>
        <Stack spacing={2} direction="column">
            <FormControl>
                <FormLabel>Favorite Subjects</FormLabel>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="accounting"
                                checked={favoriteSubject.includes("accounting")}
                                onChange={handleFavoriteSubject}
                            />}
                        label="Accounting" />
                    <FormControlLabel
                        label="Management"
                        control={
                            <Checkbox value="management"
                                checked={favoriteSubject.includes("management")}
                                onChange={handleFavoriteSubject}
                            />}
                    />
                    <FormControlLabel
                        label="Marketing"
                        control={
                            <Checkbox value="marketing"
                                checked={favoriteSubject.includes("marketing")}
                                onChange={handleFavoriteSubject}
                            />}
                    />
                </FormGroup>
            </FormControl>
        </Stack>
    </Box>
}

export default MuiCheckbox