function App() {
  return  (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="headerLeft d-flex align-center">
            <img width={40} height={40} src="/images/logo.svg" alt="#"/>
          <div className="headerInfo">
            <h3 className="text-uppercase">React Sneackers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="headerRight d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="/images/cart.svg" alt="#"/>
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src="/images/user.svg" alt="#"/>
          </li>
        </ul>
     </header>
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1 >Все кроссовки</h1>
          <div className="search-blog d-flex">
            <img src="/images/search.svg" alt="img"/>
            <input placeholder="Поиск..."/>
          </div>
        </div>

        <div className="d-flex">
          <div className="card">
            <img width={133} height={112} src="/images/1.jpg" alt="#"/>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/images/plus.svg" alt="#"/>
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/images/2.jpg" alt="#"/>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/images/plus.svg" alt="#"/>
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/images/6.jpg" alt="#"/>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/images/plus.svg" alt="#"/>
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/images/4.jpg" alt="#"/>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/images/plus.svg" alt="#"/>
              </button> 
            </div>
          </div>
        </div>
      </div>
    </div>
  
  );
}

export default App;
