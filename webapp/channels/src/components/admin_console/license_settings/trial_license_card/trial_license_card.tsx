// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';

import type {ClientLicense} from '@mattermost/types/config';

import './trial_license_card.scss';

export interface Props {
    license: ClientLicense;
}

const TrialLicenseCard: React.FC<Props> = ({license}: Props) => {
    return (
        <div/>
    );
};

export default TrialLicenseCard;
