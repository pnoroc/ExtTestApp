Ext.define("ExtTestApp.view.header.Header", {
    extend: 'Ext.container.Container',
    alias: 'widget.appheaderview',
    height: 50,
    renderTo: Ext.getBody(),
    border: 1,
    style: {
        borderRadius: '3px',
        background: '#3F6B92',
        color: '#f2f2f2',
        padding: '0px 5px',
    },

    items: [
        {
            xtype: 'component',
            html: '<h2 class="x-panel-header">Brand Title</h2>',
            flex: 0  
        }
    ]
});