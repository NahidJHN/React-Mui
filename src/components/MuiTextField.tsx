import {
    Box,
    Stack,
    TextField,
    Typography,
    InputAdornment,
    MenuItem,
} from "@mui/material";
import React, { useState } from "react";

const MuiTextField = () => {
    const [subject, setSubject] = useState<string[]>([]);

    const changeSubject = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSubject(typeof value === "string" ? value.split(",") : value);
    };

    return (
        <Box width="100vw" height="100vh" padding={3}>
            <Typography textAlign="center" marginBottom={2} variant="h2">
                Text field Example
            </Typography>
            <Box display="flex" justifyContent="space-evenly">
                <Stack direction="column" spacing={2}>
                    <TextField
                        size="small"
                        variant="outlined"
                        label="Outlined text field"
                        type="text"
                    />
                    <TextField
                        size="small"
                        variant="standard"
                        label="Standard text field"
                        type="text"
                    />
                    <TextField
                        size="small"
                        variant="filled"
                        color="primary"
                        label="Filled text field"
                        type="text"
                    />
                    <TextField
                        size="small"
                        variant="outlined"
                        color="primary"
                        label="Required field"
                        type="text"
                        required
                    />
                    <TextField
                        size="small"
                        variant="outlined"
                        color="primary"
                        label="Required field"
                        type="password"
                        required
                        helperText="Do not share password to anyone"
                    />
                    <TextField
                        size="small"
                        variant="outlined"
                        color="primary"
                        type="date"
                        required
                        helperText="Select your birth date"
                    />
                    <TextField
                        size="small"
                        variant="outlined"
                        color="primary"
                        value="89"
                        type="number"
                        required
                        helperText="Your marks on final exam"
                        disabled
                    />
                    <TextField
                        size="small"
                        variant="outlined"
                        color="primary"
                        value="89"
                        type="number"
                        required
                        helperText="Read only field"
                        inputProps={{ readOnly: true }}
                    />
                </Stack>
                <Stack direction="column" spacing={2}>
                    <TextField
                        label="Amount"
                        variant="outlined"
                        size="small"
                        type="number"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">$</InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        label="Weight"
                        variant="outlined"
                        size="small"
                        type="number"
                        InputProps={{
                            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
                        }}
                    />
                    <TextField
                        label="Weight"
                        variant="outlined"
                        size="small"
                        type="number"
                        InputProps={{
                            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
                        }}
                    />
                    <TextField
                        label="Error field"
                        variant="outlined"
                        size="small"
                        type="email"
                        helperText="Invalid Email"
                        error
                        required
                    />
                </Stack>
                <Stack direction="column" spacing="2">
                    <Typography variant="h3" marginBottom={2}>
                        Select input
                    </Typography>
                    <TextField
                        select
                        label="Select subject"
                        helperText="Please select your favorite subject"
                        size="small"
                        variant="outlined"
                        onChange={changeSubject}
                        value={subject}
                        SelectProps={{
                            multiple: true,
                        }}
                        color="secondary"

                    >
                        <MenuItem value="finance">Finance</MenuItem>
                        <MenuItem value="accounting">Accounting</MenuItem>
                        <MenuItem value="management">Management</MenuItem>
                        <MenuItem value="marketing">Marketing</MenuItem>
                    </TextField>
                </Stack>
            </Box>
        </Box>
    );
};

export default MuiTextField;
