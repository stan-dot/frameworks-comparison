import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import styles from './vite-app.module.scss';

/**
 * lazy load components or routes using `React.lazy`.
 */
const HelloWorld = React.lazy(() => import('./hello-world.mdx'));

export function ViteAppApp() {
  return (
    <div className={styles.app}>
        {/* bring your Header component here. 
          use `bit create header` and use the `import` the component to this file.
        */}
        <Routes>
          <Route path="/" element={<div>Hello Bit and Vite!</div>} />
          <Route path="/about" element={(
            // use suspense while loading components or modules.
            <Suspense>
              <HelloWorld />
            </Suspense>
          )} />
        </Routes>
        {/* bring your Footer component here. 
          use `bit create footer` and use the `import` the component to this file.
        */}
    </div>
  );
}

export default ViteAppApp;
