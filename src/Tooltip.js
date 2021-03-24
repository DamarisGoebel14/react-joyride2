import React from 'react'
import styles from './Tooltip.module.css'


const Tooltip = ({
                         continuous,
                         index,
                         step,
                         backProps,
                         closeProps,
                         primaryProps,
                         tooltipProps,
                     }) =>
    (
        <div {...tooltipProps} className={styles.tooltip}>
            {step.title && <h2>{step.title}</h2>}
            <p>{step.content}</p>
            <div>
                {index > 0 && (
                    <button {...backProps}>
                       Back
                    </button>
                )}
                {continuous && (
                    <button {...primaryProps}>
                        Next
                    </button>
                )}
                {!continuous && (
                    <button {...closeProps}>
                      Close
                    </button>
                )}
            </div>
        </div>
    );

export default Tooltip;