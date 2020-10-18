import React from 'react';
import SkeletonTeamInfo from "../MatchDetails/SkeletonTeamInfo"
import SkeletonMatchNavs from './SkeletonMatchNavs';
const SkeletonMatchDetails = () => {
    return (
      <div>
        <div className="mx-auto">
              <SkeletonTeamInfo/>
              <SkeletonMatchNavs/>
        </div>
      </div>
    );
  };
  
  export default SkeletonMatchDetails;