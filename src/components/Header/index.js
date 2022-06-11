import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header-bg-container">
    <div className="nav-container-lg">
      <div className="nav-logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="nav-header-logo"
        />
      </div>
      <ul className="nav-items-container">
        <Link to="/" className="nav-link">
          <li className="nav-item">Home</li>
        </Link>
        <Link to="/" className="nav-link">
          <li className="nav-item">Products</li>
        </Link>
        <Link to="/" className="nav-link">
          <li className="nav-item">Cart</li>
        </Link>
        <li className="nav-item">
          <button type="button" className="logout-button">
            Logout
          </button>
        </li>
      </ul>
    </div>
    <div className="nav-container-sm">
      <div className="nav-logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="nav-header-logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt="nav logout"
          className="nav-header-logout-logo"
        />
      </div>
      <ul className="nav-items-container">
        <Link to="/" className="nav-link">
          <li className="nav-item">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
              alt="nav home"
              className="nav-header-link-icon"
            />
          </li>
        </Link>
        <Link to="/" className="nav-link">
          <li className="nav-item">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
              alt="nav products"
              className="nav-header-link-icon"
            />
          </li>
        </Link>
        <Link to="/" className="nav-link">
          <li className="nav-item">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
              alt="nav cart"
              className="nav-header-link-icon"
            />
          </li>
        </Link>
      </ul>
    </div>
  </div>
)

export default Header
