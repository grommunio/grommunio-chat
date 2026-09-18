// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {Button, Modal} from 'react-bootstrap';
import {useIntl} from 'react-intl';

import AirgappedTrialActivationConfirmSvg from 'components/common/svg_images_components/airgapped_trial_activation_confirm_svg';
import ExternalLink from 'components/external_link';

import './air_gapped_modal.scss';

type Props = {
    onClose?: () => void;
}

function AirGappedModal({onClose}: Props) {
    const {formatMessage} = useIntl();
    const airGappedLink = (
        <ExternalLink
            location='start_trial_air_gapped_modal'
            href='https://mattermost.com/trial/'
        >
            {'https://mattermost.com/trial/'}
        </ExternalLink>
    );
    return null;
}

export default AirGappedModal;
