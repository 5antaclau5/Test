import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import FetchData from './components/FetchData';
import Heros from './components/Heros';
import Posts from './components/Posts';
import Areatriangle from './components/Areatriangle';

import './custom.css'


export default () => (
    <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/Heros' component={Heros} />
        <Route path='/Posts' component={Posts} />
        <Route path='/Areatriangle' component={Areatriangle} />
        <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
    </Layout>
);
