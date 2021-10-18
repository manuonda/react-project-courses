import React from 'react'
import Logo from './Logo'

const styles = {
  navbar: {
      display: 'flex',
      flexDirection : 'row',
      alignItems: 'center',
      height : '100px',
      justifyContent: 'space-between',
      position:'relative',
      padding: '0 50px',
      boxShadow: '0 2px 3px '
  }
}

export const Navbar = () => {
    return (
        <nav styles={styles.navbar}>
            <Logo></Logo>
            <p>Carro</p>
        </nav>
    )
}

export default Navbar;
