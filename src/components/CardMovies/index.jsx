import {
    Button,
    Card,
    CardContent,
    CardMedia,
    Box,
    Typography,
    Grid,
  } from "@mui/material";

  const CardMovies = ({entries}) =>{
    return (
        <Box>
            <Grid container rowSpacing={1} spacing={3} mt={3} >
                {entries.length > 0 &&
                entries.map((entries) => (
                    <Grid item xs ={12} sm={2.4}>
                        <Card>
                        <CardMedia 
                                component="img"
                                width={300}
                                height={400}
                                image={entries.images.posterArt.url}/>
                            <CardContent>
                                <Typography variant="h8">{entries.title}</Typography>   
                            </CardContent>
                        </Card>
                        
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default CardMovies;