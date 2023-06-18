import * as React from 'react'
import Image from 'next/image'
import classes from './style.module.scss'
import Container from '@/components/atoms/Container'

const Header: React.FC = () => {  
  return (
    <>
      <header className={classes.header}>
        <Container className={classes.container}>
          <div className={classes.logo}>
            <Image
              src="/images/icon/ico-aibook-logo-full-white.svg"
              alt="logo"
              width={100}
              height={20}
            />
          </div>

          <div className={classes.right}>right</div>

        </Container> 
      </header>
    </>
  )
}

export default Header
