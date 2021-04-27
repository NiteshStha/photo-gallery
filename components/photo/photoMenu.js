import React from 'react';
import { IconButton, Menu, MenuItem } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import StarIcon from '@material-ui/icons/Star';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

export default function PhotoMenu({ photo }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSave = () => {
    setAnchorEl(null);
    const img = new Image();
    img.src = photo.path;
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const aTag = document.createElement('a');
      aTag.download = photo.name;
      aTag.href = canvas.toDataURL(`image/png`);
      aTag.click();
    };
  };

  return (
    <div>
      <IconButton aria-label="settings" onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{ marginRight: 50 }}
      >
        <MenuItem onClick={handleClose} style={{ fontSize: 14 }}>
          <StarIcon style={{ color: '#ffd700', fontSize: 18 }} />
          &nbsp; Favourite
        </MenuItem>
        <MenuItem onClick={handleSave} style={{ fontSize: 14 }}>
          <CloudDownloadIcon style={{ fontSize: 18 }} />
          &nbsp; Download
        </MenuItem>
      </Menu>
    </div>
  );
}
