
# popup todo
- [x] add a button to go to the multiple component screen
- [ ] add a layout component using bootstrap and accepting 4 children 
- [ ] per beamline



# features

- [ ] official or alternative themes
- [ ] see the different layouts / perspectives
- [ ] link out into a new window

## tech stack
- [ ] vite
- [ ] cypress
- [ ] storybook
- [ ] prisma x supabase or just supabase
- [ ] likely 

# frontend routing proposal - and API too

## case
what is easier to maintain - a system with overhead with many confg files?
or regular `tsx` that's hundreds of files but easier to update?

each file quite simple
extractable component into a new page
beamline config - booleans and optional stuff, central panel all the time

## validation with joi
- [ ] the sample technical UI with a validation component from joi

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
<https://github.com/supabase-community/supabase-kubernetes>
