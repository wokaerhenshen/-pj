import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './style';
import FontStyle from './statics/iconfont/iconfont';
import App from './App';
ReactDOM.render(
<React.Fragment>
<GlobalStyle />
<FontStyle />
<App />
</React.Fragment>, document.getElementById('root'));
