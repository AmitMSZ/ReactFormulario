import React from "react";
class Input extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count:0
        }
    }
    render(props) {

        var valor = ''
        
        let handleChange = (event) => {
            valor = event.target.value
        }
        let handleClick = () => {
            alert(valor)
        }
        return (
            <div>
                <p>El contador esta en {this.state.count}</p>
                <button onClick={() => this.setState({count: this.state.count+1}) }>sumar</button>

                <p>Debe ingresar {this.props.name}</p>
                <input onChange={(event) => handleChange(event)} type={this.props.type}></input>
                <button onClick={handleClick}>Click</button>
            </div>
        );
    }
}

export default Input;