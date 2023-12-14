import Icon from '@ant-design/icons';
import React from 'react';

const SVGIcon: React.FC = () => (
<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>新手帮助</title>
    <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-k">
            <stop stop-color="#356CFF" offset="0%"></stop>
            <stop stop-color="#5892FF" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="92.5341943%" y1="73.3632632%" x2="44.6712776%" y2="26.1773479%" id="linearGradient-2">
            <stop stop-color="#00E2F0" offset="0%"></stop>
            <stop stop-color="#00C1DC" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="帮助中心-首页" transform="translate(-387.000000, -435.000000)">
            <g id="编组-7" transform="translate(361.000000, 420.000000)">
                <g id="新手帮助" transform="translate(26.000000, 15.000000)">
                    <rect id="矩形" stroke="#979797" fill="#D8D8D8" opacity="0" x="0.5" y="0.5" width="23" height="23" rx="5"></rect>
                    <g id="编组-33" transform="translate(1.000000, 0.000000)">
                        <ellipse id="椭圆形" fill="url(#linearGradient-k)" cx="11.5" cy="6.96774194" rx="6.9" ry="6.96774194"></ellipse>
                        <path d="M1.55085719,11.845654 L10.3411798,7.68689448 C11.074749,7.33983806 11.925251,7.33983806 12.6588202,7.68689448 L21.4491428,11.845654 C22.3961183,12.2936743 23,13.2474301 23,14.2950391 L23,21.2903226 C23,22.7868361 21.7868361,24 20.2903226,24 L2.70967742,24 C1.2131639,24 -7.04908371e-16,22.7868361 0,21.2903226 L0,14.2950391 C-5.93526983e-16,13.2474301 0.603881734,12.2936743 1.55085719,11.845654 Z" id="矩形" fill="url(#linearGradient-2)"></path>
                        <g id="？" transform="translate(9.000000, 11.000000)" fill-rule="nonzero">
                            <path d="M2.5,7.04 L2.5,5.28 C3.88070833,5.28 5,4.098028 5,2.64 C5,1.181972 3.88070833,0 2.5,0 C1.11929167,0 0,1.181972 0,2.64" id="路径" stroke="#FFFFFF" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M2.5,11 C3.07529167,11 3.54166667,10.507508 3.54166667,9.9 C3.54166667,9.292492 3.07529167,8.8 2.5,8.8 C1.92470833,8.8 1.45833333,9.292492 1.45833333,9.9 C1.45833333,10.507508 1.92470833,11 2.5,11 Z" id="路径" fill="#FFFFFF"></path>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>
);

const HelpIcon: React.FC<{ className?: string }> = (props) => (
  <Icon component={SVGIcon} {...props} />
);

export default HelpIcon;
