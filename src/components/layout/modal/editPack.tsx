import { ChangeEvent, ReactNode, RefObject } from 'react'

import { ImageOutline } from '@/assets'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Modal } from '@/components/ui/modal/modal'
import { TextField } from '@/components/ui/textField'

import s from '@/components/ui/table/table.module.scss'

interface Props {
  buttonOnclick: () => void
  children: ReactNode
  fileInputRef: RefObject<HTMLInputElement>
  isChecked: boolean
  selectedImage: null | string
  setIsChecked: (value: boolean) => void
  setSelectedImage: (value: null | string) => void
  setValue: (value: string) => void
  title: string
  value: string
}

export const EditPack = ({
  buttonOnclick,
  children,
  fileInputRef,
  isChecked,
  selectedImage,
  setIsChecked,
  setSelectedImage,
  setValue,
  title,
  value,
}: Props) => {
  const onClick = () => {
    buttonOnclick()
  }

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]

    if (file) {
      setSelectedImage(URL.createObjectURL(file))
    }
  }

  return (
    <Modal title={title} trigger={children}>
      <div className={s.contentWrapper}>
        <div className={s.contentBody}>
          <div className={s.imageAddBody}>
            <img
              alt={'No image'}
              className={s.image}
              src={selectedImage || 'path/to/default/image'}
            />
            <div className={s.imageNav}>
              <div>Cover</div>
              <Button onClick={handleImageClick} variant={'secondary'}>
                <ImageOutline className={s.iconImage} />
                Change Cover
                <input
                  className={s.input}
                  onChange={handleImageChange}
                  ref={fileInputRef}
                  type={'file'}
                />
              </Button>
            </div>
          </div>
          <TextField label={'Name Pack'} onValueChange={e => setValue(e)} value={value} />
          <Checkbox checked={isChecked} label={'Private pack'} onValueChange={setIsChecked} />
        </div>
        <div className={s.buttons}>
          <Button variant={'secondary'}>Cancel</Button>
          <Button onClick={onClick} variant={'primary'}>
            Save Changes
          </Button>
        </div>
      </div>
    </Modal>
  )
}
