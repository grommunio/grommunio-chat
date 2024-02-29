// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';

const logo = require('../../../images/fg-1024.png');

export default function MattermostLogo(props: React.HTMLAttributes<HTMLSpanElement>) {
    return (
        <span {...props}>
            <img src={logo}/>
        </span>
    );
}
