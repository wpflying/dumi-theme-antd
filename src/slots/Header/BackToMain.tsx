import './index.css';
import useLocaleValue from '../../hooks/useLocaleValue';
import { RightOutlined } from '@ant-design/icons';
const  BackBtn  = ()=>{
  const rebackUrl = useLocaleValue('rebackUrl');
    return <div className="header-btn" onClick={()=>{window.open(rebackUrl,"_blank")}}>返回工作台 <RightOutlined /></div>
}
export default BackBtn; 