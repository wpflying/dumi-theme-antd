import Icon from '@ant-design/icons';
import React from 'react';

const SVGIcon: React.FC = () => (
<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>常见问题</title>
    <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-S">
            <stop stop-color="#356CFF" offset="0%"></stop>
            <stop stop-color="#5892FF" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="89.2536378%" y1="93.4714809%" x2="45.0822687%" y2="5.67374481%" id="linearGradient-2">
            <stop stop-color="#00E2F0" offset="0%"></stop>
            <stop stop-color="#00C1DC" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="帮助中心-首页" transform="translate(-797.000000, -436.000000)">
            <g id="编组-7备份" transform="translate(771.000000, 421.000000)">
                <g id="常见问题" transform="translate(26.000000, 15.000000)">
                    <rect id="矩形" stroke="#979797" fill="#D8D8D8" opacity="0" x="0.5" y="0.5" width="23" height="23" rx="5"></rect>
                    <g id="编组-34" transform="translate(0.000000, 1.000000)">
                        <rect id="矩形备份-6" fill="url(#linearGradient-S)" x="0" y="4.82758621" width="13.9130435" height="13.7931034" rx="2.7826087"></rect>
                        <path d="M6.6086957,0 L21.2173913,0 C22.7541836,-7.26393389e-16 24,1.24581637 24,2.78260875 L24,15 C24,18.3137085 21.3137085,21 18,21 L6.6086957,21 C5.07190333,21 3.82608696,19.7541836 3.82608696,18.2173913 L3.82608696,2.78260875 C3.82608696,1.24581637 5.07190333,-1.6178503e-16 6.6086957,0 Z" id="矩形" fill="url(#linearGradient-2)"></path>
                        <line x1="8.52173913" y1="4.03448276" x2="19.3043478" y2="4.03448276" id="直线-3" stroke="#FFFFFF" stroke-width="1.39130435" fill="#FFFFFF" fill-rule="nonzero" stroke-linecap="round" stroke-linejoin="round"></line>
                        <path d="M9.14868147,16.4495215 L10.5724116,16.4495215 C12.493402,16.4495215 14.0506725,14.8922511 14.0506725,12.9712607 L14.0506725,8.83504738 L14.0506725,8.83504738" id="路径-3" stroke="#FFFFFF" stroke-width="1.39130435" stroke-linecap="round" stroke-linejoin="round" fill-rule="nonzero"></path>
                        <polyline id="路径" stroke="#FFFFFF" stroke-width="1.39130435" stroke-linecap="round" stroke-linejoin="round" fill-rule="nonzero" transform="translate(13.956522, 11.068966) rotate(-225.000000) translate(-13.956522, -11.068966) " points="16.3913043 13.5037481 11.5427286 13.4827586 11.5217391 8.63418291"></polyline>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>
);

const ProblemIcon: React.FC<{ className?: string }> = (props) => (
  <Icon component={SVGIcon} {...props} />
);

export default ProblemIcon;
