import ReactDOM from 'react-dom/client';
import { HelloWorld } from '@org/scope-name.ui.hello-world';

export const HelloWorldApp = () => <HelloWorld />;

const root = document!.getElementById('root');
ReactDOM.createRoot(root as HTMLElement).render(<HelloWorldApp />);
