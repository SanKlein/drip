import React from 'react';

import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import HeaderButton from './components/HeaderButton';
import HeaderTitle from './components/HeaderTitle';
import Page from './components/Page';

function App() {
  return (
    <Page>
      <Header>
        <HeaderButton>HeaderButton</HeaderButton>
        <HeaderTitle>I am a header</HeaderTitle>
      </Header>
      <Body>Nice</Body>
      <Footer>I am a footer</Footer>
    </Page>
  );
}

export default App;
