import { Profile } from '@/components/layout/login-forms/profile'
import { Loader } from '@/components/ui'
import { useMeQuery } from '@/services/auth/auth.service'

import s from './profile-page.module.scss'

export const ProfilePage = () => {
  const { data, isError, isLoading } = useMeQuery()

  if (isLoading) {
    return <Loader />
  }
  if (isError) {
    return <h1>Error</h1>
  }
  const { avatar: src, email, name } = data!

  return (
    <div className={s.body}>
      <div className={`${s.body__box} body__box`}>
        <Profile data={{ email, name, src }} />
      </div>
    </div>
  )
}
