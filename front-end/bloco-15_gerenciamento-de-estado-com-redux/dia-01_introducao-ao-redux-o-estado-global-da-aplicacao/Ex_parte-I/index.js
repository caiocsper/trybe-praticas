const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const NEXT_COLOR = 'NEXT_COLOR';
const PREVIOUS_COLOR = 'PREVIOUS_COLOR';
const RANDOM_COLOR = 'RANDOM_COLOR';

const colorReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case NEXT_COLOR:
      return {
        ...state,
        index: state.index + 1 < state.colors.length ? state.index + 1 : 0
      };
    case PREVIOUS_COLOR:
      return {
        ...state,
        index: state.index - 1 >= 0 ? state.index - 1 : state.colors.length - 1
      };
    case RANDOM_COLOR:
      return {
        ...state,
        colors: [...state.colors, action.newColor],
        index: state.colors.length,
      };
    default:
      return state;
  }
}

const store = Redux.createStore(colorReducer);

function criarCor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
      cor += oneChar[aleatorio()];
  }
  return cor;
}

const nextColorAction = () => ({
  type: NEXT_COLOR
});
const prevColorAction = () => ({
  type: PREVIOUS_COLOR
});
const randomColorAction = () => ({
  type: RANDOM_COLOR,
  newColor: criarCor()
});

const nextColorBtn = document.getElementById('next');
const prevColorBtn = document.getElementById('previous');
const randomColorBtn = document.getElementById('random');

nextColorBtn.addEventListener('click', () => {
  store.dispatch(nextColorAction());
});

prevColorBtn.addEventListener('click', () => {
  store.dispatch(prevColorAction());
});

randomColorBtn.addEventListener('click', () => {
  store.dispatch(randomColorAction());
});

store.subscribe(() => {
  const { colors, index } = store.getState();
  console.log(colors);
  const curColor = colors.at(index);
  const curColorText = document.getElementById('value');
  const pageContainer = document.getElementById('container');
  curColorText.innerText = curColor;
  pageContainer.style.backgroundColor = curColor;
});
