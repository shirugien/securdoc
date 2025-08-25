import React from 'react';
import { 
  Shield, 
  Sparkles, 
  QrCode, 
  Archive, 
  Layers, 
  Eye, 
  Zap, 
  Database,
  Lock,
  Scan,
  FileCheck,
  Settings2
} from 'lucide-react';

const TechnologyPage = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-blue-900 mb-6">Technologies et Savoir-faire</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            SECURIDOC BÉNIN SARL intègre des technologies de pointe utilisées mondialement 
            dans le domaine de la sécurité documentaire
          </p>
        </div>

        {/* Technologies principales */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center animate-fade-in-up">
            Technologies de Pointe
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Papiers sécurisés */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 animate-fade-in-up animation-delay-300 relative overflow-hidden group">
              {/* Background image */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                <img 
                  src="https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop" 
                  alt="Secure papers" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 rounded-full p-4 w-16 h-16 mr-6 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                  <Layers className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-900">Papiers Infalsifiables</h3>
                  <p className="text-blue-600">Substrat haute sécurité</p>
                </div>
              </div>
              <div className="bg-blue-50 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-blue-900 mb-3">Caractéristiques techniques :</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Filigrane intégré lors de la fabrication du papier</li>
                  <li>• Fibres de sécurité colorées invisibles à l'œil nu</li>
                  <li>• Réaction chimique aux tentatives d'altération</li>
                  <li>• Grammage spécial résistant aux manipulations</li>
                </ul>
              </div>
              <div className="flex items-center space-x-4">
                <Shield className="h-6 w-6 text-blue-600" />
                <span className="text-gray-600 font-medium">Protection niveau maximum</span>
              </div>
            </div>

            {/* Encres spéciales */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 animate-fade-in-up animation-delay-500 relative overflow-hidden group">
              {/* Background image */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                <img 
                  src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop" 
                  alt="Special inks" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 rounded-full p-4 w-16 h-16 mr-6 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-900">Encres Spéciales</h3>
                  <p className="text-blue-600">Technologies d'impression avancées</p>
                </div>
              </div>
              <div className="bg-blue-50 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-blue-900 mb-3">Types d'encres utilisées :</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• <span className="font-semibold">UV invisibles</span> : révélées sous lumière ultraviolette</li>
                  <li>• <span className="font-semibold">Thermochromiques</span> : changent de couleur selon température</li>
                  <li>• <span className="font-semibold">Fluorescentes</span> : brillent sous éclairage spécial</li>
                  <li>• <span className="font-semibold">Micro-textes</span> : lisibles uniquement sous loupe</li>
                </ul>
              </div>
              <div className="flex items-center space-x-4">
                <Sparkles className="h-6 w-6 text-blue-600" />
                <span className="text-gray-600 font-medium">Détection multi-niveaux</span>
              </div>
            </div>

            {/* Hologrammes */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 animate-fade-in-up animation-delay-700 relative overflow-hidden group">
              {/* Background image */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                <img 
                  src="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop" 
                  alt="Holograms" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 rounded-full p-4 w-16 h-16 mr-6 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-900">Hologrammes Haute Sécurité</h3>
                  <p className="text-blue-600">Technologie laser 3D</p>
                </div>
              </div>
              <div className="bg-blue-50 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-blue-900 mb-3">Spécifications :</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Hologrammes 2D et 3D personnalisés</li>
                  <li>• Intégration des logos institutionnels</li>
                  <li>• Effets visuels dynamiques multi-angles</li>
                  <li>• Adhésifs sécurisés anti-transfert</li>
                </ul>
              </div>
              <div className="flex items-center space-x-4">
                <Lock className="h-6 w-6 text-blue-600" />
                <span className="text-gray-600 font-medium">Impossible à reproduire</span>
              </div>
            </div>

            {/* QR Codes sécurisés */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 animate-fade-in-up animation-delay-900 relative overflow-hidden group">
              {/* Background image */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                <img 
                  src="https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop" 
                  alt="QR codes" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 rounded-full p-4 w-16 h-16 mr-6 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                  <QrCode className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-900">QR Codes Dynamiques</h3>
                  <p className="text-blue-600">Vérification numérique instantanée</p>
                </div>
              </div>
              <div className="bg-blue-50 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-blue-900 mb-3">Fonctionnalités :</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Liaison directe avec base de données sécurisée</li>
                  <li>• Vérification en temps réel 24/7</li>
                  <li>• Historique des consultations tracé</li>
                  <li>• Interface web dédiée aux vérificateurs</li>
                </ul>
              </div>
              <div className="flex items-center space-x-4">
                <Database className="h-6 w-6 text-blue-600" />
                <span className="text-gray-600 font-medium">Connecté en permanence</span>
              </div>
            </div>
          </div>
        </section>

        {/* Processus technique */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-12 shadow-lg">
            <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">
              Processus de Sécurisation
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              
              <div className="text-center">
                <div className="bg-blue-600 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Settings2 className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">1. Analyse</h3>
                <p className="text-gray-600 text-sm">
                  Étude des besoins spécifiques et définition des niveaux de sécurité requis
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-600 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Layers className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">2. Conception</h3>
                <p className="text-gray-600 text-sm">
                  Intégration des éléments de sécurité dans le design du document
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-600 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Zap className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">3. Production</h3>
                <p className="text-gray-600 text-sm">
                  Fabrication avec technologies de pointe et contrôle qualité rigoureux
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-600 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <FileCheck className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">4. Validation</h3>
                <p className="text-gray-600 text-sm">
                  Tests de sécurité et mise en service des systèmes de vérification
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Système de traçabilité */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">
            Système de Traçabilité
          </h2>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              <div>
                <div className="flex items-center mb-6">
                  <Archive className="h-12 w-12 text-blue-600 mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold text-blue-900">Archivage Numérique</h3>
                    <p className="text-blue-600">Solution complète de traçabilité</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 rounded-full p-2 mt-1">
                      <Database className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-900">Base de données sécurisée</h4>
                      <p className="text-gray-600 text-sm">
                        Stockage crypté de toutes les informations documentaires
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 rounded-full p-2 mt-1">
                      <Scan className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-900">Numérisation haute résolution</h4>
                      <p className="text-gray-600 text-sm">
                        Capture numérique de chaque document produit
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 rounded-full p-2 mt-1">
                      <Eye className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-900">Historique complet</h4>
                      <p className="text-gray-600 text-sm">
                        Traçabilité de la production à la vérification
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-8">
                <h4 className="text-xl font-bold text-blue-900 mb-6">Avantages du système :</h4>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Vérification instantanée en ligne</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Détection automatique des faux</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Statistiques d'utilisation détaillées</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Interface client personnalisée</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">
              Technologies éprouvées, sécurité garantie
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Nos solutions technologiques de pointe offrent une protection inégalée 
              contre la fraude documentaire
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors duration-200">
              Découvrir nos solutions
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TechnologyPage;