import React, { useEffect } from "react";
import Logo from "./components/Logo"; // adjust path if needed

export default function App() {
  useEffect(() => {
    const chatbotBtn = document.querySelector(".chatbot-btn");
    const uploadArea = document.querySelector(".upload-area");

    function onChatClick() {
      alert("AI Assistant: Hello! How can I help with your farming questions today?");
    }
    function onUploadClick() {
      alert("Image upload functionality would open here.");
    }

    if (chatbotBtn) chatbotBtn.addEventListener("click", onChatClick);
    if (uploadArea) uploadArea.addEventListener("click", onUploadClick);

    return () => {
      if (chatbotBtn) chatbotBtn.removeEventListener("click", onChatClick);
      if (uploadArea) uploadArea.removeEventListener("click", onUploadClick);
    };
  }, []);

  return (
    <>
      {/* Header */}
      <header>
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <i className="fas fa-leaf logo-icon"></i>
              <h1 className="brand-name">
                <span className="brand-en">Agri</span><span className="brand-mr">मित्र</span>
              </h1>
            </div>

            {/* Search Bar */}
            <div className="search-container">
              <input type="text" placeholder="Search for crop, remedies, diseases..." className="search-input" />
              <button className="search-btn">
                <i className="fas fa-search"></i>
              </button>
            </div>

            <nav>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Remedies</a></li>
                <li><a href="#">Community</a></li>
                <li><a href="#" className="login-btn">Login</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h2>AI-Powered Crop Disease Detection</h2>
          <p>Upload images of your plants to detect diseases, get treatment recommendations, and connect with farming experts.</p>

          <div className="upload-box">
            <div className="upload-area">
              <i className="fas fa-cloud-upload-alt upload-icon"></i>
              <p>Drag &amp; Drop plant/leaf image here</p>
              <p>or</p>
              <button className="btn">Capture with Camera</button>
            </div>

            <div className="utility-buttons">
              <button className="btn-outline"><i className="fas fa-globe"></i> Select Language</button>
              <button className="btn-outline"><i className="fas fa-wifi"></i> Offline Mode</button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="container">
        <h2 className="section-title">Our Features</h2>

        <div className="features-grid">
          {/* Existing Features */}
          <div className="feature-card existing-feature">
            <i className="fas fa-check-circle feature-icon"></i>
            <h3>Disease Detection</h3>
            <p>Upload image to detect plant diseases with our advanced AI system.</p>
          </div>

          <div className="feature-card existing-feature">
            <i className="fas fa-check-circle feature-icon"></i>
            <h3>Treatment Suggestions</h3>
            <p>Get recommendations for both organic and chemical treatments.</p>
          </div>

          <div className="feature-card existing-feature">
            <i className="fas fa-check-circle feature-icon"></i>
            <h3>Multi-language Support</h3>
            <p>Use the app in your preferred language for better understanding.</p>
          </div>

          <div className="feature-card existing-feature">
            <i className="fas fa-check-circle feature-icon"></i>
            <h3>Offline Mode</h3>
            <p>Works even without internet connection in remote farming areas.</p>
          </div>

          {/* New Features */}
          <div className="feature-card new-feature">
            <i className="fas fa-plus-circle feature-icon"></i>
            <h3>Disease Stage Detection</h3>
            <p>Identify whether the disease is at mild, moderate, or severe stage.</p>
          </div>

          <div className="feature-card new-feature">
            <i className="fas fa-plus-circle feature-icon"></i>
            <h3>Crop Success Prediction</h3>
            <p>Predict potential loss/success rate of your crops based on conditions.</p>
          </div>

          <div className="feature-card new-feature">
            <i className="fas fa-plus-circle feature-icon"></i>
            <h3>Soil Analysis Integration</h3>
            <p>Get insights on soil pH and nutrient levels for better crop management.</p>
          </div>

          <div className="feature-card new-feature">
            <i className="fas fa-plus-circle feature-icon"></i>
            <h3>Disease Spread Risk Map</h3>
            <p>Visualize disease spread risk in your area based on weather conditions.</p>
          </div>
        </div>
      </section>

      {/* Farmer Dashboard Preview */}
      <section className="container">
        <h2 className="section-title">Farmer Dashboard</h2>

        <div className="dashboard-preview">
          <div className="dashboard-header">
            <h3>My Farming Overview</h3>
            <button className="btn">View Full Dashboard</button>
          </div>

          <div className="dashboard-cards">
            <div className="dashboard-card">
              <h4><i className="fas fa-history"></i> Upload History</h4>
              <p>Review your previously detected diseases and treatments.</p>
            </div>

            <div className="dashboard-card">
              <h4><i className="fas fa-tasks"></i> To-Do List</h4>
              <p>Manage your farming tasks and reminders in one place.</p>
            </div>

            <div className="dashboard-card">
              <h4><i className="fas fa-map-marker-alt"></i> Crop Monitoring</h4>
              <p>GPS-based monitoring of your crops and fields.</p>
            </div>

            <div className="dashboard-card">
              <h4><i className="fas fa-chart-line"></i> Weekly Improvement</h4>
              <p>Track your farm's progress with weekly percentage metrics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="community-section">
        <div className="container community-content">
          <h2 className="section-title">Community Forum</h2>
          <p>Connect with other farmers, share experiences, and get advice.</p>

          <div className="community-cards">
            <div className="community-card">
              <div className="user-info">
                <div className="user-avatar">
                  <i className="fas fa-user"></i>
                </div>
                <div>
                  <h4>Rajesh Kumar</h4>
                  <small>Rice Farmer</small>
                </div>
              </div>
              <p>"The AI detection helped me identify blast disease early. The organic treatment suggestions saved my crop!"</p>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "15px" }}>
                <span><i className="far fa-comment"></i> 12 comments</span>
                <span><i className="far fa-thumbs-up"></i> 24 upvotes</span>
              </div>
            </div>

            <div className="community-card">
              <div className="user-info">
                <div className="user-avatar">
                  <i className="fas fa-user"></i>
                </div>
                <div>
                  <h4>Priya Singh</h4>
                  <small>Wheat Farmer</small>
                </div>
              </div>
              <p>"The soil analysis feature helped me correct nutrient deficiencies I didn't even know about."</p>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "15px" }}>
                <span><i className="far fa-comment"></i> 8 comments</span>
                <span><i className="far fa-thumbs-up"></i> 17 upvotes</span>
              </div>
            </div>
          </div>

          <button className="btn">Join Community</button>
        </div>
      </section>

      {/* Chatbot Assistant */}
      <div className="chatbot-section">
        <div className="chatbot-btn">
          <i className="fas fa-robot"></i>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <h3>Contact Us</h3>
              <ul>
                <li><i className="fas fa-envelope"></i> support@agriscan.com</li>
                <li><i className="fas fa-phone"></i> +1 234 567 8900</li>
                <li><i className="fas fa-map-marker-alt"></i> 123 Farm Road, Agriculture City</li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">How It Works</a></li>
                <li><a href="#">Disease Library</a></li>
                <li><a href="#">Remedies Database</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Connect With Us</h3>
              <div className="social-icons">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>

          <div className="copyright">
            <p>&copy; 2023 AgriScan - AI Powered Crop Disease Detection. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}