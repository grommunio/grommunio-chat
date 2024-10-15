// Copyright (c) 2020-present grommunio GmbH. All Rights Reserved.
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';

const logo = require('../../../images/logo.svg');

export default function MattermostLogo(props: 
    {spanProps?: React.HTMLAttributes<HTMLSpanElement>, imgProps?: React.HTMLAttributes<HTMLImageElement>}) {
    return (
        <span {...props.spanProps}>
            <img src={logo} alt='Logo' {...props.imgProps}/>
        </span>
    );
}
