import React, {useState} from 'react';

import classes from './ExpandButton.module.css';

import { ReactComponent as ExpandIcon } from 'assets/svg/expand.svg';

type ExpandButtonProps = {
    onExpand?: () => void;
};

const ExpandButton: React.FC<ExpandButtonProps> = (props) => {
    
    const [isExpanded, setIsExpanded] = useState(false);

    return <div className={`${classes.base}  ${isExpanded ? classes.isExpanded : ""}`}>
            <div
                className={`${classes.expandedButton}`}
                onClick={() => { setIsExpanded(e => !e); props.onExpand && props.onExpand(); console.log(isExpanded) }}
            >
                <ExpandIcon className={`${classes.icon}`} />
            </div>
        </div>
}

export default ExpandButton;