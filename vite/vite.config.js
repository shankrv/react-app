import path from 'path';
import process from 'process';

import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const config = {
    publicDir: path.resolve('public'),
    plugins: [react()],
  };

  const env = loadEnv(mode, process.cwd(), '');

  switch (env.VITE_APP_PROJECT) {
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

    default:
      config.root = path.resolve('src', 'Essentials');
      break;
  }

  return config;
});
