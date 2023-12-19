import type { MenuProps } from 'antd';
import { Tag } from 'antd';
import { ItemType } from 'antd/lib/menu/hooks/useItems';
import { Link, useFullSidebarData, useLocation, useSidebarData,useSiteData } from 'dumi';
import type { ReactNode } from 'react';
import React , { useMemo } from 'react';
// import meunData from './menuData';
import type {
  ISidebarGroupModePathItem,
  SidebarEnhanceGroupType,
  SidebarEnhanceItems,
  SidebarEnhanceItemType,
  SidebarEnhanceSubType,
  SidebarEnhanceType
} from '../types';
import { removeTitleCode, handleFullSidebarData } from '../utils';
import useAdditionalThemeConfig from './useAdditionalThemeConfig';
import pkgJSON from '../../package.json';
import _, { values } from 'lodash';
import useLocaleValue from './useLocaleValue';
type MenuItem = Required<MenuProps>['items'][number];
export type UseMenuOptions = {
  before?: ReactNode;
  after?: ReactNode;
};

const useMenu = (options: UseMenuOptions = {}): [MenuProps['items'], string,Array<string>] => {
  const { pathname } = useLocation();
  const meunDatas = useLocaleValue('defaultMeun');
  let menuItems = getAllMenu(_.cloneDeep(meunDatas));
  const data = findDescendantsAndParentIds(menuItems,pathname).reduce((curr,next)=>{
    if(curr.includes(next)){
      return curr
    } else {
      return [...curr,next]
    }
  },[])
  return [menuItems, pathname, data];
};
function findDescendantsAndParentIds(arr, findKey) {
  let result:any = [];
  function findDescendants(arr:any, key:any) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].key === findKey) {
        result.push(key);
        result.push(arr[i].key);
        return true;
      }
      
      if (arr[i].children && arr[i].children.length > 0) {
        result.push(arr[i].key);
        if (findDescendants(arr[i].children, arr[i].key)) {
          return true;
        }
        result.pop();
      }
    }
    return false;
  }
  
  findDescendants(arr, null);
  return result;
}

function getItem(a:any): MenuItem {
  const {title,link,icon,children,type} = a;
  console.log('wp-a',a)
  return {
    key:link || title,
    label:<Link to={`${link}`}>{title}</Link>,
    icon,
    children:children?.length > 0 ? children : undefined,
    type,
  } as MenuItem;
}


function getAllMenu(allDatas){
  const  menuItem = allDatas.map(a=>{
    if(a.children && a.children.length){
      a.children = getAllMenu(a.children)
    }
     return getItem(a)
  });
  return menuItem;
}

export default useMenu;
