import path from 'path';
import process from 'process';

import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

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

    case 'PROJECTMANAGER':
      config.root = path.resolve('src', 'ProjectManager');
      break;

    default:
      config.root = path.resolve('src', 'Essentials');
      break;
  }

  return {
    plugins: [react()],
    root: config.root,
    publicDir: config.public,
  };
});
