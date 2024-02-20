Periodic Table of Elements

## Install

```
  npm install @celadora/periodic-table
```

## Usage
```tsx
  import PeriodicTable, { OnClick } from '@celadora/periodic-table';

  function App() {
    const handleClick: OnClick = (e, element) => {
      console.log(element);
    }

    return (
      <PeriodicTable onClick={handleClick} squareSize={55} margin={2} /> 
    )

  }
```

## Demo
[Demo](https://lagslug.github.io/PeriodicTable-React/)