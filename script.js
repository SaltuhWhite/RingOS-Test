function openApp(appName) {
  const windows = document.getElementById('app-windows');
  windows.innerHTML = ""; // only one app open at a time

  const appWindow = document.createElement('div');
  appWindow.className = 'app-window';

  const closeBtn = document.createElement('button');
  closeBtn.className = 'close-btn';
  closeBtn.textContent = "X";
  closeBtn.onclick = () => windows.innerHTML = "";

  appWindow.appendChild(closeBtn);

  if (appName === 'marketplace') {
    const title = document.createElement('h3');
    title.textContent = "Feature Marketplace";
    appWindow.appendChild(title);

    // Example features
    const f1 = document.createElement('div');
    f1.className = 'feature-card';
    f1.innerHTML = `
      <img src="art/feature1.png" alt="Feature 1">
      <h4>Feature One</h4>
      <p>Description: Placeholder feature.</p>
      <p>Developer: Dev A</p>
    `;
    appWindow.appendChild(f1);

    const f2 = document.createElement('div');
    f2.className = 'feature-card';
    f2.innerHTML = `
      <img src="art/feature2.png" alt="Feature 2">
      <h4>Feature Two</h4>
      <p>Description: Another placeholder feature.</p>
      <p>Developer: Dev B</p>
    `;
    appWindow.appendChild(f2);

  } else if (appName === 'enabler') {
    const title = document.createElement('h3');
    title.textContent = "Feature Enabler";
    appWindow.appendChild(title);

    const list = document.createElement('ul');
    list.className = 'checklist';
    list.innerHTML = `
      <li><label><input type="checkbox" checked> Feature One</label></li>
      <li><label><input type="checkbox"> Feature Two</label></li>
    `;
    appWindow.appendChild(list);

  } else if (appName === 'test') {
    const title = document.createElement('h3');
    title.textContent = "Test Feature";
    appWindow.appendChild(title);

    const content = document.createElement('p');
    content.textContent = "This is the Test Feature app.";
    appWindow.appendChild(content);
  }

  windows.appendChild(appWindow);
}
