import React from 'react';
import { 
  FileText, 
  Shield, 
  QrCode, 
  Zap, 
  Eye, 
  Settings, 
  GraduationCap, 
  Clock, 
  CheckCircle2,
  Star,
  Sparkles
} from 'lucide-react';

const ServicesPage = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-blue-900 mb-6">Produits et Services</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Une gamme complète de solutions de sécurisation documentaire adaptées aux besoins 
            spécifiques de nos partenaires institutionnels et privés
          </p>
        </div>

        {/* Services principaux */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">Nos Services</h2>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            
            {/* Conception et impression */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-blue-600 rounded-full p-4 w-16 h-16 mb-6 flex items-center justify-center">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Conception & Impression</h3>
              <p className="text-gray-600 mb-6">
                Papiers sécurisés pour tous types de documents officiels
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Diplômes et certificats</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Attestations professionnelles</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Relevés de notes sécurisés</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Documents administratifs</span>
                </li>
              </ul>
            </div>

            {/* Éléments de sécurité */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-blue-600 rounded-full p-4 w-16 h-16 mb-6 flex items-center justify-center">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Éléments de Sécurité</h3>
              <p className="text-gray-600 mb-6">
                Technologies avancées de protection contre la contrefaçon
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-3">
                  <Sparkles className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Filigrane intégré</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Sparkles className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Hologrammes 2D/3D</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Sparkles className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Encres spéciales UV</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Sparkles className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">QR codes dynamiques</span>
                </li>
              </ul>
            </div>

            {/* Services d'accompagnement */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-blue-600 rounded-full p-4 w-16 h-16 mb-6 flex items-center justify-center">
                <Settings className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Accompagnement</h3>
              <p className="text-gray-600 mb-6">
                Support complet pour optimiser votre sécurité documentaire
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-3">
                  <Settings className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Conseil en sécurité</span>
                </li>
                <li className="flex items-center space-x-3">
                  <GraduationCap className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Formation du personnel</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Eye className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Vérification des documents</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Maintenance et suivi</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technologies détaillées */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-12 shadow-lg">
            <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">
              Technologies de Sécurisation
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              <div className="text-center">
                <div className="bg-blue-600 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Sparkles className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Filigrane</h3>
                <p className="text-gray-600 text-sm">
                  Intégration directe dans le papier avec fibres de sécurité invisibles
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-600 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Star className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Hologrammes</h3>
                <p className="text-gray-600 text-sm">
                  Hologrammes personnalisés haute sécurité avec logos institutionnels
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-600 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Eye className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Encres Spéciales</h3>
                <p className="text-gray-600 text-sm">
                  Encres UV, thermochromiques et fluorescentes pour sécurité maximale
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-600 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <QrCode className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">QR Codes</h3>
                <p className="text-gray-600 text-sm">
                  Codes sécurisés reliés à plateforme de vérification en temps réel
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Avantages compétitifs */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">
            Avantages Compétitifs
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-100 rounded-full p-3 w-14 h-14 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">Infalsifiables</h3>
              <p className="text-gray-600 text-sm">
                Standards internationaux de sécurité
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-100 rounded-full p-3 w-14 h-14 mx-auto mb-4 flex items-center justify-center">
                <Settings className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">Personnalisés</h3>
              <p className="text-gray-600 text-sm">
                Selon votre identité visuelle
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-100 rounded-full p-3 w-14 h-14 mx-auto mb-4 flex items-center justify-center">
                <QrCode className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">Hybrides</h3>
              <p className="text-gray-600 text-sm">
                Sécurité physique + numérique
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-100 rounded-full p-3 w-14 h-14 mx-auto mb-4 flex items-center justify-center">
                <Zap className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">Rapides</h3>
              <p className="text-gray-600 text-sm">
                Production et livraison efficaces
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-100 rounded-full p-3 w-14 h-14 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">Support 24/7</h3>
              <p className="text-gray-600 text-sm">
                Assistance technique continue
              </p>
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">
              Sécurisez vos documents avec nos solutions expertes
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Découvrez comment nos technologies avancées peuvent protéger 
              vos documents les plus importants contre la fraude
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors duration-200">
              Demander un devis
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServicesPage;