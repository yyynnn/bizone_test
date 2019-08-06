import React, { useState, useRef, useCallback } from 'react'
import Downshift from 'downshift'
import styled from 'styled-components'
import {
  useClickOutside,
  Input,
  Flex,
  Icon,
  Text,
  Divider,
  Opacity,
  theme,
  Spacer
} from 'mtsbankui'

export const Select = ({ items, onChange, selected, id, loading, ...rest }) => {
  const [data, setData] = useState(items)

  const stateReducer = (state, changes) => {
    if (changes.type === Downshift.stateChangeTypes.changeInput) {
      // eslint-disable-next-line security/detect-non-literal-regexp
      const pattern = new RegExp(changes.inputValue, 'i')
      // eslint-disable-next-line no-magic-numbers
      const filteredItems = items.filter(item => item.label.search(pattern) > -1 || '')
      setData(filteredItems)
    } else {
      setData(items)
    }

    return changes
  }

  const handleChange = value => {
    setData(items)
    onChange(value)
  }
  return (
    <Downshift
      id={id}
      stateReducer={stateReducer}
      onChange={handleChange}
      selectedItem={selected}
      itemToString={item => (item ? item.label : '')}
    >
      {downshift => {
        return (
          <div>
            <SelectInner downshift={downshift} items={data} {...rest} />
          </div>
        )
      }}
    </Downshift>
  )
}

export const SelectInner = props => {
  const { items, notFoundText = 'Ничего не найдено :(', downshift, renderItem } = props
  const {
    getInputProps,
    getItemProps,
    isOpen,
    selectedItem,
    closeMenu,
    setState,
    openMenu
  } = downshift

  const ref = useRef()

  const itemsView = [
    selectedItem,
    ...items.filter(item => {
      return item.value !== selectedItem.value
    })
  ]
  const handleClear = useCallback(() => setState({ inputValue: '' }), [])

  const inputProps = getInputProps({
    ...props,
    isOpen
  })
  const openHandler = () => (isOpen ? closeMenu() : openMenu())

  useClickOutside(ref, closeMenu)

  return (
    <DownshiftWrapper>
      <Input {...inputProps}>
        <div onClick={openHandler}>
          <Flex alignItems="center">
            <InputControl item={selectedItem} handler={handleClear} isOpen={isOpen} />
          </Flex>
        </div>
      </Input>

      {isOpen && (
        <Dropdown>
          {items.length ? (
            itemsView.map((item, idx) => {
              return (
                <React.Fragment key={idx}>
                  <DropdownItem
                    justify="space-between"
                    role="option"
                    {...getItemProps({
                      key: item.value,
                      disabled: Boolean(item.disabled),
                      isSelected: items.includes(item),
                      index: idx,
                      item
                    })}
                  >
                    <Text size="lg">
                      <Flex justify="space-between">
                        {renderItem ? renderItem(item) : item.label}
                      </Flex>
                    </Text>
                    {item.value === selectedItem.value && <Icon type="check" />}
                  </DropdownItem>
                  {item.value === selectedItem.value && <Divider />}
                </React.Fragment>
              )
            })
          ) : (
            <DropdownItem>
              <Opacity>
                <Text size="lg">{notFoundText}</Text>
              </Opacity>
            </DropdownItem>
          )}
        </Dropdown>
      )}
    </DownshiftWrapper>
  )
}

export const Dropdown = ({ children }) => {
  return (
    <Wrapper data-testid="dropdown">
      <StyledPerfectScrollbar>{children}</StyledPerfectScrollbar>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  box-shadow: ${theme.shadows.top};
  border-radius: ${theme.radiuses.basic}px;
  max-height: 192px;
  background-color: ${theme.colors.white};
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  overflow: auto;
  z-index: ${theme.z_indexes.med};
`

const StyledPerfectScrollbar = styled.div`
  display: flex;
  flex-direction: column;
`

const DownshiftWrapper = styled.div`
  position: relative;
`

const DropdownItem = styled(Flex)`
  padding: ${theme.spacings.xs}px;

  &:hover {
    background-color: ${theme.colors.gray.g700};
    cursor: pointer;
  }

  & svg {
    fill: ${theme.colors.gray.primary};
    width: 20px;
    height: 20px;
  }
`

export const InputControl = ({ items = [], item, handler, dropdown = true }) => {
  return (
    <ButtonsWrapper>
      {(items.length > 0 || !!item) && (
        <React.Fragment>
          <Icon type="close" fill={theme.colors.gray.g300} onClick={handler} />
          <Spacer space={theme.spacings.xs4} samespace />
        </React.Fragment>
      )}
      {dropdown && <RotatingIcon type="arrow_down" fill={theme.colors.gray.g300} />}
    </ButtonsWrapper>
  )
}

const RotatingIcon = styled(Icon)`
  transform: rotate(${({ isOpen }) => (isOpen ? '180' : '0')}deg);
  transition: ${theme.transitions.basic};
`

const ButtonsWrapper = styled.div`
  outline: none;
  appearance: none;
  background: none;
  margin: 0;
  border: none;
  display: flex;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  right: 0;
  top: 0;
  padding: 0 6px;
  pointer-events: none;
  z-index: ${theme.z_indexes.basic};

  & svg {
    pointer-events: all;
    transition: ${theme.transitions.basic};
  }

  & svg:hover {
    fill: ${theme.colors.gray.primary};
  }

  &:hover {
    cursor: pointer;
  }
`
