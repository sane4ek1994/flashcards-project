import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { Cards } from '@/pages/cards/cards'
import { DecksPage } from '@/pages/decks-page/decks-page'
import { SignInPage } from '@/pages/sign-in-page'

const publicRouters: RouteObject[] = [
  {
    element: <SignInPage />,
    path: '/login',
  },
]
const privateRoutes: RouteObject[] = [
  {
    element: <DecksPage />,
    path: '/',
  },

  {
    element: <Cards />,
    path: 'decks/cards/:id',
  },
]
const router = createBrowserRouter([
  ...publicRouters,
  {
    children: privateRoutes,
    element: <PrivateRoutes />,
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}

function PrivateRoutes() {
  const isAuthenticated = true

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}
