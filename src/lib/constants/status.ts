export const LAUNCH_STATUS = [
  {
    id: 1,
    name: 'Go for Launch',
    abbrev: 'Go',
    description: 'Current T-0 confirmed by official or reliable sources.',
  },
  {
    id: 2,
    name: 'To Be Determined',
    abbrev: 'TBD',
    description: 'Current date is a placeholder or rough estimation based on unreliable or interpreted sources.',
  },
  {
    id: 3,
    name: 'Launch Successful',
    abbrev: 'Success',
    description: 'The launch vehicle successfully inserted its payload(s) into the target orbit(s).',
  },
  {
    id: 4,
    name: 'Launch Failure',
    abbrev: 'Failure',
    description: 'Either the launch vehicle did not reach orbit, or the payload(s) failed to separate.',
  },
  {
    id: 5,
    name: 'On Hold',
    abbrev: 'Hold',
    description: 'The countdown has been paused, but the launch can still happen within the launch window.',
  },
  {
    id: 6,
    name: 'Launch in Flight',
    abbrev: 'In Flight',
    description: 'The launch vehicle has lifted off from the launchpad.',
  },
  {
    id: 7,
    name: 'Launch was a Partial Failure',
    abbrev: 'Partial Failure',
    description:
      'Either the launch vehicle reached orbit but did not deliver its payload in the targeted orbit, or an exceptional event made it impossible to consider the mission a success.',
  },
  {
    id: 8,
    name: 'To Be Confirmed',
    abbrev: 'TBC',
    description: 'Awaiting official confirmation - current date is known with some certainty.',
  },
];
