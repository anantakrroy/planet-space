import React from "react";

class Planet extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.planet.name}</p>
            </div>
        )
    }
}

export default Planet