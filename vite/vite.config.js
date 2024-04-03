import path from 'path';
import process from 'process';

import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import million from 'million/compiler';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const config = { public: path.resolve('public') };
  const { VITE_APP_PROJECT } = loadEnv(mode, process.cwd(), '');

  switch (VITE_APP_PROJECT) {
    case 'ESSENTIALS':
      config.root = path.resolve('src', 'Essentials');
      break;

    case 'TICTACTOE':
      config.root = path.resolve('src', 'TicTacToe');
      break;

    case 'INVESTMENT':
      config.root = path.resolve('src', 'InvestmentCalculator');
      break;

    case 'COUNTDOWN':
      config.root = path.resolve('src', 'FinalCountdown');
      break;

    case 'PROJECT_MANAGER':
      config.root = path.resolve('src', 'ProjectManager');
      break;

    case 'ELEGANT_STORE':
      config.root = path.resolve('src', 'ElegantStore');
      break;

    case 'PLACE_PICKER':
      config.root = path.resolve('src', 'PlacePicker');
      break;

    case 'REACT_QUIZ':
      config.root = path.resolve('src', 'ReactQuiz');
      break;

    case 'COUNTER':
      config.root = path.resolve('src', 'Counter');
      break;

    default:
      config.root = path.resolve('src', 'Essentials');
      break;
  }

  return {
    plugins: [million.vite({ auto: true }), react()],
    root: config.root,
    publicDir: config.public,
  };
});
