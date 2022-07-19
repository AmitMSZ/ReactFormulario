import React from "react";
class Select extends React.Component {
    render(props) { 
        return (
            <div>
                <p>Seleccione {this.props.name}</p>
                <select>
                    {this.props.item.map(item =>{
                        return (<option key={item.key}>{item.marca}</option>)
                    })}
                </select>
            </div>
        );
    }
}

export default Select;