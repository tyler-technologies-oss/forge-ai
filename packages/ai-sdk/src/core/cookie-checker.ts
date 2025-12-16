/**
 * Check if third-party cookies are enabled in the browser.
 * Required for proper authentication flow across domains.
 */
export async function checkThirdPartyCookies(): Promise<boolean> {
  return new Promise(resolve => {
    const testCookieName = 'third_party_test';
    const testValue = `test_${Date.now()}`;
    const iframe = document.createElement('iframe');

    const cleanup = (): void => {
      clearTimeout(timer);
      if (document.body.contains(iframe)) {
        document.body.removeChild(iframe);
      }
    };

    iframe.style.display = 'none';
    iframe.src = 'about:blank';
    iframe.onload = (): void => {
      try {
        const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
        if (iframeDoc) {
          const isSecureContext = window.isSecureContext;
          const cookieFlags = isSecureContext ? '; SameSite=None; Secure' : '';

          iframeDoc.cookie = `${testCookieName}=${testValue}; path=/${cookieFlags}`;
          const cookies = iframeDoc.cookie;
          const hasTestCookie = cookies.includes(testCookieName);

          if (hasTestCookie) {
            iframeDoc.cookie = `${testCookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/${cookieFlags}`;
          }

          resolve(hasTestCookie);
        } else {
          resolve(false);
        }
      } catch {
        resolve(false);
      } finally {
        cleanup();
      }
    };

    iframe.onerror = (): void => {
      resolve(false);
      cleanup();
    };

    const timer = window.setTimeout(() => {
      resolve(false);
      cleanup();
    }, 3000);

    document.body.appendChild(iframe);
  });
}
