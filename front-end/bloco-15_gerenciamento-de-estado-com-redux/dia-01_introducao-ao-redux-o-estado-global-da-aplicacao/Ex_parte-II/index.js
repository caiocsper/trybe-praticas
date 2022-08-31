const THEME_ACTION = 'CHANGE_THEME';
const STATUS_ACTION = 'STATUS_THEME';


const THEME_INITIAL_STATE = {
  theme: 'dark',
};

const themeReducer = (state = THEME_INITIAL_STATE, action) => {
  switch (action.type) {
    case THEME_ACTION:
      return {
        ...state,
        theme: state.theme === 'dark' ? 'light' : 'dark'
      }
    default:
      return state;
  }
};

const STATUS_INITIAL_STATE = {
  status: 'offline',
};

const statusReducer = (state = STATUS_INITIAL_STATE, action) => {
  switch (action.type) {
    case STATUS_ACTION:
      return {
        ...state,
        status: state.status === 'offline' ? 'online' : 'offline'
      }
    default:
      return state;
  }
};

const themeButton = document.getElementById('toggle-theme');
const statusButton = document.getElementById('toggle-status');

const rootReducer = Redux.combineReducers({ statusReducer, themeReducer });

const store = Redux.createStore(rootReducer);

const toggleThemeAction = () => ({
  type: THEME_ACTION,
});

const toggleStatusAction = () => ({
  type: STATUS_ACTION,
});

themeButton.addEventListener('click', () => {
  store.dispatch(toggleThemeAction());
});

statusButton.addEventListener('click', () => {
  store.dispatch(toggleStatusAction());
});

const toggleStatusView = (status) => {
  const curStatusText = document.getElementById('status');

  if (status === 'offline') {
    curStatusText.innerText = 'Offline';
    statusButton.innerText = 'Ficar Online';
  } else {
    curStatusText.innerText = 'Online';
    statusButton.innerText = 'Ficar Offline';
  }
};

const toggleThemeView = (theme) => {
  const body = document.querySelector('body');

  if (theme === 'dark') {
    body.style.backgroundColor = '#333';
    body.style.color = 'white';
    themeButton.innerText = 'Light Mode';
  } else {
    body.style.backgroundColor = 'white';
    body.style.color = '#333';
    themeButton.innerText = 'Dark Mode';
  }
};

store.subscribe(() => {
  const {
    statusReducer: { status },
    themeReducer: { theme }
  } = store.getState();
  
  toggleThemeView(theme);
  toggleStatusView(status);
});