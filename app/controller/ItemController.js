Ext.define('ExtTestApp.controller.ItemController', {
  extend: 'Ext.app.Controller',
  alias: 'controller.itemController',

  stores: ['Items'],

  models: ['Item'],

  views: [
        'item.List',
        'item.Show',
        'menu.HeaderMenu',
        'menu.GridMenu'
        ],

  refs: [
    {
      ref: 'itemShowDesc',
      selector: 'itemShow > #item-description'
    }
  ],
  init: function() {
    this.control({
      'itemList': {
        select: this.onItemSelect
      }
    });
  },
  onItemSelect: function(selModel, selection) {


    if(selection.data.leaf){

      this.getItemShowDesc().update()
      Ext.create('Ext.data.Store', {
          storeId: 'employeesStore',
          fields:[ 'firstname', 'lastname', 'seniority', 'hired' , 'dep'],
          data: selection.data.employees
      });

      Ext.create('Ext.grid.Panel', {
          store: Ext.data.StoreManager.lookup('employeesStore'),
          columns: [
              { text: 'Name', dataIndex: 'firstname' },
              { text: 'lastname', dataIndex: 'lastname'},
              { text: 'hired', dataIndex: 'hired'},
              { text: 'seniority', dataIndex: 'seniority'},
              { text: 'dep', dataIndex: 'dep'},
              { text: 'manage', xtype: 'actioncolumn', width: '20px',
               items:[
                {
                  icon: 'build/development/ExtTestApp/resources/images/dd/drop-no.png',
                  tooltip: 'Remove',
                  handler: function(grid, rowIndex, colIndex) {
                      var rec = grid.getStore().getAt(rowIndex);
                      alert("Remove " + rec.get('firstname'));
                  }
                }] 
             }
          ],
          renderTo: 'item-description'
      });
    }else{
      return null;
    }
  }
});