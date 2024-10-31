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
                <div className="eve">
                    <EveModel></EveModel>
                </div>
            </div>
        );
    }
}

export default Eve;