import {
    Box,
    InputLabel,
    FormControl,
    MenuItem,
    Typography,
    Select,
    TextField,
    Grid
  } from "@mui/material";
import {red} from '@mui/material/colors'
  
  const DropDown = ({ type, handleChange, types }) => {
    return (
      <Box mt={5} color={red}>
        <Grid color={red}>       
             <TextField fullWidth id="outlined-basic" label="Title" variant="outlined" />
        </Grid>
        
      </Box>
    );
  };
  
  export default DropDown;