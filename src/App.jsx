import React from 'react';
import Header from './header';
import BlogPost from './blogPost';
import { Container, Grid } from '@mui/material';
import Home from './pages/home';

// Mock data
const posts = [
  {
    title: 'Understanding React Hooks',
    content: 'React Hooks are a new addition in React 16.8 that let you use state and other React features without writing a class.'
  },
  {
    title: 'Introduction to Material-UI',
    content: 'Material-UI is a popular React UI framework that provides a comprehensive set of components to build modern, responsive UIs.'
  },
  {
    title: 'Getting Started with Framer Motion',
    content: 'Framer Motion is a popular library for animations in React. It makes it easy to create animations and transitions for your UI.'
  }
];

const App = () => (
  <>
    <Home />
    {/* <Header />
    <Container>
      <Grid container spacing={4}>
        {posts.map((post, index) => (
          <Grid item xs={12} md={4} key={index}>
            <BlogPost title={post.title} content={post.content} />
          </Grid>
        ))}
      </Grid>
    </Container> */}
  </>
);

export default App;
