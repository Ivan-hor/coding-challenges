import React, { useState } from 'react';
import ReactDOM from 'react-dom';


export default class AppClass extends Component {

    state = {
        switchButton: "Off"
    }

    handleClick() {
        if (this.state.switchButton === "Off") {
            this.setState({switchButton: "On"})
        } else {
            this.setState({switchButton: "Off"})
        }
    }


    render() {

        return (
            <button onClick={()=> this.handleClick()}>
                {this.state.switchButton}
            </button>
        );
    }
}
ReactDOM.render(
    <AppClass />,
    document.getElementById('root')
);