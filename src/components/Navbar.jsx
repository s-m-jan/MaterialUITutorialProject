
import { Mail, Notifications, Pets } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Icon,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";

import React, { useState } from "react";

const StyledToolbar = styled(Toolbar)(({theme}) => ({
  display: "flex",
  justifyContent: "space-between",
}));

const Search = styled("div")(({theme}) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: "5px",
  width: "40%",
}));

const Icons = styled(Box)(({theme}) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up('sm')]: {
    display: "flex",
  }
  
}));

const UserBox = styled(Box)(({theme}) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up('sm')]: {
    display: "none",
  }
}));

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <AppBar sx={{ position: "sticky" }}>
      <StyledToolbar>
        <Typography
          variant="h6"
          sx={{ padding: "20px", display: { xs: "none", sm: "block" } }}
        >
          Lama Dev
        </Typography>
        <Pets sx={{ display: { padding: "10px", xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search" />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error" >
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error" >
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: "30px", height: "30px" }}
            src="https://img.freepik.com/premium-photo/closeup-young-african-american-woman-looking-cameragenerated-with-ai_251317-2064.jpg?w=740"
            onClick={e=>setOpen(true)}
          />
        </Icons>
        <UserBox onClick={e=>setOpen(true)}>
        <Avatar
            sx={{ width: "30px", height: "30px" }}
            src="https://img.freepik.com/premium-photo/closeup-young-african-american-woman-looking-cameragenerated-with-ai_251317-2064.jpg?w=740"
           
          />
          <Typography variant="span">
            Emilly
          </Typography>
        </UserBox >
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e)=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
