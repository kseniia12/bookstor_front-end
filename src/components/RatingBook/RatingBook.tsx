import React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import { StylesWrapper } from './style';

const RatingBook = () => {
  const [value, setValue] = React.useState(2);

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Rating
        name="simple-controlled"
        value={value}
        
      />
    </Box>
  );
};

export default RatingBook;