import React from 'react';

const MailIcon: React.FC<{ className?: string }> = (props) => (
    <img style={{width:'100%'}} src={require('./email.png')} />
);

export default MailIcon;
