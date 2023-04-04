// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {FormattedMessage} from 'react-intl';

import {NavLink} from 'react-router-dom';

import {useDispatch} from 'react-redux';

import IconMessage from 'components/purchase_modal/icon_message';
import PaymentSuccessStandardSvg from 'components/common/svg_images_components/payment_success_standard_svg';
import {ConsolePages, ModalIdentifiers} from 'utils/constants';
import BackgroundSvg from 'components/common/svg_images_components/background_svg';
import {closeModal} from 'actions/views/modals';

import './success_page.scss';

interface Props {
    onClose: () => void;
}

export default function SelfHostedExpansionSuccessPage(props: Props) {
    const dispatch = useDispatch();
    const titleText = (
        <FormattedMessage
            id={'self_hosted_expansion.expand_success'}
            defaultMessage={"You've successfully updated your license seat count"}
        />
    );

    const formattedSubtitleText = (
        <FormattedMessage
            id={'self_hosted_expansion.license_applied'}
            defaultMessage={'The license has been automatically applied to your Mattermost instance. Your updated invoice will be visible in the <billing>Billing section</billing> of the system console.'}
            values={{
                billing: (billingText: React.ReactNode) => (
                    <NavLink
                        to={ConsolePages.BILLING_HISTORY}
                        target='_blank'
                        rel='noreferrer'
                    >
                        {billingText}
                    </NavLink>
                ),
            }}
        />
    );

    const formattedButtonText = (
        <FormattedMessage
            id={'self_hosted_expansion.close'}
            defaultMessage={'Close'}
        />
    );

    const icon = (
        <PaymentSuccessStandardSvg
            width={444}
            height={313}
        />
    );

    return (
        <div className='self_hosted_expansion_success'>
            <IconMessage
                className={'selfHostedExpansionModal__success'}
                formattedTitle={titleText}
                formattedSubtitle={formattedSubtitleText}
                testId='selfHostedExpansionSuccess'
                icon={icon}
                formattedButtonText={formattedButtonText}
                buttonHandler={() => {
                    props.onClose();
                    dispatch(closeModal(ModalIdentifiers.SUCCESS_MODAL));
                }}
            />
            <div className='background-svg'>
                <BackgroundSvg/>
            </div>
        </div>
    );
}
