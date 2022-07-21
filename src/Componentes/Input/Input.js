import React from "react";
class Input extends React.Component {
    render(props) {
        return (
            <div>
                <p>Debe ingresar {this.props.name}</p>
                <input onChange={(event) => this.props.change(event)} type={this.props.type}></input>
            </div>
        );
    }
}

export default Input;