
# initial description

White_Holder_3.xlsx is an example  'user spreadsheet' which the users fill in before the experiment. White_Holder_3_forGDA.csv was generated by Diego's script from the user spreadsheet - this file is read into the the spreadsheet view in GDA.

Top section of spreadsheet is filled in by local contact rather than the users :

- X motor name, Y motor name : names of scannables in GDA
- Detector : name of detector object in GDA (xspress4Odin, xspress3)
- Mono crystal : Si111 or Si311
- Offsets : values set by beamline scientist, depend on which X and Y motors are to be used.

Bottom section is filled in by the user :

- Element : Elements will be between approximately S (Sulphur, Z=13) and Np (Neptunium, Z=93)
- Edge : Depends on atomic number of element (K, L, M)
- Detection mode : T or F
- Sample name : User specified
- Sample comment : User specified
- Column : A ... Z (upper limit depends on number of columns in sample holder)
- Row : >=1 (upper limit depends on  number of rows in the sample holder)
- Repetitions : >=1

Row index, Scan, Detector, Sample, frameX, Move frameX, frameY, Move frameY, Description, Reference foil, Move reference wheel, Output, Script/command before first repetition, Number of repetitions
 interactive array shape calculator for column and row size
Element (e.g Pt) Edge (e.g. L3) Detection Mode (F or T) Sample name Sample comment Column Row repetitions
