var wms_layers = [];

var format_Settlementsfootprints_0 = new ol.format.GeoJSON();
var features_Settlementsfootprints_0 = format_Settlementsfootprints_0.readFeatures(json_Settlementsfootprints_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Settlementsfootprints_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Settlementsfootprints_0.addFeatures(features_Settlementsfootprints_0);
var lyr_Settlementsfootprints_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Settlementsfootprints_0, 
                style: style_Settlementsfootprints_0,
                popuplayertitle: 'Settlements footprints',
                interactive: true,
                title: '<img src="styles/legend/Settlementsfootprints_0.png" /> Settlements footprints'
            });
var format_ondo_boundary_1 = new ol.format.GeoJSON();
var features_ondo_boundary_1 = format_ondo_boundary_1.readFeatures(json_ondo_boundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ondo_boundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ondo_boundary_1.addFeatures(features_ondo_boundary_1);
var lyr_ondo_boundary_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ondo_boundary_1, 
                style: style_ondo_boundary_1,
                popuplayertitle: 'ondo_boundary',
                interactive: true,
                title: '<img src="styles/legend/ondo_boundary_1.png" /> ondo_boundary'
            });
var format_ondo_lga_2 = new ol.format.GeoJSON();
var features_ondo_lga_2 = format_ondo_lga_2.readFeatures(json_ondo_lga_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ondo_lga_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ondo_lga_2.addFeatures(features_ondo_lga_2);
var lyr_ondo_lga_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ondo_lga_2, 
                style: style_ondo_lga_2,
                popuplayertitle: 'ondo_lga',
                interactive: true,
                title: '<img src="styles/legend/ondo_lga_2.png" /> ondo_lga'
            });
var format_Telehealthreadiness_3 = new ol.format.GeoJSON();
var features_Telehealthreadiness_3 = format_Telehealthreadiness_3.readFeatures(json_Telehealthreadiness_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Telehealthreadiness_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Telehealthreadiness_3.addFeatures(features_Telehealthreadiness_3);
var lyr_Telehealthreadiness_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Telehealthreadiness_3, 
                style: style_Telehealthreadiness_3,
                popuplayertitle: 'Telehealth readiness',
                interactive: true,
    title: 'Telehealth readiness<br />\
    <img src="styles/legend/Telehealthreadiness_3_0.png" /> Deficient<br />\
    <img src="styles/legend/Telehealthreadiness_3_1.png" /> Ready<br />' });
var format_Healthfacilities_4 = new ol.format.GeoJSON();
var features_Healthfacilities_4 = format_Healthfacilities_4.readFeatures(json_Healthfacilities_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Healthfacilities_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Healthfacilities_4.addFeatures(features_Healthfacilities_4);
var lyr_Healthfacilities_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Healthfacilities_4, 
                style: style_Healthfacilities_4,
                popuplayertitle: 'Health facilities',
                interactive: true,
                title: '<img src="styles/legend/Healthfacilities_4.png" /> Health facilities'
            });

