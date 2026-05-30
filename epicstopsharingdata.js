(async () => {
  const sleep = ms => new Promise(r => setTimeout(r, ms));

  // 0) CLICK "SHOW MORE" UNTIL IT DISAPPEARS
  for (let i = 0; i < 50; i++) {
    const showMoreBtn = document.querySelector('#show-more-connections-btn');

    if (!showMoreBtn) {
      console.log('No more "Show more" button.');
      break;
    }

    showMoreBtn.click();
    console.log('Clicked Show more');

    await sleep(1200);
  }

  await sleep(1500); // allow final render settle

  // 1) MAIN FLOW
  const apps = [...document.querySelectorAll('.MuiAccordion-root')];

  for (const app of apps) {

    const title = app.querySelector('.MuiTypography-body1')?.textContent?.trim();
    if (!title) continue;

    console.log('Processing:', title);

    // expand
    app.querySelector('.MuiAccordionSummary-root')?.click();
    await sleep(800);

    // click stop sharing inside accordion
    const stopBtn = [...app.querySelectorAll('button')]
      .find(b => b.textContent.trim() === 'Stop sharing data');

    if (!stopBtn) {
      console.log('No stop button:', title);
      continue;
    }

    stopBtn.click();
    await sleep(800);

    // modal confirm (global portal)
    let confirmBtn = null;

    for (let i = 0; i < 25; i++) {
      confirmBtn = document.querySelector('#revoke-confirm-btn');
      if (confirmBtn) break;
      await sleep(200);
    }

    if (!confirmBtn) {
      console.log('No modal confirm:', title);
      continue;
    }

    confirmBtn.click();
    console.log('Removed:', title);

    await sleep(1500);
  }

  console.log('DONE');
})();