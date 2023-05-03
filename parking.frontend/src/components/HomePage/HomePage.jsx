import React from "react";
import './HomePage.css'
import ParkingLot from "../ParkingLot/ParkingLot";

const HomePage = () => {

    return (
        <>
            <div className="main-container">
                <p className="upper-text">parking app</p>
                <div className="parking-lot-container">
                    <div className="parking-space-left">
                        <ParkingLot/>
                        <ParkingLot/>
                        <ParkingLot/>
                        <ParkingLot/>
                        <ParkingLot/>
                    </div>
                    <div className="parking-space-right">
                        <ParkingLot/>
                        <ParkingLot/>
                        <ParkingLot/>
                        <ParkingLot/>
                        <ParkingLot/>
                    </div>
                </div>
                <p className="lower-text">Momentan sunt 8 locuri disponibile</p>
            </div>
        </>
    );
};

export default HomePage;