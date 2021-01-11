module.exports = {
  api: {
    // baseURL: 'https://ll.thespacedevs.com/2.1.0/launch',
    // baseURL: 'https://lldev.thespacedevs.com/2.1.0',
    baseURL: 'https://spacelaunchnow.me/api/3.5.0',
  },

  mapbox: {
    accessToken: 'pk.eyJ1IjoieHNhbWJyb2NrIiwiYSI6ImNraWYxaHplYzBhOTYzMHFrZGVjbmk2azYifQ.YvpDpSvqa6V1SC3EVEEG3A',
    style: 'mapbox://styles/xsambrock/ckjrql6mh4ryq1ap3p7qrdkkv',
    containerStyle: { height: '100vh', width: '100vw' },
    center: { longitude: -60.073324, latitude: 38.685516 },
    zoom: { min: 3, default: 3 }
  }
}