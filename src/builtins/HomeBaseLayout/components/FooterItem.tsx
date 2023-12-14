import './index.css';
import { Button } from 'antd';
function FooterItem(props){
    const { isBtn,icon,title,des,tel,contactInformation } = props;
    return <div className='footer-item'>
        <div className='item-left'>
            <div className='item-left-title'>{title}</div>
            <div className='item-left-des'>{des}</div>
            <div className='item-left-numnber'>
                {isBtn ? <Button style={{background:'#00C1DC'}} type="primary">立即咨询</Button> : contactInformation}
            </div>
        </div>
        <div className='item-right'>
                <div>
                    {icon()}
                </div>
        </div>
        <div className='line-border'/>
    </div>
}

export default FooterItem;