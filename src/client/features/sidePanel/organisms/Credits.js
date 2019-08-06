import React from 'react'
import styled from 'styled-components'
import { Icon, Text, theme, Spacer, Flex } from 'mtsbankui'
import { useSelector, useDispatch } from 'react-redux'

export const Credits = () => {
  const dispatch = useDispatch()
  const { credits, loading } = useSelector(({ sidePanel }) => sidePanel)

  if (Object.keys(credits).length === 0 || loading) {
    return <Icon type="loader"></Icon>
  }

  const { cast } = credits

  return (
    <Wrapper direction="column">
      {cast.length > 0 && <p>Актеры:</p>}
      {cast.map(({ name, character, profile_path }, i) => (
        <div key={i}>
          <Flex alignItems="center" wrap="wrap">
            <Image img={profile_path}></Image>
            <div>
              <b>{name} &nbsp;</b>
              <div>В роли {character}</div>
            </div>
          </Flex>
          <Spacer space={theme.spacings.xs}></Spacer>
        </div>
      ))}
    </Wrapper>
  )
}

const Image = styled.div`
  background-image: url(${({ img }) => img && `https://image.tmdb.org/t/p/original/${img}`});
  height: 50px;
  width: 50px;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: ${theme.radiuses.round}px;
  margin-right: ${theme.spacings.xs2}px;
  background-color: ${theme.colors.gray.g600};
`

const Wrapper = styled(Flex)`
  width: 100%;
  @media (max-width: ${theme.breakpoints.sm}px) {
    flex-wrap: wrap;
  }
`
