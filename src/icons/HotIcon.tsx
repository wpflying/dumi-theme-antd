import Icon from '@ant-design/icons';
import React from 'react';

const SVGIcon: React.FC = () => (
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>热门</title>
    <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
            <stop stop-color="#F39C6A" offset="0%"></stop>
            <stop stop-color="#FF3F71" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="帮助中心-首页" transform="translate(-812.000000, -346.000000)">
            <g id="热门" transform="translate(812.000000, 346.000000)">
                <rect id="矩形" stroke="#979797" stroke-width="0.833333333" fill="#D8D8D8" opacity="0.00999999978" x="0.416666667" y="0.416666667" width="19.1666667" height="19.1666667"></rect>
                <g id="编组" transform="translate(4.166667, 1.666667)" fill="url(#linearGradient-1)">
                    <path d="M6.25,16.6666667 C9.681125,16.6666667 12.4999167,13.9475833 12.4999167,10.4575417 C12.4999167,9.60075 12.456375,8.68229167 11.9814583,7.25483333 C11.5065417,5.82741667 11.410875,5.64316667 10.9087083,4.761625 C10.6941667,6.56058333 9.54625,7.31033333 9.254625,7.53441667 C9.254625,7.30129167 8.56020833,4.72329167 7.50733333,3.18079167 C6.47375,1.66666667 5.06808333,0.6733 4.243875,0 C4.243875,1.27907083 3.884125,3.18079167 3.36891667,4.14975 C2.85370833,5.11870833 2.75695833,5.154 2.11341667,5.87508333 C1.46991667,6.59616667 1.17454167,6.818875 0.636416667,7.69379167 C0.0983166667,8.56875 0,9.73408333 0,10.590875 C0,14.0809167 2.818875,16.6666667 6.25,16.6666667 Z" id="路径"></path>
                </g>
            </g>
        </g>
    </g>
</svg>
);

const HotIcon: React.FC<{ className?: string }> = (props) => (
  <Icon component={SVGIcon} {...props} />
);

export default HotIcon;
