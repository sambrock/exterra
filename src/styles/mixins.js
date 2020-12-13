import { css } from 'styled-components';

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  heading: css`
    color: var(--white);
    font-weight: 600;
  `,
  tag: css`
    font-size: var(--fz-xxs);
    letter-spacing: 1.6px;
    text-transform: uppercase;
    font-weight: 600;
  `,
  status: css`
    padding: 3px 4px;
    font-size: var(--fz-xxs);
    letter-spacing: 1.6px;
    text-transform: uppercase;
    font-weight: 600;
    max-height: 19px;
    line-height: 100%;
  `,
  time: css`
    /* color: var(--white); */
    font-weight: 500;
  `,
  pageContainer: css`
    width: 800px;
    margin: 120px auto;
  `,
  sectionH2: css`
    display: flex;
    align-items: center;
    color: var(--white-opacity);
    span {
      margin: 0 0 0 12px;
      height: 2px; 
      width: 60px;
      background: var(--white-opacity);
    }
  `,
  hlHeader: css`
    height: 2px;
    width: 60px;
    background: var(--white-opacity);
  `,
  label: css`
    text-transform: uppercase;
    font-size: var(--fz-sm);
    font-weight: 500;
    letter-spacing: 1.5px;
    color: var(--white-opacity);
  `,
  databar: css`
    width: 100%;
    span {
      height: 2px;
      display: inline-block;
    }
  `,
  flexTable: css`
    width: 100%;
    .tr {
      display: flex;
      justify-content: space-between;
      font-size: var(--fz-sm);
      border-bottom: 1px var(--dark-blue-2) solid;
      padding: 12px 6px;

      &:nth-child(1) {
        border-top: 1px var(--dark-blue-2) solid;
      }
      .th {
        text-transform: uppercase;
        font-size: var(--fz-sm);
        font-weight: 500;
        letter-spacing: 1.5px;
        color: var(--white-opacity);
        min-width: 100px;
      }
      .td {
        font-weight: 500;
        letter-spacing: .5px;
        text-align: right;
          
        .unit {
          color: var(--white-opacity);
        }
      }
    }
  `,
};

export default mixins;