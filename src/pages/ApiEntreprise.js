import React from 'react';
import PropTypes from 'prop-types';
import Form from '../components/Form';
import Nav from '../components/Nav';
import TextSection from '../components/form-sections/TextSection';
import OrganisationSection from '../components/form-sections/OrganisationSection';
import DescriptionSection from '../components/form-sections/DescriptionSection';
import DonneesSection from '../components/form-sections/DonneesSection';
import CadreJuridiqueSection from '../components/form-sections/CadreJuridiqueSection';
import DonneesPersonnellesSection from '../components/form-sections/DonneesPersonnellesSection';
import MiseEnOeuvreSection from '../components/form-sections/MiseEnOeuvreSection';
import CguSection from '../components/form-sections/CguSection';
import { sample } from 'lodash';

const DemarcheDescription = () => (
  <div className="text-quote">
    <p>
      L'accès à l'API Entreprise n'est pour l'instant disponible que si vous
      êtes une administration. Pour accéder à l'API Entreprise, qui diffuse des
      données à caractère personnel, il doit vous être demandé de préciser le
      cadre juridique dans lequel vous souhaitez accéder à ces données.
    </p>
    <p>
      <b>
        Attention, pour toute demande relative aux marchés publics, merci de
        contacter le support (
        <a href="mailto:support@entreprise.api.gouv.fr">
          support@entreprise.api.gouv.fr
        </a>
        ) avant de soumettre votre demande.
      </b>
    </p>
    <p>
      Décrivez brièvement votre service ainsi que l‘utilisation prévue des
      données transmises. C'est la raison pour laquelle vous traitez ces données
      qui peuvent inclure des données à caractère personnel.
    </p>
  </div>
);

const contacts = {
  metier: {
    heading: 'Contact métier',
    description: () => (
      <p>
        Cette personne sera contactée en cas de problème fonctionnel sur votre
        service.
      </p>
    ),
    email: '',
    phone_number: '',
  },
  technique: {
    heading: 'Contact technique',
    description: () => (
      <p>
        Cette personne sera contactée en cas de problème technique sur votre
        service.
      </p>
    ),
    email: '',
    phone_number: '',
  },
};

const DonneesDescription = () => (
  <div className="text-quote">
    <p>
      Sélectionner ci-dessous les API qui sont strictement nécessaires pour
      cette démarche.
    </p>
    <p>
      Vous pouvez trouver une description détaillée de chaque API sur{' '}
      <a href="https://doc.entreprise.api.gouv.fr/">
        doc.entreprise.api.gouv.fr
      </a>
      .
    </p>
    <p>
      Pour mémoire, seuls les agents dûment habilités pour traiter cette
      démarche doivent pouvoir accéder aux données transmises.
    </p>
  </div>
);

// NB: this list is manually updated from https://dashboard.entreprise.api.gouv.fr/api/admin/roles
const availableScopes = [
  {
    value: 'entreprises',
    label: 'INSEE Entreprise',
  },
  {
    value: 'etablissements',
    label: 'INSEE Etablissement',
  },
  {
    value: 'associations',
    label: 'Association',
  },
  {
    value: 'documents_association',
    label: 'Document association',
  },
  {
    value: 'attestations_fiscales',
    label: 'Attestation Fiscale',
  },
  {
    value: 'attestations_sociales',
    label: 'Attestation Sociale',
  },
  {
    value: 'msa_cotisations',
    label: 'Cotisation MSA',
  },
  {
    value: 'attestations_agefiph',
    label: 'Attestation AGEFIPH',
  },
  {
    value: 'bilans_entreprise_bdf',
    label: 'Bilans Entreprises BDF',
  },
  {
    value: 'fntp_carte_pro',
    label: 'Carte Pro FNTP',
  },
  {
    value: 'certificat_cnetp',
    label: 'Certificat CNETP',
  },
  {
    value: 'certificat_opqibi',
    label: 'Certificat OPQIBI',
  },
  {
    value: 'probtp',
    label: 'Certificat PROBTP',
  },
  {
    value: 'qualibat',
    label: 'Certificat Qualibat',
  },
  {
    value: 'certificat_rge_ademe',
    label: 'Certificats RGE (ADEME)',
  },
  {
    value: 'extrait_court_inpi',
    label: 'Extrait INPI',
  },
  {
    value: 'extraits_rcs',
    label: 'Extrait RCS',
  },
  {
    value: 'actes_bilans_inpi',
    label: 'Actes et Bilans INPI',
  },
  {
    value: 'liasse_fiscale',
    label: 'Liasse fiscale',
  },
  {
    value: 'exercices',
    label: 'Exercice',
  },
];

const intitulePlaceholder = sample([
  '« Pré-remplissage du formulaire de création de compte des entreprise »',
  '« Simplification des demandes de subvention de la région »',
  "« Déclaration d'installation classée pour la protection de l'environnement »",
]);

const ApiEntreprise = ({
  match: {
    params: { enrollmentId },
  },
}) => (
  <div className="dashboard">
    <Nav
      navLinks={[
        { id: 'description', label: 'Description' },
        { id: 'donnees', label: 'Données' },
        { id: 'cadre-juridique', label: 'Cadre juridique' },
        { id: 'donnees-personnelles', label: 'Données personnelles' },
        { id: 'contacts-moe', label: 'Mise en œuvre' },
        { id: 'cgu', label: "Modalités d'utilisation" },
      ]}
      contactInformation={[
        {
          email: 'support@entreprise.api.gouv.fr',
          label: 'Contact mail',
          subject: 'Contact%20via%20signup.api.gouv.fr%20-%20API%20Entreprise',
        },
        {
          tel: '+33647457637',
        },
      ]}
    />
    <div className="main">
      <Form enrollmentId={enrollmentId} target_api="api_entreprise">
        <TextSection
          title="Demande d'accès à l'API Entreprise"
          Description={DemarcheDescription}
        />
        <OrganisationSection />
        <DescriptionSection intitulePlaceholder={intitulePlaceholder} />
        <DonneesSection
          availableScopes={availableScopes}
          DonneesDescription={DonneesDescription}
        />
        <CadreJuridiqueSection />
        <DonneesPersonnellesSection />
        <MiseEnOeuvreSection initialContacts={contacts} />
        <CguSection cguLink="https://entreprise.api.gouv.fr/cgu/" />
      </Form>
    </div>
  </div>
);

ApiEntreprise.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      enrollmentId: PropTypes.string,
    }),
  }),
};

ApiEntreprise.defaultProps = {
  match: {
    params: {
      enrollmentId: null,
    },
  },
};

export default ApiEntreprise;
