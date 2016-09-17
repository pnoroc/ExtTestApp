Ext.define('ExtTestApp.store.Items', {
  extend: 'Ext.data.TreeStore',
  model: 'ExtTestApp.model.Item',
  autoLoad: true,

  root: {

    name: 'Employees',
    expanded: true,
  },
  proxy: {

    type: 'ajax',
    url: 'data/employees.json',

    reader: {
      type: 'json',
    }
  }
});