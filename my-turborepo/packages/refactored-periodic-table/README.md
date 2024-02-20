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

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for distribution

### `npm run publish`

Publishes the app