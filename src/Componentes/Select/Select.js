import React from "react";
class Select extends React.Component {
    render(props) {
        return (
            <div>
                <label>Seleccione {this.props.name}</label>
                {this.props.item === undefined && <p>No se cargarom datos</p>}
                {this.props.item !== undefined && 
                    <select>
                        {this.props.name === 'marca' ? this.props.item.map(item => {
                            return (
                                <option id={item.key} key={item.key}>{item.marca}</option>
                            )
                        }):this.props.item.map(item => {
                            return(
                                <option key={item.key}>{item.modelo}</option>
                            )})
                        }
                    </select>
                }
            </div>
        );
    }
}

export default Select;