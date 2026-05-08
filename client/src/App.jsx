import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Layout from './components/Layout';
import Login from './pages/Login';
import Home from './pages/Home';
import Schemes from './pages/Schemes';
import Workflow from './pages/Workflow';
import DocumentUpload from './pages/DocumentUpload';
import Tracking from './pages/Tracking';
import FundTransparency from './pages/FundTransparency';
import AIChatbot from './pages/AIChatbot';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/schemes" element={<Schemes />} />
          <Route path="/workflow/:schemeId" element={<Workflow />} />
          <Route path="/upload" element={<DocumentUpload />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/transparency" element={<FundTransparency />} />
          <Route path="/chatbot" element={<AIChatbot />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
