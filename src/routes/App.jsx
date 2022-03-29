import React from 'react';
import Layout from '../containers/Layout';
import ServiceList from '../pages/ServiceList';

const App = () => {
    return(
        <Layout>
           <ServiceList></ServiceList>
        </Layout>
        
    );
};

export default App;