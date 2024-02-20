import React from 'react';
import './App.css';
import './PeriodicTable.css'
import PeriodicTable, { OnClick, ElementType } from './components/periodic-table/PeriodicTable';
import lodash from 'lodash';
import { MF as MolecularFormula } from 'react-mf'

type FormulaUnit = {
  element: ElementType;
  count: number;
}
type Formula = FormulaUnit[];

function App() {

  const [formula, setFormula] = React.useState<Formula>([])

  const onElementClick: OnClick = (e, element) => {
    
    if(formula.length === 0) {
      setFormula([{
        count: 1,
        element: element
      }]);
      return;
    }
    const clone = lodash.cloneDeep(formula);

    const lastUnit = clone[clone.length - 1];
    if(lastUnit.element.Symbol === element.Symbol) {
      lastUnit.count += 1
      
    }
    else {
      clone.push({
        element: element,
        count: 1
      })
    }

    setFormula(clone)
  }

  const convertFormula = () => {
    return formula.reduce((acc, curr)=>{
      acc += curr.element.Symbol + curr.count;
      return acc;
    }, '');
  }

  const totalMolecularWeight = () => {
    return formula.reduce((acc, curr)=>{
      acc += (parseFloat(curr.element['Atomic Weight']) * curr.count)
      return acc;
    }, 0);
  }

  return (
    <div className="App">
      
      <header className="App-header">
        <h2>Periodic Table of Elements</h2>
      </header>

      <div style={{ display: 'inline-block', position: 'relative', marginTop: 20}}>
        <PeriodicTable onClick={onElementClick} squareSize={55} margin={2} />
        
        <div style={{ position: 'absolute', left: 200, top: 2, width: 480 }}>
          <div style={{ marginLeft: 10, border: '1px solid black', borderRadius: 3, padding: 10, overflow: 'auto' }}>
            <div style={{ height: 20 }}><MolecularFormula mf={convertFormula()} /></div>
            <span style={{ whiteSpace: 'nowrap' }}>{ Math.round(totalMolecularWeight() * 1000) / 1000 } g/mol</span><br />
            <button onClick={()=>setFormula([])}>Clear</button>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default App;