lyr_Settlementsfootprints_0.setVisible(true);lyr_ondo_boundary_1.setVisible(true);lyr_ondo_lga_2.setVisible(true);lyr_Telehealthreadiness_3.setVisible(true);lyr_Healthfacilities_4.setVisible(true);
var layersList = [lyr_Settlementsfootprints_0,lyr_ondo_boundary_1,lyr_ondo_lga_2,lyr_Telehealthreadiness_3,lyr_Healthfacilities_4];
lyr_Settlementsfootprints_0.set('fieldAliases', {'fid': 'fid', 'block_id': 'block_id', 'country': 'country', 'iso3': 'iso3', 'block_area': 'block_area', 'block_peri': 'block_peri', 'block_neig': 'block_neig', 'building_c': 'building_c', 'building_a': 'building_a', 'building_1': 'building_1', 'building_2': 'building_2', 'building_3': 'building_3', 'building_4': 'building_4', 'building_5': 'building_5', 'extent_typ': 'extent_typ', 'mgrs_code': 'mgrs_code', 'ndvi_mean': 'ndvi_mean', 'evi_mean': 'evi_mean', 'gbuilding_': 'gbuilding_', 'gbuildin_1': 'gbuildin_1', 'blocks_per': 'blocks_per', 'building_6': 'building_6', 'building_m': 'building_m', 'building_7': 'building_7', 'bd_class': 'bd_class', 'ma_class': 'ma_class', 'composite_': 'composite_', });
lyr_ondo_boundary_1.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'NL_NAME_1': 'NL_NAME_1', 'VARNAME_1': 'VARNAME_1', 'Gender_dif': 'Gender_dif', });
lyr_ondo_lga_2.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'Local government', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'NL_NAME_2': 'NL_NAME_2', 'VARNAME_2': 'VARNAME_2', });
lyr_Telehealthreadiness_3.set('fieldAliases', {'fid': 'fid', 'quadkey': 'quadkey', 'tile': 'tile', 'tile_x': 'tile_x', 'tile_y': 'tile_y', 'avg_d_kbps': 'avg_d_kbps', 'avg_u_kbps': 'avg_u_kbps', 'avg_lat_ms': 'avg_lat_ms', 'avg_lat_do': 'avg_lat_do', 'avg_lat_up': 'avg_lat_up', 'tests': 'tests', 'devices': 'devices', 'downl_mbps': 'downl_mbps', 'digi_tier': 'digi_tier', });
lyr_Healthfacilities_4.set('fieldAliases', {'globalid': 'globalid', 'nhfr_uid': 'nhfr_uid', 'nhfr_facil': 'nhfr_facil', 'country': 'country', 'iso': 'iso', 'state': 'state', 'lga': 'lga', 'lga_name_d': 'lga_name_d', 'ward': 'ward', 'ward_name_': 'ward_name_', 'facility_n': 'Facility name', 'facility_1': 'Facility type', 'ownership': 'ownership', 'ownership_': 'ownership_', 'facility_l': 'facility_l', 'facility_2': 'facility_2', 'latitude': 'latitude', 'longitude': 'longitude', 'geocoordin': 'geocoordin', 'last_updat': 'last_updat', });
lyr_Settlementsfootprints_0.set('fieldImages', {'fid': 'Hidden', 'block_id': 'Hidden', 'country': 'Hidden', 'iso3': 'Hidden', 'block_area': 'Hidden', 'block_peri': 'Hidden', 'block_neig': 'Hidden', 'building_c': 'Hidden', 'building_a': 'Hidden', 'building_1': 'Hidden', 'building_2': 'Hidden', 'building_3': 'Hidden', 'building_4': 'Hidden', 'building_5': 'Hidden', 'extent_typ': 'Hidden', 'mgrs_code': 'Hidden', 'ndvi_mean': 'Hidden', 'evi_mean': 'Hidden', 'gbuilding_': 'Hidden', 'gbuildin_1': 'Hidden', 'blocks_per': 'Hidden', 'building_6': 'Hidden', 'building_m': 'Hidden', 'building_7': 'Hidden', 'bd_class': 'Hidden', 'ma_class': 'Hidden', 'composite_': 'Hidden', });
lyr_ondo_boundary_1.set('fieldImages', {'ID_0': 'Hidden', 'ISO': 'Hidden', 'NAME_0': 'Hidden', 'ID_1': 'Hidden', 'NAME_1': 'Hidden', 'TYPE_1': 'Hidden', 'ENGTYPE_1': 'Hidden', 'NL_NAME_1': 'Hidden', 'VARNAME_1': 'Hidden', 'Gender_dif': 'Hidden', });
lyr_ondo_lga_2.set('fieldImages', {'ID_0': 'Hidden', 'ISO': 'Hidden', 'NAME_0': 'Hidden', 'ID_1': 'Hidden', 'NAME_1': 'Hidden', 'ID_2': 'Hidden', 'NAME_2': 'TextEdit', 'TYPE_2': 'Hidden', 'ENGTYPE_2': 'Hidden', 'NL_NAME_2': 'Hidden', 'VARNAME_2': 'Hidden', });
lyr_Telehealthreadiness_3.set('fieldImages', {'fid': 'Hidden', 'quadkey': 'Hidden', 'tile': 'Hidden', 'tile_x': 'Hidden', 'tile_y': 'Hidden', 'avg_d_kbps': 'Hidden', 'avg_u_kbps': 'Hidden', 'avg_lat_ms': 'Hidden', 'avg_lat_do': 'Hidden', 'avg_lat_up': 'Hidden', 'tests': 'Hidden', 'devices': 'Hidden', 'downl_mbps': 'TextEdit', 'digi_tier': 'TextEdit', });
lyr_Healthfacilities_4.set('fieldImages', {'globalid': 'Hidden', 'nhfr_uid': 'Hidden', 'nhfr_facil': 'Hidden', 'country': 'Hidden', 'iso': 'Hidden', 'state': 'Hidden', 'lga': 'Hidden', 'lga_name_d': 'Hidden', 'ward': 'Hidden', 'ward_name_': 'Hidden', 'facility_n': 'TextEdit', 'facility_1': 'Hidden', 'ownership': 'Hidden', 'ownership_': 'Hidden', 'facility_l': 'TextEdit', 'facility_2': 'Hidden', 'latitude': 'Hidden', 'longitude': 'Hidden', 'geocoordin': 'Hidden', 'last_updat': 'Hidden', });
lyr_Settlementsfootprints_0.set('fieldLabels', {});
lyr_ondo_boundary_1.set('fieldLabels', {});
lyr_ondo_lga_2.set('fieldLabels', {'NAME_2': 'inline label - visible with data', });
lyr_Telehealthreadiness_3.set('fieldLabels', {'downl_mbps': 'inline label - visible with data', 'digi_tier': 'inline label - visible with data', });
lyr_Healthfacilities_4.set('fieldLabels', {'facility_n': 'inline label - visible with data', 'facility_l': 'inline label - always visible', });
lyr_Healthfacilities_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});