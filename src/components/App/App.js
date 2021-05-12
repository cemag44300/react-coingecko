import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from "../Header/Header";
import Loading from "../Loading/Loading";

const Detail = lazy(() => import('../Detail/Detail'));
const Home = lazy(() => import('../Home/Home'));

function App() {

    function Page404() {
        return (<center><h1>404</h1></center>);
    }
    
    return(
        <BrowserRouter>
            <Header/>
            <Suspense fallback={<Loading />}>
                <Switch>
                    <Route path="/" exact>
                        <Home/>
                    </Route>
                    <Route path="/coin/:id" exact>
                        <Detail/>
                    </Route>
                    <Route component={Page404}/>
                </Switch>
            </Suspense>
        </BrowserRouter>
    )
}

export default App;