import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
  const loggedIn = {firstName:'Aryan',lastName:'Naik',email:'a@a.a'};
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently"
          />
          

          <TotalBalanceBox 
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1390.59} />

        </header>

      RECENT TRANSACTOINS


      </div>

      <RightSidebar
      user={loggedIn}
      transactions={[]}
      banks={[{currentBalance:194.20},{currentBalance:1203}]}
      
      />
    </section>
  )
}

export default Home