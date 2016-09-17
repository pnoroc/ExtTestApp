/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('ExtTestApp.Application', {
    extend: 'Ext.app.Application',
    
    name: 'ExtTestApp',

    stores: [
        // TODO: add global / shared stores here
    ],
    
    launch: function () {
        console.log("application instantiated")
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
