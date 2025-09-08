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
var format_Barrios_2 = new ol.format.GeoJSON();
var features_Barrios_2 = format_Barrios_2.readFeatures(json_Barrios_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Barrios_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Barrios_2.addFeatures(features_Barrios_2);
var lyr_Barrios_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Barrios_2, 
                style: style_Barrios_2,
                popuplayertitle: 'Barrios',
                interactive: true,
                title: '<img src="styles/legend/Barrios_2.png" /> Barrios'
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
var format_EmpleadosMunicipales_7 = new ol.format.GeoJSON();
var features_EmpleadosMunicipales_7 = format_EmpleadosMunicipales_7.readFeatures(json_EmpleadosMunicipales_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpleadosMunicipales_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpleadosMunicipales_7.addFeatures(features_EmpleadosMunicipales_7);
var lyr_EmpleadosMunicipales_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpleadosMunicipales_7, 
                style: style_EmpleadosMunicipales_7,
                popuplayertitle: 'Empleados Municipales',
                interactive: true,
    title: 'Empleados Municipales<br />\
    <img src="styles/legend/EmpleadosMunicipales_7_0.png" /> Empleado Municipal<br />' });
var format_Cantidaddeayudasporpersona_8 = new ol.format.GeoJSON();
var features_Cantidaddeayudasporpersona_8 = format_Cantidaddeayudasporpersona_8.readFeatures(json_Cantidaddeayudasporpersona_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cantidaddeayudasporpersona_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cantidaddeayudasporpersona_8.addFeatures(features_Cantidaddeayudasporpersona_8);
var lyr_Cantidaddeayudasporpersona_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cantidaddeayudasporpersona_8, 
                style: style_Cantidaddeayudasporpersona_8,
                popuplayertitle: 'Cantidad de ayudas por persona',
                interactive: true,
    title: 'Cantidad de ayudas por persona<br />\
    <img src="styles/legend/Cantidaddeayudasporpersona_8_0.png" /> Una ayuda<br />\
    <img src="styles/legend/Cantidaddeayudasporpersona_8_1.png" /> Dos ayudas<br />\
    <img src="styles/legend/Cantidaddeayudasporpersona_8_2.png" /> Tres ayudas<br />\
    <img src="styles/legend/Cantidaddeayudasporpersona_8_3.png" /> Cuatro ayudas<br />' });
var format_Ayudasportipo_9 = new ol.format.GeoJSON();
var features_Ayudasportipo_9 = format_Ayudasportipo_9.readFeatures(json_Ayudasportipo_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ayudasportipo_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ayudasportipo_9.addFeatures(features_Ayudasportipo_9);
var lyr_Ayudasportipo_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ayudasportipo_9, 
                style: style_Ayudasportipo_9,
                popuplayertitle: 'Ayudas por tipo',
                interactive: true,
    title: 'Ayudas por tipo<br />\
    <img src="styles/legend/Ayudasportipo_9_0.png" /> Canasta básica<br />\
    <img src="styles/legend/Ayudasportipo_9_1.png" /> Impuestos<br />\
    <img src="styles/legend/Ayudasportipo_9_2.png" /> Alquiler<br />\
    <img src="styles/legend/Ayudasportipo_9_3.png" /> Compra de (...)<br />\
    <img src="styles/legend/Ayudasportipo_9_4.png" /> Gastos académicos<br />\
    <img src="styles/legend/Ayudasportipo_9_5.png" /> Gastos médicos<br />\
    <img src="styles/legend/Ayudasportipo_9_6.png" /> Gastos varios<br />\
    <img src="styles/legend/Ayudasportipo_9_7.png" /> Sepelio<br />' });
