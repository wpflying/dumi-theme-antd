import classnames from 'classnames';
import cloneDeep from 'lodash.clonedeep';
import type { FooterColumn } from 'rc-footer/lib/column';
import { useCallback, type FC } from 'react';
import useLocaleValue from '../../hooks/useLocaleValue';
import './index.css';

const Footer: FC = () => {
  const footer = useLocaleValue('footer');
  const footerLinks = useLocaleValue('footerLinks');
  const footerLogo = useLocaleValue('footerLogo');
  const getFooterLinks = useCallback((links: FooterColumn[]) => {
    if (Array.isArray(links)) {
      links.forEach((item) => {
        const iconUrl = item.icon;
        if (item.icon) {
          // eslint-disable-next-line no-param-reassign
          delete item.icon;
          // eslint-disable-next-line no-param-reassign
          item.icon = <img src={String(iconUrl)} alt="" style={{ maxWidth: '100%' }} />;
        }
        if (Array.isArray(item.items)) {
          getFooterLinks(item.items);
        }
      });
    }
    return links;
  }, []);

  if (!footer) return null;
  const footerData = getFooterLinks(cloneDeep(footerLinks));
  const toOthers = (url: string) => {
    window.open(url);
  };
  return (
    <div className="theme-footer">
      <div className="theme-footer-center">
        <div className="footer-center-left">
          {footerData.map((a: any) => {
            // classnames
            return (
              <div
                className={classnames('center-left-item', {
                  'item-border': a.type ? true : false
                })}
                onClick={() => toOthers(a.link)}
              >
                {a.title}
              </div>
            );
          })}
        </div>
        <div className="footer-center-right">
          <img src={footerLogo ? footerLogo : require('../../icons/footerIcon.png')} />
        </div>
      </div>
      <div className="theme-footer-bottom">
        <div dangerouslySetInnerHTML={{ __html: footer }} />
      </div>
    </div>
  );
};

export default Footer;
