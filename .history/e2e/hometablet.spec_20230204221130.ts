import { test, devices, expect} from 'playwright.config';

test.use({
    browserName: 'chromium',
    ...devices['iPad Air'],
    viewport: {width}
})