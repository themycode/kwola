import React, { Component, lazy, Suspense } from 'react';
import Route from '../../components/utility/customRoute';
import Loader from '../../components/utility/Loader/';

const routes = [
  {
    path: '',
    component: lazy(() => import('../Dashboard')),
  },
  {
    path: 'new-application',
    component: lazy(() => import('../NewApplication')),
  },
  {
    path: 'applications',
    component: lazy(() => import('../ListApplications')),
  },
  {
    path: 'applications/:id',
    component: lazy(() => import('../ViewApplication')),
  },
];

class AppRouter extends Component {
  render() {
    const { url, style } = this.props;
    return (
      <Suspense fallback={<Loader />}>
        <div style={style}>
          {routes.map(singleRoute => {
            const { path, exact, ...otherProps } = singleRoute;
            return (
              <Route
                exact={exact === false ? false : true}
                key={singleRoute.path}
                path={`${url}/${singleRoute.path}`}
                {...otherProps}
              />
            );
          })}
        </div>
      </Suspense>
    );
  }
}

export default AppRouter;
