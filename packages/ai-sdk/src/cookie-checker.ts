/**
 * Check if third-party cookies are enabled in the browser.
 * Required for proper authentication flow across domains.
 */
export async function checkThirdPartyCookies(): Promise<boolean> {
  return new Promise(resolve => {
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = 'about:blank';

    const timeout = setTimeout(() => {
      cleanup();
      resolve(false);
    }, 3000);

    const cleanup = (): void => {
      clearTimeout(timeout);
      iframe.remove();
    };

    iframe.onload = (): void => {
      try {
        const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
        if (!iframeDoc) {
          cleanup();
          resolve(false);
          return;
        }

        document.cookie = 'tyler_ai_cookie_test=1; SameSite=None; Secure';
        const cookieSet = document.cookie.includes('tyler_ai_cookie_test=1');

        document.cookie = 'tyler_ai_cookie_test=; expires=Thu, 01 Jan 1970 00:00:00 UTC; SameSite=None; Secure';

        cleanup();
        resolve(cookieSet);
      } catch {
        cleanup();
        resolve(false);
      }
    };

    document.body.appendChild(iframe);
  });
}
