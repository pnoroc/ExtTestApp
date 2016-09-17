Ext.define('ExtTestApp.view.item.Show', {
  extend: 'Ext.panel.Panel',
  alias: 'widget.itemShow',

  layout: {
    type: 'fit'
  },

  items: [{
      xtype: 'component',

      id: 'item-description',

      html: 'Please select an item on the left',

      style: {
        padding: '10px',
        background: '#EAEFF4'
      }
    }]
});