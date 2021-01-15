import mixins from './mixins';

const theme = {
  statusColors: {
    1: 'var(--orange)', // Go for launch
    2: 'var(--grey)', // To be determined
    3: 'var(--green)', // Launch success
    4: 'var(--red)', // Launch failure
    5: 'var(--grey)', // Launch on hold
    6: 'var(--blue)', // Launch in flight
    7: 'var(--red)', // Partial failure
    8: 'var(--grey)' // To be confirmed
  },

  mixins,
}

export default theme;