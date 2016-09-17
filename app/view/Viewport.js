Ext.define('ExtTestApp.view.Viewport', {

  // Layout configuration
  extend: 'Ext.container.Viewport',

  layout: {

    type: 'border',
  },

  autoScroll: false,

  items: [
    {
      region: 'north',
      xtype: 'appheaderview'
    },
    {
        region: 'north',
        xtype: 'headerbarmenu',
    },
    {
      region: 'west',
      xtype: 'itemList',
      
      header: {
        xtype: 'basic-grid-toolbar'
      },
      style: {
        background: '#EAEFF4'
      },
      flex: 1.3
    },
    {
      region: 'center',
      xtype: 'itemShow',
      flex: 4
    },
    {
      region: 'south',
      xtype: 'component',
      html: 'footer content',
      margins: '0 0 5 0',
      style: {
        background: '#3F6B92',
        height: '30px',
        padding: '5px',
        color: '#f2f2f2',
        textAlign: 'center'
      }
    },
  ]
});