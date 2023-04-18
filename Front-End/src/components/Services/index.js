import React from 'react'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-2.svg';
import Icon3 from '../../images/svg-5.svg';

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1} />
                <ServicesH2>Reduce Expenses</ServicesH2>
                <ServicesP>We help reduce your fees and increase your overall revenue.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2} />
                <ServicesH2>Show case your Products</ServicesH2>
                <ServicesP>You can acces our services anywhere online in the world</ServicesP>
            </ServicesCard>
             <ServicesCard>
                <ServicesIcon src={Icon3} />
                <ServicesH2>Premium Benefits</ServicesH2>
                <ServicesP>We Bring Customers to your door step</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services;
