// Copyright (c) 2020-present grommunio GmbH. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';

const logo = require('../../../images/logo.svg');

export default function MattermostLogo(props: React.HTMLAttributes<HTMLSpanElement>) {
    return (
        <span {...props}>
            <img src={logo} alt='Logo' style={{ width: 32, height: 32 }}/>
        </span>
    );
}

