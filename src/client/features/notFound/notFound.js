import React from 'react'
import styled from 'styled-components'

export const NotFound = () => {
  return (
    <Wrapper data-testid="not_found_page">
      <b>404</b>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  transform: perspective(1px) translateY(-50%);
  font-size: 6vw;
  display: flex;
  justify-content: center;
`
