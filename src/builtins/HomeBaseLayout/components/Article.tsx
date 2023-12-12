
import './index.css';
import { RightOutlined } from '@ant-design/icons';

function List(){
    return <div className='column-artcile'>
        <div className='column-artcile-header'>
            <div className='column-artcile-header-icon'/>
            <div className='column-artcile-header-des'>
                <div className='des-dt'>应用中心</div>
                <div className='des-dd'>五代码应用设置</div>
            </div>
        </div>
        <div className='art-list'>
            <div className='list-item'><span />无代码应用创建</div>
            <div className='list-item'><span />无代码应用创建无代码应用创建</div>
            <div className='list-item'><span />无代码应用创建无代码</div>
            <div className='list-item'><span />无代码应用创建无代</div>
        </div>
        <div className='art-footer'>
            查看全部 &nbsp;<RightOutlined/>
        </div>
    </div>
}

function ArticleList(props){
    const { title } = props || {};
    return <div className='article-content'>
        <div className='article-content-title'>{title}</div>
        <div className='article-content-list'>
            <List/>
            <List/>
            <List/>
        </div>
    </div>
}
export default ArticleList;
