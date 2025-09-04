var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Limitesnuevos_Distritos_1 = new ol.format.GeoJSON();
var features_Limitesnuevos_Distritos_1 = format_Limitesnuevos_Distritos_1.readFeatures(json_Limitesnuevos_Distritos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limitesnuevos_Distritos_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limitesnuevos_Distritos_1.addFeatures(features_Limitesnuevos_Distritos_1);
var lyr_Limitesnuevos_Distritos_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limitesnuevos_Distritos_1, 
                style: style_Limitesnuevos_Distritos_1,
                popuplayertitle: 'Limitesnuevos_Distritos',
                interactive: true,
                title: '<img src="styles/legend/Limitesnuevos_Distritos_1.png" /> Limitesnuevos_Distritos'
            });
var format_barrios_publicos_2 = new ol.format.GeoJSON();
var features_barrios_publicos_2 = format_barrios_publicos_2.readFeatures(json_barrios_publicos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_barrios_publicos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_barrios_publicos_2.addFeatures(features_barrios_publicos_2);
var lyr_barrios_publicos_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_barrios_publicos_2, 
                style: style_barrios_publicos_2,
                popuplayertitle: 'barrios_publicos',
                interactive: true,
                title: '<img src="styles/legend/barrios_publicos_2.png" /> barrios_publicos'
            });
var format_Espaciosverdes_3 = new ol.format.GeoJSON();
var features_Espaciosverdes_3 = format_Espaciosverdes_3.readFeatures(json_Espaciosverdes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Espaciosverdes_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Espaciosverdes_3.addFeatures(features_Espaciosverdes_3);
var lyr_Espaciosverdes_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Espaciosverdes_3, 
                style: style_Espaciosverdes_3,
                popuplayertitle: 'Espacios verdes',
                interactive: true,
                title: '<img src="styles/legend/Espaciosverdes_3.png" /> Espacios verdes'
            });
var format_Redvial_4 = new ol.format.GeoJSON();
var features_Redvial_4 = format_Redvial_4.readFeatures(json_Redvial_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Redvial_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Redvial_4.addFeatures(features_Redvial_4);
var lyr_Redvial_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Redvial_4, 
                style: style_Redvial_4,
                popuplayertitle: 'Red vial',
                interactive: true,
                title: '<img src="styles/legend/Redvial_4.png" /> Red vial'
            });
var format_Parcelarioconpropietarios_5 = new ol.format.GeoJSON();
var features_Parcelarioconpropietarios_5 = format_Parcelarioconpropietarios_5.readFeatures(json_Parcelarioconpropietarios_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parcelarioconpropietarios_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcelarioconpropietarios_5.addFeatures(features_Parcelarioconpropietarios_5);
var lyr_Parcelarioconpropietarios_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parcelarioconpropietarios_5, 
                style: style_Parcelarioconpropietarios_5,
                popuplayertitle: 'Parcelario con propietarios',
                interactive: true,
    title: 'Parcelario con propietarios<br />\
    <img src="styles/legend/Parcelarioconpropietarios_5_0.png" /> RURAL<br />\
    <img src="styles/legend/Parcelarioconpropietarios_5_1.png" /> SUBURBANA<br />\
    <img src="styles/legend/Parcelarioconpropietarios_5_2.png" /> URBANA<br />' });
