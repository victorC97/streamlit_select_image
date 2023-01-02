import {
  Streamlit, StreamlitComponentBase,
  withStreamlitConnection,
} from "streamlit-component-lib";
import React from "react";
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from "@mui/material/Select"
import { Box, CardMedia, FormControl, InputLabel } from "@mui/material"

class SelectImage extends StreamlitComponentBase {

  state = { back: [], options: this.props.args.options, images: this.props.args.images, value: this.props.args.default}

  componentDidMount() {
    const back: any[] = [];
    for (let i=0; i < this.state.options.length; i++) {
      back.push({option: this.state.options[i], image: this.state.images[i]});
    }
    this.setState((prev, state) => ({
      back: back,
    }), () => Streamlit.setComponentValue(this.state.value))
  }

  handleChange = (event: SelectChangeEvent) => {
    this.setState((prev, state) => ({
      value: event.target.value
    }),
      () => Streamlit.setComponentValue(this.state.value)
    )
  }

  render = () => {
    if (this.props.args["label"] !== "") {
      return (
        <Box sx={{minHeight: 200, marginTop: 2}}>
          <FormControl fullWidth>
            <InputLabel id="image-select-label">{this.props.args["label"]}</InputLabel>
            <Select
              labelId="image-select-label"
              id="image-select"
              value={this.state.value}
              label="Image"
              onChange={this.handleChange}
              autoWidth
              sx={{ maxHeight: 150, maxWidth: 150}}
            >
              {this.state.back.map(({ image, option }) => (
                <MenuItem
                  value={option}
                  key={option}
                  sx={{paddingLeft: 0, maxHeight: 150, maxWidth: 150}}
                >
                  <img alt={option} src={image} height={"100%"} width={"100%"}/>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      );
    } else {
      return (
        <Box sx={{minHeight: 200, marginTop: 2}}>
          <FormControl fullWidth>
            <Select
              labelId="image-select-label"
              id="image-select"
              value={this.state.value}
              onChange={this.handleChange}
            >
              {this.state.back.map(({ image, option }) => (
                <MenuItem sx={{justifyContent: "flex-end"}} value={option}><img alt={option} src={image} height={"100px"} width={"100px"}/></MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      );
    }
  }

}

export default withStreamlitConnection(SelectImage)