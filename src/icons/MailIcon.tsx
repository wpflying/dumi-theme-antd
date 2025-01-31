import Icon from '@ant-design/icons';
import React from 'react';

const SVGIcon: React.FC = () => (
<svg width="80px" height="80px" viewBox="0 0 80 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>邮箱</title>
    <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-S">
            <stop stop-color="#E1E8F1" offset="0%"></stop>
            <stop stop-color="#E1E8F1" stop-opacity="0.25102458" offset="100%"></stop>
        </linearGradient>
        <polygon id="path-2" points="0 54 72 54 72 27 72 0 36 0 0 0 0 27"></polygon>
    </defs>
    <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="帮助中心-首页" transform="translate(-1485.000000, -1647.000000)">
            <g id="编组-16" transform="translate(0.000000, 1540.000000)">
                <g id="编组-30" transform="translate(1485.000000, 107.000000)">
                    <rect id="矩形" fill="#FFFFFF" opacity="0.00999999978" x="0" y="0" width="80" height="80"></rect>
                    <g id="编组" transform="translate(4.000000, 14.666667)">
                        <polygon id="路径" fill="url(#linearGradient-L)" points="0 54 72 54 72 27 72 0 36 0 0 0 0 27"></polygon>
                        <g id="路径" transform="translate(0.000000, 0.000000)">
                            <mask id="mask-3" fill="white">
                                <use xlink:href="#path-2"></use>
                            </mask>
                            <use id="蒙版" fill="url(#linearGradient-J)" xlink:href="#path-2"></use>
                            <polyline stroke="#FFFFFF" stroke-width="3.33333333" stroke-linecap="round" mask="url(#mask-3)" points="0 -3.83693077e-13 36 27 72 0.333333333"></polyline>
                        </g>
                        <polyline id="路径" points="36 2 2.66666667 2 2.66666667 27"></polyline>
                        <polyline id="路径" points="69.3333333 27 69.3333333 2 36 2"></polyline>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>
);

const MailIcon: React.FC<{ className?: string }> = (props) => (
  <Icon component={SVGIcon} {...props} />
);

export default MailIcon;
