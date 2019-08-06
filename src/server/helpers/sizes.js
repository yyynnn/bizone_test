import MobileDetect from 'mobile-detect'

export const getSizesFallback = userAgent => {
  const md = new MobileDetect(userAgent)

  // if (md.mobile()) {
  //   return {
  //     fallbackWidth: theme.breakpoints.md,
  //     fallbackHeight: 640
  //   }
  // } else if (md.tablet()) {
  //   return {
  //     fallbackWidth: theme.breakpoints.lg,
  //     fallbackHeight: 1024
  //   }
  // }

  return {
    fallbackWidth: 1270,
    fallbackHeight: 700
  }
}
