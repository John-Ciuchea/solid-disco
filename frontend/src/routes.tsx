import { createBrowserRouter } from 'react-router-dom'
import MainLayout from './pages/MainLayout.tsx'
import ErrorPage from './pages/ErrorPage.tsx'
import UserShow from './pages/UserShow.tsx'
import { getUserMessage } from './api/user.ts'
import IndexPage from './pages/IndexPage.tsx'

export default createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <IndexPage />
      },
      {
        path: '/welcome/:userId',
        element: <UserShow />,
        loader: ({ params }) => getUserMessage(params.userId!),
      },
    ]
  }
])
