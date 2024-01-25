import { Routes, Route } from 'react-router-dom';
import HelloWorld from './hello-world.mdx';
import styles from './react-ssr-app.module.scss';

export function ReactSsrApp() {
  return (
    <div className={styles.appStyles}>
       {/* header component */}
        <Routes>
          <Route path="/" element={<div className={styles.appStyles}>Hello React SSR!</div>} />
          <Route path="/about" element={<HelloWorld />} />
        </Routes>
        {/* footer component */}
    </div>
  );
}
