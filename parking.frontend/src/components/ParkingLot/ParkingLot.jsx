import React from "react";
import './ParkingLot.css'

const ParkingLot = () => {

    const [active, setActive] = React.useState(true);

    const handleClick = () => {
        setActive(!active);
    }
    return (
        <button className="parking-space-button"
                onClick={handleClick}
                style={{backgroundColor: active ? "#379634" : "#FF1B1C"}}
        >
            press</button>
    );
};

export default ParkingLot;