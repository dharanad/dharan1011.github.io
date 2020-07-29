import React from 'react';
import {Menu} from 'antd';
import {Link} from 'react-router-dom';
const HeaderMenu = () => {
  const pages = [
    {title: 'Home', path: '/'},
    {title: 'Blog', path: '/blog'},
    {title: 'Contact', path: '/contact'},
  ];

  return (
    <React.Fragment>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']}>
        {pages.map(({title, path}) => (
          <Menu.Item key={title.toLowerCase()}>
            <Link to={path}>{title}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </React.Fragment>
  );
};
export default HeaderMenu;
