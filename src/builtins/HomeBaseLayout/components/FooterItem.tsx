import './index.css';
import { Button } from 'antd';
import ChartIcon from '../../../icons/ChartIcon';
import PhoneIcon from '../../../icons/PhoneIcon';
import MailIcon from '../../../icons/MailIcon';
function FooterItem(props){
    const { isBtn,icon,title,des,contactInformation,chartAiUrl } = props;
    return <div className='footer-item'>
        <div className='item-left'>
            <div className='item-left-title'>{title}</div>
            <div className='item-left-des'>{des}</div>
            <div className='item-left-numnber'>
                {isBtn ? <Button style={{background:'#00C1DC'}} onClick={(e)=>{
                    e.stopPropagation();
                    chartAiUrl && window.open(chartAiUrl,'_blank')
                }} type="primary">立即咨询</Button> : contactInformation}
            </div>
        </div>
        <div className='item-right'>
                <div>
                    {icon === 'chart' && <ChartIcon />}
                    {icon === 'phone' && <PhoneIcon />}
                    {icon === 'mail' && <MailIcon />}
                </div>
        </div>
        <div className='line-border'/>
    </div>
}

export default FooterItem;