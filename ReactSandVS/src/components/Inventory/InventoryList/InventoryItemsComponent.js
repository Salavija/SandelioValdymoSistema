import React, { Component } from "react";
import PropTypes from "prop-types";
import InventoryItemContainer from "./InventoryItemContainer";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import Paper from "@material-ui/core/Paper";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TablePaginationActionsWrapped from "../../../helpers/TablePaginationActions";
import TableFooter from "@material-ui/core/TableFooter";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
});

class InventoryItemsComponent extends Component {
  render() {
    const { classes } = this.props;
    const { inventoryItems, rowsPerPage, page } = this.props;
    const emptyRows =
      rowsPerPage -
      Math.min(rowsPerPage, inventoryItems.length - page * rowsPerPage);
    return (
      <Paper className={classes.root}>
        <div
          style={{
            marginLeft: "0.8rem",
            marginTop: "0.6 rem",
            marginBottom: "0.5 rem"
          }}
        >
            <Typography variant="h6" id="tableTitle">
              Sukurti inventoriaus įrašai
            </Typography>
        </div>
        <div className={classes.tableWrapper}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Nr.</TableCell>
                <TableCell>Pavadinimas</TableCell>
                <TableCell>Svoris</TableCell>
                <TableCell>Sektorius</TableCell>
                <TableCell>Data</TableCell>
                <TableCell>Atsisiųsti atakaitą</TableCell>
                <TableCell align="center">Veiksmai</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.inventoryItems
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(inventoryItem => (
                  <InventoryItemContainer
                    onInventoryItemDeleted={this.props.onInventoryItemDeleted}
                    onInventoryItemSubmitted={this.props.onInventoryItemSubmitted}
                    inventoryItem={inventoryItem}
                    title={inventoryItem.title}
                    weight={inventoryItem.weight}
                    sector={inventoryItem.sector}
                    date={inventoryItem.date}
                    id={inventoryItem.id}
                  />
                ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 48 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TableFooter>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            colSpan={3}
            count={inventoryItems.length}
            rowsPerPage={rowsPerPage}
            page={page}
            SelectProps={{
              native: true
            }}
            onChangePage={this.props.handleChangePage}
            onChangeRowsPerPage={this.props.handleChangeRowsPerPage}
            ActionsComponent={TablePaginationActionsWrapped}
          />
        </TableFooter>
      </Paper>
    );
  }
}
InventoryItemsComponent.propTypes = {
    inventoryItems: PropTypes.array.isRequired
};
export default withStyles(styles)(InventoryItemsComponent);