var format_Ayudaspormonto_10 = new ol.format.GeoJSON();
var features_Ayudaspormonto_10 = format_Ayudaspormonto_10.readFeatures(json_Ayudaspormonto_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ayudaspormonto_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ayudaspormonto_10.addFeatures(features_Ayudaspormonto_10);
var lyr_Ayudaspormonto_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ayudaspormonto_10, 
                style: style_Ayudaspormonto_10,
                popuplayertitle: 'Ayudas por monto',
                interactive: true,
    title: 'Ayudas por monto<br />\
    <img src="styles/legend/Ayudaspormonto_10_0.png" /> 12500 - 40000<br />\
    <img src="styles/legend/Ayudaspormonto_10_1.png" /> 40000 - 80000<br />\
    <img src="styles/legend/Ayudaspormonto_10_2.png" /> 80000 - 140000<br />\
    <img src="styles/legend/Ayudaspormonto_10_3.png" /> 140000 - 190000<br />\
    <img src="styles/legend/Ayudaspormonto_10_4.png" /> 190000 - 300000<br />' });
var format_Montoporlocalidad_11 = new ol.format.GeoJSON();
var features_Montoporlocalidad_11 = format_Montoporlocalidad_11.readFeatures(json_Montoporlocalidad_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Montoporlocalidad_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Montoporlocalidad_11.addFeatures(features_Montoporlocalidad_11);
var lyr_Montoporlocalidad_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Montoporlocalidad_11, 
                style: style_Montoporlocalidad_11,
                popuplayertitle: 'Monto por localidad',
                interactive: true,
    title: 'Monto por localidad<br />\
    <img src="styles/legend/Montoporlocalidad_11_0.png" /> 50000 - 200000<br />\
    <img src="styles/legend/Montoporlocalidad_11_1.png" /> 200000 - 600000<br />\
    <img src="styles/legend/Montoporlocalidad_11_2.png" /> 600000 - 1200000<br />\
    <img src="styles/legend/Montoporlocalidad_11_3.png" /> 1200000 - 3000000<br />\
    <img src="styles/legend/Montoporlocalidad_11_4.png" /> 3000000 - 7608133<br />' });
