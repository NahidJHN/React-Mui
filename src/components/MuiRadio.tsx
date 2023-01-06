import { Box, Stack, FormControl, FormControlLabel, RadioGroup, Radio, FormLabel, FormHelperText, Typography } from "@mui/material"
import React, { useState } from "react"

const MuiRadio = () => {
    const [age, setAge] = useState<string>("")
    const radioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAge(event.target.value)
    }
    console.log(age)
    return <Box width="70vw" padding={5}>
        <Stack direction="column" spacing={2}>
            <Typography>Radio example</Typography>
            <FormControl color="secondary" error>
                <FormLabel id="age">
                    Your age between
                </FormLabel>
                <RadioGroup row onChange={radioChange} value={age} name="person-age" aria-labelledby="age">
                    <FormControlLabel control={<Radio color="secondary" size="medium" />} label="10-12" value="10-12" />
                    <FormControlLabel control={<Radio />} label="12-15" value="12-15  " />
                    <FormControlLabel control={<Radio />} label="15-20" value="15-20" />
                    <FormControlLabel control={<Radio />} label="20-25 " value="20-25" />
                </RadioGroup>
                <FormHelperText>Invalid selection</FormHelperText>
            </FormControl>
        </Stack>
        <Stack direction="column" spacing={2}>
            <Typography>Radio example</Typography>
            <FormControl color="secondary" error>
                <FormLabel id="age">
                    Your age between
                </FormLabel>
                <RadioGroup row onChange={radioChange} value={age} name="person-age" aria-labelledby="age">
                    <FormControlLabel control={<Radio color="secondary" size="medium" />} label="10-12" value="10-12" />
                    <FormControlLabel control={<Radio />} label="12-15" value="12-15  " />
                    <FormControlLabel control={<Radio />} label="15-20" value="15-20" />
                    <FormControlLabel control={<Radio />} label="20-25 " value="20-25" />
                </RadioGroup>
                <FormHelperText>Invalid selection</FormHelperText>
            </FormControl>
        </Stack>
    </Box>
}

export default MuiRadio