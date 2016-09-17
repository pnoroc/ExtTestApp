Ext.define('ExtTestApp.view.menu.GridMenu',{

	extend: 'Ext.panel.Panel',
    xtype: 'basic-grid-toolbar',
  	alias: 'widget.gridbarmenu',
    id: 'basic-grid-toolbar',
	

    initComponent: function() {

        this.tbar = [{

        	xtype: 'button',
        	text: 'add new item',
        	classCls: 'x-btn-primary',
        	iconCls: 'fa fa-plus',
        	handler: this.onAddItem
                
        }];
        this.callParent();
    },

    onAddItem: function() {
    	Ext.create('Ext.window.Window', {
            title: 'Add new employee',

            height: 400,
            width: 600,
            bodyPadding: 10,

            layout: 'fit',
            items: {
                xtype: 'form',
                reference: 'form',
                items: [{
                    xtype: 'textfield',
                    name: 'First Name',
                    fieldLabel: 'First Name',
                    allowBlank: false
                }, {
                    xtype: 'textfield',
                    name: 'Last Name',
                    inputType: 'text',
                    fieldLabel: 'Last Name',
                    allowBlank: false
                }, {
                    xtype: 'textfield',
                    name: 'department',
                    inputType: 'text',
                    fieldLabel: 'Job Department',
                    allowBlank: false
                }, {
                    xtype: 'textfield',
                    name: 'seniority',
                    inputType: 'number',
                    fieldLabel: 'seniority',
                    allowBlank: true
                
                }],
                buttons: [{
                    text: 'Create User',
                    formBind: true,
                    listeners: {
                        click: function() {
                            alert('Creating User')
                        }
                    }
                }]
            }
        }).show();
    }

})