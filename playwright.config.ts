import {PlaywrightTestConfig} from '@playwright/test'

const playwrightConfig: PlaywrightTestConfig = {
  testDir: "tests",
  timeout:60000,
  retries: 2,
  workers:4,
  
  use:{
    headless: true,
    viewport:{width: 1920, height:1080},
    actionTimeout:60000,
    video: 'off',
    screenshot: 'off',
  },

  projects: [
    {
      name: "Chromium",
      use: {browserName: 'chromium'},
    },
    {
      name: "Firefox",
      use: {browserName: 'firefox'},
    },
    {
      name: "Webkit",
      use: {browserName: 'webkit'},
    },
  ],
}

export default playwrightConfig