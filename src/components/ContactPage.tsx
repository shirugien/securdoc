import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Facebook, 
  Linkedin, 
  Twitter, 
  Clock, 
  QrCode,
  Send,
  User,
  MessageSquare,
  Building
} from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-blue-900 mb-6">Informations Pratiques</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Contactez SECURIDOC BÉNIN SARL pour sécuriser vos documents les plus précieux. 
            Notre équipe d'experts est à votre disposition pour étudier vos besoins.
          </p>
        </div>

        {/* Informations principales */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Coordonnées */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
              <h2 className="text-3xl font-bold text-blue-900 mb-8">Nos Coordonnées</h2>
              
              <div className="space-y-6">
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 rounded-full p-3">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">Siège Social</h3>
                    <p className="text-gray-700">Cotonou, Bénin</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Quartier des Affaires - Zone moderne et sécurisée
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 rounded-full p-3">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">Téléphone</h3>
                    <p className="text-gray-700">(+229) ...</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Disponible du lundi au vendredi, 8h-18h
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 rounded-full p-3">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">Email</h3>
                    <p className="text-gray-700">contact@securidoc.bj</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Réponse garantie sous 24h ouvrables
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 rounded-full p-3">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">Site Web</h3>
                    <p className="text-gray-700">www.securidoc.bj</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Catalogue et devis en ligne disponibles
                    </p>
                  </div>
                </div>
              </div>

              {/* Horaires */}
              <div className="mt-8 pt-8 border-t border-blue-100">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold text-blue-900">Horaires d'Ouverture</h3>
                </div>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Lundi - Vendredi</span>
                    <span className="font-medium">8h00 - 18h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samedi</span>
                    <span className="font-medium">9h00 - 14h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dimanche</span>
                    <span className="font-medium text-red-500">Fermé</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulaire de contact */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg border border-blue-100">
              <h2 className="text-3xl font-bold text-blue-900 mb-8">Demande d'Information</h2>
              
              <form className="space-y-6">
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-blue-900 mb-2">
                      Nom complet *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        className="w-full pl-12 pr-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Votre nom complet"
                      />
                      <User className="absolute left-4 top-3.5 h-5 w-5 text-blue-400" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-blue-900 mb-2">
                      Organisation
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        className="w-full pl-12 pr-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Nom de votre institution"
                      />
                      <Building className="absolute left-4 top-3.5 h-5 w-5 text-blue-400" />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-blue-900 mb-2">
                      Email *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        className="w-full pl-12 pr-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="votre@email.com"
                      />
                      <Mail className="absolute left-4 top-3.5 h-5 w-5 text-blue-400" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-blue-900 mb-2">
                      Téléphone
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        className="w-full pl-12 pr-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+229 ..."
                      />
                      <Phone className="absolute left-4 top-3.5 h-5 w-5 text-blue-400" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-900 mb-2">
                    Type de demande
                  </label>
                  <select className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">Sélectionnez votre demande</option>
                    <option value="devis">Demande de devis</option>
                    <option value="info">Information produits</option>
                    <option value="demo">Démonstration</option>
                    <option value="formation">Formation personnel</option>
                    <option value="partenariat">Partenariat</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-900 mb-2">
                    Votre message *
                  </label>
                  <div className="relative">
                    <textarea
                      rows={6}
                      className="w-full pl-12 pr-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Décrivez votre projet et vos besoins en sécurisation documentaire..."
                    ></textarea>
                    <MessageSquare className="absolute left-4 top-3.5 h-5 w-5 text-blue-400" />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Envoyer ma demande</span>
                </button>

                <p className="text-sm text-gray-500 text-center">
                  * Champs obligatoires. Vos données sont protégées et ne seront utilisées 
                  que pour répondre à votre demande.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* QR Code et réseaux sociaux */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              
              {/* QR Code */}
              <div className="text-center">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">Accès Rapide</h2>
                <div className="bg-blue-50 rounded-2xl p-8 inline-block">
                  <QrCode className="h-32 w-32 text-blue-600 mx-auto mb-4" />
                  <p className="text-blue-600 font-medium">
                    Scannez pour accéder au site web
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    ou à notre catalogue numérique
                  </p>
                </div>
              </div>

              {/* Réseaux sociaux */}
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-6">Suivez-nous</h2>
                <p className="text-gray-600 mb-8">
                  Restez informé de nos actualités, nouveaux services et conseils 
                  en sécurité documentaire sur nos réseaux sociaux.
                </p>
                
                <div className="space-y-4">
                  
                  <a href="#" className="flex items-center space-x-4 bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors duration-200">
                    <div className="bg-blue-600 rounded-full p-3">
                      <Facebook className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-blue-900">Facebook</p>
                      <p className="text-sm text-gray-600">Actualités et conseils</p>
                    </div>
                  </a>

                  <a href="#" className="flex items-center space-x-4 bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors duration-200">
                    <div className="bg-blue-600 rounded-full p-3">
                      <Linkedin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-blue-900">LinkedIn</p>
                      <p className="text-sm text-gray-600">Réseau professionnel</p>
                    </div>
                  </a>

                  <a href="#" className="flex items-center space-x-4 bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors duration-200">
                    <div className="bg-blue-600 rounded-full p-3">
                      <Twitter className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-blue-900">Twitter</p>
                      <p className="text-sm text-gray-600">Actualités en temps réel</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to action final */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">
              Prêt à sécuriser vos documents ?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Contactez-nous dès aujourd'hui pour une consultation gratuite et découvrez 
              comment nos solutions peuvent protéger vos documents les plus précieux
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors duration-200">
                Demander un devis gratuit
              </button>
              <button className="bg-blue-800 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-900 transition-colors duration-200 border-2 border-blue-400">
                Planifier une démonstration
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;