import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import PeopleIcon from "@material-ui/icons/People";
import PublicIcon from "@material-ui/icons/Public";
// import SettingsInputComponentIcon from '@material-ui/icons/SettingsInputComponent';
// import TimerIcon from '@material-ui/icons/Timer';
// import SettingsIcon from '@material-ui/icons/Settings';
// import PhonelinkSetupIcon from '@material-ui/icons/PhonelinkSetup';
import { withRouter } from "react-router-dom";
import Icon from "@material-ui/core/Icon";

const categories = [
  {
    id: "Sandėlių valdymas",
    children: [
      {id: "Pagrindinis", icon: <Icon>dashboard</Icon>, link: "/home-admin"},
      {
        id: "Naujas inventoriaus įrašas",
        icon: <Icon>assignment</Icon>,
        link: "/create-new-inventory"
      },
      {id: "Inventorius", icon: <Icon>all_inbox</Icon>, link: "/inventory-items"},
      {id: "Inventoriaus ataskaitos", icon: <Icon>all_inbox</Icon>, link: "/inventory-items-reports"},
    ]

  },
  {
    id: "Klientai",
    children: [
      { id: "Klientai", icon: <PeopleIcon />, link: "/users" },
      { id: "Kliento inventorius", icon: <PublicIcon />, link: "/inventoryItems" }
      ]
  }
];

const styles = theme => ({
  categoryHeader: {
    paddingTop: 16,
    paddingBottom: 16
  },
  categoryHeaderPrimary: {
    color: theme.palette.common.white
  },
  item: {
    paddingTop: 4,
    paddingBottom: 4,
    color: "rgba(255, 255, 255, 0.7)"
  },
  itemCategory: {
    backgroundColor: "#1c938b",
    boxShadow: "0 -1px 0 #404854 inset",
    paddingTop: 16,
    paddingBottom: 16
  },
  firebase: {
    fontSize: 24,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.common.white
  },
  itemActionable: {
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.08)"
    }
  },
  itemActiveItem: {
    color: "#126e67"
  },
  itemPrimary: {
    color: "inherit",
    fontSize: theme.typography.fontSize,
    "&$textDense": {
      fontSize: theme.typography.fontSize
    }
  },
  textDense: {},
  divider: {
    marginTop: theme.spacing.unit * 2
  }
});

function Navigator(props) {
  const { classes, history, ...other } = props;

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem
          className={classNames(
            classes.firebase,
            classes.item,
            classes.itemCategory
          )}
        >
          Sandėliukai
        </ListItem>
        <ListItem className={classNames(classes.item, classes.itemCategory)}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText
            classes={{
              primary: classes.itemPrimary
            }}
          >
            Sandėlių valdymo sistema
          </ListItemText>
        </ListItem>
        {categories.map(({ id, children }) => (
          <React.Fragment key={id}>
            <ListItem className={classes.categoryHeader}>
              <ListItemText
                classes={{
                  primary: classes.categoryHeaderPrimary
                }}
              >
                {id}
              </ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, active, link }) => (
              <ListItem
                button
                dense
                onClick={() => {
                  history.push(link);
                }}
                key={childId}
                className={classNames(
                  classes.item,
                  classes.itemActionable,
                  active && classes.itemActiveItem
                )}
              >
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.itemPrimary,
                    textDense: classes.textDense
                  }}
                >
                  {childId}
                </ListItemText>
              </ListItem>
            ))}
            <Divider className={classes.divider} />
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
}

Navigator.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(Navigator));
