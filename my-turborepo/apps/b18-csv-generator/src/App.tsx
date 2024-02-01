import SubmitButton from '@repo/ui/submit-button';
import './App.css';
import Form from './components/Form';
import { GeneratorSetup, ReadyRow, defaultGeneratorSetup, generateRows } from './utils/sampleHolderSize';
import { useState } from 'react';
import Selector from './components/Selector';

function App() {
  const [form, setForm] = useState<GeneratorSetup>(defaultGeneratorSetup);

  const [ready, setReady] = useState<boolean>(false);


  const handler = (g: Partial<GeneratorSetup>) => {
    setForm(prev => { return { ...prev, ...g } })
  }

  const rows: ReadyRow[] = generateRows(form);


  // todo add back button
  // todo add verification if it's ready or going with the default values
  return (
    <>
      {ready ? <Selector propRows={rows} />
        :

        <Form value={form} handler={handler} />
      }
      <SubmitButton callback={() => setReady(true)} />
    </>
  )
}

export default App
