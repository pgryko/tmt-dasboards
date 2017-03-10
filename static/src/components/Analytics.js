import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/auth';
import DatePicker from 'material-ui/DatePicker';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Receiving from './Performance/Receiving';
import MixedDataExample from './Performance/MixedChart';


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
            <div>
                <h1>Analytics</h1>
                <div 
                style={{
                  position: 'right' 
                }}
                >
                    <DatePicker 
                     onChange={this.handleChangecurDate}
                    floatingLabelText="Select Date"
                    defaultDate={this.state.curDate}
                    mode="landscape" />
                  </div>
                <hr />
            </div>
            </div>
            <div >
            <MixedDataExample
            />
            <Receiving/>
            </div>
            </div>
        );
    }
}

export default Analytics;
