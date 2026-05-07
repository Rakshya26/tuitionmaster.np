import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { HomePage } from './pages/HomePage';
import { FindTutorsPage } from './pages/FindTutorsPage';
import { TutorProfilePage } from './pages/TutorProfilePage';
import { TuitionJobsPage } from './pages/TuitionJobsPage';
import { BecomeTutorPage } from './pages/BecomeTutorPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="tutors" element={<FindTutorsPage />} />
          <Route path="tutors/:id" element={<TutorProfilePage />} />
          <Route path="jobs" element={<TuitionJobsPage />} />
          <Route path="become-tutor" element={<BecomeTutorPage />} />
          {/* Catch-all to home for demo purposes */}
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
