import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'

function MuiCard() {
    return (

        <Box width="300px">
            <Card>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://source.unsplash.com/random"
                />
                <CardContent >
                    <Typography gutterBottom variant='h5' component='div'>Material UI</Typography>
                    <Typography variant='body2' color="text.secondary">
                        MUI offers a comprehensive suite of UI tools to help you ship new features faster. Start with Material UI, our fully-loaded component library, .
                    </Typography>
                </CardContent>
                <CardActions >
                    <Button size='small' variant="text" >Share</Button>
                    <Button size="small" variant="text" >Read More..</Button>
                </CardActions>
            </Card>
        </Box>

    )
}

export default MuiCard