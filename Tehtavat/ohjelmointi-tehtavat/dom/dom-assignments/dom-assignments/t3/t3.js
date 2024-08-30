document.addEventListener('DOMContentLoaded', () => {
  const target = document.getElementById('target');

  const ua = navigator.userAgent;

  let browserName = 'Unknown';
  let browserVersion = 'Unknown';
  if (ua.includes('Chrome')) {
    browserName = 'Google Chrome';
    browserVersion = ua.match(/Chrome\/(\d+)/)[1];
  } else if (ua.includes('Firefox')) {
    browserName = 'Mozilla Firefox';
    browserVersion = ua.match(/Firefox\/(\d+)/)[1];
  } else if (ua.includes('Safari') && !ua.includes('Chrome')) {
    browserName = 'Safari';
    browserVersion = ua.match(/Version\/(\d+)/)[1];
  } else if (ua.includes('Edg')) {
    browserName = 'Microsoft Edge';
    browserVersion = ua.match(/Edg\/(\d+)/)[1];
  }

  let osName = 'Unknown';
  if (ua.includes('Windows NT')) osName = 'Windows';
  else if (ua.includes('Mac OS X')) osName = 'Mac OS';
  else if (ua.includes('Linux')) osName = 'Linux';
  else if (ua.includes('Android')) osName = 'Android';
  else if (ua.includes('iPhone')) osName = 'iOS';

  const width = screen.width;
  const height = screen.height;
  const availWidth = screen.availWidth;
  const availHeight = screen.availHeight;

  const now = new Date();
  const date = now.toLocaleDateString('fi-FI', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const time = now.toLocaleTimeString('fi-FI', {
    hour: '2-digit',
    minute: '2-digit',
  });

  target.innerHTML = `
      <p><strong>Browser:</strong> ${browserName}, ${browserVersion}</p>
      <p><strong>Operating System:</strong> ${osName}</p>
      <p><strong>Screen Width:</strong> ${width}px</p>
      <p><strong>Screen Height:</strong> ${height}px</p>
      <p><strong>Available Screen Width:</strong> ${availWidth}px</p>
      <p><strong>Available Screen Height:</strong> ${availHeight}px</p>
      <p><strong>Current Date:</strong> ${date}</p>
      <p><strong>Current Time:</strong> ${time}</p>
  `;
});
