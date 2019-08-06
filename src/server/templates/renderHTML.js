export const renderHTML = ({
  html,
  styleTags,
  linkTags,
  scriptTags,
  preloadedState,
  meta,
  baseApiUri,
  IS_SHITTY,
  buildId
}) => {
  return `
    <!DOCTYPE html>
    <html prefix="og: http://ogp.me/ns# article: http://ogp.me/ns/article# fb: http://ogp.me/ns/fb#">
    <meta charset="utf-8">
    <title>MOVIFIND</title>
    <meta name="description" content="Bi.zone test app">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <link rel="dns-prefetch" href="www.googletagmanager.com">
    <link rel="dns-prefetch" href="www.google-analytics.com">
    <link rel="dns-prefetch" href="ssl.google-analytics.com">
    <link rel="manifest" href="/bizone_test/manifest.json">
    ${styleTags || ''}
    ${linkTags || ''}
    ${meta || ''}
    <meta name="build_id" content="${buildId}"/>
    <body>
      <div id="bizone">${html || ''}</div>
      <div class="scripts_preload">
        <div id="redux_initial_state" type="text/plain" data-json="${preloadedState || '{}'}"></div>
        <div id="base_api_uri" type="text/plain" data-api-url="${baseApiUri}"></div>  
        <div id="bad_browser" type="text/plain" data-bad-browser="${IS_SHITTY || ''}"></div>  
      </div>    
      ${scriptTags || ''}
      <script type="text/javascript" src="/bizone_test/bundle.app.js"></script>
    </body>
    </html>
`.trim()
}
