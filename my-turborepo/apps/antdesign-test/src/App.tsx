import { tomography } from '@repo/science';
import { Button } from '@repo/ui/button';
import { DatePicker } from 'antd';
import './App.css';

function App() {
  const m = tomography();

  return (
    <>
    <Button type="primary">PRESS ME</Button>
    <DatePicker placeholder="select date" />
      <Button appName={'vite'}><p>nothing, but from tomography we get: {m}</p></Button>
    </>
  )
}

export default App
