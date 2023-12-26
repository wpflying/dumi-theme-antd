import Icon from '@ant-design/icons';
import React from 'react';

const SVGIcon: React.FC = () => (
    <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <title>问题列表图标</title>
        <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="帮助中心-首页" transform="translate(-402.000000, -819.000000)">
                <g id="编组-14" transform="translate(361.000000, 620.000000)">
                    <g id="编组-13" transform="translate(0.000000, 91.000000)">
                        <g id="编组-10" transform="translate(41.000000, 106.000000)">
                            <g id="问题列表图标" transform="translate(0.000000, 2.000000)">
                                <rect id="矩形" fill="#D8D8D8" opacity="0.00999999978" x="0" y="0" width="16" height="16"></rect>
                                <g id="编组" transform="translate(2.666667, 1.333333)" stroke="#98999C" stroke-linejoin="round">
                                    <path d="M0,0.666666667 C0,0.298476667 0.298476667,0 0.666666667,0 L7.33333333,0 L10.6666667,3.33333333 L10.6666667,12.6666667 C10.6666667,13.0348667 10.3682,13.3333333 10,13.3333333 L0.666666667,13.3333333 C0.298476667,13.3333333 0,13.0348667 0,12.6666667 L0,0.666666667 Z" id="路径"></path>
                                    <line x1="2.66666667" y1="5.33333333" x2="8" y2="5.33333333" id="路径" stroke-linecap="round"></line>
                                    <line x1="2.66666667" y1="8" x2="8" y2="8" id="路径" stroke-linecap="round"></line>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </svg>
);

const ListIcon: React.FC<{ className?: string }> = (props) => (
  <Icon component={SVGIcon} {...props} />
);

export default ListIcon;