var format_Ayudasporlocalidad_6 = new ol.format.GeoJSON();
var features_Ayudasporlocalidad_6 = format_Ayudasporlocalidad_6.readFeatures(json_Ayudasporlocalidad_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ayudasporlocalidad_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ayudasporlocalidad_6.addFeatures(features_Ayudasporlocalidad_6);
var lyr_Ayudasporlocalidad_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ayudasporlocalidad_6, 
                style: style_Ayudasporlocalidad_6,
                popuplayertitle: 'Ayudas por localidad',
                interactive: true,
    title: 'Ayudas por localidad<br />\
    <img src="styles/legend/Ayudasporlocalidad_6_0.png" /> 12 de Octubre<br />\
    <img src="styles/legend/Ayudasporlocalidad_6_1.png" /> 25 de Mayo<br />\
    <img src="styles/legend/Ayudasporlocalidad_6_2.png" /> Balde de Piedra<br />\
    <img src="styles/legend/Ayudasporlocalidad_6_3.png" /> Catitas Vieja<br />\
    <img src="styles/legend/Ayudasporlocalidad_6_4.png" /> Col. San Jorge<br />\
    <img src="styles/legend/Ayudasporlocalidad_6_5.png" /> El Divisadero<br />\
    <img src="styles/legend/Ayudasporlocalidad_6_6.png" /> El Marcado<br />\
    <img src="styles/legend/Ayudasporlocalidad_6_7.png" /> El Ramblon<br />\
    <img src="styles/legend/Ayudasporlocalidad_6_8.png" /> Gob. Civit<br />\
    <img src="styles/legend/Ayudasporlocalidad_6_9.png" /> La Cieneguita<br />\
    <img src="styles/legend/Ayudasporlocalidad_6_10.png" /> La Costa<br />\
    <img src="styles/legend/Ayudasporlocalidad_6_11.png" /> La Costanera<br />\
    <img src="styles/legend/Ayudasporlocalidad_6_12.png" /> La Dormida<br />\
    <img src="styles/legend/Ayudasporlocalidad_6_13.png" /> La Piedad<br />\
    <img src="styles/legend/Ayudasporlocalidad_6_14.png" /> Las Catitas<br />\
    <img src="styles/legend/Ayudasporlocalidad_6_15.png" /> Las Trincheras<br />\
    <img src="styles/legend/Ayudasporlocalidad_6_16.png" /> Los Lotes<br />\
    <img src="styles/legend/Ayudasporlocalidad_6_17.png" /> Ñacuñan<br />\
    <img src="styles/legend/Ayudasporlocalidad_6_18.png" /> Parrales<br />\
    <img src="styles/legend/Ayudasporlocalidad_6_19.png" /> Villa Cabecera<br />\
    <img src="styles/legend/Ayudasporlocalidad_6_20.png" /> Viña Fundacion<br />' });
var format_Ayudasportipo_7 = new ol.format.GeoJSON();
var features_Ayudasportipo_7 = format_Ayudasportipo_7.readFeatures(json_Ayudasportipo_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ayudasportipo_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ayudasportipo_7.addFeatures(features_Ayudasportipo_7);
var lyr_Ayudasportipo_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ayudasportipo_7, 
                style: style_Ayudasportipo_7,
                popuplayertitle: 'Ayudas por tipo',
                interactive: true,
    title: 'Ayudas por tipo<br />\
    <img src="styles/legend/Ayudasportipo_7_0.png" /> Canasta básica<br />\
    <img src="styles/legend/Ayudasportipo_7_1.png" /> Impuestos<br />\
    <img src="styles/legend/Ayudasportipo_7_2.png" /> Alquiler<br />\
    <img src="styles/legend/Ayudasportipo_7_3.png" /> Compra de (...)<br />\
    <img src="styles/legend/Ayudasportipo_7_4.png" /> Gastos académicos<br />\
    <img src="styles/legend/Ayudasportipo_7_5.png" /> Gastos médicos<br />\
    <img src="styles/legend/Ayudasportipo_7_6.png" /> Gastos varios<br />\
    <img src="styles/legend/Ayudasportipo_7_7.png" /> Sepelio<br />' });
