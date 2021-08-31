import { Container, createTheme, Grid, ThemeProvider } from '@material-ui/core';
import './App.css';
import FeaturedPost from './components/FeaturedPost';
import Header from './components/Header';
import PostCard from './components/PostCard';
import { featuredPosts } from './data/Data';

function App() {
  const darkTheme = createTheme({
    palette: {
      type: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Header />
        <FeaturedPost />
        <br />
        <Grid container spacing={4}>
          {featuredPosts.map((post) => (
            <PostCard post={post} key={post.title} />
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
