import { css } from '@emotion/react';
import { Link,} from 'dumi';
import React, { useContext, type FC } from 'react';
import useAdditionalThemeConfig from '../../hooks/useAdditionalThemeConfig';
import useSiteToken from '../../hooks/useSiteToken';
import SiteContext from '../../slots/SiteContext';
import type { SiteContextProps } from '../../slots/SiteContext';
import { IBannerConfig } from '../../types';
import ArticleList from './components/Article';
import FooterItem from './components/FooterItem';
import DumiSearchBar from 'dumi/theme-default/slots/SearchBar';
import AsideList from '../AsideList';
import './index.css';

import  QuestIcon from '../../icons/QuestIcon';
import  HelpIcon from '../../icons/HelpIcon';
import  HotIcon from '../../icons/HotIcon';
import  ProblemIcon from '../../icons/ProblemIcon';

import useLocaleValue from '../../hooks/useLocaleValue';
const bannerConfigDefault: IBannerConfig = {
  showBanner: true,
  bannerMobileImgUrl:'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*JmlaR5oQn3MAAAAAAAAAAAAADrJ8AQ/original',
  bannerImgUrl: ''
};

const useStyle = () => {
  const { token } = useSiteToken();
  const { isMobile } = useContext(SiteContext);
  
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


const HomeBaseLayout: FC = () => {
  const style = useStyle();
  const {  theme } = useContext<SiteContextProps>(SiteContext);
  const { bannerConfig } = useAdditionalThemeConfig();
  const meunDatas = useLocaleValue('defaultMeun');
  const chartAiUrl = useLocaleValue('chartAiUrl');
  const allFooterData = useLocaleValue('footerItem');
  // 如果配置了 bannerImgUrl 字段，展示配置图片，否则展示 ant-design 默认 banner 视频
  const { showBanner } = Object.assign(
    bannerConfigDefault,
    bannerConfig
  );

  const bannerContent = <div className='yz-banner-content'>
      <div className='yz-banner-content-title'>请问有什么可以帮助你？</div>
      <div className='yz-banner-content-search'> 
          <div className='search-center'>
            <DumiSearchBar />
          </div>
          
      </div>
      <div className='yz-banner-content-tips'>
        <div><Link to='/introduce-art'> <HotIcon /> 热门搜索</Link></div>
        <div><Link to='/frist-app'>  子表单</Link></div>
        <div><Link to='/introduce-reporting-analysis'>  聚合表</Link></div>
        <div><Link to='/introduce-art'>  二维码</Link></div>
      </div>
      <div className='yz-banner-content-link-item'>
        <div className='item-tips'><Link to='/introduction-art'> <HelpIcon /> 新手帮助</Link></div>
        <div className='item-tips'><Link to='/introduction-art'> <ProblemIcon /> 进阶管理</Link></div>
        <div className='item-tips'><Link to='/introduction-art'> <QuestIcon /> 常见问题</Link></div>
      </div>
  </div>
  return (
    <div css={style.mainContent}>
      <AsideList />
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
          {meunDatas.map(a=>{
            return  <ArticleList title={a.title} itemData={a} key ={a.key}/>
          })}
        </div>
        <div className='footer-list'>
          {allFooterData.map(item=><FooterItem chartAiUrl={chartAiUrl} key={item.title} {...item}/>)}
        </div>
      </div>
    </div>
  );
};

export default HomeBaseLayout;