var format_Ayudaspormonto_8 = new ol.format.GeoJSON();
var features_Ayudaspormonto_8 = format_Ayudaspormonto_8.readFeatures(json_Ayudaspormonto_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ayudaspormonto_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ayudaspormonto_8.addFeatures(features_Ayudaspormonto_8);
var lyr_Ayudaspormonto_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ayudaspormonto_8, 
                style: style_Ayudaspormonto_8,
                popuplayertitle: 'Ayudas por monto',
                interactive: true,
    title: 'Ayudas por monto<br />\
    <img src="styles/legend/Ayudaspormonto_8_0.png" /> 12500 - 50000<br />\
    <img src="styles/legend/Ayudaspormonto_8_1.png" /> 50000 - 53900<br />\
    <img src="styles/legend/Ayudaspormonto_8_2.png" /> 53900 - 80000<br />\
    <img src="styles/legend/Ayudaspormonto_8_3.png" /> 80000 - 100000<br />\
    <img src="styles/legend/Ayudaspormonto_8_4.png" /> 100000 - 300000<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_Limitesnuevos_Distritos_1.setVisible(false);lyr_barrios_publicos_2.setVisible(true);lyr_Espaciosverdes_3.setVisible(true);lyr_Redvial_4.setVisible(true);lyr_Parcelarioconpropietarios_5.setVisible(false);lyr_Ayudasporlocalidad_6.setVisible(false);lyr_Ayudasportipo_7.setVisible(false);lyr_Ayudaspormonto_8.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Limitesnuevos_Distritos_1,lyr_barrios_publicos_2,lyr_Espaciosverdes_3,lyr_Redvial_4,lyr_Parcelarioconpropietarios_5,lyr_Ayudasporlocalidad_6,lyr_Ayudasportipo_7,lyr_Ayudaspormonto_8];
lyr_Limitesnuevos_Distritos_1.set('fieldAliases', {'Name': 'Name', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'Poblaci√É¬': 'Poblaci√É¬', });
lyr_barrios_publicos_2.set('fieldAliases', {'Name': 'Name', 'Operatoria': 'Operatoria', 'ESTADO': 'ESTADO', 'Distrito': 'Distrito', 'Departamen': 'Departamen', 'Cant hab.': 'Cant hab.', });
lyr_Espaciosverdes_3.set('fieldAliases', {'Name': 'Name', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', });
lyr_Redvial_4.set('fieldAliases', {'Name': 'Name', 'DEPTO': 'DEPTO', 'Tipo': 'Tipo', 'Distrito': 'Distrito', 'auxiliary_': 'auxiliary_', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_show': 'auxiliary_storage_labeling_show', 'auxiliary_storage_labeling_labelrotation': 'auxiliary_storage_labeling_labelrotation', 'auxiliary_storage_labeling_family': 'auxiliary_storage_labeling_family', 'auxiliary_storage_labeling_fontstyle': 'auxiliary_storage_labeling_fontstyle', 'auxiliary_storage_labeling_size': 'auxiliary_storage_labeling_size', 'auxiliary_storage_labeling_bold': 'auxiliary_storage_labeling_bold', 'auxiliary_storage_labeling_italic': 'auxiliary_storage_labeling_italic', 'auxiliary_storage_labeling_underline': 'auxiliary_storage_labeling_underline', 'auxiliary_storage_labeling_color': 'auxiliary_storage_labeling_color', 'auxiliary_storage_labeling_strikeout': 'auxiliary_storage_labeling_strikeout', 'auxiliary_storage_labeling_multilinealignment': 'auxiliary_storage_labeling_multilinealignment', 'auxiliary_storage_labeling_buffersize': 'auxiliary_storage_labeling_buffersize', 'auxiliary_storage_labeling_buffercolor': 'auxiliary_storage_labeling_buffercolor', 'auxiliary_storage_labeling_bufferdraw': 'auxiliary_storage_labeling_bufferdraw', 'auxiliary_storage_labeling_labeldistance': 'auxiliary_storage_labeling_labeldistance', 'auxiliary_storage_labeling_hali': 'auxiliary_storage_labeling_hali', 'auxiliary_storage_labeling_vali': 'auxiliary_storage_labeling_vali', 'auxiliary_storage_labeling_scalevisibility': 'auxiliary_storage_labeling_scalevisibility', 'auxiliary_storage_labeling_minscale': 'auxiliary_storage_labeling_minscale', 'auxiliary_storage_labeling_maxscale': 'auxiliary_storage_labeling_maxscale', 'auxiliary_storage_labeling_alwaysshow': 'auxiliary_storage_labeling_alwaysshow', 'auxiliary_storage_labeling_calloutdraw': 'auxiliary_storage_labeling_calloutdraw', 'auxiliary_storage_labeling_labelallparts': 'auxiliary_storage_labeling_labelallparts', });
lyr_Parcelarioconpropietarios_5.set('fieldAliases', {'NOMENCLATU': 'NOMENCLATU', 'ZONA': 'ZONA', 'CALLE': 'CALLE', 'ALTURA': 'ALTURA', 'BARRIO': 'BARRIO', 'LOTE': 'LOTE', 'MANZANA': 'MANZANA', 'ULTIMA_ACT': 'ULTIMA_ACT', 'MATRICULA': 'MATRICULA', 'FOLIO': 'FOLIO', 'TOMO': 'TOMO', 'FOLIO_REAL': 'FOLIO_REAL', 'ASIENTO': 'ASIENTO', 'AUTORIDAD': 'AUTORIDAD', 'AREA_M2': 'AREA_M2', 'DEPTO': 'DEPTO', 'DTTO': 'DTTO', 'SECC': 'SECC', 'MZN': 'MZN', 'PARC': 'PARC', 'SUBP': 'SUBP', 'VERI': 'VERI', 'PROPIETARI': 'PROPIETARI', });
lyr_Ayudasporlocalidad_6.set('fieldAliases', {'id': 'id', 'Localidad': 'Localidad', 'FECHA': 'FECHA', 'DTTO': 'DTTO', 'DNI': 'DNI', 'NOMCOM': 'NOMCOM', 'DIRECCION': 'DIRECCION', 'EDAD 2025': 'EDAD 2025', 'LOCALIDA_1': 'LOCALIDA_1', 'AYUDA': 'AYUDA', 'DETALLE': 'DETALLE', 'MONTO': 'MONTO', 'EXP': 'EXP', 'CANT_AYU': 'CANT_AYU', 'LOCALIDAD DNI': 'LOCALIDAD DNI', });
lyr_Ayudasportipo_7.set('fieldAliases', {'id': 'id', 'Localidad': 'Localidad', 'FECHA': 'FECHA', 'DTTO': 'DTTO', 'DNI': 'DNI', 'NOMCOM': 'NOMCOM', 'DIRECCION': 'DIRECCION', 'EDAD 2025': 'EDAD 2025', 'LOCALIDA_1': 'LOCALIDA_1', 'AYUDA': 'AYUDA', 'DETALLE': 'DETALLE', 'MONTO': 'MONTO', 'EXP': 'EXP', 'CANT_AYU': 'CANT_AYU', });
lyr_Ayudaspormonto_8.set('fieldAliases', {'id': 'id', 'Localidad': 'Localidad', 'FECHA': 'FECHA', 'DTTO': 'DTTO', 'DNI': 'DNI', 'NOMCOM': 'NOMCOM', 'DIRECCION': 'DIRECCION', 'EDAD 2025': 'EDAD 2025', 'LOCALIDA_1': 'LOCALIDA_1', 'AYUDA': 'AYUDA', 'DETALLE': 'DETALLE', 'MONTO': 'MONTO', 'EXP': 'EXP', 'CANT_AYU': 'CANT_AYU', });
lyr_Limitesnuevos_Distritos_1.set('fieldImages', {'Name': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'Poblaci√É¬': 'TextEdit', });
lyr_barrios_publicos_2.set('fieldImages', {'Name': 'TextEdit', 'Operatoria': 'TextEdit', 'ESTADO': 'TextEdit', 'Distrito': 'TextEdit', 'Departamen': 'TextEdit', 'Cant hab.': 'TextEdit', });
lyr_Espaciosverdes_3.set('fieldImages', {'Name': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', });
lyr_Redvial_4.set('fieldImages', {'Name': 'TextEdit', 'DEPTO': 'TextEdit', 'Tipo': 'TextEdit', 'Distrito': 'TextEdit', 'auxiliary_': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_labeling_show': 'Hidden', 'auxiliary_storage_labeling_labelrotation': 'Hidden', 'auxiliary_storage_labeling_family': 'Hidden', 'auxiliary_storage_labeling_fontstyle': 'Hidden', 'auxiliary_storage_labeling_size': 'Hidden', 'auxiliary_storage_labeling_bold': 'Hidden', 'auxiliary_storage_labeling_italic': 'Hidden', 'auxiliary_storage_labeling_underline': 'Hidden', 'auxiliary_storage_labeling_color': 'Hidden', 'auxiliary_storage_labeling_strikeout': 'Hidden', 'auxiliary_storage_labeling_multilinealignment': 'Hidden', 'auxiliary_storage_labeling_buffersize': 'Hidden', 'auxiliary_storage_labeling_buffercolor': 'Hidden', 'auxiliary_storage_labeling_bufferdraw': 'Hidden', 'auxiliary_storage_labeling_labeldistance': 'Hidden', 'auxiliary_storage_labeling_hali': 'Hidden', 'auxiliary_storage_labeling_vali': 'Hidden', 'auxiliary_storage_labeling_scalevisibility': 'Hidden', 'auxiliary_storage_labeling_minscale': 'Hidden', 'auxiliary_storage_labeling_maxscale': 'Hidden', 'auxiliary_storage_labeling_alwaysshow': 'Hidden', 'auxiliary_storage_labeling_calloutdraw': 'Hidden', 'auxiliary_storage_labeling_labelallparts': 'Hidden', });
lyr_Parcelarioconpropietarios_5.set('fieldImages', {'NOMENCLATU': 'TextEdit', 'ZONA': 'TextEdit', 'CALLE': 'TextEdit', 'ALTURA': 'TextEdit', 'BARRIO': 'TextEdit', 'LOTE': 'TextEdit', 'MANZANA': 'TextEdit', 'ULTIMA_ACT': 'TextEdit', 'MATRICULA': 'TextEdit', 'FOLIO': 'TextEdit', 'TOMO': 'TextEdit', 'FOLIO_REAL': 'TextEdit', 'ASIENTO': 'TextEdit', 'AUTORIDAD': 'TextEdit', 'AREA_M2': 'TextEdit', 'DEPTO': 'TextEdit', 'DTTO': 'TextEdit', 'SECC': 'TextEdit', 'MZN': 'TextEdit', 'PARC': 'TextEdit', 'SUBP': 'TextEdit', 'VERI': 'TextEdit', 'PROPIETARI': 'TextEdit', });
lyr_Ayudasporlocalidad_6.set('fieldImages', {'id': 'TextEdit', 'Localidad': 'TextEdit', 'FECHA': 'TextEdit', 'DTTO': 'TextEdit', 'DNI': 'TextEdit', 'NOMCOM': 'TextEdit', 'DIRECCION': 'TextEdit', 'EDAD 2025': 'TextEdit', 'LOCALIDA_1': 'TextEdit', 'AYUDA': 'TextEdit', 'DETALLE': 'TextEdit', 'MONTO': 'TextEdit', 'EXP': 'TextEdit', 'CANT_AYU': 'TextEdit', 'LOCALIDAD DNI': 'TextEdit', });
lyr_Ayudasportipo_7.set('fieldImages', {'id': 'TextEdit', 'Localidad': 'TextEdit', 'FECHA': 'TextEdit', 'DTTO': 'TextEdit', 'DNI': 'TextEdit', 'NOMCOM': 'TextEdit', 'DIRECCION': 'TextEdit', 'EDAD 2025': 'TextEdit', 'LOCALIDA_1': 'TextEdit', 'AYUDA': 'TextEdit', 'DETALLE': 'TextEdit', 'MONTO': 'TextEdit', 'EXP': 'TextEdit', 'CANT_AYU': 'TextEdit', });
lyr_Ayudaspormonto_8.set('fieldImages', {'id': 'TextEdit', 'Localidad': 'TextEdit', 'FECHA': 'TextEdit', 'DTTO': 'TextEdit', 'DNI': 'TextEdit', 'NOMCOM': 'TextEdit', 'DIRECCION': 'TextEdit', 'EDAD 2025': 'TextEdit', 'LOCALIDA_1': 'TextEdit', 'AYUDA': 'TextEdit', 'DETALLE': 'TextEdit', 'MONTO': 'TextEdit', 'EXP': 'TextEdit', 'CANT_AYU': '', });
lyr_Limitesnuevos_Distritos_1.set('fieldLabels', {'Name': 'header label - always visible', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'Poblaci√É¬': 'hidden field', });
lyr_barrios_publicos_2.set('fieldLabels', {'Name': 'header label - always visible', 'Operatoria': 'header label - always visible', 'ESTADO': 'hidden field', 'Distrito': 'header label - always visible', 'Departamen': 'no label', 'Cant hab.': 'no label', });
lyr_Espaciosverdes_3.set('fieldLabels', {'Name': 'header label - always visible', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', });
lyr_Redvial_4.set('fieldLabels', {'Name': 'header label - always visible', 'DEPTO': 'hidden field', 'Tipo': 'header label - always visible', 'Distrito': 'header label - visible with data', 'auxiliary_': 'hidden field', });
lyr_Parcelarioconpropietarios_5.set('fieldLabels', {'NOMENCLATU': 'header label - always visible', 'ZONA': 'header label - always visible', 'CALLE': 'header label - always visible', 'ALTURA': 'header label - always visible', 'BARRIO': 'header label - always visible', 'LOTE': 'hidden field', 'MANZANA': 'hidden field', 'ULTIMA_ACT': 'hidden field', 'MATRICULA': 'hidden field', 'FOLIO': 'hidden field', 'TOMO': 'hidden field', 'FOLIO_REAL': 'hidden field', 'ASIENTO': 'hidden field', 'AUTORIDAD': 'hidden field', 'AREA_M2': 'hidden field', 'DEPTO': 'hidden field', 'DTTO': 'hidden field', 'SECC': 'hidden field', 'MZN': 'hidden field', 'PARC': 'hidden field', 'SUBP': 'hidden field', 'VERI': 'hidden field', 'PROPIETARI': 'header label - always visible', });
lyr_Ayudasporlocalidad_6.set('fieldLabels', {'id': 'no label', 'Localidad': 'hidden field', 'FECHA': 'header label - always visible', 'DTTO': 'header label - always visible', 'DNI': 'header label - always visible', 'NOMCOM': 'header label - always visible', 'DIRECCION': 'header label - always visible', 'EDAD 2025': 'header label - always visible', 'LOCALIDA_1': 'header label - always visible', 'AYUDA': 'header label - always visible', 'DETALLE': 'no label', 'MONTO': 'header label - always visible', 'EXP': 'header label - always visible', 'CANT_AYU': 'header label - always visible', 'LOCALIDAD DNI': 'hidden field', });
lyr_Ayudasportipo_7.set('fieldLabels', {'id': 'no label', 'Localidad': 'hidden field', 'FECHA': 'header label - always visible', 'DTTO': 'header label - always visible', 'DNI': 'header label - always visible', 'NOMCOM': 'header label - always visible', 'DIRECCION': 'header label - always visible', 'EDAD 2025': 'header label - always visible', 'LOCALIDA_1': 'header label - always visible', 'AYUDA': 'header label - always visible', 'DETALLE': 'no label', 'MONTO': 'header label - always visible', 'EXP': 'header label - always visible', 'CANT_AYU': 'header label - always visible', });
lyr_Ayudaspormonto_8.set('fieldLabels', {'id': 'no label', 'Localidad': 'hidden field', 'FECHA': 'header label - always visible', 'DTTO': 'header label - always visible', 'DNI': 'header label - always visible', 'NOMCOM': 'header label - always visible', 'DIRECCION': 'header label - always visible', 'EDAD 2025': 'header label - always visible', 'LOCALIDA_1': 'header label - always visible', 'AYUDA': 'header label - visible with data', 'DETALLE': 'no label', 'MONTO': 'header label - always visible', 'EXP': 'header label - always visible', 'CANT_AYU': 'header label - always visible', });
lyr_Ayudaspormonto_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});