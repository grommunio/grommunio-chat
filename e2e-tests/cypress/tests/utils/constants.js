// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

export const FEEDBACK_EMAIL = 'test@example.com';
export const ABOUT_LINK = 'https://grommunio.com/about-us/';
export const ASK_COMMUNITY_LINK = 'https://community.grommunio.com/';
export const HELP_LINK = 'https://docs.grommunio.com/';
export const PRIVACY_POLICY_LINK = 'https://grommunio.com/privacy-policy/';
export const REPORT_A_PROBLEM_LINK = '';
export const TERMS_OF_SERVICE_LINK = 'https://grommunio.com/wp-content/uploads/2021/09/AGB_grommunio_EN_01OCT21.pdf';

export const CLOUD = 'Cloud';
export const E20 = 'E20';
export const TEAM = 'Team';

export const FixedPublicLinks = {
    TermsOfService: 'https://grommunio.com/wp-content/uploads/2021/09/AGB_grommunio_EN_01OCT21.pdf',
    PrivacyPolicy: 'https://grommunio.com/privacy-policy/',
};

export const SupportSettings = {
    ABOUT_LINK,
    ASK_COMMUNITY_LINK,
    HELP_LINK,
    PRIVACY_POLICY_LINK,
    REPORT_A_PROBLEM_LINK,
    TERMS_OF_SERVICE_LINK,
};
export const FixedCloudConfig = {
    EmailSettings: {
        FEEDBACK_EMAIL,
    },
    SupportSettings,
};

export const ServerEdition = {
    CLOUD,
    E20,
    TEAM,
};

export const Constants = {
    FixedCloudConfig,
    ServerEdition,
};

export const CustomStatusDuration = {
    DONT_CLEAR: '',
    THIRTY_MINUTES: 'thirty_minutes',
    ONE_HOUR: 'one_hour',
    FOUR_HOURS: 'four_hours',
    TODAY: 'today',
    THIS_WEEK: 'this_week',
    DATE_AND_TIME: 'date_and_time',
};

export default Constants;
