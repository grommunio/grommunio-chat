// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';

import type {ClientLicense, ClientConfig, WarnMetricStatus} from '@mattermost/types/config';

import {ToPaidPlanBannerDismissable} from 'components/admin_console/billing/billing_subscriptions/to_paid_plan_nudge_banner';
import withGetCloudSubscription from 'components/common/hocs/cloud/with_get_cloud_subscription';

import ConfigurationAnnouncementBar from './configuration_bar';
import AnnouncementBar from './default_announcement_bar';
import NotificationPermissionBar from './notification_permission_bar';
import TextDismissableBar from './text_dismissable_bar';
import VersionBar from './version_bar';

type Props = {
    license?: ClientLicense;
    config?: Partial<ClientConfig>;
    canViewSystemErrors: boolean;
    userIsAdmin: boolean;
    latestError?: {
        error: any;
    };
    warnMetricsStatus?: Record<string, WarnMetricStatus>;
    actions: {
        dismissError: (index: number) => void;
        getCloudSubscription: () => void;
        getCloudCustomer: () => void;
    };
};

class AnnouncementBarController extends React.PureComponent<Props> {
    render() {
        let adminConfiguredAnnouncementBar = null;
        if (this.props.config?.EnableBanner === 'true' && this.props.config.BannerText?.trim()) {
            adminConfiguredAnnouncementBar = (
                <TextDismissableBar
                    className='admin-announcement'
                    color={this.props.config.BannerColor}
                    textColor={this.props.config.BannerTextColor}
                    allowDismissal={this.props.config.AllowBannerDismissal === 'true'}
                    text={this.props.config.BannerText}
                />
            );
        }

        let errorBar = null;
        if (this.props.latestError) {
            errorBar = (
                <AnnouncementBar
                    type={this.props.latestError.error.type}
                    message={this.props.latestError.error.message}
                    showCloseButton={true}
                    handleClose={this.props.actions.dismissError}
                />
            );
        }

        const notifyAdminDowngradeDelinquencyBar = null;
        const toYearlyNudgeBannerDismissable = null;


        // The component specified further down takes priority over the component above it.
        // For example, consider this-
        // {
        //    Foo
        //    Bar
        //    Baz
        // }
        // Even if all Foo, Bar and Baz render, only Baz is visible as it's further down.
        // One exception to this rule is for admin configured announcement banners
        // If set with class 'admin-announcement', they will always be visible, stacked vertically.
        return (
            <>
                <NotificationPermissionBar/>
                {adminConfiguredAnnouncementBar}
                {errorBar}
                {notifyAdminDowngradeDelinquencyBar}
                {toYearlyNudgeBannerDismissable}
                <VersionBar/>
                <ConfigurationAnnouncementBar
                    config={this.props.config}
                    license={this.props.license}
                    canViewSystemErrors={this.props.canViewSystemErrors}
                    warnMetricsStatus={this.props.warnMetricsStatus}
                />
            </>
        );
    }
}

export default withGetCloudSubscription(AnnouncementBarController);
