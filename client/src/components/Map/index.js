import { height } from '@mui/system'
import React from 'react';
import Iframe from 'react-iframe';

export const Map = () => {
    const iframe = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3786.44180961692!2d-66.05226488531392!3d18.37273278749532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c03680b23c9c849%3A0xed8840df2408fc7b!2s402%20Calle%20San%20Julian%2C%20San%20Juan%2C%2000926%2C%20Puerto%20Rico!5e0!3m2!1svi!2s!4v1651754149990!5m2!1svi!2s'
  
    return (
        
            <Iframe url={iframe}
                width="100%"
                id="myId"
                height="100%"
                display="initial"
                position="relative"
            />          
       
    )
}
