import { css } from '@emotion/react';
import { Button, Space, Typography } from 'antd';
import { Link, useFullSidebarData, useSearchParams ,useLocation,useSidebarData} from 'dumi';
import React, { useContext, type FC } from 'react';
import useAdditionalThemeConfig from '../../hooks/useAdditionalThemeConfig';
import useLocaleValue from '../../hooks/useLocaleValue';
import useSiteToken from '../../hooks/useSiteToken';
import SiteContext from '../../slots/SiteContext';
import type { SiteContextProps } from '../../slots/SiteContext';
import { IAction, IBannerConfig } from '../../types';
import ArticleList from './components/Article';
import FooterItem from './components/FooterItem';
import DumiSearchBar from 'dumi/theme-default/slots/SearchBar';
import './index.css';

import { handleFullSidebarData, isExternalLinks } from '../../utils';
import Features from './components/Features';
import { GroupMask } from './components/Group';
import  QuestIcon from '../../icons/QuestIcon';
import  HelpIcon from '../../icons/HelpIcon';
import  HotIcon from '../../icons/HotIcon';
import  ProblemIcon from '../../icons/ProblemIcon';
import ChartIcon from '../../icons/ChartIcon';
import PhoneIcon from '../../icons/PhoneIcon';
import MailIcon from '../../icons/MailIcon';

const bannerConfigDefault: IBannerConfig = {
  showBanner: true,
  bannerMobileImgUrl:'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*JmlaR5oQn3MAAAAAAAAAAAAADrJ8AQ/original',
  bannerImgUrl: ''
};

const useStyle = () => {
  const { token } = useSiteToken();
  const { isMobile } = useContext(SiteContext);
  const fullSidebarData = useFullSidebarData();
  const { pathname } = useLocation();
  const navSecondSidebarData = handleFullSidebarData(fullSidebarData);
  const currentNavKey = `/${pathname.split('/')?.[1]}`;
  const sidebarData = navSecondSidebarData[currentNavKey];
  console.log('wp-super-data',navSecondSidebarData)
  return {
    mainContent: css`
      position: relative;
      text-align: center;
      flex: 1;
    `,
    bannerDisplay: css`
      display: block;
    `,
    bannerDisplayNone: css`
      display: none;
    `,
    titleBase: css`
      h1& {
        font-family: AliPuHui, ${token.fontFamily};
      }
    `,
    title: isMobile
      ? css`
          h1& {
            margin-bottom: ${token.margin}px;
            font-weight: normal;
            font-size: ${token.fontSizeHeading1 + 2}px;
            line-height: ${token.lineHeightHeading2};
          }
        `
      : css`
          h1& {
            margin-bottom: ${token.marginMD}px;
            font-weight: 900;
            font-size: 68px;
          }
        `
  };
};

const allFooterData = [
  {
    title:'在线咨询',
    des:'提供全方位的技术支持服务',
    isBtn:true,
    icon: ChartIcon
  },
  {
    title:'服务热线',
    des:'工作时间: 周一至周五: 9:00-21',
    isBtn:false,
    icon: PhoneIcon,
    contactInformation:'021-61234725'
  },
  {
    title:'服务邮箱',
    des:'工作时间: 周一至周五: 9:00-21',
    isBtn:false,
    icon: MailIcon,
    contactInformation:'yizhu@ ezbim.net'
  },
]

const HomeBaseLayout: FC = () => {
  const style = useStyle();
  const {  theme } = useContext<SiteContextProps>(SiteContext);
  const { bannerConfig, name } = useAdditionalThemeConfig();
  // const actions: IAction[] = useLocaleValue('actions');
  // const { token } = useSiteToken();
  // const title = useLocaleValue('title');
  // const description = useLocaleValue('description');
  // const [searchParams] = useSearchParams();

  // 如果配置了 bannerImgUrl 字段，展示配置图片，否则展示 ant-design 默认 banner 视频
  const { showBanner } = Object.assign(
    bannerConfigDefault,
    bannerConfig
  );

  const bannerContent = <div className='yz-banner-content'>
      <div className='yz-banner-content-title'>请问有神么可以帮助你？</div>
      <div className='yz-banner-content-search'> 
          <div className='search-center'>
            <DumiSearchBar/>
          </div>
          
      </div>
      <div className='yz-banner-content-tips'>
        <div> <HotIcon /> 热门搜索</div>
        <div>子表单</div>
        <div>聚合表</div>
        <div>二维码</div>
      </div>
      <div className='yz-banner-content-link-item'>
        <div className='item-tips'> <HelpIcon /> 新手帮助</div>
        <div className='item-tips'> <ProblemIcon /> 进阶管理</div>
        <div className='item-tips'> <QuestIcon /> 常见问题</div>
      </div>
  </div>
  return (
    <div css={style.mainContent}>
      <div
          style={{
            background: '#77C6FF',
            display: `${showBanner ? 'flex' : 'none'} `,
            flexWrap: 'nowrap',
            justifyContent: 'center',
            opacity: `${theme.indexOf('dark') > -1 ? '0.8' : 1}`
          }}
        >
          {bannerContent}
        </div>
      <div style={{ position: 'relative' }}>
        <div>
            <ArticleList title='文档中心'/>
            <ArticleList title='五代码专题'/>
        </div>
        <div className='footer-list'>
          {allFooterData.map(item=><FooterItem key={item.title} {...item}/>)}
        </div>
      </div>
    </div>
  );
};

export default HomeBaseLayout;
