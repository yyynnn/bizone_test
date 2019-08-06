import React from 'react'
import styled from 'styled-components'
import { theme, Spacer, Color, Flex, Heading, Text } from 'mtsbankui'
import StarRatings from 'react-star-ratings'
import { useDispatch } from 'react-redux'
import { disableBodyScroll } from 'body-scroll-lock'

import { sidePanelActions } from 'client/features/sidePanel/organisms/SidePanel/reducer'

const noImage = 'https://static.thenounproject.com/png/1211233-200.png'

const targetElement = document.querySelector('#bizone')

export const Card = React.memo(({ id, img, poster, text, title, date, rating, original_title }) => {
  const dispatch = useDispatch()

  const sidePanelToggle = () => {
    dispatch(sidePanelActions.start(id))
    disableBodyScroll(targetElement)
  }

  const hasImg = img || poster ? true : false

  return (
    <Wrapper fillWidth fillHeight flex="1" onClick={sidePanelToggle}>
      {hasImg ? (
        <Image img={`https://image.tmdb.org/t/p/original${img || poster}`} hasImg={hasImg} />
      ) : (
        <Image img={noImage} hasImg={hasImg}></Image>
      )}
      <InfoWrapper>
        <CardHeading h={4}>{title}</CardHeading>

        <Spacer space={theme.spacings.xs3} />

        <SubText>
          <Color color={theme.colors.gray.g300}>
            {original_title} ({date.slice(0, 4)})
          </Color>
        </SubText>

        <Spacer space={theme.spacings.xs2} />

        <StarRatings
          rating={rating}
          starRatedColor={theme.colors.red.primary}
          numberOfStars={10}
          starDimension={`${theme.spacings.xs2}px`}
          starSpacing={`${theme.spacings.xs4}px`}
          starHoverColor={theme.colors.red.primary}
        />
        <Spacer space={theme.spacings.xs2} />

        <Body>
          <Color color={theme.colors.gray.g300}>{text}</Color>
        </Body>

        <Spacer />
      </InfoWrapper>
    </Wrapper>
  )
})

const SubText = styled(Text)`
  width: 100%;
`

const CardHeading = styled(Heading)`
  height: 42px;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.sm}px) {
    height: auto;
    width: 100%;
  }
`

const Wrapper = styled(Flex)`
  cursor: pointer;
  height: 251px;
  margin-bottom: ${theme.spacings.m}px;

  @media (max-width: ${theme.breakpoints.sm}px) {
    height: auto;
    flex-direction: column;
  }
`

const InfoWrapper = styled.div`
  width: 70%;
  background-color: ${theme.colors.white};
  padding: ${theme.spacings.s}px;
  border-top: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;

  @media (max-width: ${theme.breakpoints.sm}px) {
    width: 100%;
  }
`

const Image = styled.div`
  width: 30%;
  background-image: url(${({ img }) => img});
  background-size: ${({ hasImg }) => (hasImg ? 'cover' : 'contain')};
  background-position: ${({ hasImg }) => (hasImg ? 'top' : 'center')};
  background-repeat: no-repeat;
  position: relative;
  transition: all ${theme.transitions.basic};
  overflow: hidden;
  border-radius: ${theme.radiuses.basic}px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  background-color: ${theme.colors.white};

  @media (max-width: ${theme.breakpoints.sm}px) {
    height: 200px;
    width: 100%;
    min-width: 200px;
    border-radius: ${theme.radiuses.basic}px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`

const Body = styled(Text)`
  max-height: 100px;
  width: 100%;
  overflow-y: hidden;
`
