/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute, lazyRouteComponent } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as RootImport } from './routes/root'
import { Route as MultipleComponentScreenImport } from './routes/multiple-component-screen'
import { Route as EditImport } from './routes/edit'
import { Route as DestroyImport } from './routes/destroy'
import { Route as ContactImport } from './routes/contact'
import { Route as IndexImport } from './routes/index'

// Create Virtual Routes

const ComponentImport = createFileRoute('/')()

// Create/Update Routes

const RootRoute = RootImport.update({
  path: '/root',
  getParentRoute: () => rootRoute,
} as any)

const MultipleComponentScreenRoute = MultipleComponentScreenImport.update({
  path: '/multiple-component-screen',
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
} as any).update({
  component: lazyRouteComponent(
    () => import('./routes/component'),
    'component',
  ),
})

const ComponentRoute = ComponentImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).update({
  component: lazyRouteComponent(
    () => import('./routes/component'),
    'component',
  ),
})

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof ComponentImport
      parentRoute: typeof rootRoute
    }
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
    '/multiple-component-screen': {
      preLoaderRoute: typeof MultipleComponentScreenImport
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
  ComponentRoute,
  IndexRoute,
  ContactRoute,
  DestroyRoute,
  EditRoute,
  MultipleComponentScreenRoute,
  RootRoute,
])

/* prettier-ignore-end */