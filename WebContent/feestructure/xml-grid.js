/*
This file is part of Ext JS 3.4

Copyright (c) 2011-2013 Sencha Inc

Contact:  http://www.sencha.com/contact

GNU General Public License Usage
This file may be used under the terms of the GNU General Public License version 3.0 as
published by the Free Software Foundation and appearing in the file LICENSE included in the
packaging of this file.

Please review the following information to ensure the GNU General Public License version 3.0
requirements will be met: http://www.gnu.org/copyleft/gpl.html.

If you are unsure which license is appropriate for your use, please contact the sales department
at http://www.sencha.com/contact.

Build date: 2013-04-03 15:07:25
*/
Ext.onReady(function(){

    // create the Data Store
    var store = new Ext.data.Store({
        // load using HTTP
        url: 'sheldon.xml',

        // the return will be XML, so lets set up a reader
        reader: new Ext.data.XmlReader({
               // records will have an "Item" tag
               record: 'Item',
               id: 'ASIN',
               totalRecords: '@total'
           }, [
               // set up the fields mapping into the xml doc
               // The first needs mapping, the others are very basic
               {year: 'Year', mapping: 'ItemAttributes > Year'},
               'Year', 'LKG', 'UKG', 'I','II'
           ])
    });

    // create the grid
    var grid = new Ext.grid.GridPanel({
        store: store,
        columns: [
            {header: "Year", width: 120, dataIndex: 'Year', sortable: true},
            {header: "LKG", width: 180, dataIndex: 'LKG', sortable: true},
            {header: "UKG", width: 115, dataIndex: 'UKG', sortable: true},
            {header: "I", width: 100, dataIndex: 'I', sortable: true},
            {header: "II", width: 100, dataIndex: 'II', sortable: true}
        ],
        renderTo:'example-grid',
        width:540,
        height:200
    });

    store.load();
});
