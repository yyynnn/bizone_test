import React, { useState } from 'react'
import { Spacer, theme, SkeletonRect, SkeletonBody } from 'mtsbankui'

export const CardLoader = () => {
  return (
    <SkeletonBody wrap="wrap">
      <SkeletonRect height={theme.spacings.xs2} />
      <Spacer />
      <SkeletonRect height={theme.spacings.xs2} />
      <Spacer />
      <SkeletonRect height={theme.spacings.s} />
      <Spacer space={theme.spacings.xs2} />
      <SkeletonRect height={theme.spacings.xs3} />
      <Spacer space={theme.spacings.xs2} />
      <SkeletonRect height={theme.spacings.xs3} />
      <Spacer space={theme.spacings.xs2} />
      <SkeletonRect height={theme.spacings.xs3} />
      <Spacer space={theme.spacings.xs2} />
    </SkeletonBody>
  )
}
