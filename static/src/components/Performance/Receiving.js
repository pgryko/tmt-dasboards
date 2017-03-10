import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/auth';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
/* Table describing item recieving performance */

function mapStateToProps(state) {
    return {
        isRegistering: state.auth.isRegistering,
        registerStatusText: state.auth.registerStatusText,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

@connect(mapStateToProps, mapDispatchToProps)
class Receiving extends React.Component { // eslint-disable-line react/prefer-stateless-function
      constructor(props) {
        super(props);
      }

    render() {
        return (
            <div>
            <Table
          fixedHeader={true}
          fixedFooter={true}
          selectable={true}
            >
            <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
            enableSelectAll={false}
            >
              <TableRow>
                <TableHeaderColumn>Hours</TableHeaderColumn>
                <TableHeaderColumn>Time</TableHeaderColumn>
                <TableHeaderColumn>Target Totals <br/> Hours</TableHeaderColumn>
                <TableHeaderColumn> <br/> Cumul</TableHeaderColumn>
                <TableHeaderColumn>Actual Totals <br/> Hours</TableHeaderColumn>
                <TableHeaderColumn><br/> Cumul</TableHeaderColumn>
                <TableHeaderColumn>Change +/- <br/> Hour</TableHeaderColumn>
                <TableHeaderColumn><br/>Cumul</TableHeaderColumn>
                <TableHeaderColumn> <br/>%</TableHeaderColumn>
                <TableHeaderColumn>MDI </TableHeaderColumn>
                <TableHeaderColumn>Remarks</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody
            displayRowCheckbox={false}
            >
              <TableRow>
                <TableRowColumn>6-7</TableRowColumn>
                <TableRowColumn>0.9</TableRowColumn>
                <TableRowColumn>527</TableRowColumn>
                <TableRowColumn>527</TableRowColumn>
                <TableRowColumn>514</TableRowColumn>
                <TableRowColumn>514</TableRowColumn>
                <TableRowColumn>-13</TableRowColumn>
                <TableRowColumn>-13</TableRowColumn>
                <TableRowColumn>-2%</TableRowColumn>
                <TableRowColumn><TextField/> </TableRowColumn>
                <TableRowColumn><TextField/> </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>7-8</TableRowColumn>
                <TableRowColumn>1</TableRowColumn>
                <TableRowColumn>527</TableRowColumn>
                <TableRowColumn>527</TableRowColumn>
                <TableRowColumn>514</TableRowColumn>
                <TableRowColumn>514</TableRowColumn>
                <TableRowColumn>-13</TableRowColumn>
                <TableRowColumn>-13</TableRowColumn>
                <TableRowColumn>-2%</TableRowColumn>
                <TableRowColumn><TextField/> </TableRowColumn>
                <TableRowColumn><TextField/> </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>8-9</TableRowColumn>
                <TableRowColumn>1</TableRowColumn>
                <TableRowColumn>527</TableRowColumn>
                <TableRowColumn>527</TableRowColumn>
                <TableRowColumn>514</TableRowColumn>
                <TableRowColumn>514</TableRowColumn>
                <TableRowColumn>-13</TableRowColumn>
                <TableRowColumn>-13</TableRowColumn>
                <TableRowColumn>-2%</TableRowColumn>
                <TableRowColumn><TextField/> </TableRowColumn>
                <TableRowColumn><TextField/> </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>9-10</TableRowColumn>
                <TableRowColumn>0.5</TableRowColumn>
                <TableRowColumn>527</TableRowColumn>
                <TableRowColumn>527</TableRowColumn>
                <TableRowColumn>514</TableRowColumn>
                <TableRowColumn>514</TableRowColumn>
                <TableRowColumn>-13</TableRowColumn>
                <TableRowColumn>-13</TableRowColumn>
                <TableRowColumn>-2%</TableRowColumn>
                <TableRowColumn><TextField/> </TableRowColumn>
                <TableRowColumn><TextField/> </TableRowColumn>
              </TableRow>
            </TableBody>
          </Table>
            </div>
        );
    }
}

export default Receiving;
