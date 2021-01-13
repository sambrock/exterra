import styled from "styled-components";

const StyledProgressBarDiv = styled.div`
  ${props => props.theme.mixins.progressBar}
`;

const ProgressBar = ({ data }) => {
  return (
    <div>
      <StyledProgressBarDiv>
        <span className="bg-green" style={{ width: `${data.success}%` }}></span>
        <span className="bg-red" style={{ width: `${data.fail}%` }}></span>
      </StyledProgressBarDiv>
      <div className="sm:flex mt-4">
        <div className="flex items-center text-sm mr-6">
          <span className="mr-1"><svg viewBox="0 0 16 16" version="1.1" width="12" height="12" aria-hidden="true"><rect style={{ fill: 'var(--green)' }} width="12" height="12" /></svg></span>
          <span className="font-medium mr-1">Success</span>
          <span className="text-opacity">{`${data.success.toFixed(0)}%`}</span>
        </div>
        <div className="flex items-center text-sm mr-6">
          <span className="mr-1"><svg viewBox="0 0 16 16" version="1.1" width="12" height="12" aria-hidden="true"><rect style={{ fill: 'var(--red)' }} width="12" height="12" /></svg></span>
          <span className="font-medium mr-1">Fail</span>
          <span className="text-opacity">{`${data.fail.toFixed(0)}%`}</span>
        </div>
      </div>
    </div>
  )
}

export default ProgressBar;