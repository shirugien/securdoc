import React from 'react';
import { 
  Target, 
  Rocket, 
  Globe, 
  TrendingUp, 
  Calendar, 
  Map, 
  Shield, 
  Users,
  ChevronRight,
  Star,
  Award,
  Zap
} from 'lucide-react';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-blue-900 mb-6">Projets et Ambitions</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            SECURIDOC BÉNIN SARL ne se contente pas des solutions actuelles. 
            Découvrez notre vision ambitieuse pour l'avenir de la sécurité documentaire en Afrique
          </p>
        </div>

        {/* Timeline des projets */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">
            Notre Feuille de Route
          </h2>
          
          <div className="space-y-12">
            
            {/* Court terme */}
            <div className="relative">
              <div className="flex items-center mb-8">
                <div className="bg-blue-600 rounded-full p-4 mr-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-blue-900">Court Terme</h3>
                  <p className="text-blue-600 text-lg">1-2 ans • 2025-2026</p>
                </div>
              </div>
              
              <div className="ml-16 grid md:grid-cols-2 gap-8">
                
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 rounded-lg p-3 mr-4">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <h4 className="text-xl font-bold text-blue-900">Expansion Nationale</h4>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Étendre nos services à toutes les universités et ministères du Bénin pour 
                    créer un écosystème national de documents sécurisés.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-600">50+ nouvelles institutions cibles</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-600">Formation de 500+ agents</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 rounded-lg p-3 mr-4">
                      <Globe className="h-6 w-6 text-blue-600" />
                    </div>
                    <h4 className="text-xl font-bold text-blue-900">Catalogue Numérique</h4>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Développer une plateforme numérique complète accessible aux clients 
                    pour commander et gérer leurs documents sécurisés.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-600">Interface client moderne</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-600">Commande en ligne 24/7</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Moyen terme */}
            <div className="relative">
              <div className="flex items-center mb-8">
                <div className="bg-blue-600 rounded-full p-4 mr-6">
                  <Rocket className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-blue-900">Moyen Terme</h3>
                  <p className="text-blue-600 text-lg">3-5 ans • 2027-2029</p>
                </div>
              </div>
              
              <div className="ml-16 grid md:grid-cols-2 gap-8">
                
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 rounded-lg p-3 mr-4">
                      <Shield className="h-6 w-6 text-blue-600" />
                    </div>
                    <h4 className="text-xl font-bold text-blue-900">Plateforme Sous-Régionale</h4>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Créer une plateforme ouest-africaine de vérification instantanée des diplômes 
                    et documents, consultable par tous les employeurs et institutions.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-600">Base de données unifiée CEDEAO</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-600">API pour institutions tierces</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 rounded-lg p-3 mr-4">
                      <Map className="h-6 w-6 text-blue-600" />
                    </div>
                    <h4 className="text-xl font-bold text-blue-900">Expansion Régionale</h4>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Étendre nos services dans les pays voisins avec des bureaux locaux 
                    pour un service de proximité optimal.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-600">Togo, Niger, Burkina Faso</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-600">Côte d'Ivoire, Ghana</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Long terme */}
            <div className="relative">
              <div className="flex items-center mb-8">
                <div className="bg-blue-600 rounded-full p-4 mr-6">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-blue-900">Long Terme</h3>
                  <p className="text-blue-600 text-lg">5 ans et + • 2030+</p>
                </div>
              </div>
              
              <div className="ml-16 grid md:grid-cols-2 gap-8">
                
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-white bg-opacity-20 rounded-lg p-3 mr-4">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold">Leadership Africain</h4>
                  </div>
                  <p className="text-blue-100 mb-4">
                    Positionner SECURIDOC comme l'acteur majeur africain de la lutte 
                    contre la fraude documentaire avec une reconnaissance continentale.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-sm text-blue-100">Présence dans 15+ pays africains</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-sm text-blue-100">Centre de R&D continental</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-white bg-opacity-20 rounded-lg p-3 mr-4">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold">Partenariats Stratégiques</h4>
                  </div>
                  <p className="text-blue-100 mb-4">
                    Développer des partenariats avec les États pour sécuriser l'ensemble 
                    des documents officiels : passeports, cartes d'identité, permis...
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-sm text-blue-100">Contrats gouvernementaux</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-sm text-blue-100">Solutions souveraines</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projets innovants */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">
            Projets Innovants en Développement
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-blue-600 rounded-full p-4 w-16 h-16 mb-6 flex items-center justify-center mx-auto">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">IA & Blockchain</h3>
              <p className="text-gray-700 text-center mb-6">
                Intégration de l'intelligence artificielle et de la blockchain 
                pour une sécurité documentaire de nouvelle génération.
              </p>
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm text-blue-600 font-medium text-center">
                  En phase de R&D avancée
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-blue-600 rounded-full p-4 w-16 h-16 mb-6 flex items-center justify-center mx-auto">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">Application Mobile</h3>
              <p className="text-gray-700 text-center mb-6">
                Application mobile permettant aux citoyens de vérifier 
                instantanément l'authenticité de tout document officiel.
              </p>
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm text-blue-600 font-medium text-center">
                  Lancement prévu 2025
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-blue-600 rounded-full p-4 w-16 h-16 mb-6 flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">Certifications ISO</h3>
              <p className="text-gray-700 text-center mb-6">
                Obtention des certifications ISO 27001 (sécurité informatique) 
                et ISO 9001 (qualité) pour garantir l'excellence.
              </p>
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm text-blue-600 font-medium text-center">
                  Processus en cours
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Objectifs chiffrés */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-12 text-center">Objectifs à 5 ans</h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              
              <div className="text-center">
                <div className="bg-white bg-opacity-20 rounded-xl p-6 mb-4">
                  <TrendingUp className="h-12 w-12 text-white mx-auto mb-2" />
                  <div className="text-4xl font-bold">500+</div>
                </div>
                <p className="text-blue-100 text-lg">Institutions partenaires</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white bg-opacity-20 rounded-xl p-6 mb-4">
                  <Map className="h-12 w-12 text-white mx-auto mb-2" />
                  <div className="text-4xl font-bold">15</div>
                </div>
                <p className="text-blue-100 text-lg">Pays présents</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white bg-opacity-20 rounded-xl p-6 mb-4">
                  <Users className="h-12 w-12 text-white mx-auto mb-2" />
                  <div className="text-4xl font-bold">10M+</div>
                </div>
                <p className="text-blue-100 text-lg">Documents sécurisés</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white bg-opacity-20 rounded-xl p-6 mb-4">
                  <Calendar className="h-12 w-12 text-white mx-auto mb-2" />
                  <div className="text-4xl font-bold">24/7</div>
                </div>
                <p className="text-blue-100 text-lg">Vérification instantanée</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="text-center">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-12 shadow-lg">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Construisons ensemble l'avenir de la sécurité documentaire
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Rejoignez-nous dans cette vision ambitieuse pour créer un écosystème 
              documentaire sûr et fiable à travers toute l'Afrique
            </p>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors duration-200 inline-flex items-center space-x-2">
              <span>Découvrir nos opportunités</span>
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectsPage;