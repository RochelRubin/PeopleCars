import React from 'react';
import { Route } from 'react-router-dom';
import AddPersonPage from './AddPersonPage';
import AddCar from './AddCar';
import DeleteCars from './DeleteCar';
import PeopleTable from'./PersonTable';
import Layout from './Layout';


const App = () => {
    return (
        <Layout>
            <Route exact path='/' component={PeopleTable} />
            <Route exact path='/addcar/:id' component={AddCar} />
            <Route exact path='/deletecars/:id' component={DeleteCars} />
            <Route exact path='/addperson' component={AddPersonPage} />
        </Layout>
    )
}

export default App;