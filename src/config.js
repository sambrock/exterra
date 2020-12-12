module.exports = {
  api: {
    // baseURL: 'https://ll.thespacedevs.com/2.1.0/launch',
    baseURL: 'https://lldev.thespacedevs.com/2.1.0/launch',
  },

  mapbox: {
    accessToken: 'pk.eyJ1IjoieHNhbWJyb2NrIiwiYSI6ImNraWYxaHplYzBhOTYzMHFrZGVjbmk2azYifQ.YvpDpSvqa6V1SC3EVEEG3A',
    style: 'mapbox://styles/xsambrock/ckif7859s0lmp1ao74wa6n5c7',
    containerStyle: { height: '100vh', width: '100vw' },
    center: { longitude: -101.073324, latitude: 38.685516 },
    zoom: { min: 2, default: 3 }
  }
}