import React from 'react';
import {
  Tabs,
  Menu
} from 'antd';
import lodash from 'lodash';
import Styles from './index.less';

const { SubMenu } = Menu;
const { TabPane } = Tabs;
const IndexView = (props) => {
  console.log('===props=========',props)
  const { mainMenu,tabs, onMenuClick,mode } = props;

  const getMainMenuItem = item => {
    let view;
    if (item.sub) {
      view = (
        <SubMenu title={item.name} key={item.name}>
          {item.sub.map(subItem => {
            return (
              <Menu.Item key={subItem.name} path={subItem.path}>{subItem.name}</Menu.Item>
            )
          })}
        </SubMenu>
      )
    } else {
      view = (<Menu.Item key={item.name} >{item.name}</Menu.Item>)
    }
    return view;
  };

  return (
    <div className={`${mode=='horizontal'?Styles.boxV:Styles.boxH} ${Styles.menuTabs}`}>
      <Menu className={`${mode=='horizontal'?'':Styles.boxSide} ${Styles.menu}`} onClick={onMenuClick} mode={mode||"inline"}>
        {mainMenu.map(item => {
          return (getMainMenuItem(item))
        })}
      </Menu>
      <Tabs
        className={Styles.tabs}
        hideAdd
        type="editable-card"
      >
        {tabs.map((pane, index) => {
          const ContentView = require(`pages/${pane.path}`);
          return (
            <TabPane tab={pane.title} key={pane.key} closable={index != 0}>
              <ContentView />
            </TabPane>
          )
        })}
      </Tabs>
    </div >
  );
};

class IndexPage extends React.PureComponent {
  state = {
    mainMenu: [
      { name: '示例一', sub: [{ name: '示例1.1', path: 'demo/IndexPage' }] },
      { name: '示例二', sub: [{ name: '示例2.1', path: 'demo/IndexPage' },] },
    ],
    tabs: [{ title: '系统首页', content: 'Content of Tab Pane 1', path: 'demo/IndexPage', key: '0' }],
  }
  componentWillMount() {
    //console.log('===this.props=========',this.props)
  }

  onMenuClick = e => {
    let tabs = this.state.tabs;
    let hadKey;
    for (let index = 0; index < tabs.length; index++) {
      const element = tabs[index];
      hadKey = element.title == e.key;
      if (hadKey) {
        break;
      }
    }

    if (hadKey) {
      return;
    }
    tabs.push({ title: e.key, content: e.key, path: e.item.props.path, key: tabs.length });
    this.setState({
      tabs: lodash.cloneDeep(tabs),
    })
    console.log('==tabs========',tabs)
  }

  render() {
    return <IndexView {...this.state} {...this.props} onMenuClick={this.onMenuClick} />;
  }
}


export default IndexPage;
