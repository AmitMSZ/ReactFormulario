import React from "react";
import Select from "../Select/Select";
import Input from "../Input/Input";

class Formulario extends React.Component {
    render(props) { 
        let item = [
            {key:1,marca:'Hyundai', modelo:'Accent'},
            {key:2,marca:'Nissan', modelo: '370Z'},
            {key:3,marca:'Ford', modelo: 'Raptor'},
            {key:4,marca:'Chevrolet', modelo: 'Silverado'}
        ]
        return (
            <div>
                <Input type="text"name ="Patente"/>
                <Input type="number" name ="Año"/>
                
                <Select item={item} name="marca"/> 
                <Select item={item} name="modelo"/>
            </div>
        );
    }
}

export default Formulario;