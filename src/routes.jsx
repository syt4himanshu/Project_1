import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ChallengesPage from './pages/ChallengesPage';
import CommunityPage from './pages/CommunityPage';
import ProfilePage from './pages/Profile';
import ResourcesPage from './pages/Resources';
import FAQPage from './pages/FAQ';
import ContactPage from './pages/Contact';
import PrivacyPage from './pages/Privacy';
import TermsPage from './pages/Terms';
import SharePage from './pages/Share';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/challenges" element={<ChallengesPage />} />
    <Route path="/community" element={<CommunityPage />} />
    <Route path="/profile" element={<ProfilePage />} />
    <Route path="/resources" element={<ResourcesPage />} />
    <Route path="/faq" element={<FAQPage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/privacy" element={<PrivacyPage />} />
    <Route path="/terms" element={<TermsPage />} />
    <Route path="/share" element={<SharePage />} />
  </Routes>
);

export default AppRoutes;
