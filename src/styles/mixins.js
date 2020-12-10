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
    color: var(--white);
    font-weight: 500;
  `,
  glow: css`
    box-shadow: 0 0 10px #fff;
    text-shadow: 0 0 10px #fff;
  `,
};

export default mixins;