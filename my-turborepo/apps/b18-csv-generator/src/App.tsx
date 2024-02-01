import { tomography } from '@repo/science';
import { Button } from '@repo/ui/button';
import './App.css';
import Form from './components/Form';
import { GeneratorSetup, defaultGeneratorSetup } from './utils/sampleHolderSize';
import { useState } from 'react';

function App() {
  const m = tomography();
  const [form, setForm] = useState<GeneratorSetup>(defaultGeneratorSetup);


  const handler = (g: Partial<GeneratorSetup>) => {
    setForm(prev => { return { ...prev, ...g } })
  }

  return (
    <>
      <Form value={form} handler={handler} />
      <Button appName={'vite'}><p>nothing, but from tomography we get: {m}</p></Button>
    </>
  )
}

export default App
