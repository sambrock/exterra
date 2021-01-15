import { css } from 'styled-components';

const mixins = {
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
  sectionH2: css`
    display: flex;
    align-items: center;
    color: var(--white-opacity);
    margin: 24px 0;
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
    font-weight: 500;
    letter-spacing: 1.5px;
    color: var(--white-opacity);
    /* margin-right: 12px; */
  `,
  progressBar: css`
    width: 100%;
    span {
      height: 2px;
      display: inline-block;
    }
  `,
  row: css`
    align-items: center;

    &.row-border {
      border-top: 1px var(--dark-blue-2) solid;
    }

    &.row-border-btm {
      border-top: 1px var(--dark-blue-2) solid;
      border-bottom: 1px var(--dark-blue-2) solid;
    }

    .unit {
      color: var(--white-opacity);
      margin-left: 4px; 
    }
  `,
  imgContainer: css`
    position: relative;
    overflow: hidden;
    background: var(--dark-blue-2);
    display: flex;
    justify-content: center;

    img{
      height: 100%;
      object-fit: cover;
      width: auto;
    }
  `,
  btn: css`
    display: inline-block;
    color: var(--white-opacity);
    font-size: var(--fz-sm);
    font-weight: 500;
    letter-spacing: .6px;
    padding: 0 0 2px 0;
    border-bottom: 1px dotted var(--white-opacity);
  `,
};

export default mixins;