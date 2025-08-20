// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';

import './team_edition.scss';
export interface TeamEditionProps {
    openEELicenseModal: () => void;
    currentPlan: JSX.Element;
}

const TeamEdition: React.FC<TeamEditionProps> = ({openEELicenseModal, currentPlan}: TeamEditionProps) => {
    const title = 'grommunio Edition';
    return (
        <div className='TeamEditionLeftPanel'>
            <div className='title'>{title}</div>
            <div className='currentPlanLegend'>
                {currentPlan}
            </div>
        </div>
    );
};

export default TeamEdition;
