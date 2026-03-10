import { Formation } from './types';

export const formations: Formation[] = [
  // Automation - Tsiory formations
  {
    id: 'introduction-automatisation',
    title: 'Introduction à l\'Automatisation',
    description: 'Comprendre les concepts de l\'automatisation',
    service: 'automation',
    priority: 'high',
    level: 'Débutant',
    duration: '2-3h',
    modules: [
      { id: 'ia-1', title: 'Qu\'est-ce que l\'automatisation?', description: 'Comprendre les bases de l\'automatisation', duration: '30 min' },
      { id: 'ia-2', title: 'Cas d\'usage', description: 'Découvrir les cas d\'usage courants', duration: '35 min' },
      { id: 'ia-3', title: 'Outils disponibles', description: 'Présentation des outils no-code et code', duration: '35 min' },
      { id: 'ia-4', title: 'Bonnes pratiques', description: 'Meilleures pratiques en automatisation', duration: '30 min' },
    ],
  },
  {
    id: 'zapier-fondamentaux',
    title: 'Zapier - Les fondamentaux',
    description: 'Maîtriser l\'outil no-code le plus populaire',
    service: 'automation',
    priority: 'high',
    level: 'Débutant',
    duration: '3-4h',
    modules: [
      { id: 'zf-1', title: 'Interface Zapier', description: 'Naviguer dans l\'interface Zapier', duration: '30 min' },
      { id: 'zf-2', title: 'Triggers & Actions', description: 'Comprendre les déclencheurs et actions', duration: '45 min' },
      { id: 'zf-3', title: 'Zaps simples', description: 'Créer ses premiers Zaps', duration: '1h' },
      { id: 'zf-4', title: 'Debugging', description: 'Dépanner ses automatisations', duration: '45 min' },
    ],
  },
  {
    id: 'make-integromat-initiation',
    title: 'Make (Integromat) - Initiation',
    description: 'Apprendre un outil d\'automatisation alternatif',
    service: 'automation',
    priority: 'high',
    level: 'Débutant',
    duration: '3-4h',
    modules: [
      { id: 'mii-1', title: 'Interface Make', description: 'Naviguer dans l\'interface Make', duration: '30 min' },
      { id: 'mii-2', title: 'Scénarios', description: 'Créer et configurer des scénarios', duration: '45 min' },
      { id: 'mii-3', title: 'Modules & connexions', description: 'Connecter les modules entre eux', duration: '1h' },
      { id: 'mii-4', title: 'Déploiement', description: 'Mettre en production ses scénarios', duration: '45 min' },
    ],
  },
  {
    id: 'crm-automation-hubspot',
    title: 'CRM Automation (HubSpot)',
    description: 'Automatiser les processus CRM',
    service: 'automation',
    priority: 'medium',
    level: 'Intermédiaire',
    duration: '4-5h',
    modules: [
      { id: 'cah-1', title: 'HubSpot CRM', description: 'Configurer HubSpot pour l\'automatisation', duration: '45 min' },
      { id: 'cah-2', title: 'Workflows', description: 'Créer des workflows automatisés', duration: '1h' },
      { id: 'cah-3', title: 'Lead scoring', description: 'Mettre en place le scoring des leads', duration: '1h' },
      { id: 'cah-4', title: 'Intégrations', description: 'Connecter HubSpot à d\'autres outils', duration: '1h' },
    ],
  },
  {
    id: 'api-integration-basics',
    title: 'API Integration Basics',
    description: 'Connecter différentes applications entre elles',
    service: 'automation',
    priority: 'medium',
    level: 'Intermédiaire',
    duration: '4-5h',
    modules: [
      { id: 'aib-1', title: 'REST APIs', description: 'Comprendre les API REST', duration: '45 min' },
      { id: 'aib-2', title: 'Authentication', description: 'Gérer l\'authentification API', duration: '1h' },
      { id: 'aib-3', title: 'Webhooks', description: 'Utiliser les webhooks pour les intégrations', duration: '1h' },
      { id: 'aib-4', title: 'Outils de test', description: 'Tester ses intégrations API', duration: '1h' },
    ],
  },
  {
    id: 'email-automation',
    title: 'Email Automation',
    description: 'Automatiser les séquences d\'emails',
    service: 'automation',
    priority: 'medium',
    level: 'Intermédiaire',
    duration: '3-4h',
    modules: [
      { id: 'ea-1', title: 'Séquences d\'email', description: 'Créer des séquences automatisées', duration: '40 min' },
      { id: 'ea-2', title: 'Conditions & triggers', description: 'Définir les conditions de déclenchement', duration: '45 min' },
      { id: 'ea-3', title: 'Templates', description: 'Créer des modèles d\'emails efficaces', duration: '45 min' },
      { id: 'ea-4', title: 'Analytics', description: 'Mesurer les performances des emails', duration: '40 min' },
    ],
  },
  {
    id: 'make-integromat-avance',
    title: 'Make (Integromat) - Avancé',
    description: 'Créer des workflows complexes',
    service: 'automation',
    priority: 'medium',
    level: 'Avancé',
    duration: '4-5h',
    modules: [
      { id: 'mia-1', title: 'Routers & iterators', description: 'Maîtriser le routage et les itérations', duration: '1h' },
      { id: 'mia-2', title: 'Data structures', description: 'Gérer les structures de données complexes', duration: '1h' },
      { id: 'mia-3', title: 'Error handling', description: 'Gérer les erreurs efficacement', duration: '1h' },
      { id: 'mia-4', title: 'Optimisation', description: 'Optimiser les performances des scénarios', duration: '1h' },
    ],
  },
  {
    id: 'webhooks-custom-integrations',
    title: 'Webhooks & Custom Integrations',
    description: 'Développer des intégrations sur mesure',
    service: 'automation',
    priority: 'low',
    level: 'Avancé',
    duration: '5-6h',
    modules: [
      { id: 'wci-1', title: 'Créer un webhook', description: 'Développer ses propres webhooks', duration: '1h' },
      { id: 'wci-2', title: 'Serverless functions', description: 'Utiliser les fonctions serverless', duration: '1h30' },
      { id: 'wci-3', title: 'Custom apps', description: 'Créer des applications personnalisées', duration: '1h30' },
      { id: 'wci-4', title: 'Déploiement', description: 'Mettre en production ses intégrations', duration: '1h' },
    ],
  },
];

export const serviceColors: Record<string, string> = {
  'automation': '#7C3AED',
};

export const priorityColors: Record<string, string> = {
  high: '#FF2D78',
  medium: '#F59E0B',
  low: '#10B981',
};

export const serviceNames: Record<string, string> = {
  'automation': 'Automation',
};

export function getFormationById(id: string): Formation | undefined {
  return formations.find(f => f.id === id);
}

export function getFormationsByService(service: string): Formation[] {
  return formations.filter(f => f.service === service);
}
