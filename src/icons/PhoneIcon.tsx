import Icon from '@ant-design/icons';
import React from 'react';

const SVGIcon: React.FC = () => (
<svg width="80px" height="80px" viewBox="0 0 80 80" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>编组 23</title>
    <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-D">
            <stop stop-color="#E2E8F1" offset="0%"></stop>
            <stop stop-color="#E2E8F1" stop-opacity="0.119941338" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-E">
            <stop stop-color="#E2E8F1" offset="0%"></stop>
            <stop stop-color="#E2E8F1" stop-opacity="0.119941338" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-F">
            <stop stop-color="#E1E8F1" offset="0%"></stop>
            <stop stop-color="#E1E8F1" stop-opacity="0.25102458" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="帮助中心-首页" transform="translate(-1043.000000, -1647.000000)">
            <g id="编组-16" transform="translate(0.000000, 1540.000000)">
                <g id="编组-23" transform="translate(1043.000000, 107.000000)">
                    <rect id="矩形" fill="#FFFFFF" opacity="0" x="0" y="0" width="80" height="80"></rect>
                    <g id="编组" transform="translate(10.000000, 10.000000)">
                        <path d="M60.4972255,24.8781914 C60.9185588,22.051858 60.7803921,19.158358 60.0827255,16.3761914 C59.1612255,12.700858 57.2632255,9.22019137 54.3890588,6.34602471 C51.5148921,3.47187471 48.0342255,1.57400804 44.3590588,0.652441374 C41.5768921,-0.0451919591 38.6832255,-0.183358626 35.8568921,0.237941374" id="路径" stroke="url(#linearGradient-D)" stroke-width="3.33333333" opacity="0.900000036"></path>
                        <path d="M47.8472255,23.5396914 C48.2985588,20.5120247 47.3588921,17.3170247 45.0282255,14.986358 C42.6973921,12.6556914 39.5023921,11.715858 36.4748921,12.1671914" id="路径" stroke="url(#linearGradient-E)" stroke-width="3.33333333" opacity="0.900000036"></path>
                        <path d="M14.8237255,5.19090804 C16.0347255,5.19090804 17.1503921,5.84760804 17.7380588,6.90634137 L21.8155588,14.2510247 C22.3493921,15.2126914 22.3743921,16.375858 21.8825588,17.3596914 L17.9545588,25.2156914 C17.9545588,25.2156914 19.0928921,31.0681914 23.8568921,35.8321914 C28.6208921,40.5961914 34.4537255,41.714858 34.4537255,41.714858 L42.3085588,37.7875247 C43.2930588,37.2951914 44.4570588,37.3206914 45.4190588,37.8555247 L52.7845588,41.9505247 C53.8422255,42.5385247 54.4982255,43.6536914 54.4982255,44.863858 L54.4982255,53.3196914 C54.4982255,57.625858 50.4983921,60.7360247 46.4182255,59.3591914 C38.0383921,56.5316914 25.0305588,51.1480247 16.7858921,42.9031914 C8.54105879,34.6585247 3.15739213,21.6506914 0.329825459,13.270858 C-1.04687454,9.19069137 2.06327546,5.19090804 6.36935879,5.19090804 L14.8237255,5.19090804 Z" id="路径" fill="url(#linearGradient-F)"></path>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>
);

const PhoneIcon: React.FC<{ className?: string }> = (props) => (
  <Icon component={SVGIcon} {...props} />
);

export default PhoneIcon;
