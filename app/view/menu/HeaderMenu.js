Ext.define('ExtTestApp.view.menu.HeaderMenu',{

	extend: 'Ext.panel.Panel',
    xtype: 'basic-toolbar',
  	alias: 'widget.headerbarmenu',
    id: 'basic-toolbar',

    //TODO: move to config.Constants
    profileInfo: {
        width: 380,
        pasteIconCls: 'fa fa-clipboard',
        cutIconCls: 'fa fa-scissors',
        copyIconCls: 'fa fa-files-o',
        formatIconCls: 'format',
        listIconCls: 'fa fa-th-list',
        directoryIconCls: 'fa fa-folder-open-o',
        libIconCls: 'fa fa-book',
        chartIconCls: 'fa fa-area-chart',
        calendarIconCls: 'fa fa-calendar',
        profileIconCls: 'fa fa-user'
    },

    initComponent: function() {
        this.width = this.profileInfo.width;

        this.tbar = [{
                xtype:'splitbutton',
                text:'Actions Menu',
                iconCls: this.profileInfo.listIconCls,
                glyph: this.profileInfo.listGlyph,
                menu:[
                    {
                        iconCls: 'fa fa-folder-open',
                        text:'Menu Button 1'
                    },
                    {
                        iconCls: 'fa fa-upload',
                        text:'Menu Button 2'
                    },
                    {
                        iconCls: 'fa fa-undo',
                        text:'Menu Button 3'
                    }
                ]
            }, '-', {
                xtype:'splitbutton',
                text:'Library',
                iconCls: this.profileInfo.libIconCls,
                glyph: this.profileInfo.cutGlyph,
                menu: [{
                    text:'Item 1'
                }]
            }, {
                text:'Calendar',
                iconCls: this.profileInfo.calendarIconCls,
                glyph: this.profileInfo.copyGlyph
            }, {
                text:'Directory',
                iconCls: this.profileInfo.directoryIconCls,
                glyph: this.profileInfo.pasteGlyph,
                menu:[{
                    text:'Item 1'
                }]
            }, '-', {
                text:'Charts',
                iconCls: this.profileInfo.chartIconCls,
                glyph: this.profileInfo.formatGlyph,
            }, '->',{
            	text: 'Profile',
            	iconCls: this.profileInfo.profileIconCls
            },
            {
                text: 'Logout',
            }
        ];
        this.callParent();
    }

});