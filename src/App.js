import Joyride, { BeaconRenderProps, TooltipRenderProps, ACTIONS, EVENTS, STATUS } from 'react-joyride';
import React, {useState} from 'react'
import Tooltip from './Tooltip'

import './App.css'

function App () {

    const initialSteps = [
        {
            target: '.first-section',
            title: `Let's begin our journey`,
            content: 'This is the awesome menu!',
            placement: 'right',
            disableBeacon: true,
            offset: 0,

        },
        {
            target: '.second-section',
            title: 'Our beautiful projects',
            content: 'Here you find all your projects!',
            placement: 'bottom',
        },
        {
            target: '.third-section',
            title: 'Your beautiful profile',
            content: 'Here you find your beautiful profile',
        }

    ]

    const [run, setRun] =useState(false)
    const [steps, setSteps] = useState(initialSteps)
    const [stepIndex, setStepIndex] = useState(0)


    const handleJoyrideCallback = (data) => {
        const { action, index, status, type } = data;

        if ([EVENTS.STEP_AFTER, EVENTS.TARGET_NOT_FOUND].includes(type)) {
            // Update state to advance the tour
            setStepIndex(index + (action === ACTIONS.PREV ? -1 : 1))
        }
        else if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
            // Need to set our running state to false, so we can restart if we click start again.
            setRun(false)
        }

        console.groupCollapsed(type);
        console.log(data); //eslint-disable-line no-console
        console.groupEnd();
    };

    const handleStart = (e) => {
        e.preventDefault()
        setRun(true)
    }




        return (
            <div className="app">
                <Joyride
                    callback={handleJoyrideCallback}
                    run={run}
                    steps={steps}
                    tooltipComponent={Tooltip}
                    debug={true}
                    showProgress={true}
                    continuous={true}
                    showSkipButton={true}




            />

            <div className="container">
                <div className="first-section">
                    <p>1</p>
                    <button onClick={handleStart}>Start Tour</button>
                </div>

                <div className="second-section">
                    <p>2</p>
                </div>

                <div className="third-section">
                    <p>3</p>
                </div>
            </div>
    </div>
    );

}

export default App;