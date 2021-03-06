import React, {useContext, useEffect, useState} from "react";
import ServiceDetail from '../components/ServiceDetail';
import AppContext from "../context/AppContext";

import endpoints from '../settings/endpoints';
import '../styles/ServiceList.css';

const ServiceList = () => {
    const {updateServiceList} = useContext(AppContext);
    const [list, setList] = useState([]);
    useEffect(() => {
        const url = endpoints.characterEndpoint;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const {results} = data;
                //console.log(Array.isArray(data));
              
                
                if (Array.isArray(data) && data.length >= 1) {
                    const finalResult = data;
                    //console.log(finalResult);
                    setList(finalResult);
                    updateServiceList(finalResult);
                } else {
                    setList([]);
                }
            })
            .catch(error => {
                console.error('Error obteniendo datos del api: ', error);
                setList([]);
            });
    }, []);
    
    return(
        <div className="container">
        <div className="items">
          <div className="items-head">
            <p>Lista de Servicios</p>
            <hr/>
          </div>
          
          <div className="items-body">

            {(()=>{
                    const options = list.map(m=>{
                        return <ServiceDetail nombre={m.nombre} id={m.id} key={m.id} vbase={m.vbase} tolerancia={m.tolerancia}></ServiceDetail>
                      });
 
                    return options;
                })()}
            
          </div>
        </div>
      </div>
    );
};

export default ServiceList;