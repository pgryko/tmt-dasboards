import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/auth';
import DatePicker from 'material-ui/DatePicker';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';


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
class Analytics extends React.Component { // eslint-disable-line react/prefer-stateless-function
      constructor(props) {
        super(props);

        const curDate = new Date();
        curDate.setFullYear(curDate.getFullYear() - 1);
        curDate.setHours(0, 0, 0, 0);

        this.state = {
          curDate: curDate,
        };
      }

    handleChangeCurDate = (event, date) => {
        this.setState({
          curDate: date,
        });
      };

    render() {
        return (
            <div>
            <div>
            <div className="col-md-8">
                <h1>Analytics</h1>
                <hr />
            </div>
                              <div>
                    <DatePicker 
                     onChange={this.handleChangecurDate}
                    floatingLabelText="Date"
                    defaultDate={this.state.curDate}
                    mode="landscape" />
                  </div>
            </div>
            <div className="col-md-8">
            <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderColumn>ID</TableHeaderColumn>
                <TableHeaderColumn>Name</TableHeaderColumn>
                <TableHeaderColumn>Status</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableRowColumn>1</TableRowColumn>
                <TableRowColumn>John Smith</TableRowColumn>
                <TableRowColumn>Employed</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>2</TableRowColumn>
                <TableRowColumn>Randal White</TableRowColumn>
                <TableRowColumn>Unemployed</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>3</TableRowColumn>
                <TableRowColumn>Stephanie Sanders</TableRowColumn>
                <TableRowColumn>Employed</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>4</TableRowColumn>
                <TableRowColumn>Steve Brown</TableRowColumn>
                <TableRowColumn>Employed</TableRowColumn>
              </TableRow>
            </TableBody>
          </Table>
            </div>
            </div>
        );
    }
}

export default Analytics;
