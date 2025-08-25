import React, { useState } from 'react';
import { Shield, Menu, X, Phone, Mail, MapPin, Globe, Facebook, Linkedin, Twitter } from 'lucide-react';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import TechnologyPage from './components/TechnologyPage';
import ReferencesPage from './components/ReferencesPage';
import ProjectsPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage';

const pages = [
  { id: 'home', label: 'Accueil', component: HomePage },
  { id: 'about', label: 'Présentation', component: AboutPage },
  { id: 'services', label: 'Services', component: ServicesPage },
  { id: 'technology', label: 'Technologies', component: TechnologyPage },
  { id: 'references', label: 'Références', component: ReferencesPage },
  { id: 'projects', label: 'Projets', component: ProjectsPage },
  { id: 'contact', label: 'Contact', component: ContactPage },
];

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const CurrentComponent = pages.find(page => page.id === currentPage)?.component || HomePage;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header Navigation */}
      <header className="bg-white shadow-lg border-b-2 border-blue-600 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-blue-900">SECURIDOC BÉNIN</h1>
                <p className="text-sm text-blue-600 italic">"La sécurité documentaire, notre priorité"</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              {pages.map((page) => (
                <button
                  key={page.id}
                  onClick={() => setCurrentPage(page.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    currentPage === page.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-blue-900 hover:bg-blue-100 hover:text-blue-600'
                  }`}
                >
                  {page.label}
                </button>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-blue-900 hover:bg-blue-100"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden pb-4">
              <div className="space-y-1">
                {pages.map((page) => (
                  <button
                    key={page.id}
                    onClick={() => {
                      setCurrentPage(page.id);
                      setIsMenuOpen(false);
                    }}
                    className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      currentPage === page.id
                        ? 'bg-blue-600 text-white'
                        : 'text-blue-900 hover:bg-blue-100'
                    }`}
                  >
                    {page.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <CurrentComponent />
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="h-8 w-8 text-blue-300" />
                <div>
                  <h3 className="text-xl font-bold">SECURIDOC BÉNIN</h3>
                  <p className="text-blue-300 text-sm">SARL</p>
                </div>
              </div>
              <p className="text-blue-200 mb-4">
                "La sécurité documentaire, notre priorité"
              </p>
              <p className="text-blue-300 text-sm">
                Spécialisée dans la sécurisation de documents officiels et administratifs.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-300">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-300" />
                  <span className="text-sm">Cotonou, Bénin</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-300" />
                  <span className="text-sm">(+229) ...</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-300" />
                  <span className="text-sm">contact@securidoc.bj</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5 text-blue-300" />
                  <span className="text-sm">www.securidoc.bj</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-300">Suivez-nous</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-blue-800 p-3 rounded-full hover:bg-blue-700 transition-colors duration-200">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="bg-blue-800 p-3 rounded-full hover:bg-blue-700 transition-colors duration-200">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="bg-blue-800 p-3 rounded-full hover:bg-blue-700 transition-colors duration-200">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-800 mt-8 pt-8 text-center">
            <p className="text-blue-300 text-sm">
              © 2025 SECURIDOC BÉNIN SARL. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;