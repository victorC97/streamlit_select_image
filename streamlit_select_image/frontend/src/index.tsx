import React from "react"
import ReactDOM from "react-dom"
import SelectImage from "./SelectImage"
declare module "*.png"

ReactDOM.render(
  <React.StrictMode>
    <SelectImage />
  </React.StrictMode>,
  document.getElementById("root")
)
