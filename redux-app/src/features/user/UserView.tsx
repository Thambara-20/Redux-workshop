import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { useEffect } from 'react'
import { fetchUsers } from './userSlice'

function UserView() {
  const dispatch = useAppDispatch()
  const user = useAppSelector(state => state.user)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <div>
      <div>Users</div>
      {user.loading && <div>Loading...</div>}
      {!user.loading && user.error && <div>{user.error}</div>}
      {!user.loading && user.users.map(user => <div key={user.id}>{user.name}</div>)}
    </div>
  )
}

export default UserView