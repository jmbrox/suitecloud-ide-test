/**
 *@NApiVersion 2.x
 *@NScriptType Portlet
 *@NModuleScope Public
 */
define(['N/file', 'N/search', 'N/runtime', 'N/url'],
    function(file, search, runtime, url) {
        function render(params) {
            params.portlet.title = 'DropBox Upload - Change 1';
            var scriptObj = runtime.getCurrentScript();
            // var briteTankImageId = scriptObj.getParameter({name: 'custscript_ce_britetank_image'});
            // var briteTankImageObj = file.load({
            //     id: briteTankImageId
            // });
            // var briteTankImageURL = briteTankImageObj.url;
            // log.debug({
            //     title: 'Brite Tank Image Object',
            //     details: briteTankImageURL
            // });
            // var tankViewStyle = file.load({
            //     id: '/SuiteBundles/Bundle 180201/Crafted ERP (Brewery Edition)/Cellar Viewer/tank-view-stylesheet.html'
            // });
            // var tankViewStyle = tankViewStyle.getContents();
            var dropboxHTML = '<p>Hello World</p>';
            params.portlet.html = dropboxHTML;
        }
        return {
            render: render
        };
    });