import { FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import React from "react";
class Selects extends React.Component {
    render(props) {
        return (
            <div>
                {this.props.item === undefined && <p>No se cargaron datos</p>}
                {this.props.item !== undefined &&
                    <FormControl sx={{m:1, minWidth: 100}} >
                        <InputLabel id='demo-simple-select-label'>{this.props.name}</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label={this.props.name}
                            autoWidth
                            onChange={(event) => this.props.change(event)}>
                            {this.props.name === 'Marca' ? this.props.item.map(item => {
                                return (
                                    <MenuItem value={item.key} key={item.key}>{item.marca}</MenuItem>
                                )
                            }):this.props.item.map(item => {
                                return(
                                    <MenuItem value={item.key} key={item.key}>{item.modelo}</MenuItem>
                                )})
                            }
                        </Select>
                    </FormControl>
                }
            </div>
        );
    }
}


export default Selects;