import { AppBar, Avatar, IconButton,Box,Tooltip,Menu,TextField, InputBase,Button, MenuList,MenuItem,Divider,ListItemIcon} from '@mui/material'
// import './Home.css'
import React from 'react'
import HotelIcon from '@mui/icons-material/Hotel';
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import {Logout,Settings,PersonAdd} from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
function Home() {
    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
    <AppBar className='appbar1' sx={{ bgcolor: "#66FFB2" }}>
        <ol>
            <ul>
   
    <HomeIcon sx={{ fontSize: 35,color:"black" }}className='just'></HomeIcon>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <HotelIcon  sx={{ fontSize:  35 ,color:"black"  }} className='just'></HotelIcon>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <CategoryIcon  sx={{ fontSize: 35 ,color:"black" }} className='just'></CategoryIcon>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <LocalOfferIcon sx={{ fontSize: 35,color:"black"  }} className='just'></LocalOfferIcon>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <RecentActorsIcon sx={{ fontSize: 35,color:"black"  }} className='just'></RecentActorsIcon>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

   <div className='jhk'>
    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
       <Tooltip title="Account">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 ,bgcolor : "black"  }}>B</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <FavoriteIcon>
            <Settings fontSize="small" />
          </FavoriteIcon>
          &nbsp;&nbsp;&nbsp;Favorites
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <BookmarkBorderIcon>
            <Settings fontSize="small" />
          </BookmarkBorderIcon>
          &nbsp;&nbsp;&nbsp;Favorites
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
      </div>
            </ul> 

        </ol>      
   
    </AppBar><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
   <div className='sc1'>

   <input type='search' placeholder='Search a...' className='search1'></input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <Button variant="contained" className='homebutton1' sx={{ fontSize: 22 ,bgcolor: "#66FFB2",color:"black"}}>Search</Button><br></br><br></br>
   </div>
   <div className='homecard1'>
  
    <Card sx={{ maxWidth: 345 }}>
      <div>
      <CardMedia
        sx={{ height: 140 }}
       image="https://st2.indiarailinfo.com/kjfdsuiemjvcya3/0/4/2/0/4524420/0/img0558017973343.jpg"
        title="sivakasi"
      /></div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Sivakasi
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Sivakasi is the most powerful place of india because in this place privoied cakaras and in this place is called "KUTTY JAPPAN" of the world.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://i.ytimg.com/vi/FSG0f5c-_xo/maxresdefault.jpg"
        title="sivakasi"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Madurai
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Madurai is an energetic, ancient city on the Vaigai River in the South Indian state of Tamil Nadu. Its skyline is dominated by the 14 colorful gopurams (gateway towers) of Meenakshi Amman Temple. 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://st2.indiarailinfo.com/kjfdsuiemjvcya3/0/4/2/0/4524420/0/img0558017973343.jpg"
        title="sivakasi"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Sivakasi
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Sivakasi is the most powerful place of india because in this place privoied cakaras and in this place is called "KUTTY JAPPAN" of the world.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://st2.indiarailinfo.com/kjfdsuiemjvcya3/0/4/2/0/4524420/0/img0558017973343.jpg"
        title="sivakasi"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Sivakasi
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Sivakasi is the most powerful place of india because in this place privoied cakaras and in this place is called "KUTTY JAPPAN" of the world.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
   
   </div>
    </>
  )
}

export default Home