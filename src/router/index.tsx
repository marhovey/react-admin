import React from 'react';
import {Switch} from 'react-router-dom';
import {routeConfig} from './routerConfig';
import {SubRoute} from './subRoute';
export const MyRouter = function() {
  return (
    <Switch>
      {
        routeConfig.map(route => {
          return <SubRoute key={route.id} {...route} />
        })
      }
    </Switch>
  )
}