var format_Localidades_12 = new ol.format.GeoJSON();
var features_Localidades_12 = format_Localidades_12.readFeatures(json_Localidades_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localidades_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localidades_12.addFeatures(features_Localidades_12);
var lyr_Localidades_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Localidades_12, 
                style: style_Localidades_12,
                popuplayertitle: 'Localidades',
                interactive: true,
                title: '<img src="styles/legend/Localidades_12.png" /> Localidades'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Limitesnuevos_Distritos_1.setVisible(false);lyr_Barrios_2.setVisible(true);lyr_Espaciosverdes_3.setVisible(true);lyr_Redvial_4.setVisible(true);lyr_Parcelarioconpropietarios_5.setVisible(false);lyr_Ayudasporlocalidad_6.setVisible(false);lyr_EmpleadosMunicipales_7.setVisible(false);lyr_Cantidaddeayudasporpersona_8.setVisible(false);lyr_Ayudasportipo_9.setVisible(false);lyr_Ayudaspormonto_10.setVisible(true);lyr_Montoporlocalidad_11.setVisible(true);lyr_Localidades_12.setVisible(false);
var layersList = [lyr_GoogleSatellite_0,lyr_Limitesnuevos_Distritos_1,lyr_Barrios_2,lyr_Espaciosverdes_3,lyr_Redvial_4,lyr_Parcelarioconpropietarios_5,lyr_Ayudasporlocalidad_6,lyr_EmpleadosMunicipales_7,lyr_Cantidaddeayudasporpersona_8,lyr_Ayudasportipo_9,lyr_Ayudaspormonto_10,lyr_Montoporlocalidad_11,lyr_Localidades_12];
lyr_Limitesnuevos_Distritos_1.set('fieldAliases', {'Name': 'Name', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'Poblaci√É¬': 'Poblaci√É¬', });
lyr_Barrios_2.set('fieldAliases', {'Name': 'Name', 'Operatoria': 'Operatoria', 'ESTADO': 'ESTADO', 'Distrito': 'Distrito', 'Departamen': 'Departamen', 'Cant hab.': 'Cant hab.', });
lyr_Espaciosverdes_3.set('fieldAliases', {'Name': 'Name', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', });
lyr_Redvial_4.set('fieldAliases', {'Name': 'Name', 'DEPTO': 'DEPTO', 'Tipo': 'Tipo', 'Distrito': 'Distrito', 'auxiliary_': 'auxiliary_', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_show': 'auxiliary_storage_labeling_show', 'auxiliary_storage_labeling_labelrotation': 'auxiliary_storage_labeling_labelrotation', 'auxiliary_storage_labeling_family': 'auxiliary_storage_labeling_family', 'auxiliary_storage_labeling_fontstyle': 'auxiliary_storage_labeling_fontstyle', 'auxiliary_storage_labeling_size': 'auxiliary_storage_labeling_size', 'auxiliary_storage_labeling_bold': 'auxiliary_storage_labeling_bold', 'auxiliary_storage_labeling_italic': 'auxiliary_storage_labeling_italic', 'auxiliary_storage_labeling_underline': 'auxiliary_storage_labeling_underline', 'auxiliary_storage_labeling_color': 'auxiliary_storage_labeling_color', 'auxiliary_storage_labeling_strikeout': 'auxiliary_storage_labeling_strikeout', 'auxiliary_storage_labeling_multilinealignment': 'auxiliary_storage_labeling_multilinealignment', 'auxiliary_storage_labeling_buffersize': 'auxiliary_storage_labeling_buffersize', 'auxiliary_storage_labeling_buffercolor': 'auxiliary_storage_labeling_buffercolor', 'auxiliary_storage_labeling_bufferdraw': 'auxiliary_storage_labeling_bufferdraw', 'auxiliary_storage_labeling_labeldistance': 'auxiliary_storage_labeling_labeldistance', 'auxiliary_storage_labeling_hali': 'auxiliary_storage_labeling_hali', 'auxiliary_storage_labeling_vali': 'auxiliary_storage_labeling_vali', 'auxiliary_storage_labeling_scalevisibility': 'auxiliary_storage_labeling_scalevisibility', 'auxiliary_storage_labeling_minscale': 'auxiliary_storage_labeling_minscale', 'auxiliary_storage_labeling_maxscale': 'auxiliary_storage_labeling_maxscale', 'auxiliary_storage_labeling_alwaysshow': 'auxiliary_storage_labeling_alwaysshow', 'auxiliary_storage_labeling_calloutdraw': 'auxiliary_storage_labeling_calloutdraw', 'auxiliary_storage_labeling_labelallparts': 'auxiliary_storage_labeling_labelallparts', });
lyr_Parcelarioconpropietarios_5.set('fieldAliases', {'NOMENCLATU': 'NOMENCLATU', 'ZONA': 'ZONA', 'CALLE': 'CALLE', 'ALTURA': 'ALTURA', 'BARRIO': 'BARRIO', 'LOTE': 'LOTE', 'MANZANA': 'MANZANA', 'ULTIMA_ACT': 'ULTIMA_ACT', 'MATRICULA': 'MATRICULA', 'FOLIO': 'FOLIO', 'TOMO': 'TOMO', 'FOLIO_REAL': 'FOLIO_REAL', 'ASIENTO': 'ASIENTO', 'AUTORIDAD': 'AUTORIDAD', 'AREA_M2': 'AREA_M2', 'DEPTO': 'DEPTO', 'DTTO': 'DTTO', 'SECC': 'SECC', 'MZN': 'MZN', 'PARC': 'PARC', 'SUBP': 'SUBP', 'VERI': 'VERI', 'PROPIETARI': 'PROPIETARI', });
lyr_Ayudasporlocalidad_6.set('fieldAliases', {'id': 'id', 'Localidad': 'Localidad', 'FECHA': 'FECHA', 'DTTO': 'DTTO', 'DNI': 'DNI', 'NOMCOM': 'NOMCOM', 'DIRECCION': 'DIRECCION', 'EDAD 2025': 'EDAD 2025', 'LOCALIDA_1': 'LOCALIDA_1', 'AYUDA': 'AYUDA', 'DETALLE': 'DETALLE', 'MONTO': 'MONTO', 'EXP': 'EXP', 'CANT_AYU': 'CANT_AYU', 'EMP': 'EMP', 'CANT/PER': 'CANT/PER', 'LOCALIDAD DNI': 'LOCALIDAD DNI', });
lyr_EmpleadosMunicipales_7.set('fieldAliases', {'id': 'id', 'Localidad': 'Localidad', 'FECHA': 'FECHA', 'DTTO': 'DTTO', 'DNI': 'DNI', 'NOMCOM': 'NOMCOM', 'DIRECCION': 'DIRECCION', 'EDAD 2025': 'EDAD 2025', 'LOCALIDA_1': 'LOCALIDA_1', 'AYUDA': 'AYUDA', 'DETALLE': 'DETALLE', 'MONTO': 'MONTO', 'EXP': 'EXP', 'CANT_AYU': 'CANT_AYU', 'EMP': 'EMP', 'CANT/PER': 'CANT/PER', });
lyr_Cantidaddeayudasporpersona_8.set('fieldAliases', {'id': 'id', 'Localidad': 'Localidad', 'FECHA': 'FECHA', 'DTTO': 'DTTO', 'DNI': 'DNI', 'NOMCOM': 'NOMCOM', 'DIRECCION': 'DIRECCION', 'EDAD 2025': 'EDAD 2025', 'LOCALIDA_1': 'LOCALIDA_1', 'AYUDA': 'AYUDA', 'DETALLE': 'DETALLE', 'MONTO': 'MONTO', 'EXP': 'EXP', 'CANT_AYU': 'CANT_AYU', 'EMP': 'EMP', 'CANT/PER': 'CANT/PER', });
lyr_Ayudasportipo_9.set('fieldAliases', {'id': 'id', 'Localidad': 'Localidad', 'FECHA': 'FECHA', 'DTTO': 'DTTO', 'DNI': 'DNI', 'NOMCOM': 'NOMCOM', 'DIRECCION': 'DIRECCION', 'EDAD 2025': 'EDAD 2025', 'LOCALIDA_1': 'LOCALIDA_1', 'AYUDA': 'AYUDA', 'DETALLE': 'DETALLE', 'MONTO': 'MONTO', 'EXP': 'EXP', 'CANT_AYU': 'CANT_AYU', 'EMP': 'EMP', 'CANT/PER': 'CANT/PER', });
lyr_Ayudaspormonto_10.set('fieldAliases', {'id': 'id', 'Localidad': 'Localidad', 'FECHA': 'FECHA', 'DTTO': 'DTTO', 'DNI': 'DNI', 'NOMCOM': 'NOMCOM', 'DIRECCION': 'DIRECCION', 'EDAD 2025': 'EDAD 2025', 'LOCALIDA_1': 'LOCALIDA_1', 'AYUDA': 'AYUDA', 'DETALLE': 'DETALLE', 'MONTO': 'MONTO', 'EXP': 'EXP', 'CANT_AYU': 'CANT_AYU', 'EMP': 'EMP', 'CANT/PER': 'CANT/PER', });
lyr_Montoporlocalidad_11.set('fieldAliases', {'Name': 'Name', 'Distrito': 'Distrito', 'CANTIDAD': 'CANTIDAD', 'MONTO': 'MONTO', 'MONTO_LEG': 'MONTO_LEG', });
lyr_Localidades_12.set('fieldAliases', {'Name': 'Name', 'Distrito': 'Distrito', 'CANTIDAD': 'CANTIDAD', 'MONTO': 'MONTO', 'MONTO_LEG': 'MONTO_LEG', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_Limitesnuevos_Distritos_1.set('fieldImages', {'Name': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'Poblaci√É¬': 'TextEdit', });
lyr_Barrios_2.set('fieldImages', {'Name': 'TextEdit', 'Operatoria': 'TextEdit', 'ESTADO': 'TextEdit', 'Distrito': 'TextEdit', 'Departamen': 'TextEdit', 'Cant hab.': 'TextEdit', });
lyr_Espaciosverdes_3.set('fieldImages', {'Name': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', });
lyr_Redvial_4.set('fieldImages', {'Name': 'TextEdit', 'DEPTO': 'TextEdit', 'Tipo': 'TextEdit', 'Distrito': 'TextEdit', 'auxiliary_': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_labeling_show': 'Hidden', 'auxiliary_storage_labeling_labelrotation': 'Hidden', 'auxiliary_storage_labeling_family': 'Hidden', 'auxiliary_storage_labeling_fontstyle': 'Hidden', 'auxiliary_storage_labeling_size': 'Hidden', 'auxiliary_storage_labeling_bold': 'Hidden', 'auxiliary_storage_labeling_italic': 'Hidden', 'auxiliary_storage_labeling_underline': 'Hidden', 'auxiliary_storage_labeling_color': 'Hidden', 'auxiliary_storage_labeling_strikeout': 'Hidden', 'auxiliary_storage_labeling_multilinealignment': 'Hidden', 'auxiliary_storage_labeling_buffersize': 'Hidden', 'auxiliary_storage_labeling_buffercolor': 'Hidden', 'auxiliary_storage_labeling_bufferdraw': 'Hidden', 'auxiliary_storage_labeling_labeldistance': 'Hidden', 'auxiliary_storage_labeling_hali': 'Hidden', 'auxiliary_storage_labeling_vali': 'Hidden', 'auxiliary_storage_labeling_scalevisibility': 'Hidden', 'auxiliary_storage_labeling_minscale': 'Hidden', 'auxiliary_storage_labeling_maxscale': 'Hidden', 'auxiliary_storage_labeling_alwaysshow': 'Hidden', 'auxiliary_storage_labeling_calloutdraw': 'Hidden', 'auxiliary_storage_labeling_labelallparts': 'Hidden', });
lyr_Parcelarioconpropietarios_5.set('fieldImages', {'NOMENCLATU': 'TextEdit', 'ZONA': 'TextEdit', 'CALLE': 'TextEdit', 'ALTURA': 'TextEdit', 'BARRIO': 'TextEdit', 'LOTE': 'TextEdit', 'MANZANA': 'TextEdit', 'ULTIMA_ACT': 'TextEdit', 'MATRICULA': 'TextEdit', 'FOLIO': 'TextEdit', 'TOMO': 'TextEdit', 'FOLIO_REAL': 'TextEdit', 'ASIENTO': 'TextEdit', 'AUTORIDAD': 'TextEdit', 'AREA_M2': 'TextEdit', 'DEPTO': 'TextEdit', 'DTTO': 'TextEdit', 'SECC': 'TextEdit', 'MZN': 'TextEdit', 'PARC': 'TextEdit', 'SUBP': 'TextEdit', 'VERI': 'TextEdit', 'PROPIETARI': 'TextEdit', });
lyr_Ayudasporlocalidad_6.set('fieldImages', {'id': 'TextEdit', 'Localidad': 'TextEdit', 'FECHA': 'TextEdit', 'DTTO': 'TextEdit', 'DNI': 'TextEdit', 'NOMCOM': 'TextEdit', 'DIRECCION': 'TextEdit', 'EDAD 2025': 'TextEdit', 'LOCALIDA_1': 'TextEdit', 'AYUDA': 'TextEdit', 'DETALLE': 'TextEdit', 'MONTO': 'TextEdit', 'EXP': 'TextEdit', 'CANT_AYU': 'TextEdit', 'EMP': '', 'CANT/PER': '', 'LOCALIDAD DNI': 'TextEdit', });
lyr_EmpleadosMunicipales_7.set('fieldImages', {'id': 'TextEdit', 'Localidad': 'TextEdit', 'FECHA': 'TextEdit', 'DTTO': 'TextEdit', 'DNI': 'TextEdit', 'NOMCOM': 'TextEdit', 'DIRECCION': 'TextEdit', 'EDAD 2025': 'TextEdit', 'LOCALIDA_1': 'TextEdit', 'AYUDA': 'TextEdit', 'DETALLE': 'TextEdit', 'MONTO': 'TextEdit', 'EXP': 'TextEdit', 'CANT_AYU': 'TextEdit', 'EMP': 'TextEdit', 'CANT/PER': 'TextEdit', });
lyr_Cantidaddeayudasporpersona_8.set('fieldImages', {'id': 'TextEdit', 'Localidad': 'TextEdit', 'FECHA': 'TextEdit', 'DTTO': 'TextEdit', 'DNI': 'TextEdit', 'NOMCOM': 'TextEdit', 'DIRECCION': 'TextEdit', 'EDAD 2025': 'TextEdit', 'LOCALIDA_1': 'TextEdit', 'AYUDA': 'TextEdit', 'DETALLE': 'TextEdit', 'MONTO': 'TextEdit', 'EXP': 'TextEdit', 'CANT_AYU': 'TextEdit', 'EMP': 'TextEdit', 'CANT/PER': 'TextEdit', });
lyr_Ayudasportipo_9.set('fieldImages', {'id': 'TextEdit', 'Localidad': 'TextEdit', 'FECHA': 'TextEdit', 'DTTO': 'TextEdit', 'DNI': 'TextEdit', 'NOMCOM': 'TextEdit', 'DIRECCION': 'TextEdit', 'EDAD 2025': 'TextEdit', 'LOCALIDA_1': 'TextEdit', 'AYUDA': 'TextEdit', 'DETALLE': 'TextEdit', 'MONTO': 'TextEdit', 'EXP': 'TextEdit', 'CANT_AYU': 'TextEdit', 'EMP': '', 'CANT/PER': '', });
lyr_Ayudaspormonto_10.set('fieldImages', {'id': 'TextEdit', 'Localidad': 'TextEdit', 'FECHA': 'TextEdit', 'DTTO': 'TextEdit', 'DNI': 'TextEdit', 'NOMCOM': 'TextEdit', 'DIRECCION': 'TextEdit', 'EDAD 2025': 'TextEdit', 'LOCALIDA_1': 'TextEdit', 'AYUDA': 'TextEdit', 'DETALLE': 'TextEdit', 'MONTO': 'TextEdit', 'EXP': 'TextEdit', 'CANT_AYU': 'TextEdit', 'EMP': '', 'CANT/PER': '', });
lyr_Montoporlocalidad_11.set('fieldImages', {'Name': 'TextEdit', 'Distrito': 'TextEdit', 'CANTIDAD': 'TextEdit', 'MONTO': 'TextEdit', 'MONTO_LEG': 'TextEdit', });
lyr_Localidades_12.set('fieldImages', {'Name': 'TextEdit', 'Distrito': 'TextEdit', 'CANTIDAD': 'TextEdit', 'MONTO': 'TextEdit', 'MONTO_LEG': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_Limitesnuevos_Distritos_1.set('fieldLabels', {'Name': 'header label - always visible', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'Poblaci√É¬': 'hidden field', });
lyr_Barrios_2.set('fieldLabels', {'Name': 'header label - always visible', 'Operatoria': 'header label - always visible', 'ESTADO': 'hidden field', 'Distrito': 'header label - always visible', 'Departamen': 'no label', 'Cant hab.': 'no label', });
lyr_Espaciosverdes_3.set('fieldLabels', {'Name': 'header label - always visible', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', });
lyr_Redvial_4.set('fieldLabels', {'Name': 'header label - always visible', 'DEPTO': 'hidden field', 'Tipo': 'header label - always visible', 'Distrito': 'header label - visible with data', 'auxiliary_': 'hidden field', });
lyr_Parcelarioconpropietarios_5.set('fieldLabels', {'NOMENCLATU': 'header label - always visible', 'ZONA': 'header label - always visible', 'CALLE': 'header label - always visible', 'ALTURA': 'header label - always visible', 'BARRIO': 'header label - always visible', 'LOTE': 'hidden field', 'MANZANA': 'hidden field', 'ULTIMA_ACT': 'hidden field', 'MATRICULA': 'hidden field', 'FOLIO': 'hidden field', 'TOMO': 'hidden field', 'FOLIO_REAL': 'hidden field', 'ASIENTO': 'hidden field', 'AUTORIDAD': 'hidden field', 'AREA_M2': 'hidden field', 'DEPTO': 'hidden field', 'DTTO': 'hidden field', 'SECC': 'hidden field', 'MZN': 'hidden field', 'PARC': 'hidden field', 'SUBP': 'hidden field', 'VERI': 'hidden field', 'PROPIETARI': 'header label - always visible', });
lyr_Ayudasporlocalidad_6.set('fieldLabels', {'id': 'no label', 'Localidad': 'hidden field', 'FECHA': 'header label - always visible', 'DTTO': 'header label - always visible', 'DNI': 'header label - always visible', 'NOMCOM': 'header label - always visible', 'DIRECCION': 'header label - always visible', 'EDAD 2025': 'header label - always visible', 'LOCALIDA_1': 'header label - always visible', 'AYUDA': 'header label - always visible', 'DETALLE': 'no label', 'MONTO': 'header label - always visible', 'EXP': 'header label - always visible', 'CANT_AYU': 'header label - always visible', 'EMP': 'no label', 'CANT/PER': 'no label', 'LOCALIDAD DNI': 'hidden field', });
lyr_EmpleadosMunicipales_7.set('fieldLabels', {'id': 'no label', 'Localidad': 'hidden field', 'FECHA': 'header label - always visible', 'DTTO': 'header label - always visible', 'DNI': 'header label - always visible', 'NOMCOM': 'header label - always visible', 'DIRECCION': 'header label - always visible', 'EDAD 2025': 'header label - always visible', 'LOCALIDA_1': 'header label - always visible', 'AYUDA': 'header label - always visible', 'DETALLE': 'no label', 'MONTO': 'header label - always visible', 'EXP': 'header label - always visible', 'CANT_AYU': 'header label - always visible', 'EMP': 'hidden field', 'CANT/PER': 'hidden field', });
lyr_Cantidaddeayudasporpersona_8.set('fieldLabels', {'id': 'no label', 'Localidad': 'hidden field', 'FECHA': 'hidden field', 'DTTO': 'header label - always visible', 'DNI': 'header label - always visible', 'NOMCOM': 'header label - always visible', 'DIRECCION': 'header label - always visible', 'EDAD 2025': 'header label - always visible', 'LOCALIDA_1': 'header label - always visible', 'AYUDA': 'hidden field', 'DETALLE': 'hidden field', 'MONTO': 'hidden field', 'EXP': 'hidden field', 'CANT_AYU': 'hidden field', 'EMP': 'hidden field', 'CANT/PER': 'header label - always visible', });
lyr_Ayudasportipo_9.set('fieldLabels', {'id': 'no label', 'Localidad': 'hidden field', 'FECHA': 'header label - always visible', 'DTTO': 'header label - always visible', 'DNI': 'header label - always visible', 'NOMCOM': 'header label - always visible', 'DIRECCION': 'header label - always visible', 'EDAD 2025': 'header label - always visible', 'LOCALIDA_1': 'header label - always visible', 'AYUDA': 'header label - always visible', 'DETALLE': 'no label', 'MONTO': 'header label - always visible', 'EXP': 'header label - always visible', 'CANT_AYU': 'header label - always visible', 'EMP': 'no label', 'CANT/PER': 'no label', });
lyr_Ayudaspormonto_10.set('fieldLabels', {'id': 'no label', 'Localidad': 'hidden field', 'FECHA': 'header label - always visible', 'DTTO': 'header label - always visible', 'DNI': 'header label - always visible', 'NOMCOM': 'header label - always visible', 'DIRECCION': 'header label - always visible', 'EDAD 2025': 'header label - always visible', 'LOCALIDA_1': 'header label - always visible', 'AYUDA': 'header label - visible with data', 'DETALLE': 'no label', 'MONTO': 'header label - always visible', 'EXP': 'header label - always visible', 'CANT_AYU': 'header label - always visible', 'EMP': 'no label', 'CANT/PER': 'no label', });
lyr_Montoporlocalidad_11.set('fieldLabels', {'Name': 'no label', 'Distrito': 'header label - always visible', 'CANTIDAD': 'hidden field', 'MONTO': 'hidden field', 'MONTO_LEG': 'header label - always visible', });
lyr_Localidades_12.set('fieldLabels', {'Name': 'no label', 'Distrito': 'header label - always visible', 'CANTIDAD': 'hidden field', 'MONTO': 'hidden field', 'MONTO_LEG': 'hidden field', });
lyr_Localidades_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});