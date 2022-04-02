import React from "react";
import { Link } from 'react-router-dom';


const ServiceDetail = (props) => {
    const {id, nombre, vbase, tolerancia} = props;
    return (
        <Link to={`/servicio-especifico/${id}`}>
            <div className="items-body-content">
                
                <span>{nombre}</span>
               
                <i className="fa fa-angle-right"></i>
            </div>
        </Link>
    );
};

export default ServiceDetail;