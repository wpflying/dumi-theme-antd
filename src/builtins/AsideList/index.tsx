import './index.css';
import AsideChart from '../../icons/AsideChart';
import BackTop from '../../icons/BackTop';
import TelChart from '../../icons/TelChart';
import { Popover  } from 'antd';
import useLocaleValue from '../../hooks/useLocaleValue';
function AsideList(){
  const chartAiUrl = useLocaleValue('chartAiUrl');
  const tel = useLocaleValue('tel');
    return <div className="aside-list">
        <div className="list-top-item">
            <Popover placement="left"  title={false} content={renderTel(tel)}>
                <div className="list-item">
                        <dt><TelChart /></dt>
                        <dd>服务热线</dd>
                </div>   
            </Popover>
            <div className="list-item" onClick={(e)=>{
                e.stopPropagation();
                window.open(chartAiUrl,'_blank')
            }}>
                <dt><AsideChart /></dt>
                <dd>在线咨询</dd>
            </div>
         
        </div>

        <div className="list-top-item">
            <div className="list-item" onClick={(e)=>{
                e.stopPropagation();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }}>
                <dt><BackTop /></dt>
                <dd>返回顶部</dd>
            </div>            
        </div>

    </div>
}

const renderTel = (tel) =>{
  return   <div className='tel-content'>
        <div className='tel-content-tips'>
            热线电话
        </div>
        <div className='tel-content-tel'>{tel}</div>
    </div>
}

export default AsideList;