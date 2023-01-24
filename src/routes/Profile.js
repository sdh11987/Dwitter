import { authService } from 'fbase';
import React from 'react';

export default () => {
  const onLogOutClick = () => {
    authService.signOut()
  }
  return (
  <>
    <button onClick={onLogOutClick}>로그아웃</button>
  </>
  )
}