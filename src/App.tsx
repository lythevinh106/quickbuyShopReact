import React, { Fragment, ReactElement, ReactHTMLElement, ReactNode } from 'react';
import logo from './logo.svg';

import { Route, Router, Routes, useRoutes } from 'react-router-dom';

import { routeElement, routesPublic } from './routes/routes';
import DefaultLayout from './Layout/DefaultLayout/DefaultLayout';
import Home from './pages/Home/Home';
import Process from 'UtilComponent/Process';
import DetailProduct from 'pages/DetailProduct/DetailProduct';
import PageProduct from 'pages/PageProduct/PageProduct';

function App() {



  let element = useRoutes(routesPublic.map((route: routeElement, index) => {
    return {
      path: route.path,
      element: <route.layoutMode><route.element></route.element></route.layoutMode>

    }

  }));









  return (

    <div className='App'>




      <Process></Process>
      <DetailProduct />

      <PageProduct>

      </PageProduct>



      {element}

    </div>
  );


}






export default App;
