import React from 'react';
import {Route} from 'react-router-dom';

export const SubRoute = (route) => {
  return (
    <Route
      key={route.id}
      path={route.path}
      exact={route.exact}
      render={(props) => 
        <route.component
          name={route.name}
          id={route.id}
          {...props}
          routes={route.routes || []}
        />
      }
    />
  )
}