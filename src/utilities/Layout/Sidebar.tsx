import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { SidebarProps } from "./types";

const useStyles = makeStyles({
  sidebarContainer: {
    width: "100%",
    height: "100vh",
  },
  list: {
    bgcolor: "background.paper",
  },
});
function Sidebar(props: SidebarProps) {
  const { isMd } = props;
  const { setDrawerOpen } = props;
  const [menuItems, setMenuItems] = React.useState(
    props.intialMenuOptions || []
  );
  const [activeMenu, setActiveMenu] = React.useState("Products");
  const [open, setOpen] = React.useState(false); // menu open close
  const classes = useStyles();

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const routeName = window.location.pathname.split("/")[1];

    menuItems.map((route) => {
      if (route.name.toLowerCase() === routeName.toLowerCase()) {
        setActiveMenu(route.name);
      }
      // TODO: sub Menu item and its pages should be active when on sub page
      route.subMenu?.map((subRoute) => {
        if (subRoute.link === window.location.pathname) {
          setActiveMenu(subRoute.name);
          setOpen(true);
        }
      });
    });
  }, [window.location.pathname]);

  return (
    <Grid
      container
      className={classes.sidebarContainer}
      sx={{ boxShadow: isMd ? 0 : 1 }}
    >
      <Grid item xs={12}>
        <List className={classes.list} component="nav">
          {menuItems?.map((item) => {
            if (item.subMenu) {
              return (
                <React.Fragment key={item.name}>
                  <ListItemButton
                    component={Link}
                    to={item.link}
                    selected={activeMenu === item.name}
                    onClick={() => {
                      setActiveMenu(item.name);
                      // TODO: BELOW IS NOT WORKING
                      if (setDrawerOpen) setDrawerOpen(false);
                      handleClick();
                    }}
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.name} />
                    {open ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {item.subMenu.map((subItem) => {
                        return (
                          <ListItemButton
                            key={subItem.name}
                            component={Link}
                            to={subItem.link}
                            selected={activeMenu === subItem.name}
                            onClick={() => {
                              if (setDrawerOpen) setDrawerOpen(false);
                              setActiveMenu(subItem.name);
                            }}
                            sx={{ pl: 4 }}
                          >
                            <ListItemIcon>{subItem.icon}</ListItemIcon>
                            <ListItemText primary={subItem.name} />
                          </ListItemButton>
                        );
                      })}
                    </List>
                  </Collapse>
                </React.Fragment>
              );
            } else {
              return (
                <ListItemButton
                  key={item.name}
                  component={Link}
                  to={item.link}
                  selected={activeMenu === item.name}
                  onClick={() => setActiveMenu(item.name)}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              );
            }
          })}
        </List>
      </Grid>
    </Grid>
  );
}

export default Sidebar;
