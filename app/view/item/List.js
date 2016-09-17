Ext.define('ExtTestApp.view.item.List', {
  extend: 'Ext.tree.Panel',

  alias: 'widget.itemList',

  store: 'Items',

  rootVisible: true,
  
  displayField: 'name',
  minWidth: 150
});