let state = {
  profilePage: {
    dataPosts: [
      { name: 'Alex', message: "Hello! How it's goin?" },
      { name: 'Pavel', message: 'Здарова.' },
      { name: 'James', message: 'Good morning, sir!' }
    ]
  },
  messagesPage: {
    dataDialogs: [
      { id: '0', name: 'Pavel' },
      { id: '1', name: 'James' },
      { id: '2', name: 'Влад' },
      { id: '3', name: 'Витёк' },
      { id: '4', name: 'Антон' },
      { id: '5', name: 'Kavo' },
      { id: '6', name: 'Ladno' },
      { id: '7', name: 'Себек' },
      // { id: '8', name: 'Pavel' },
      // { id: '9', name: 'Pavel' },
      // { id: '10', name: 'Pavel' },
      // { id: '11', name: 'Pavel' }
    ],
    dataMessages: [
      { text: 'Ладно' },
      { text: 'Здарова, челик... Кд? Чд?' },
      { text: 'Hello!' },
      { text: 'Привет!' },
      { text: 'The quick brown fox jumps over the lazy dog.' },
      { text: 'В чащах юга жил бы цитрус? Да, но фальшивый экземпляр!аааааааааааа аааааааа ааааааааааа аааааааа ааааааааа ааааааааа аааааа ааааааа аааааааа аааааааа ааааа аааааа аааааааа аааааааа' },
      { text: 'The quick brown fox jumps over the lazy dog.' },
      { text: 'В чащах юга жил бы цитрус? Да, но фальшивый экземпляр!' },
      { text: 'The quick brown fox jumps over the lazy dog.' },
      { text: 'В чащах юга жил бы цитрус? Да, но фальшивый экземпляр!' },
      { text: 'The quick brown fox jumps over the lazy dog.' },
      { text: 'В чащах юга жил бы цитрус? Да, но фальшивый экземпляр!' },
      { text: 'The quick brown fox jumps over the lazy dog.' },
      { text: 'В чащах юга жил бы цитрус? Да, но фальшивый экземпляр!' },
      { text: 'The quick brown fox jumps over the lazy dog.' },
      { text: 'В чащах юга жил бы цитрус? Да, но фальшивый экземпляр!' }
    ]
  }
};
export let addMessage = (textMessage) => {
  let newMessage = { text: textMessage };
  state.messagesPage.dataMessages.unshift(newMessage);
}
export default state;