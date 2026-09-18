// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {useIntl} from 'react-intl';
import {useSelector} from 'react-redux';
import styled from 'styled-components';

import {getLicense} from 'mattermost-redux/selectors/entities/general';

import './menu_item.scss';

type Props = {
    id: string;
}

const MenuStartTrial = (props: Props): JSX.Element | null => {
    const {formatMessage} = useIntl();

    const license = useSelector(getLicense);
    const isCurrentLicensed = license?.IsLicensed;

    if (isCurrentLicensed === 'true') {
        return null;
    }

    return (
        <div/>
    );
};

export default MenuStartTrial;
