import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

import { getUpcomingLaunches } from '../api';
import { LaunchItem } from '../components/';

export default function Upcoming() {
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    getUpcomingLaunches()
      .then(data => setUpcoming(data.results))
  }, []);

  return (
    <main>
      <Helmet title='Upcoming Launches' />
      <h1 className="mb-12">Upcoming Launches</h1>
      <section>
        {upcoming.map(launch => (
          <LaunchItem launch={launch} />
        ))}
      </section>
    </main>
  )
}
