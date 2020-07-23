import React, {useRef} from 'react';
import {Badge, Tooltip, OverlayTrigger} from 'react-bootstrap';

const SkillBadge = ({type, skill, info}) => {
  const target = useRef(null);
  return (
    <React.Fragment>
      <OverlayTrigger
        key="temp"
        placement="right"
        overlay={<Tooltip id="overlay-badge">{info}</Tooltip>}>
        <Badge pill variant={type} ref={target}>
          {skill}
        </Badge>
      </OverlayTrigger>
    </React.Fragment>
  );
};
export default SkillBadge;
