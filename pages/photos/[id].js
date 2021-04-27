import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Avatar,
  IconButton,
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

import Layout from '../../components/layout';
import images from '../../data/mockData';
import PhotoMenu from '../../components/photo/photoMenu';

export default function Photo({ photo }) {
  return (
    <Layout title={`Gallery - ${photo.name}`}>
      <Card key={photo.id}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" style={{ backgroundColor: 'red' }}>
              N
            </Avatar>
          }
          action={<PhotoMenu photo={photo} />}
          title="Nitesh Shrestha"
          subheader="September 14, 2016"
        />
        <CardMedia
          image={photo.path}
          style={{ height: 0, paddingTop: '80%' }}
        />
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
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const photo = images.find((img) => img.id === parseInt(params.id));
  return {
    props: {
      photo,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking', //indicates the type of fallback
  };
}
