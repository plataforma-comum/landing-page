export async function onRequest(context) {
  const url = new URL(context.request.url);
  const path = url.pathname;

  // Catch any request trying to access the signaling path, regardless of case
  if (path.toLowerCase().startsWith('/tv30signaling/')) {

    // Define the only exact case-sensitive paths that are allowed
    const exactAllowedPaths = [
      '/tv30signaling/lls/BAMT',
      '/tv30signaling/lls/SLT',
      '/tv30signaling/sls/BALD'
    ];

    // If the exact requested path is not in the allow list, kill it immediately
    if (!exactAllowedPaths.includes(path)) {
      return new Response('404 Not Found', {
        status: 404,
        statusText: 'Not Found',
        headers: {
          'Content-Type': 'text/plain'
        }
      });
    }
  }

  // If the path perfectly matches the whitelist, or if the user is requesting 
  // an unrelated file on your site (like /index.html), let it pass to Cloudflare.
  return context.next();
}
