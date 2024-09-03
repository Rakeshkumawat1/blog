import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import { motion } from 'framer-motion';

const BlogPost = ({ title, content }) => (
  <motion.div 
    whileHover={{ scale: 1.05 }} 
    whileTap={{ scale: 0.95 }}
    style={{ margin: '20px' }}
  >
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Read More</Button>
      </CardActions>
    </Card>
  </motion.div>
);

export default BlogPost;
