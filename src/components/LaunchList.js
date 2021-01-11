import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

import LaunchItem from './LaunchItem';

const StyledLaunchListContainer = styled.div`
  position: absolute;
  bottom: 40px;
  right: 20px;
  z-index: 1;
  white-space: nowrap;
  max-height: calc(100% - 80px);
  overflow-y: scroll;
  padding-right: 20px;
`;

const LaunchList = ({ launches }) => (
  <StyledLaunchListContainer>
    {launches.map(launch => (
      <LaunchItem launch={launch} />
    ))}
  </StyledLaunchListContainer>
)

export default LaunchList;

{/* <StyledLaunchListContainer>
<Swiper
  direction="vertical"
  // spaceBetween={50}
  slidesPerView={10}
  onSlideChange={() => console.log('slide change')}
  onSwiper={(swiper) => console.log(swiper)}
>
  {launches.map(launch => (
    <SwiperSlide>
      <LaunchItem launch={launch} />
    </SwiperSlide>
  ))}
</Swiper>
</StyledLaunchListContainer> */}