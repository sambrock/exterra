import styled from "styled-components";

const StyledProgressBar = styled.div`
  ${props => props.theme.mixins.databar}

  .success {
    background: var(--green);
  }
  .fail {
    background: var(--red);
  }

  .legend {
    display: flex;
    margin: 12px 0 0;

    .variable {
      font-size: var(--fz-sm);
      margin-right: 48px;
      display: inline-block;

      svg {
        margin-right: 12px;
      }

      .variable-title {
        font-weight: 500;
        margin-right: 6px;
      }
      .variable-stat {
        color: var(--white-opacity);
      }
    }
  }
`;

const ProgressBar = ({ data }) => {
  return (
    <StyledProgressBar>
      <div className="data-bar">
        <span className="success" style={{ width: `${data.success}%` }}></span>
        <span className="fail" style={{ width: `${data.fail}%` }}></span>
      </div>
      <div className="legend">
        <div className="variable">
          <span><svg viewBox="0 0 16 16" version="1.1" width="12" height="12" aria-hidden="true"><rect style={{ fill: 'var(--green)' }} width="12" height="12" /></svg></span>
          <span className="variable-title">Success</span>
          <span className="variable-stat">{`${data.success.toFixed(0)}%`}</span>
        </div>
        <div className="variable">
          <span><svg viewBox="0 0 16 16" version="1.1" width="12" height="12" aria-hidden="true"><rect style={{ fill: 'var(--red)' }} width="12" height="12" /></svg></span>
          <span className="variable-title">Fail</span>
          <span className="variable-stat">{`${data.fail.toFixed(0)}%`}</span>
        </div>
      </div>
    </StyledProgressBar>
  )
}

export default ProgressBar;