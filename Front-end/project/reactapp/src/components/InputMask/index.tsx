import React from 'react'
import InputMask from 'react-input-mask'
import { useState } from 'react'

import { MdOutlineEmail } from 'react-icons/md'
import { IconType } from 'react-icons'

interface Props {
  icon?: IconType
  label: string
}

export const InputCpfMask: React.FC<Props> = ({ icon, label, ...rest }) => {
  const [focus, setFocus] = useState(false)
  const Icon = icon
  return (
    <div id="input1">
      <label className="label">{label}</label>
      <div className={!focus ? 'input-container' : 'input-container-focus'}>
        {Icon ? (
          <Icon
            className={!focus ? 'mail-icon' : 'mail-icon-focus mail-icon'}
          />
        ) : (
          <MdOutlineEmail />
        )}

        <InputMask
          name="cpf"
          mask="99999999999"
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          className={!focus ? 'input' : 'input input-focus'}
          {...rest}
        />
      </div>
    </div>
  )
}
