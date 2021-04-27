import Head from 'next/head';
import Link from 'next/link';
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Paper,
} from '@material-ui/core';

import SideBar from './sideBar';

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
                <SideBar direction="left" />
                <Typography
                  variant="h6"
                  style={{ flexGrow: 1, marginLeft: '1rem' }}
                >
                  <Link href="/">
                    <a style={{ textDecoration: 'none', color: 'inherit' }}>
                      Photo Gallery
                    </a>
                  </Link>
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
          <Paper elevation={0}>{children}</Paper>
        </Container>
      </main>
    </>
  );
}
