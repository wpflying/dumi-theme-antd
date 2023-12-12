import './index.css';
import { RightOutlined } from '@ant-design/icons';
const  BackBtn  = ()=>{
    return <div className="header-btn" onClick={(e)=>{ console.log('即将返回工作台')}}>返回工作台 <RightOutlined /></div>
}
export default BackBtn; 