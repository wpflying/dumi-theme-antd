
import './index.css';
import { RightOutlined } from '@ant-design/icons';
import { Link } from 'dumi';
import React  from 'react';

function List(props: any){
    const { title,desc,artItem,link } = props;
    const currentLink = artItem?.length > 0 ? artItem[0].link : link
    console.log(link)
    return <div className='column-artcile'>
        <div className='column-artcile-header'>
            <div className='column-artcile-header-icon'/>
            <div className='column-artcile-header-des'>
                <div className='des-dt'>{title}</div>
                <div className='des-dd'>{desc ? desc : '暂无描述信息'}</div>
            </div>
        </div>
        <div className='art-list'>
        {artItem && artItem.length > 0  ? <>
            {artItem.map(item=>{
            const currentLink = item.children?.length > 0 ? item.children[0].link : item.link
                return <Link to={currentLink} key={item.link} > <div className='list-item'><span />{item.title}</div></Link>
            })}
        </> : '暂无相关文章...' }
        </div>
        <div className='art-footer'>
           <Link to={currentLink} > 查看全部 &nbsp;<RightOutlined/></Link>
        </div>
    </div>
}

function ArticleList(props){
    const { itemData,title } = props || {};
    return <div className='article-content'>
        <div className='article-content-title'>{title}</div>
        <div className='article-content-list'>
            {itemData.children.map(a=>{
                return  <List title={a.title} artItem={a.children}  link={a.link}/>
            })}

        </div>
    </div>
}
export default ArticleList;
