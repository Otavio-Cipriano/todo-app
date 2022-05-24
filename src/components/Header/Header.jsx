


export default function Header() {
  return (
    <div className='header'>
      <div className="header__wrap">
        <h1>Todo</h1>
        <div className="theme-btn">
          <img className="theme-btn__sun" src='/assets/icon-sun.svg' alt="sun icon" />
          <img className="theme-btn__moon" src='/assets/icon-moon.svg' alt="moon icon" />
        </div>
      </div>
    </div>
  )
}