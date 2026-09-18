// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {useIntl} from 'react-intl';

export default function LoginKeycloakIcon(props: React.HTMLAttributes<HTMLSpanElement>) {
    const {formatMessage} = useIntl();

    return (
        <span {...props}>
            <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                aria-label={formatMessage({id: 'generic_icons.login.keycloak', defaultMessage: 'Keycloak Icon'})}
            >
                <path
                    fill='#ED1C24'
                    d='M12 2C9.24 2 7 4.24 7 7v3H6c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h12c1.1
                    0 2-.9 2-2v-8c0-1.1-.9-2-2-2h-1V7c0-2.76-2.24-5-5-5zm-3
                    8V7c0-1.66 1.34-3 3-3s3 1.34 3 3v3H9zm3
                    4c1.1 0 2 .9 2 2 0 .73-.41 1.36-1
                    1.72V20h-2v-2.28c-.59-.36-1-.99-1-1.72
                    0-1.1.9-2 2-2z'
                />
            </svg>
        </span>
    );
}
