'use strict';

const App = ({items}) => (
  <main>
    {items.map(item => <Item color={colors[item.type]} item={item} />)}
  </main>
);