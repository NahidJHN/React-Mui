import {
    Autocomplete,
    Box,
    Divider,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import { useState } from "react";

type Countries = {
    id: number;
    label: string;
};

const MuiAutoComplete = () => {
    const options: string[] = [
        "Bangladesh",
        "India",
        "Pakisthan",
        "Nepal",
        "Vutan",
        "America",
        "Seria",
        "Saudi",
    ];

    const newOptions = options.map((item, index) => {
        return {
            id: index + 1,
            label: item,
        };
    });

    const [countries, setCountries] = useState<string[]>([]);
    const [country, setCountry] = useState<Countries | null>(null);

    const changeAutoComplete = (_event: any, value: Countries | null) => {
        console.log(value)
        setCountry(value);
    };

    const changeMultipleAutoComplete = (
        _event: React.ChangeEvent<{}>,
        value: string[]
    ) => {
        setCountries(value);
    };
    console.log(country);
    return (
        <Box p={5}>
            <Typography variant="h2" marginBottom={5}>
                AutoComplete
            </Typography>
            <Stack spacing={2}>
                <Autocomplete
                    value={country}
                    color="secondary"
                    onChange={changeAutoComplete}
                    options={newOptions}
                    getOptionLabel={(option) => option.label}

                    renderInput={(params) => (
                        <TextField color="secondary" {...params} label="Countries" />
                    )}
                />
                You selected ={country?.label}
                <Typography variant="h4" marginTop={3}></Typography>
                <Divider></Divider>
                <Autocomplete
                    multiple
                    color="secondary"
                    onChange={changeMultipleAutoComplete}
                    options={options}
                    renderInput={(params) => (
                        <TextField color="secondary" {...params} label="Countries" />
                    )}
                    freeSolo
                />
                you selected {countries.join(",")}
            </Stack>
        </Box>
    );
};

export default MuiAutoComplete;
