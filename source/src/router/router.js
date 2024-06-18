import {
    PageFrame,
    HomeMain,
    BlogMain,
    BlogStudyKotlin,
    PortfolioMain,
    PortfolioProfile
} from '../views/index'
import { createBrowserRouter, Navigate } from 'react-router-dom';
import ErrorPage from "../views/errorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <PageFrame />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Navigate to="/home" replace />
            },
            {
                path: 'home',
                name: 'Home',
                pathname: 'Home',
                element: <HomeMain />,
                children: [
                    {
                        path: '',
                        element: <Navigate to="/home/main" replace />
                    },
                    {
                        path: 'main',
                        element: <div>main</div>
                    }
                ]
            },
            {
                path: 'blog',
                name: 'Blog',
                pathname: 'Blog',
                element: <BlogMain />,
                children: [
                    {
                        path: '',
                        element: <Navigate to="/blog/study/kotlin" replace />
                    },
                    {
                        path: 'study',
                        element: <Navigate to="/blog/study/kotlin" replace />
                    },
                    {
                        path: 'study/kotlin',
                        element: <BlogStudyKotlin />
                    }
                ]
            },
            {
                path: 'portfolio',
                name: 'Portfolio',
                pathname: 'Portfolio',
                element: <PortfolioMain />,
                children: [
                    {
                        path: '',
                        element: <Navigate to="/portfolio/profile" replace />
                    },
                    {
                        path: 'profile',
                        element: <PortfolioProfile />
                    },
                    {
                        path: 'android',
                        element: <div>Android</div>
                    },
                    {
                        path: 'frontend',
                        element: <div>Frontend</div>
                    }
                ]
            }
        ]
    }
])

export default router