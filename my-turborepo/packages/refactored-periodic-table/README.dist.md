Periodic Table of Elements

## Install

```
  npm install @dls/periodic-table
```

## Usage
```tsx
  import PeriodicTable, { OnClick } from '@repo/refactored-periodic-table';

  function App() {
    const handleClick = ( element) => {
      console.log(element);
    }

    return (
      <PeriodicTable onClick={handleClick} squareSize={55} margin={2} /> 
    )
  }
```
