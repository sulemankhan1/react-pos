import React from "react";
import {
  Grid,
  Card,
  CardContent,
  useMediaQuery,
  useTheme,
  SwipeableDrawer,
} from "@mui/material";

//icons
import InventoryIcon from "@mui/icons-material/Inventory";
import CategoryIcon from "@mui/icons-material/Category";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ReceiptIcon from "@mui/icons-material/Receipt";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SupervisedUserCircleOutlinedIcon from "@mui/icons-material/SupervisedUserCircleOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import ContactPhoneOutlinedIcon from "@mui/icons-material/ContactPhoneOutlined";
import HomeIcon from "@mui/icons-material/Home";

import { DashboardLayoutProps } from "./types";
import Sidebar from "./Sidebar";
import TopNav from "./TopNav";

const initialMenuOptions = [
  {
    name: "Dashboard",
    active: false,
    link: "/",
    icon: <HomeIcon />,
  },
  {
    name: "Products",
    active: false,
    link: "/products",
    icon: <InventoryIcon />,
  },
  {
    name: "Categories",
    active: false,
    link: "/categories",
    icon: <CategoryIcon />,
  },
  {
    name: "Sales",
    active: true,
    link: "/sales",
    icon: <MonetizationOnIcon />,
  },
  {
    name: "Purchases",
    active: false,
    link: "/purchases",
    icon: <ReceiptIcon />,
  },
  {
    name: "Returns",
    active: false,
    link: "/returns",
    icon: <KeyboardReturnIcon />,
  },
  {
    name: "People",
    active: false,
    link: "",
    icon: <PeopleAltIcon />,
    subMenu: [
      {
        name: "Customers",
        active: false,
        link: "/people/customers",
        icon: <SupervisedUserCircleOutlinedIcon />,
      },
      {
        name: "Users",
        active: false,
        link: "/people/users",
        icon: <BadgeOutlinedIcon />,
      },
      {
        name: "Suppliers",
        active: false,
        link: "/people/suppliers",
        icon: <ContactPhoneOutlinedIcon />,
      },
    ],
  },
];

function DashboardLayout(props: DashboardLayoutProps) {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <TopNav isMd={isMd} setDrawerOpen={setDrawerOpen} />
      <Grid container direction="row">
        {!isMd ? (
          <Grid item xs={2.5}>
            <Sidebar isMd={isMd} intialMenuOptions={initialMenuOptions} />
          </Grid>
        ) : (
          <SwipeableDrawer
            anchor="left"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            onOpen={() => setDrawerOpen(true)}
          >
            <Sidebar
              setDrawerOpen={setDrawerOpen}
              isMd={isMd}
              intialMenuOptions={initialMenuOptions}
            />
          </SwipeableDrawer>
        )}
        <Grid item xs={isMd ? 12 : 9.5} p={2}>
          <Card sx={{ width: "100%" }}>
            <CardContent>{props.children}</CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default DashboardLayout;
