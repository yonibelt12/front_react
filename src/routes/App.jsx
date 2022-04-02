import React from 'react';
import Layout from '../containers/Layout';
import ServiceList from '../pages/ServiceList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SpecificServiceDetail from '../pages/SpecificServiceDetail';
import Login from '../pages/Login';
import useInitialState from '../hooks/useInitialState';
import AppContext from '../context/AppContext';

const App = () => {
    const initialState = useInitialState();
    return(
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<Layout>Hola Soy el Home de la App</Layout>} />
                        <Route exact path="/login" element={<Layout><Login /></Layout>} />
                        <Route exact path="/listado" element={<Layout><ServiceList /></Layout>} />
                        <Route exact path="/servicio-especifico" element={<Layout><SpecificServiceDetail /></Layout>} />
                        <Route exact path="/servicio-especifico/:id" element={<Layout><SpecificServiceDetail /></Layout>} />
                    </Routes>
            </BrowserRouter>
        </AppContext.Provider>

        //<Layout>
        //   <ServiceList></ServiceList>
        //</Layout>
        
    );
};

export default App;