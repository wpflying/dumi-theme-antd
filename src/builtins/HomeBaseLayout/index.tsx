import { css } from '@emotion/react';
import { Button, Space, Typography } from 'antd';
import { Link, useFullSidebarData, useSearchParams ,useLocation} from 'dumi';
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
  console.log('wp-sidebarData',fullSidebarData)
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
  const { token } = useSiteToken();
  const {  theme } = useContext<SiteContextProps>(SiteContext);
  const { bannerConfig, name } = useAdditionalThemeConfig();
  const actions: IAction[] = useLocaleValue('actions');
  const title = useLocaleValue('title');
  const description = useLocaleValue('description');
  const [searchParams] = useSearchParams();

  // 如果配置了 bannerImgUrl 字段，展示配置图片，否则展示 ant-design 默认 banner 视频
  const { showBanner, bannerImgUrl, bannerMobileImgUrl } = Object.assign(
    bannerConfigDefault,
    bannerConfig
  );

  // const bannerContent = bannerImgUrl ? (
  //   <img src={bannerImgUrl} style={{ width: '100%', maxWidth: '100%' }} alt="" />
  // ) : (
  //   <React.Fragment>

  //   </React.Fragment>
  // );
  const bannerContent = <div className='yz-banner-content'>
      <div className='yz-banner-content-title'>请问有神么可以帮助你？</div>
      <div className='yz-banner-content-search'> 
          <div className='search-center'>
            <DumiSearchBar/>
          </div>
          
      </div>
      <div className='yz-banner-content-tips'>
        <div>热门搜索</div>
        <div>子表单</div>
        <div>聚合表</div>
        <div>二维码</div>
      </div>
      <div className='yz-banner-content-link-item'>
        <div className='item-tips'><span/> 新手帮助</div>
        <div className='item-tips'><span/> 进阶管理</div>
        <div className='item-tips'><span/> 常见问题</div>
      </div>
  </div>
  return (
    <div css={style.mainContent}>
      {/* {isMobile ? (
        <img
          src={bannerMobileImgUrl}
          style={{
            width: '100%',
            maxWidth: '100%',
            display: `${showBanner ? 'inline-block' : 'none'} `,
            opacity: `${theme.indexOf('dark') > -1 ? '0.8' : 1}`
          }}
          alt=""
        />
      ) : (
    
      )} */}
      {/* Image Left Top */}
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
            <FooterItem isbtn/>
            <FooterItem/>
            <FooterItem/>
        </div>
        {/* <GroupMask
          style={{
            textAlign: 'center',
            paddingTop: token.marginFar - 16,
            paddingBottom: token.marginFarSM
          }}
        >
          <img
            style={{ position: 'absolute', left: isMobile ? -120 : 0, top: 0, width: 240 }}
            src="https://gw.alipayobjects.com/zos/bmw-prod/49f963db-b2a8-4f15-857a-270d771a1204.svg"
            alt="bg"
          />
          <img
            style={{ position: 'absolute', right: isMobile ? 0 : 120, top: 0, width: 240 }}
            src="https://gw.alipayobjects.com/zos/bmw-prod/e152223c-bcae-4913-8938-54fda9efe330.svg"
            alt="bg"
          />
          <Typography.Title level={1} css={[style.titleBase, style.title]}>
            {title || name}
          </Typography.Title>
          <Typography.Paragraph
            style={{
              fontSize: token.fontSizeHeading5,
              lineHeight: token.lineHeightHeading5,
              marginBottom: token.marginMD * 2
            }}
          >
            <div>{description}</div>
          </Typography.Paragraph>
          <Space
            size="middle"
            style={{
              marginBottom: token.marginFar
            }}
          >
            {actions?.map(({ link, text, type }) => {
              return isExternalLinks(link) ? (
                <Button size="large" type={type} href={link} target="_blank" key={link}>
                  {text}
                </Button>
              ) : (
                <Link
                  to={`${link}${link.search(/\?/) === -1 ? '?' : '&'}${searchParams.toString()}`}
                  key={link}
                >
                  <Button size="large" type={type}>
                    {text}
                  </Button>
                </Link>
              );
            })}
          </Space>
          <Features />
        </GroupMask> */}
      </div>
    </div>
  );
};

export default HomeBaseLayout;
