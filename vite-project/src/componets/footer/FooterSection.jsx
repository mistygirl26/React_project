
import './FooterSection.css';

function FooterSection() {
  return (
    <div className="bg">
            <footer className="py-3 my-4 ">
              <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item">Home</li>
                <li className="nav-item">Features</li>
                <li className="nav-item">About</li>
                <li className="nav-item">Contact Us</li>
              </ul>
              <p className="text-center ftr_text">&copy; 2023 Company, Inc</p>
            </footer>
    </div>
  )
}

export default FooterSection;