// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

// ***************************************************************
// - [#] indicates a test step (e.g. # Go to a page)
// - [*] indicates an assertion (e.g. * Check the title)
// - Use element ID when selecting an element. Create one if none.
// ***************************************************************

// Group: @channels @not_cloud @plugin_marketplace @plugin @plugins_uninstall

import {githubPlugin} from '../../../../utils/plugins';

describe('Plugin Marketplace', () => {
    let townsquareLink;

    before(() => {
        cy.shouldNotRunOnCloudEdition();
        cy.shouldHavePluginUploadEnabled();
        cy.apiUninstallAllPlugins();

        cy.apiInitSetup().then(({team}) => {
            townsquareLink = `/${team.name}/channels/town-square`;
        });
    });

    beforeEach(() => {
        // # Enable Plugin Marketplace
        // # Disable Plugin Remote Marketplace
        // # Disable Automatic Prepackaged Plugins to make sure no plugins are loaded
        cy.apiUpdateConfig({
            PluginSettings: {
                Enable: true,
                EnableMarketplace: true,
                EnableRemoteMarketplace: false,
                AutomaticPrepackagedPlugins: false,
            },
        });

        // # Visit town-square channel
        cy.visit(townsquareLink);

        // # Open up marketplace
        cy.uiOpenProductMenu('Marketplace');
    });

    it('not display any plugins and no error bar', () => {
        // * Verify no plugins should be visible
        cy.get('#marketplaceTabs-pane-allListing').findByText('There are no plugins available at this time.');

        // * Verify no error bar should be visible
        cy.get('#error_bar').should('not.exist');
    });

    it('MM-T1979 display installed plugins', () => {
        // # Install one plugin
        cy.apiInstallPluginFromUrl(githubPlugin.url);

        // # Scroll to GitHub plugin
        cy.get('#marketplace-plugin-github').scrollIntoView().should('be.visible');

        // * Verify no error bar should be visible
        cy.get('#error_bar').should('not.exist');
    });
});
