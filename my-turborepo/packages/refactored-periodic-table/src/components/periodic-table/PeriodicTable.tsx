import React, { createContext, useContext } from 'react';

import DefaultElement from './Element';

const SQUARE_SIZE = 75;
const MARGIN = 2.5;

export type ElementType = {
  'Number': string;
  'Type': string;
  'Atomic Weight': string;
  'Name': string;
  'Symbol': string;
  'Melting Point': string;
  'Boiling Point': string;
  'Density': string;
  'Earth': string;
  'Group': string;
  'Electron Configuration': string;
}
export type OnClick = (e: React.MouseEvent, element: ElementType)=>void;

export const Context = createContext<{
  onClick: OnClick;
  // Element: any;
  Element: ({ atomicNumber }: { atomicNumber: number})=>JSX.Element;
  squareSize: number;
  margin: number;
}>({
  onClick: ()=>{},
  Element: DefaultElement,
  squareSize: SQUARE_SIZE,
  margin: MARGIN
})

export type Props = {
  onClick?: OnClick,
  Element?: ({ atomicNumber }: { atomicNumber: number})=>JSX.Element;
  squareSize?: number;
  margin?: number;
}

const noop = () => {}

export default function PeriodicTable({ onClick, Element, squareSize, margin }: Props) {
  
  const context = {
    onClick: onClick || noop,
    Element: Element || DefaultElement,
    squareSize: squareSize || SQUARE_SIZE,
    margin: margin || MARGIN
  }

  return (
    <div className="periodic-table" style={{ display: 'inline-block'}}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Context.Provider value={context}>
          <Period1 />
          <Period2 />
          <Period3 />
          <Period4 />
          <Period5 />
          <Period6 />
          <Period7 />
          <div style={{ height: 0.5 * SQUARE_SIZE }}></div>
          <Period8 />
          <Period9 />
        </Context.Provider>
      </div>
    </div>
  )
}

function Period1() {
  const { Element, squareSize, margin } = useContext(Context);
  return (
    <div className="period-1" style={{ display: 'flex' }}>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={1} />
      </Square>
      <Rectangle height={squareSize} width={16.5 * squareSize + margin * 2 * 16 } margin={margin} />
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={2} />
      </Square>
    </div>
  )
}

function Period2() {
  const { Element, squareSize, margin } = useContext(Context);

  return (
    <div className="period-2" style={{ display: 'flex' }}>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={3} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={4} />
      </Square>
      <Rectangle height={squareSize} width={10.5 * squareSize + margin * 2 * 10 } margin={margin}/>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={5} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={6} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={7} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={8} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={9} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={10} />
      </Square>
    </div>
  )
}

function Period3() {
  const { Element, squareSize, margin } = useContext(Context);
  return (
    <div className="period-3" style={{ display: 'flex' }}>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={11} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={12} />
      </Square>
      <Rectangle height={squareSize} width={10.5 * squareSize + margin * 2 * 10 } margin={margin}/>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={13} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={14} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={15} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={16} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={17} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={18} />
      </Square>
    </div>
  )
}

function Period4() {
  const { Element, squareSize, margin } = useContext(Context);
  return (
    <div className="period-4" style={{ display: 'flex' }}>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={19} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={20} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={21} />
      </Square>

      <Rectangle height={squareSize} width={0.5 * squareSize } margin={margin}/>

      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={22} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={23} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={24} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={25} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={26} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={27} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={28} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={29} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={30} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={31} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={32} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={33} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={34} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={35} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={36} />
      </Square>
    </div>
  )
}

function Period5() {
  const { Element, squareSize, margin } = useContext(Context);
  return (
    <div className="period-5" style={{ display: 'flex' }}>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={37} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={38} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={39} />
      </Square>

      <Rectangle height={squareSize} width={0.5 * squareSize } margin={margin}/>

      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={40} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={41} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={42} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={43} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={44} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={45} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={46} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={47} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={48} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={49} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={50} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={51} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={52} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={53} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={54} />
      </Square>
    </div>
  )
}

function Period6() {
  const { Element, squareSize, margin } = useContext(Context);
  return (
    <div className="period-6" style={{ display: 'flex' }}>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={55} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={56} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={57} />
      </Square>

      <Rectangle height={squareSize} width={0.5 * squareSize } margin={margin}/>

      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={72} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={73} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={74} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={75} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={76} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={77} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={78} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={79} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={80} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={81} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={82} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={83} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={84} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={85} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={86} />
      </Square>
    </div>
  )
}


function Period7() {
  const { Element, squareSize, margin } = useContext(Context);
  return (
    <div className="period-7" style={{ display: 'flex' }}>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={87} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={88} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={89} />
      </Square>

      <Rectangle height={squareSize} width={0.5 * squareSize } margin={margin}/>

      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={104} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={105} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={106} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={107} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={108} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={109} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={110} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={111} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={112} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={113} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={114} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={115} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={116} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={117} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={118} />
      </Square>
    </div>
  )
}

function Period8() {
  const { Element, squareSize, margin } = useContext(Context);
  return (
    <div className="period-8" style={{ display: 'flex' }}>
        
      <Rectangle height={squareSize} width={3.5 * squareSize + 3 * 2 * margin } margin={margin}/>

      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={58} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={59} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={60} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={61} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={62} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={63} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={64} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={65} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={66} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={67} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={68} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={69} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={70} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={71} />
      </Square>

    </div>
  )
}


function Period9() {
  const { Element, squareSize, margin } = useContext(Context);
  return (
    <div className="period-9" style={{ display: 'flex' }}>
        
      <Rectangle height={squareSize} width={3.5 * squareSize + 3 * 2 * margin } margin={margin}/>

      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={90} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={91} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={92} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={93} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={94} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={95} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={96} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={97} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={98} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={99} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={100} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={101} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={102} />
      </Square>
      <Square size={squareSize} margin={margin}>
        <Element atomicNumber={103} />
      </Square>

    </div>
  )
}


function Square({ size, margin, children }: React.PropsWithChildren<{ size: number, margin: number }>) {
  return (
    <div style={{ height: size, width: size, margin }}>
      {children}
    </div>
  )
}

function Rectangle({ height, width, margin }: { height: number, width: number, margin: number }) {
  return (
    <div style={{ height, width, margin }}>
      
    </div>
  )
}
