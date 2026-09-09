"use client";

import React from "react";
import Image from "next/image";

export default function DashboardPage() {
  return (
    <div className="dashboard-wrapper">
      {/* ==================== SIDEBAR ==================== */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          <div className="sidebar-logo-icon">R</div>
          <span className="sidebar-logo-text">flex</span>
        </div>

        <div className="sidebar-section-label">Menu</div>
        <nav className="sidebar-nav">
          <a className="sidebar-nav-item active" href="#">
            <span className="nav-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </svg>
            </span>
            Dashboard
          </a>
          <a className="sidebar-nav-item" href="#">
            <span className="nav-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 6h-4V5c0-1.66-1.34-3-3-3S9 3.34 9 5v1H5c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-8-1c0-.55.45-1 1-1s1 .45 1 1v1h-2V5zm-1 9.5l-2.5-2.5 1.41-1.41L10 11.67l4.09-4.09L15.5 9l-5.5 5.5z" />
              </svg>
            </span>
            Orders
            <span className="nav-arrow">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </span>
          </a>
          <a className="sidebar-nav-item" href="#">
            <span className="nav-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.5 14.5c0-.83-.67-1.5-1.5-1.5h-4.34l-2.52-2.52c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l1.6 1.61H3.5c-.55 0-1 .45-1 1s.45 1 1 1h10.59l-2.71 2.71c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L17.67 13h2.33c.83 0 1.5-.67 1.5-1.5z" />
                <path d="M15.5 4h-6c-1.1 0-2 .9-2 2v4h10V6c0-1.1-.9-2-2-2z" />
              </svg>
            </span>
            Products
            <span className="nav-arrow">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </span>
          </a>
          <a className="sidebar-nav-item" href="#">
            <span className="nav-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 20h4V4h-4v16zm-6 0h4v-8H4v8zM16 9v11h4V9h-4z" />
              </svg>
            </span>
            Analytics
          </a>
          <a className="sidebar-nav-item" href="#">
            <span className="nav-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 11c0-2.39-1.4-4.44-3.43-5.38v2.24C16.53 8.52 17 9.7 17 11s-.47 2.48-1.43 3.14v2.24C17.6 15.44 19 13.39 19 11zM11.5 3L7.33 7H3v8h4.33l4.17 4V3zm2.5 11.66v-7.32c.86.39 1.5 1.25 1.5 2.26s-.64 1.87-1.5 2.26z" />
              </svg>
            </span>
            Marketing
            <span className="nav-arrow">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </span>
          </a>
          <a className="sidebar-nav-item" href="#">
            <span className="nav-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-12 9c-.83 0-1.5-.67-1.5-1.5S7.17 8 8 8s1.5.67 1.5 1.5S8.83 11 8 11zm4 0c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11zm4 0c-.83 0-1.5-.67-1.5-1.5S15.17 8 16 8s1.5.67 1.5 1.5S16.83 11 16 11z" />
              </svg>
            </span>
            Messages
            <span className="nav-badge">25</span>
          </a>
        </nav>

        <div className="sidebar-integrations">
          <div className="sidebar-section-label">Integrations</div>
          <nav className="sidebar-nav">
            <a className="sidebar-nav-item" href="#">
              <span className="nav-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 12L12 22L22 12L12 2Z" fill="#2684FF"/>
                  <path d="M12 2L22 12L12 12Z" fill="#0052CC"/>
                  <path d="M2 12L12 22L12 12Z" fill="#0065FF"/>
                  <path d="M12 2L2 12L12 12Z" fill="#4C9AFF"/>
                  <circle cx="12" cy="12" r="3" fill="white"/>
                </svg>
              </span>
              Jira
            </a>
            <a className="sidebar-nav-item" href="#">
              <span className="nav-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52z" fill="#E01E5A"/>
                  <path d="M6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z" fill="#E01E5A"/>
                  <path d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834z" fill="#36C5F0"/>
                  <path d="M8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z" fill="#36C5F0"/>
                  <path d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522v-2.521z" fill="#2EB67D"/>
                  <path d="M17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z" fill="#2EB67D"/>
                  <path d="M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52z" fill="#ECB22E"/>
                  <path d="M15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" fill="#ECB22E"/>
                </svg>
              </span>
              Slack
            </a>
            <a className="sidebar-nav-item" href="#">
              <span className="nav-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="2" width="20" height="20" rx="5" fill="#1F8DED"/>
                  <path d="M6 15C7.5 17 10 18 12 18C14 18 16.5 17 18 15" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  <rect x="6" y="8" width="1.5" height="6" rx="0.75" fill="white"/>
                  <rect x="9.5" y="6" width="1.5" height="8" rx="0.75" fill="white"/>
                  <rect x="13" y="6" width="1.5" height="8" rx="0.75" fill="white"/>
                  <rect x="16.5" y="8" width="1.5" height="6" rx="0.75" fill="white"/>
                </svg>
              </span>
              Intercom
            </a>
          </nav>
        </div>

        <div className="sidebar-bottom">
          <a className="sidebar-nav-item" href="#">
            <span className="nav-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z" />
              </svg>
            </span>
            Logout
          </a>
        </div>
      </aside>

      {/* ==================== MAIN CONTENT ==================== */}
      <main className="main-content">
        {/* Top Header */}
        <header className="top-header">
          <button className="back-btn" aria-label="Go back">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div className="search-bar">
            <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input type="text" placeholder="Search" />
          </div>

          <div className="header-right">
            <button className="notification-btn" aria-label="Notifications">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
              </svg>
              <div className="notification-badge">2</div>
            </button>

            <div className="header-divider"></div>

            <div className="balance-display">
              <div className="balance-label">Your Balance</div>
              <div className="balance-amount">$5.456</div>
            </div>

            <div className="header-divider"></div>

            <div className="user-profile">
              <div className="user-avatar">
                <Image src="/avatar.jpg" alt="User Avatar" width={42} height={42} />
              </div>
              <span className="user-greeting">Hi, <span>Lay</span></span>
            </div>
          </div>
        </header>

        {/* Dashboard Header */}
        <div className="dashboard-header">
          <div className="dashboard-title">
            <div className="dashboard-title-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </svg>
            </div>
            <h1>Dashboard</h1>
          </div>
          <div className="dashboard-actions">
            <button className="month-select">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
              </svg>
              This Month
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: "10px"}}>
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <button className="download-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z" />
              </svg>
              Download Report
            </button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="stats-row">
          <div className="stat-card">
            <div className="stat-icon sales">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
              </svg>
            </div>
            <div className="stat-info">
              <div className="stat-label">Total Sales</div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span className="stat-value">263k</span>
                <span className="stat-change up">↑ 15.6%</span>
              </div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon visitors">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
              </svg>
            </div>
            <div className="stat-info">
              <div className="stat-label">Total Visitors</div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span className="stat-value">35k</span>
                <span className="stat-change down">↓ 6.2%</span>
              </div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon orders">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
              </svg>
            </div>
            <div className="stat-info">
              <div className="stat-label">Total Orders</div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span className="stat-value">165k</span>
                <span className="stat-change up">↑ 3.5%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="content-grid">
          {/* Left Column */}
          <div className="content-left">
            <div className="sessions-card">
              <div className="sessions-header">
                <h3>Online Store Sessions</h3>
                <button className="view-report-btn">View Report</button>
              </div>

              <div className="visitors-stats">
                <div className="visitors-main">
                  <div className="visitors-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                    </svg>
                  </div>
                  <div className="visitors-info">
                    <div className="visitors-label">
                      Visitors
                      <span className="stat-change up" style={{ fontSize: "13px", marginLeft: "4px" }}>↑ 15.6%</span>
                    </div>
                    <div className="visitors-number">68</div>
                  </div>
                </div>
                <div className="visitors-secondary">
                  <span className="visitors-secondary-number">26</span>
                  <span className="stat-change down" style={{marginLeft: 0}}>↓ 1.6%</span>
                </div>
              </div>

              {/* Sessions Over Time Chart */}
              <div className="chart-section">
                <div className="chart-header">
                  <h4>Sessions Over Time</h4>
                  <button className="chart-month-select">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
                    </svg>
                    February
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: "6px"}}>
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                </div>

                <div className="chart-container">
                  <svg className="chart-svg" viewBox="0 0 600 220" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#4318FF" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#4318FF" stopOpacity="0" />
                      </linearGradient>
                    </defs>

                    {/* Grid Lines */}
                    <line className="chart-grid-line" x1="40" y1="20" x2="600" y2="20" />
                    <line className="chart-grid-line" x1="40" y1="70" x2="600" y2="70" />
                    <line className="chart-grid-line" x1="40" y1="120" x2="600" y2="120" />
                    <line className="chart-grid-line" x1="40" y1="170" x2="600" y2="170" />
                    <line className="chart-grid-line" x1="40" y1="195" x2="600" y2="195" />

                    {/* Y-axis Labels */}
                    <text className="chart-y-label" x="30" y="24">15</text>
                    <text className="chart-y-label" x="30" y="74">10</text>
                    <text className="chart-y-label" x="30" y="124">5</text>
                    <text className="chart-y-label" x="30" y="199">0</text>

                    {/* Smooth Curve Area Fill */}
                    <path
                      className="chart-area"
                      d="M 50 195 
                         C 80 195, 100 120, 150 120 
                         C 200 120, 220 170, 270 170 
                         C 320 170, 340 100, 390 100 
                         C 440 100, 460 160, 500 160 
                         C 540 160, 560 50, 600 50 
                         L 600 195 Z"
                    />

                    {/* Smooth Curve Line */}
                    <path
                      className="chart-line"
                      d="M 50 195 
                         C 80 195, 100 120, 150 120 
                         C 200 120, 220 170, 270 170 
                         C 320 170, 340 100, 390 100 
                         C 440 100, 460 160, 500 160 
                         C 540 160, 560 50, 600 50"
                    />
                  </svg>
                </div>

                {/* Chart Pagination */}
                <div className="chart-pagination">
                  <button className="chart-page-arrow" aria-label="Previous">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>
                  <button className="chart-page-num active">21</button>
                  <button className="chart-page-num">22</button>
                  <button className="chart-page-num">23</button>
                  <button className="chart-page-num">24</button>
                  <button className="chart-page-num">25</button>
                  <button className="chart-page-arrow" aria-label="Next">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="content-right">
            {/* Pro Card */}
            <div className="pro-card">
              <Image src="/pro_illustration.jpg" alt="Pro Illustration Background" fill className="pro-card-img" />
              <div className="pro-card-content">
                <h3>Need More Stats?</h3>
                <p>Upgrade to pro for added benefits.</p>
                <button className="pro-btn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12.01" y2="8" />
                  </svg>
                  Go Pro Now
                </button>
              </div>
            </div>

            {/* Conversion Card */}
            <div className="conversion-card">
              <h3>Conversion</h3>
              
              <div className="donut-wrapper">
                <svg className="donut-svg" viewBox="0 0 200 120" preserveAspectRatio="xMidYMax meet">
                  <defs>
                    <linearGradient id="donutGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#4318FF" />
                      <stop offset="100%" stopColor="#8A66FF" />
                    </linearGradient>
                  </defs>
                  
                  {/* Half Circle Background */}
                  <path 
                    className="donut-bg" 
                    d="M 20 100 A 80 80 0 0 1 180 100" 
                  />
                  
                  {/* Half Circle Fill (58.19%) */}
                  <path 
                    className="donut-fill" 
                    d="M 20 100 A 80 80 0 0 1 180 100" 
                  />
                </svg>
                
                <div className="donut-center-text">
                  <div className="donut-percentage">58,19%</div>
                  <div className="donut-change">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
                    </svg>
                    3.5%
                  </div>
                </div>
              </div>

              <div className="conversion-footer">
                <div className="conversion-item income">
                  <div className="conversion-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="conversion-label">Income</span>
                  <span className="conversion-value">$542,317</span>
                </div>
                <div className="conversion-item expenses">
                  <div className="conversion-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </div>
                  <span className="conversion-label">Expences</span>
                  <span className="conversion-value">$497,456</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
