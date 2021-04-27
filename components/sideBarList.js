import React from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import PhotoIcon from '@material-ui/icons/Photo';
import DeleteIcon from '@material-ui/icons/Delete';
import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';

export default function SideBarList() {
  return (
    <React.Fragment>
      <List>
        <ListItem button>
          <ListItemIcon>
            <StarBorderIcon />
          </ListItemIcon>
          <ListItemText primary="Starred" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PhotoIcon />
          </ListItemIcon>
          <ListItemText primary="Photos" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PhotoAlbumIcon />
          </ListItemIcon>
          <ListItemText primary="Albums" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <DeleteIcon />
          </ListItemIcon>
          <ListItemText primary="Trash" />
        </ListItem>
      </List>
    </React.Fragment>
  );
}
