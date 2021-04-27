import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Avatar,
  IconButton,
  Grid,
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Link from 'next/link';

import Layout from '../components/layout';
import PhotoMenu from '../components/photo/photoMenu';
import images from '../data/mockData';

export default function Home() {
  return (
    <Layout title="Photo Gallery">
      <Grid container justify="center" spacing={4}>
        {images.map((image) => (
          <Grid key={image.id} item>
            <Card>
              <CardHeader
                avatar={
                  <Avatar
                    aria-label="recipe"
                    style={{ backgroundColor: 'red' }}
                  >
                    N
                  </Avatar>
                }
                action={<PhotoMenu photo={image} />}
                title="Nitesh Shrestha"
                subheader="September 14, 2016"
              />
              <Link href={`/photos/${image.id}`}>
                <CardMedia
                  image={image.path}
                  style={{
                    height: 0,
                    paddingTop: '80%',
                    cursor: 'pointer',
                  }}
                />
              </Link>
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  This impressive paella is a perfect.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
}
