import { useRef, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import ClipLoader from 'react-spinners/ClipLoader';

import { getPreviousLaunches } from '../api';
import { LaunchItem } from '../components';

export default function Previous() {
  const [previous, setPrevious] = useState([]);
  const [offset, setOffset] = useState(50);

  const loader = useRef(null);

  useEffect(() => {
    getPreviousLaunches(offset)
      .then(data => setPrevious(p => [...p, ...data.results.filter(launch => launch.status.abbrev !== 'TBD')]));
  }, [offset]);

  useEffect(() => {
    if(!previous) return;
    const observer = new IntersectionObserver(handleObserver, { root: null, rootMargin: "20px", threshold: 1.0 });
    
    if (loader.current) {
      observer.observe(loader.current)
    }
  }, []);
  
  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setOffset((offset) => offset + 50)
    }
  }

  if (!previous) return <div></div>;

  return (
    <main>
      <Helmet title='Previous Launches'/>
      <div className="flex items-center justify-between mb-6 sm:mb-12">
        <h1>Previous Launches</h1>
      </div>
      <section>
        {previous.map(launch => (
         <LaunchItem launch={launch} />
        ))}
      </section>
      <div className="loading mt-6 flex w-full border justify-center" ref={loader}><ClipLoader color='#fffff' size={35} /></div>
    </main>
  )
}