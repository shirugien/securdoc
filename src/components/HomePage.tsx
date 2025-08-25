import React from 'react';
import { Shield, Activity as Security, Award, Users, ChevronRight, QrCode } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
            alt="Security background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/80 to-blue-700/80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            {/* Logo centré */}
            <div className="flex justify-center mb-8">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm p-8 rounded-3xl border border-white border-opacity-30 animate-pulse-slow hover:scale-105 transition-transform duration-500">
                <Shield className="h-24 w-24 text-white mx-auto mb-4 animate-bounce-slow" />
                <h1 className="text-5xl font-bold mb-2">SECURIDOC BÉNIN</h1>
                <p className="text-xl text-blue-100">SARL</p>
              </div>
            </div>

            {/* Slogan */}
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight animate-fade-in-up">
              "La sécurité documentaire, notre priorité"
            </h2>

            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
              Spécialisée dans la conception, la fabrication et la sécurisation de documents officiels et administratifs en Afrique
            </p>

            {/* Coordonnées élégantes */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto border border-white border-opacity-20 animate-fade-in-up animation-delay-400 hover:bg-opacity-15 transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-blue-200">📍</span>
                  <span>Cotonou, Bénin</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-blue-200">📞</span>
                  <span>(+229) ...</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-blue-200">✉️</span>
                  <span>contact@securidoc.bj</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-blue-200">🌐</span>
                  <span>www.securidoc.bj</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 animate-float"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-blue-200 rounded-full opacity-30 animate-float animation-delay-1000"></div>
            <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-blue-150 rounded-full opacity-25 animate-float animation-delay-2000"></div>
          </div>
          
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4 animate-fade-in-up">
              Pourquoi choisir SECURIDOC ?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              Notre expertise en sécurité documentaire garantit l'authenticité et la fiabilité 
              de vos documents les plus importants
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 animate-fade-in-up animation-delay-300 group">
              <div className="bg-blue-600 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:animate-pulse">
                <Security className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Sécurité</h3>
              <p className="text-gray-600">
                Protection avancée contre la contrefaçon et la fraude documentaire
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 animate-fade-in-up animation-delay-500 group">
              <div className="bg-blue-600 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:animate-pulse">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                Intégration des meilleures technologies internationales de sécurisation
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 animate-fade-in-up animation-delay-700 group">
              <div className="bg-blue-600 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:animate-pulse">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Fiabilité</h3>
              <p className="text-gray-600">
                Solutions conformes aux standards ISO et normes internationales
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 animate-fade-in-up animation-delay-900 group">
              <div className="bg-blue-600 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:animate-pulse">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Confiance</h3>
              <p className="text-gray-600">
                Relations durables avec nos clients et partenaires institutionnels
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6 animate-fade-in-up">
              Sécurisez vos documents dès aujourd'hui
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              Rejoignez les institutions qui font confiance à SECURIDOC BÉNIN pour 
              protéger leurs documents les plus précieux
            </p>

            {/* QR Code placeholder */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto mb-8 animate-fade-in-up animation-delay-400 hover:bg-opacity-15 transition-all duration-300">
              <QrCode className="h-32 w-32 text-white mx-auto mb-4 animate-pulse-slow" />
              <p className="text-blue-100">Scannez pour accéder à notre catalogue numérique</p>
            </div>

            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2 shadow-xl animate-fade-in-up animation-delay-600 hover:shadow-2xl">
              <span>Découvrir nos services</span>
              <ChevronRight className="h-5 w-5 animate-bounce-x" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;