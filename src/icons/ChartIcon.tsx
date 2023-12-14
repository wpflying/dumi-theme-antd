import Icon from '@ant-design/icons';
import React from 'react';

const SVGIcon: React.FC = () => (
<svg width="80px" height="80px" viewBox="0 0 80 80" version="1.1" xmlns="http://www.w3.org/2000/svg" >
    <title>编组 21</title>
    <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-B">
            <stop stop-color="#E2E8F1" offset="0%"></stop>
            <stop stop-color="#E2E8F1" stop-opacity="0.119941338" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-C">
            <stop stop-color="#E1E8F1" offset="0%"></stop>
            <stop stop-color="#E1E8F1" stop-opacity="0.25102458" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="帮助中心-首页" transform="translate(-627.000000, -1647.000000)">
            <g id="编组-16" transform="translate(0.000000, 1540.000000)">
                <g id="编组-21" transform="translate(627.000000, 107.000000)">
                    <rect id="矩形" fill="#FFFFFF" opacity="0.00999999978" x="0" y="0" width="80" height="80"></rect>
                    <g id="编组" transform="translate(6.666667, 10.000000)">
                        <path d="M65,28.3333333 L65,51.6666667 L57.6429774,51.6666667 L53.3333333,55.9763107 L49.0236893,51.6666667 L31.6666667,51.6666667 L31.6666667,41.6666667 L55,41.6666667 L55,28.3333333 L65,28.3333333 Z" id="路径" stroke="url(#linearGradient-B)" stroke-width="3.33333333" opacity="0.900000036"></path>
                        <path d="M5.55555556,0 L47.7777778,0 C50.8460264,-6.01393253e-15 53.3333333,2.48730695 53.3333333,5.55555556 L53.3333333,40 L53.3333333,40 L23.9678531,40 C22.4944282,40 21.0813509,40.5853158 20.0394821,41.6271845 L18.3333333,43.3333333 C16.4923842,45.1742825 13.5076158,45.1742825 11.6666667,43.3333333 L9.96051788,41.6271845 C8.91864911,40.5853158 7.50557182,40 6.03214688,40 L4.16666667,40 C1.86548021,40 2.94634932e-15,38.1345198 0,35.8333333 L0,5.55555556 C-3.75752084e-16,2.48730695 2.48730695,5.63628126e-16 5.55555556,0 Z" id="路径" fill="url(#linearGradient-C)"></path>
                        <line x1="13.3333333" y1="26.6666667" x2="23.3333333" y2="26.6666667" id="路径" stroke="#FFFFFF" stroke-width="3.33333333" stroke-linecap="round"></line>
                        <line x1="13.3333333" y1="13.3333333" x2="33.3333333" y2="13.3333333" id="路径" stroke="#FFFFFF" stroke-width="3.33333333" stroke-linecap="round"></line>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>
);

const ChartIcon: React.FC<{ className?: string }> = (props) => (
  <Icon component={SVGIcon} {...props} />
);

export default ChartIcon;
