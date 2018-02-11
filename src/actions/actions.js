import { displayWelcomeCard, displayCardList } from './actionTypes';

export const getWelcomeCardData = () => dispatch =>
  dispatch(
    displayWelcomeCard({
      title: 'Welcome to the Sample Dashboard',
      msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus vitae velit a congue.',
      imgUrl: 'http://icdn8.digitaltrends.com/image/funny-grumpy-cat-images-hd-wallpaper-1080x611-640x0.jpg',
    }),
  );

export const getCardListData = () => dispatch =>
  dispatch(
    displayCardList(
      [
        { id: 1, title: 'Foo', msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus vitae velit a congue.', imgUrl: 'https://picsum.photos/500/300' },
        { id: 2, title: 'Bar', msg: 'Etiam pretium a elit in varius. Ut vel est accumsan, interdum erat sit amet, lacinia risus.', imgUrl: 'https://picsum.photos/500/300/?random' },
      ],
    ),
  );
