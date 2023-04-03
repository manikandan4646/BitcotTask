import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import '../src/components/Header/Header.css'
import '../src/components/Footer/Footer.css'
import '../src/Styles/Home.css'
import Footer from './components/Footer/Footer';
import Series from './Pages/Series';
import Movies from './Pages/Movies';
import PageNotFound from './Pages/PageNotFound';

const App = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/series",
            element: <Series />
        },
        {
            path: "/movies",
            element: <Movies />
        },
        {
            path: '*',
            element: <PageNotFound />,
        },
    ]);
   
    return (
        <div>            
            <RouterProvider router={router} />
            <Footer />
        </div>
    );
}

export default App;
