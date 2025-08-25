import React from 'react';
import { Target, Eye, Heart, Users, User, Briefcase, Award, CheckCircle } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-blue-900 mb-6">Présentation de l'entreprise</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Découvrez SECURIDOC BÉNIN SARL, votre partenaire de confiance en sécurité documentaire
          </p>
        </div>

        {/* Qui sommes-nous */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-12 shadow-lg relative overflow-hidden">
            {/* Background image */}
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                alt="Team collaboration" 
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center animate-fade-in-up">Qui sommes-nous ?</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed text-center animate-fade-in-up animation-delay-200 relative z-10">
                Créée pour répondre au défi croissant de la fraude documentaire en Afrique, 
                <span className="font-semibold text-blue-600"> SECURIDOC BÉNIN SARL </span>
                est spécialisée dans la conception, la fabrication et la sécurisation de documents 
                officiels et administratifs. Notre expertise nous permet de proposer des solutions 
                innovantes pour protéger l'intégrité documentaire de nos partenaires.
              </p>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Valeurs */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up animation-delay-300 group">
              <div className="bg-blue-600 rounded-full p-4 w-16 h-16 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                Garantir l'authenticité et la fiabilité des documents administratifs et 
                universitaires afin de protéger les institutions et leurs usagers contre 
                la fraude documentaire.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up animation-delay-500 group">
              <div className="bg-blue-600 rounded-full p-4 w-16 h-16 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                Être reconnu comme le leader ouest-africain de la sécurisation documentaire 
                et un partenaire de confiance pour les États, universités et entreprises.
              </p>
            </div>

            {/* Valeurs */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up animation-delay-700 group">
              <div className="bg-blue-600 rounded-full p-4 w-16 h-16 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Valeurs</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Sécurité</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Innovation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Fiabilité</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Confiance</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Équipe dirigeante */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4 animate-fade-in-up">Équipe dirigeante</h2>
            <p className="text-lg text-gray-600 animate-fade-in-up animation-delay-200">
              Une équipe expérimentée dédiée à l'excellence en sécurité documentaire
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Directeur Général */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 animate-fade-in-up animation-delay-300 group">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <User className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Antoine Houphouët ADJAHOUISSO</h3>
              <p className="text-blue-600 font-semibold mb-4">Directeur Général</p>
              <p className="text-gray-600 text-sm">
                Leader visionnaire avec une expertise approfondie en sécurité documentaire
              </p>
            </div>

            {/* Responsable technique */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 animate-fade-in-up animation-delay-500 group">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <Award className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Responsable Technique</h3>
              <p className="text-blue-600 font-semibold mb-4">Sécurité Documentaire</p>
              <p className="text-gray-600 text-sm">
                Expert en technologies de sécurisation et innovation documentaire
              </p>
            </div>

            {/* Responsable commercial */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 animate-fade-in-up animation-delay-700 group">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <Briefcase className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Responsable Commercial</h3>
              <p className="text-blue-600 font-semibold mb-4">& Partenariats</p>
              <p className="text-gray-600 text-sm">
                Développement des relations clients et partenariats stratégiques
              </p>
            </div>

            {/* Responsable qualité */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 animate-fade-in-up animation-delay-900 group">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <Users className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Responsable Qualité</h3>
              <p className="text-blue-600 font-semibold mb-4">& Standards ISO</p>
              <p className="text-gray-600 text-sm">
                Assurance qualité et conformité aux standards internationaux
              </p>
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <img 
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop" 
                alt="Professional team" 
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-3xl font-bold mb-6 relative z-10 animate-fade-in-up">
              Une équipe dédiée à votre sécurité documentaire
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto relative z-10 animate-fade-in-up animation-delay-200">
              Notre expertise et notre engagement font de SECURIDOC BÉNIN votre partenaire 
              de confiance pour tous vos besoins en sécurisation documentaire
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 hover:scale-105 transition-all duration-300 relative z-10 animate-fade-in-up animation-delay-400 shadow-xl hover:shadow-2xl">
              Découvrir nos services
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;