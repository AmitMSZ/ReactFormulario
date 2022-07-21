import React from "react";
import Selects from "../Select/Select";
import Input from "../Input/Input";
import { Button, Container } from "@mui/material";
import './Formulario.css'
class Formulario extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            patente: '',
            ano: 0,
            marca:'',
            modelo:''
        }
        this.handleChangePatente = this.handleChangePatente.bind(this)
        this.handleChangeAno = this.handleChangeAno.bind(this)
        this.handleChangeMarca = this.handleChangeMarca.bind(this)
        this.handleChangeModelo = this.handleChangeModelo.bind(this)
        this.handleSendForm = this.handleSendForm.bind(this)

    }
    handleChangePatente = (event) =>{
        this.setState({
            patente : event.target.value
        })
    }
    handleChangeAno = (event) =>{
        this.setState({
            ano : event.target.value
        })
    }
    handleChangeMarca = (event) =>{
        this.setState({
            marca : event.target.value
        })
    }
    handleChangeModelo = (event) =>{
        this.setState({
            modelo : event.target.value
        })
    }
    handleSendForm = () =>{
        console.log(this.state)
    }
    render(props) { 
        let item = [
            {key:1,marca:'Hyundai', modelo:'Accent'},
            {key:2,marca:'Nissan', modelo: '370Z'},
            {key:3,marca:'Ford', modelo: 'Raptor'},
            {key:4,marca:'Chevrolet', modelo: 'Silverado'}
        ]
        

        return (
                <Container className="contenedor1">
                    <Input type="text" name ="Patente" change={this.handleChangePatente}/>
                    <Input type="number" name ="Año" change={this.handleChangeAno}/>
                    <Selects item={item} name="Marca" change={this.handleChangeMarca}/> 
                    <Selects item={item} name="Modelo" change={this.handleChangeModelo}/>
                    <Button variant="outlined" color= "primary" onClick={this.handleSendForm}>Enviar</Button>
                </Container>
        );
    }
}

export default Formulario;