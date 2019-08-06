import React from 'react'
import styled from 'styled-components'

const Reel = () => (
  <ReelWrapper>
    <svg width="87" height="87" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M87 44a43 43 0 1 1-87-1 43 43 0 0 1 87 1z" fill="#7F8C8D" />
      <path d="M84 44a40 40 0 1 1-81 0 40 40 0 0 1 81 0z" fill="#95A5A5" />
      <path d="M54 44c0 6-5 10-11 10-5 0-10-4-10-10s5-10 10-10c6 0 11 4 11 10z" fill="#7F8C8D" />
      <path
        d="M45 41a1 1 0 1 1-3 0 1 1 0 0 1 3 0zM45 47l-2 2-1-2 1-2 2 2zM49 44l-2 1-2-1 2-2 2 2zM42 44l-2 1-2-1 2-2 2 2z"
        fill="#35495E"
      />
      <path
        d="M30 32l-6-2a12 12 0 0 1-5-5c-2-6 0-12 6-15 6-2 12 0 15 5l2 6c0 6-5 11-12 11z"
        fill="#7F8C8D"
      />
      <path d="M39 15a10 10 0 1 0-18 10 10 10 0 0 0 18-10z" fill="#2C3E50" />
      <path
        d="M40 20c-6 1-11 4-15 9a10 10 0 0 1-4-5c4-5 10-9 17-10a10 10 0 0 1 2 6z"
        fill="#EA212E"
      />
      <path
        d="M75 60a2 2 0 1 1-3 0 2 2 0 0 1 3 0zM45 79a2 2 0 1 1-3 0 2 2 0 0 1 3 0zM15 60a2 2 0 1 1-3 0 2 2 0 0 1 3 0zM15 27a2 2 0 1 1-3 0 2 2 0 0 1 3 0zM45 8a2 2 0 1 1-3 0 2 2 0 0 1 3 0zM75 27a2 2 0 1 1-3 0 2 2 0 0 1 3 0z"
        fill="#547580"
      />
      <path d="M26 50l-4 4a12 12 0 1 1-5-22l6 2c5 3 7 10 3 16z" fill="#7F8C8D" />
      <path d="M17 34h-1a10 10 0 1 0 1 0z" fill="#2C3E50" />
      <path
        d="M22 36c-3 5-3 11-1 17a11 11 0 0 1-7 1c-2-7-1-14 1-20a10 10 0 0 1 7 2z"
        fill="#EA212E"
      />
      <path d="M30 55l-6 2a12 12 0 0 0 1 21 12 12 0 1 0 5-23z" fill="#7F8C8D" />
      <path d="M39 72a10 10 0 1 1-18-10 10 10 0 0 1 18 10z" fill="#2C3E50" />
      <path
        d="M40 67c-6-1-11-4-15-9a10 10 0 0 0-4 5c4 5 10 9 17 10a10 10 0 0 0 2-6z"
        fill="#EA212E"
      />
      <path
        d="M57 32l6-2a12 12 0 0 0 5-5c2-6 0-12-6-15-6-2-12 0-15 5l-2 6c0 6 5 11 12 11z"
        fill="#7F8C8D"
      />
      <path d="M48 15a10 10 0 1 1 18 10 10 10 0 0 1-18-10z" fill="#2C3E50" />
      <path
        d="M47 20c6 1 11 4 15 9a10 10 0 0 0 4-5c-4-5-10-9-17-10a10 10 0 0 0-2 6z"
        fill="#EA212E"
      />
      <path d="M61 50l4 4a12 12 0 1 0-4-4z" fill="#7F8C8D" />
      <path d="M70 34h1a10 10 0 1 1-1 0z" fill="#2C3E50" />
      <path
        d="M65 36c3 5 3 11 1 17a11 11 0 0 0 7 1c2-7 1-14-1-20a10 10 0 0 0-7 2z"
        fill="#EA212E"
      />
      <path d="M57 55l6 2a12 12 0 1 1-16 16l-2-6c0-7 5-12 12-12z" fill="#7F8C8D" />
      <path d="M48 72a10 10 0 1 0 18-10 10 10 0 0 0-18 10z" fill="#2C3E50" />
      <path
        d="M47 67c6-1 11-4 15-9a10 10 0 0 1 4 5c-4 5-10 9-17 10a10 10 0 0 1-2-6z"
        fill="#EA212E"
      />
      <animateTransform
        attributeType="xml"
        attributeName="transform"
        type="rotate"
        values="0 0 0; 360 0 0"
        dur="9s"
        additive="sum"
        repeatCount="indefinite"
      />
    </svg>
  </ReelWrapper>
)

export const Logo = () => {
  return (
    <Wrapper>
      <Reel />
      <svg
        width="188"
        height="39"
        viewBox="0 0 188 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.1909 31.3793V21.069L15.2554 29.1379H12.1146L7.179 21.5172V31.3793H0V8.96552H6.28162L13.4606 20.6207L20.6396 8.96552H26.9212L27.3699 31.3793H20.1909ZM93.7757 8.96552L84.3532 31.3793H76.7255L67.3031 8.96552H75.3795L80.7637 21.9655L86.148 8.96552H93.7757ZM94.673 8.96552H102.301V31.3793H94.673V8.96552ZM113.518 14.3448V18.3793H122.94V24.2069H113.518V31.3793H105.89V8.96552H124.286V14.3448H113.518ZM126.53 8.96552H134.158V31.3793H126.53V8.96552ZM160.181 8.96552V31.3793H153.9L145.375 21.069V31.3793H137.747V8.96552H144.029L152.554 18.8276V8.96552H160.181ZM163.771 8.96552H174.988C177.68 8.96552 179.924 9.41379 181.718 10.3103C183.513 11.2069 185.308 12.5517 186.205 13.8965C187.103 15.6897 188 17.931 188 20.1724C188 22.4138 187.103 24.2069 186.205 26C185.308 27.7931 183.513 29.1379 181.718 30.0345C179.924 30.931 177.68 31.3793 174.988 31.3793H163.771V8.96552ZM174.539 25.5517C176.334 25.5517 177.68 25.1034 178.578 24.2069C179.475 23.3103 179.924 21.9655 179.924 20.1724C179.924 18.3793 179.475 17.0345 178.578 16.1379C177.68 15.2414 176.334 14.7931 174.539 14.7931H171.399V25.5517H174.539Z"
          fill="#2C3E50"
        />
      </svg>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
`

const ReelWrapper = styled.div`
  position: absolute;
  transform: translate(5px, -24px) scale(0.4);
`