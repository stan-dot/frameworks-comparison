# popup todo

- [x] add a button to go to the multiple component screen
- [ ] add a layout component using bootstrap and accepting 4 children
- [ ] per beamline

## links

chat
https://chat.openai.com/g/g-n7Rs0IK86-grimoire/c/a517d3aa-0831-4f43-a240-2d959dd6059c

https://react-bootstrap.netlify.app/docs/getting-started/introduction

examples
https://codesandbox.io/examples/package/react-bootstrap

# features

- [ ] themes https://diamondlightsource.github.io/web-ui-components/?path=/docs/theme-colours--docs
- [ ] see the different layouts / perspectives
- [ ] link out into a new window
- [ ] add technical UI validation component from joi
      https://react-bootstrap.netlify.app/docs/getting-started/introduction/#customize-bootstrap
- [ ] save meatadata to supabase 
<https://github.com/supabase-community/supabase-kubernetes>

# frontend routing proposal 
possibly to mirror the API struture

what is easier to maintain - a system with overhead with many confg files?
or regular `tsx` that's hundreds of files but easier to update?

each file quite simple
extractable component into a new page
beamline config - booleans and optional stuff, central panel all the time

## specific paths

/beamline/{beamline}/device/{ophydId} - there a screen and a redirect to the openapi spec from here <https://github.com/openapi-generators/openapi-python-client>
as there are many pv channels on each axis, calibration, etc

and the POST request is given that
should just get a raw swagger page rendered inside? before a custom ui is built
/beamline/{beamline}/synoptic
/beamline/{beamline}/technicalUI
/beamline/{beamline}/experiment/{experimentType}?layout=standard
there a joined controls, DAQ and analytics components - one experiment, one screen

/beamline/{beamline}/experiment/{experimentType}?layout=standard?component-max=side-panel
here can start a new experiment, with a redirect to

/beamline/{beamline}/experiment/{experimentType}/id/{experimentId}

experiment types are requsable

/beamline/{beamline}/experiment/{experimentType}/id/{experimentId}/scan

/beamline/{beamline}/experiment/{experimentType}/id/{experimentId}/scan/{scanId}

# metadata db


## terrible!

the useloader data is too bad!
https://github.com/remix-run/react-router/discussions/9792

