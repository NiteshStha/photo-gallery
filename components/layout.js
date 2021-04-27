import Head from 'next/head';
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Paper,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <title> {title ? title : 'Photo Gallery'}</title>
      </Head>
      <main>
        <header>
          <AppBar position="fixed">
            <Container maxWidth="md">
              <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                  <MenuIcon />
                </IconButton>
                <Typography
                  variant="h6"
                  style={{ flexGrow: 1, marginLeft: '1rem' }}
                >
                  Photo Gallery
                </Typography>
                <Button color="inherit" style={{ textTransform: 'capitalize' }}>
                  Upload
                </Button>
              </Toolbar>
            </Container>
          </AppBar>
        </header>
        <Container
          maxWidth="md"
          style={{ marginTop: '5rem', marginBottom: '1rem' }}
        >
          <Paper
            elevation={0}
            style={{
              padding: '1rem',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gridGap: '1rem',
            }}
          >
            {children}
          </Paper>
        </Container>
      </main>
    </>
  );
}
