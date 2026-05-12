import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { Home } from './pages/Home';
import { Ontology } from './pages/Ontology';
import { Onboarding } from './pages/Onboarding';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="ontology" element={<Ontology />} />
        <Route path="onboarding" element={<Onboarding />} />
      </Route>
    </Routes>
  );
}
