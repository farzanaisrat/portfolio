import React from "react";
import EveModel from "./evemodel.js";
import "../../styles/EveModel.css"

class Eve extends React.Component {
    constructor() {
      super();
      this.state = {
      }; 
    }

    

    render() {

        return (
            <div id="eve-model">
                <EveModel></EveModel>
            </div>
        );
    }
}

export default Eve;