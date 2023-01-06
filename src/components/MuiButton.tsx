import {
    Button,
    ButtonGroup,
    Stack,
    Typography,
    IconButton,
    ToggleButton,
    ToggleButtonGroup,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import React, { useState } from "react";

const MuiButton = () => {
    const buttonController = (_event: React.MouseEvent<HTMLElement>) => {
        alert("hello world");
    };
    const [formats, setFormats] = useState<string[]>([])
    console.log(formats);

    const formatChange = (_event: React.MouseEvent<HTMLElement>, value: string[]) => {
        setFormats(value)
    }

    return (
        <Stack alignItems="center" direction="column" spacing={2}>
            <Typography variant="h2">These are the example of button</Typography>
            <Stack direction="row" spacing={1}>
                <Button size="large" variant="contained" color="primary">
                    Button
                </Button>
                <Button size="large" variant="contained" color="secondary">
                    Button
                </Button>
                <Button size="large" variant="contained" color="warning">
                    Button
                </Button>
                <Button size="large" variant="contained" color="info">
                    Button
                </Button>
                <Button size="large" variant="contained" color="error">
                    Button
                </Button>
            </Stack>
            <Stack direction="row" spacing={1}>
                <Button size="large" variant="outlined" color="primary">
                    Button
                </Button>
                <Button size="large" variant="outlined" color="secondary">
                    Button
                </Button>
                <Button size="large" variant="outlined" color="warning">
                    Button
                </Button>
                <Button size="large" variant="outlined" color="info">
                    Button
                </Button>
                <Button size="large" variant="outlined" color="error">
                    Button
                </Button>
            </Stack>
            <Stack direction="row" spacing={1}>
                <Button size="large" variant="text" color="primary">
                    Button
                </Button>
                <Button size="large" variant="text" color="secondary">
                    Button
                </Button>
                <Button size="large" variant="text" color="warning">
                    Button
                </Button>
                <Button size="large" variant="text" color="info">
                    Button
                </Button>
                <Button size="large" variant="text" color="error">
                    Button
                </Button>
            </Stack>
            <Stack>
                <ButtonGroup onClick={buttonController} size="large" variant="text">
                    <Button color="primary">Button</Button>
                    <Button color="secondary">Button</Button>
                    <Button color="warning">Button</Button>
                    <Button color="info">Button</Button>
                    <Button color="error" variant="contained" disabled>
                        Button
                    </Button>
                    <Button
                        variant="contained"
                        startIcon={<SendIcon />}
                        disableElevation
                        disableRipple
                    >
                        Send
                    </Button>
                </ButtonGroup>
            </Stack>
            <Stack>
                <ButtonGroup color="primary">
                    <IconButton color="info" disableRipple>
                        <SendIcon />
                    </IconButton>
                </ButtonGroup>
            </Stack>
            <Stack spacing={1} direction="column">
                <Typography variant="h3">
                    Toggle Button ButtonGroup
                </Typography>
                <Stack spacing={2} direction="row">
                    <ToggleButtonGroup size="small" color="success" aria-label="text-formatting" value={formats} onChange={formatChange}>
                        <ToggleButton value="bold" aria-label="bold">
                            <FormatBoldIcon />
                        </ToggleButton>
                        <ToggleButton value="italic" aria-label="italic">
                            <FormatItalicIcon />
                        </ToggleButton>
                        <ToggleButton value="underline" aria-label="underline">
                            <FormatUnderlinedIcon />
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default MuiButton;
