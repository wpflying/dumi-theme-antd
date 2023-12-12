import './index.css';
function FooterItem(props){
    const { isbtn } = props;
    return <div className='footer-item'>
        <div className='item-left'>
            <div className='item-left-title'>在线咨询</div>
            <div className='item-left-des'>提供全方位的技术支持服务</div>
            <div className='item-left-numnber'>
            021-61234725
            </div>
        </div>
        <div className='item-right'>
                <div>
                    图
                </div>
        </div>
        <div className='line-border'/>
    </div>
}

export default FooterItem;