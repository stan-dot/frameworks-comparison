import { tomography } from '@repo/science';
import { Button } from '@repo/ui/button';
import './App.css';
import Form from './components/Form';

function App() {
  const m = tomography();

  return (
    <>
      <Form />
      <Button appName={'vite'}><p>nothing, but from tomography we get: {m}</p></Button>
    </>
  )
}

export default App
