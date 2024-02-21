/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as RootImport } from './routes/root'
import { Route as EditImport } from './routes/edit'
import { Route as DestroyImport } from './routes/destroy'
import { Route as ContactImport } from './routes/contact'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const RootRoute = RootImport.update({
  path: '/root',
  getParentRoute: () => rootRoute,
} as any)

const EditRoute = EditImport.update({
  path: '/edit',
  getParentRoute: () => rootRoute,
} as any)

const DestroyRoute = DestroyImport.update({
  path: '/destroy',
  getParentRoute: () => rootRoute,
} as any)

const ContactRoute = ContactImport.update({
  path: '/contact',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/contact': {
      preLoaderRoute: typeof ContactImport
      parentRoute: typeof rootRoute
    }
    '/destroy': {
      preLoaderRoute: typeof DestroyImport
      parentRoute: typeof rootRoute
    }
    '/edit': {
      preLoaderRoute: typeof EditImport
      parentRoute: typeof rootRoute
    }
    '/root': {
      preLoaderRoute: typeof RootImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  ContactRoute,
  DestroyRoute,
  EditRoute,
  RootRoute,
])

/* prettier-ignore-end */
