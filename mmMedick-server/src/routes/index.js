import AuthRouter from './auth/authRouter';

const AppRoutes = (app) => {
    app.use(AuthRouter.routePrefix, AuthRouter.route());
}

export default AppRoutes;