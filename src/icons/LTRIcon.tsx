import Icon from '@ant-design/icons';
import React from 'react';

const SuperIcon: React.FC = () => (
  <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" >
      <title>常见问题</title>
      <defs>
          <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
              <stop stop-color="#356CFF" offset="0%"></stop>
              <stop stop-color="#5892FF" offset="100%"></stop>
          </linearGradient>
          <linearGradient x1="80.6572159%" y1="93.4714809%" x2="46.1592362%" y2="5.67374481%" id="linearGradient-2">
              <stop stop-color="#00E2F0" offset="0%"></stop>
              <stop stop-color="#00C1DC" offset="100%"></stop>
          </linearGradient>
      </defs>
      <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="帮助中心-首页" transform="translate(-1207.000000, -436.000000)">
              <g id="编组-7备份-2" transform="translate(1181.000000, 421.000000)">
                  <g id="常见问题" transform="translate(26.000000, 15.000000)">
                      <rect id="矩形" stroke="#979797" fill="#D8D8D8" opacity="0" x="0.5" y="0.5" width="23" height="23" rx="5"></rect>
                      <g id="编组-35" transform="translate(0.000000, 1.000000)">
                          <rect id="矩形备份-9" fill="url(#linearGradient-1)" x="13.0285714" y="9.8" width="10.9714286" height="11.2" rx="1.71428571"></rect>
                          <path d="M7.38966565,0 C8.33643951,-3.95964141e-16 9.10395137,0.767511857 9.10395137,1.71428571 L9.103,4.549 L16.1142857,4.55 C17.0610596,4.55 17.8285714,5.31751186 17.8285714,6.26428571 L17.8285714,19.2857143 C17.8285714,20.2324881 17.0610596,21 16.1142857,21 L9.103,20.999 L1.71428571,21 C0.767511857,21 3.37990962e-16,20.2324881 0,19.2857143 L0,1.71428571 C-3.37990962e-16,0.767511857 0.767511857,-4.92214279e-16 1.71428571,0 L7.38966565,0 Z" id="形状结合" fill="url(#linearGradient-2)"></path>
                          <g id="？" transform="translate(7.000000, 8.000000)" fill-rule="nonzero">
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

const LTRIcon: React.FC<{ className?: string }> = (props) => (
  <Icon component={SuperIcon} {...props} />
);

export default LTRIcon;
