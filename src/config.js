module.exports = {
  site: {
    defaultTitle: 'Exterra'
  },
  
  api: {
    baseURL: 'https://ll.thespacedevs.com/2.1.0',
    devURL: 'https://lldev.thespacedevs.com/2.1.0', // dev endpoint, no throttling / limits, works fine for legacy data
  },

  mapbox: {
    accessToken: 'pk.eyJ1IjoieHNhbWJyb2NrIiwiYSI6ImNraWYxaHplYzBhOTYzMHFrZGVjbmk2azYifQ.YvpDpSvqa6V1SC3EVEEG3A',
    style: 'mapbox://styles/xsambrock/ckjrql6mh4ryq1ap3p7qrdkkv',
    containerStyle: { height: '100vh', width: '100vw' },
    center: { longitude: -95.0364, latitude: 32.8951 },
    zoom: { min: 3, default: 4 }
  },
}