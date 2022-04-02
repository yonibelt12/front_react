import React, {useContext} from 'react';
import AppContext from '../context/AppContext';
import { useParams } from 'react-router-dom';

const SpecificServiceDetail = () => {
    const {state} = useContext(AppContext);
    const {id} = useParams();
    const serviceDetail= state.serviceList.find(f=> f.id === Number(id));
    //const serviceDetail = state.serviceList.find(f => f.id === Number(id));
    console.log(serviceDetail);

    return(
        <>
            {
                serviceDetail &&
                <div>
                    <span> {serviceDetail.nombre}</span>
                    <span> {serviceDetail.id}</span>
                    <span> {serviceDetail.vbase}</span>
                    <span> {serviceDetail.tolerancia}</span>
                    
                </div>
            }
        </>
    );
};

export default SpecificServiceDetail;