import { Grid, TextField, Typography, Button } from '@material-ui/core';

import Layout from '../../components/layout';

const styles = {
  field: {
    width: '100%',
    margin: '1rem 0rem',
  },
};

export default function UploadPhoto() {
  return (
    <Layout>
      <Grid container justify="center" spacing={4}>
        <Grid item xs={8}>
          <Typography variant="h6" style={{ marginTop: '1rem' }}>
            Upload Photo
          </Typography>
          <form noValidate autoComplete="off">
            <TextField id="standard-basic" label="Name" style={styles.field} />
            <TextField
              id="standard-multiline-static"
              label="Description"
              multiline
              rows={4}
              style={styles.field}
            />
            <Button variant="contained" color="primary" component="label">
              Upload File
              <input type="file" hidden />
            </Button>
          </form>
        </Grid>
      </Grid>
    </Layout>
  );
}
