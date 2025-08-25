import React from 'react';
import { 
  GraduationCap, 
  Building, 
  Shield, 
  Award, 
  CheckCircle, 
  Users, 
  Globe, 
  Star,
  Quote,
  MapPin
} from 'lucide-react';

const ReferencesPage = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-blue-900 mb-6">Réalisations et Références</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Depuis sa création, SECURIDOC BÉNIN SARL a bâti une solide réputation auprès 
            d'institutions prestigieuses à travers l'Afrique de l'Ouest
          </p>
        </div>

        {/* Secteurs d'activité */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">
            Nos Secteurs d'Expertise
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            
            {/* Universités */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-blue-600 rounded-full p-4 w-16 h-16 mb-6 flex items-center justify-center mx-auto">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">Enseignement Supérieur</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">Universités publiques et privées</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">Grandes écoles de commerce</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">Instituts techniques spécialisés</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-blue-100">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Pays couverts :</span>
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4 text-blue-600" />
                    <span className="text-sm font-medium text-blue-600">Bénin, Togo, Côte d'Ivoire</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Institutions publiques */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-blue-600 rounded-full p-4 w-16 h-16 mb-6 flex items-center justify-center mx-auto">
                <Building className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">Institutions Publiques</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">Ministères et administrations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">Collectivités territoriales</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">Organismes gouvernementaux</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-blue-100">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Secteurs :</span>
                  <span className="text-sm font-medium text-blue-600">Education, Santé, Finance</span>
                </div>
              </div>
            </div>

            {/* Secteur privé */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-blue-600 rounded-full p-4 w-16 h-16 mb-6 flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">Secteur Privé</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">Banques et institutions financières</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">Chambres de commerce</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">Associations professionnelles</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-blue-100">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Documents :</span>
                  <span className="text-sm font-medium text-blue-600">Certifications, Attestations</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Exemples de réalisations */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">
            Exemples de Réalisations
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 rounded-lg p-3 mr-4">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900">Universités Béninoises</h3>
                  <p className="text-blue-600">Diplômes et certificats sécurisés</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-blue-100">
                  <h4 className="font-bold text-blue-900 mb-2">Projet réalisé :</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Fourniture de papiers sécurisés avec filigrane personnalisé et hologrammes 
                    pour plus de 15 000 diplômes de fin d'études.
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Award className="h-4 w-4 text-blue-600" />
                      <span className="text-xs text-blue-600 font-medium">0% de contrefaçon détectée</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 rounded-lg p-3 mr-4">
                  <Building className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900">Administration Publique</h3>
                  <p className="text-blue-600">Système QR de vérification</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-blue-100">
                  <h4 className="font-bold text-blue-900 mb-2">Innovation déployée :</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Mise en place d'un système de QR codes reliés à une base de données 
                    pour la vérification instantanée de documents officiels.
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4 text-blue-600" />
                      <span className="text-xs text-blue-600 font-medium">50 000+ vérifications/mois</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 rounded-lg p-3 mr-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900">Associations Professionnelles</h3>
                  <p className="text-blue-600">Attestations infalsifiables</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-blue-100">
                  <h4 className="font-bold text-blue-900 mb-2">Solution intégrée :</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Conception et production d'attestations avec multi-sécurisations : 
                    encres UV, micro-textes et numérotation séquentielle traçable.
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Globe className="h-4 w-4 text-blue-600" />
                      <span className="text-xs text-blue-600 font-medium">Reconnaissance internationale</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 rounded-lg p-3 mr-4">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900">Formation & Conseil</h3>
                  <p className="text-blue-600">Accompagnement complet</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-blue-100">
                  <h4 className="font-bold text-blue-900 mb-2">Service d'excellence :</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Formation de plus de 200 agents administratifs sur les techniques 
                    de vérification et de détection de documents falsifiés.
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Award className="h-4 w-4 text-blue-600" />
                      <span className="text-xs text-blue-600 font-medium">Taux de satisfaction : 98%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Témoignages */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">
            Témoignages de nos Partenaires
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
              <div className="flex items-center mb-6">
                <Quote className="h-12 w-12 text-blue-300 mr-4" />
                <div className="text-3xl text-blue-300">"</div>
              </div>
              <p className="text-gray-700 text-lg mb-6 italic">
                SECURIDOC BÉNIN a révolutionné notre approche de la sécurité documentaire. 
                Leurs solutions nous ont permis de restaurer la confiance de nos partenaires 
                internationaux dans l'authenticité de nos diplômes.
              </p>
              <div className="flex items-center">
                <div className="bg-blue-600 rounded-full p-3 mr-4">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-blue-900">Recteur d'Université</p>
                  <p className="text-sm text-gray-600">Université de Cotonou</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
              <div className="flex items-center mb-6">
                <Quote className="h-12 w-12 text-blue-300 mr-4" />
                <div className="text-3xl text-blue-300">"</div>
              </div>
              <p className="text-gray-700 text-lg mb-6 italic">
                Le professionnalisme et l'expertise technique de SECURIDOC nous ont convaincus. 
                Leur système de vérification QR a considérablement réduit les tentatives de fraude 
                dans nos services.
              </p>
              <div className="flex items-center">
                <div className="bg-blue-600 rounded-full p-3 mr-4">
                  <Building className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-blue-900">Directeur Général</p>
                  <p className="text-sm text-gray-600">Ministère de l'Éducation</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistiques */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-12 text-center">Nos Réalisations en Chiffres</h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">50+</div>
                <p className="text-blue-100 text-lg">Institutions partenaires</p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">500K+</div>
                <p className="text-blue-100 text-lg">Documents sécurisés</p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">4</div>
                <p className="text-blue-100 text-lg">Pays couverts</p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">0%</div>
                <p className="text-blue-100 text-lg">Taux de fraude réussie</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="text-center">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-12 shadow-lg">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Rejoignez nos partenaires de confiance
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Découvrez pourquoi de plus en plus d'institutions choisissent SECURIDOC BÉNIN 
              pour sécuriser leurs documents les plus précieux
            </p>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors duration-200">
              Devenir partenaire
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ReferencesPage;