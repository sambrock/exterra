import styled from 'styled-components';
import apiData from '../apidataid.json'

import StatusBar from '../components/StatusBar';
import Time from '../components/Time';

const StyledPageContainer = styled.div`
  ${props => props.theme.mixins.pageContainer}

  .header {
    margin: 24px 0 6px;
    display: flex;
    justify-content: space-between;

    h1 {
      max-width: 80%;
    }

    .launch-time {
      font-size: 1.4em;
    }
  }

  .launch-details {
    margin: 0 0 48px;
    color: var(--white-opacity);
    display: flex;

    span {
      margin-right: 24px;
    }
  }
  
  .launch-description {
    width: 80%;
    margin: 0 0 48px;
  }

  .launch-image {
    margin: 0 0 96px;
    height: 400px;
    overflow: hidden;
    background: var(--dark-blue-2);
    display: flex;
    width: 100%;
    position: relative;
    justify-content: center;

    img{
      height: 100%;
      object-fit: contain;
      width: auto;
    }
  }
`;

const StyledPageSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 96px;

  .heading {
    display: flex;
    align-items: center;
    margin: 0 0 24px;

    h2 {
      color: var(--white-opacity);
      margin: 0 12px 0 0;
    }
    .hl {
      height: 2px;
      width: 60px;
      background: var(--white-opacity);
    }
  }

  .content {
    /* display: grid; */
    /* grid-template-columns: repeat(3, 1fr); */
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 24px;

    .data {
      font-size:  1.4em;
      font-weight: 600;
      margin: 0 0 6px;
    }

    .label {
      text-transform: uppercase;
      font-size: .8em;
      font-weight: 500;
      letter-spacing: 1.5px;
      color: var(--white-opacity);
    }
  }
`;

export default function LaunchDetails() {

  const launch = apiData;

  return (
    <StyledPageContainer>
      <StatusBar agency={launch.launch_service_provider} mission={launch.mission} status={launch.status} />
      <div className="header">
        <h1>{launch.name}</h1>
        <div className="launch-time"><Time launchTime={launch.net} /></div>
      </div>
      <div className="launch-details">
        <span>{launch.launch_service_provider.name}</span>
        <span>{launch.pad.location.name}</span>
      </div>
      <div className="launch-description">
        <p className="description" dangerouslySetInnerHTML={{ __html: launch.mission.description.replace(/(?:\r\n|\r|\n)/g, '<br>') }}></p>
      </div>
      <div className="launch-image">
        <img src={launch.image} />
      </div>
      <StyledPageSection>
        <div className="heading">
          <h2>Mission</h2> <div className="hl"></div>
        </div>
        <div className="content">
          <div>
            <div className="data">{launch.mission.name}</div> <div className="label">Name</div>
          </div>
          <div>
            <div className="data">{launch.mission.type}</div> <div className="label">Type</div>
          </div>
          <div>
            <div className="data">{launch.mission.orbit.name}</div> <div className="label">Orbit</div>
          </div>
        </div>
      </StyledPageSection>
      <StyledPageSection>
        <div className="heading">
          <h2>Agency</h2> <div className="hl"></div>
        </div>
        <div className="content">

        </div>
      </StyledPageSection>
      <StyledPageSection>
        <div className="heading">
          <h2>Rocket</h2> <div className="hl"></div>
        </div>
        <div className="content">

        </div>
      </StyledPageSection>
      <StyledPageSection>
        <div className="heading">
          <h2>Pad</h2> <div className="hl"></div>
        </div>
        <div className="content">

        </div>
      </StyledPageSection>
    </StyledPageContainer>
  )
}
