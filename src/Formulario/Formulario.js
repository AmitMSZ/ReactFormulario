import React from "react";
import Select from "../Select/Select";

class Formulario extends React.Component {
    render(props) { 
        let item = [
            {key:1,marca:'Hiundai'},
            {key:2,marca:'Nissan'},
            {key:3,marca:'Ford'},
            {key:4,marca:'Chevrolet'}
        ]
        return (
            <div>
                <Select item={item} name="marca"/>  
                <Select item={item} name="modelo"/> 
            </div>
        );
    }
}

export default Formulario;