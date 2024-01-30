export type Setup = {
  detector: "xpress4odin" | "xspress3";
  monoCrystal: "Si111" | "Si311";
  offsets: {
    x_offset_mm: number;
    y_offset_mm: number;
    distance_x_mm: number;
    distance_y_mm: number;
  };
};

type ValidationResult = "offset too big" | "offset too low";
function validateSetup() {}


const elements = ['S', 'Np']

type Edge = 'K' | 'L' | 'M';

export type Row={
    element: string,
    edge: Edge,
    detectionMode: 'T' | 'F'
    sampleName:string,
    sampleComment:string,
    column: string,
    row: number
    repetitions: number
}


// Row index, Scan, Detector, Sample, frameX, Move frameX, frameY, Move frameY, Description, Reference foil, Move reference wheel, Output, Script/command before first repetition, Number of repetitions

//  interactive array shape calculator for column and row size
// Element (e.g Pt)	Edge (e.g. L3)	Detection Mode (F or T)	Sample name	Sample comment	Column	Row	repetitions

function autogenerateSampleNames(prefix:string, startingCount:number, )