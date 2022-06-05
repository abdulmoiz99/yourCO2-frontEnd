var simplemaps_ukmap_mapdata = {
  main_settings: {
    //General settings
    width: 'responsive', //or 'responsive'
    background_color: '#FFFFFF',
    background_transparent: 'yes',
    popups: 'detect',

    //State defaults
    state_description: 'Calculating...',
    state_color: '#88A4BC',
    state_hover_color: '#3B729F',
    state_url: '',
    border_size: 1.5,
    border_color: '#ffffff',
    all_states_inactive: 'no',
    all_states_zoomable: 'no',

    //Location defaults
    location_description: 'Location description',
    location_color: '#FF0067',
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_url: '',
    location_size: 25,
    location_type: 'square',
    location_border_color: '#FFFFFF',
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: 'no',
    all_locations_hidden: 'no',

    //Label defaults
    label_color: '#ffffff',
    label_hover_color: '#ffffff',
    label_size: 22,
    label_font: 'Arial',
    hide_labels: 'no',

    //Zoom settings
    manual_zoom: 'yes',
    back_image: 'no',
    arrow_box: 'no',
    navigation_size: '40',
    navigation_color: '#f7f7f7',
    navigation_border_color: '#636363',
    initial_back: 'no',
    initial_zoom: -1,
    initial_zoom_solo: 'no',
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: 'yes',
    zoom_percentage: 0.99,
    zoom_time: 0.5,

    //Popup settings
    popup_color: 'white',
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: '12px/1.5 Verdana, Arial, Helvetica, sans-serif',
    popup_nocss: 'no',

    //Advanced settings
    div: 'map',
    auto_load: 'yes',
    rotate: '0',
    url_new_tab: 'yes',
    images_directory: 'default',
    import_labels: 'no',
    fade_time: 0.1,
    link_text: 'View Website',
  },
  state_specific: {
    EE: {
      name: 'East',
      description: 'Values',
      color: 'default',
      hover_color: 'default',
      url: 'default',
    },
    EM: {
      name: 'East Midlands',
      description: 'default',
      color: 'default',
      hover_color: 'default',
      url: 'default',
    },
    ES: {
      name: 'Eastern Scotland',
      description: 'default',
      color: 'default',
      hover_color: 'default',
      url: 'default',
    },
    EW: {
      name: 'East Wales',
      description: 'default',
      color: 'default',
      hover_color: 'default',
      url: 'default',
    },
    GL: {
      name: 'Greater London',
      description: 'default',
      color: 'default',
      hover_color: 'default',
      url: 'default',
    },
    HI: {
      name: 'Highlands and Islands',
      description: 'default',
      color: 'default',
      hover_color: 'default',
      url: 'default',
    },
    NE: {
      name: 'North East',
      description: 'default',
      color: 'default',
      hover_color: 'default',
      url: 'default',
    },
    NI: {
      name: 'Northern Ireland',
      description: 'N/A',
      color: 'default',
      hover_color: 'default',
      url: 'default',
    },
    NS: {
      name: 'North Eastern Scotland',
      description: 'default',
      color: 'default',
      hover_color: 'default',
      url: 'default',
    },
    NW: {
      name: 'North West',
      description: 'default',
      color: 'default',
      hover_color: 'default',
      url: 'default',
    },
    SE: {
      name: 'South East',
      description: 'default',
      color: 'default',
      hover_color: 'default',
      url: 'default',
    },
    SS: {
      name: 'South Western Scotland',
      description: 'default',
      color: 'default',
      hover_color: 'default',
      url: 'default',
    },
    SW: {
      name: 'South West',
      description: 'default',
      color: 'default',
      hover_color: 'default',
      url: 'default',
    },
    WM: {
      name: 'West Midlands',
      description: 'default',
      color: 'default',
      hover_color: 'default',
      url: 'default',
    },
    WV: {
      name: 'West Wales and the Valleys',
      description: 'default',
      color: 'default',
      hover_color: 'default',
      url: 'default',
    },
    YH: {
      name: 'Yorkshire and the Humber',
      description: 'default',
      color: 'default',
      hover_color: 'default',
      url: 'default',
    },
  },
  locations: {},
  labels: {},
}
class EasyHTTP {
  // Make an HTTP GET Request
  async get(url) {
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
  }
}

const http = new EasyHTTP;

var NS = http.get("https://api.carbonintensity.org.uk/regional/regionid/1");
var SS = http.get("https://api.carbonintensity.org.uk/regional/regionid/2");
var NWE = http.get("https://api.carbonintensity.org.uk/regional/regionid/3");
var NEE = http.get("https://api.carbonintensity.org.uk/regional/regionid/4");
var SY = http.get("https://api.carbonintensity.org.uk/regional/regionid/5");
var NW = http.get("https://api.carbonintensity.org.uk/regional/regionid/6");
var SW = http.get("https://api.carbonintensity.org.uk/regional/regionid/7");
var WM = http.get("https://api.carbonintensity.org.uk/regional/regionid/8");
var EM = http.get("https://api.carbonintensity.org.uk/regional/regionid/9");
var EE = http.get("https://api.carbonintensity.org.uk/regional/regionid/10");
var SWE = http.get("https://api.carbonintensity.org.uk/regional/regionid/11");
var SE = http.get("https://api.carbonintensity.org.uk/regional/regionid/12");
var L = http.get("https://api.carbonintensity.org.uk/regional/regionid/13");
var SEE = http.get("https://api.carbonintensity.org.uk/regional/regionid/14");
var S = http.get("https://api.carbonintensity.org.uk/regional/regionid/16");

Promise.all([NS, SS, NWE, NEE, SY, NW, SW, WM, EM, EE, SWE, SE, L, SEE, S]).then((values) => {

  simplemaps_ukmap_mapdata.state_specific.ES.description = values[0].data[0].data[0].intensity.forecast;
  simplemaps_ukmap_mapdata.state_specific.NS.description = values[0].data[0].data[0].intensity.forecast;
  simplemaps_ukmap_mapdata.state_specific.SS.description = values[1].data[0].data[0].intensity.forecast;
  simplemaps_ukmap_mapdata.state_specific.NW.description = values[2].data[0].data[0].intensity.forecast;
  simplemaps_ukmap_mapdata.state_specific.NE.description = values[3].data[0].data[0].intensity.forecast;
  simplemaps_ukmap_mapdata.state_specific.YH.description = values[4].data[0].data[0].intensity.forecast;
  simplemaps_ukmap_mapdata.state_specific.EW.description = values[5].data[0].data[0].intensity.forecast;
  simplemaps_ukmap_mapdata.state_specific.WV.description = values[6].data[0].data[0].intensity.forecast;
  simplemaps_ukmap_mapdata.state_specific.WM.description = values[7].data[0].data[0].intensity.forecast;
  simplemaps_ukmap_mapdata.state_specific.EM.description = values[8].data[0].data[0].intensity.forecast;
  simplemaps_ukmap_mapdata.state_specific.EE.description = values[9].data[0].data[0].intensity.forecast;
  simplemaps_ukmap_mapdata.state_specific.SW.description = values[10].data[0].data[0].intensity.forecast;
  simplemaps_ukmap_mapdata.state_specific.GL.description = values[12].data[0].data[0].intensity.forecast;
  simplemaps_ukmap_mapdata.state_specific.SE.description = values[13].data[0].data[0].intensity.forecast;
  simplemaps_ukmap_mapdata.state_specific.HI.description = values[14].data[0].data[0].intensity.forecast;

  simplemaps_ukmap.refresh();
});