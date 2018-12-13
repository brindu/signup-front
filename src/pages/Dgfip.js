import React from 'react';
import PropTypes from 'prop-types';
import Form from '../components/Form';
import Nav from '../components/Nav';
import DgfipFormConfiguration from '../components/form/config/dgfip';

const IntroDescription = () => (
  <div className="intro">
    <p>
      Dans le cadre du programme « Dites-le nous une fois », visant à simplifier
      les démarches administratives des usagers, l'API « impôt particulier »
      permet l’échange d’informations fiscales entre la DGFiP et une
      administration ou collectivité dans le cadre d'un téléservice. L'usager
      FranceConnecté n'a plus besoin de transmettre son avis d'imposition.
    </p>
    <p>
      Ce portail permet en qualité de fournisseur de service de demander le
      raccordement de votre téléservice à l'API « impôt particulier ».
    </p>
    <p>
      Pour cela, il vous est demandé de compléter le plus précisément possible
      les informations, en particulier pour ce qui concerne :
    </p>
    <ul>
      <li>le fondement juridique ;</li>
      <li>les données nécessaires à la démarche administrative ;</li>
      <li>la protection des données personnelles ;</li>
      <li>la volumétrie de sollicitation de l'API.</li>
    </ul>
    <p>
      Pour faciliter votre raccordement à l'API « impôt particulier », une{' '}
      <a
        href="https://github.com/france-connect/service-provider-example/"
        target="_blank"
        rel="noopener noreferrer"
      >
        API de test
      </a>{' '}
      est à votre disposition.
    </p>
  </div>
);

const DemarcheDescription = () => (
  <div className="information-text">
    <p>
      C'est la raison pour laquelle vous collectez des données personnelles,
      l'objectif qui est poursuivi par le téléservice que vous mettez en place.
    </p>
    <p>
      Par exemple, « télé-procédure permettant aux usagers de calculer le tarif
      de la cantine. »
    </p>
  </div>
);

const CguDescription = () => (
  <div className="information-text">
    <p>
      Votre raccordement à l‘API « impôt particulier » nécessite l‘acceptation
      de la convention d‘adhésion fixant vos engagements et ceux de la DGFIP et
      la DINSIC. Les liens ci-dessous vous permettront de visualiser la
      convention type ainsi que ses annexes.
    </p>
    <p>
      La convention générée à l‘issue de votre demande de raccordement
      contiendra l‘ensemble des éléments propres à votre situation.
    </p>
  </div>
);

const CadreJuridiqueDescription = () => (
  <div className="information-text">
    <p>
      Pour pouvoir bénéficier du raccordement à l‘API « impôt particulier », le
      cadre légal et réglementaire des fournisseurs de service doit permettre à
      la DGFIP de transmettre des données fiscales à votre entité
      administrative.
    </p>
    <p>
      Il vous est donc demandé de préciser les références du fondement légal de
      votre droit à demander ces informations (délibération du conseil
      municipal, décret …).
    </p>
  </div>
);

const DonneesDescription = () => (
  <div className="information-text">
    <p>
      La loi informatique et libertés définit les principes à respecter lors de
      la collecte, du traitement et de la conservation de données personnelles.
    </p>
    <p>L’article 6 précise :</p>
    <ul>
      <li>
        3° [les données] sont adéquates, pertinentes et non excessives au regard
        des finalités pour lesquelles elles sont collectées et de leurs
        traitements ultérieurs ;
      </li>
      <li>
        4° Elles sont exactes, complètes et, si nécessaire, mises à jour ; les
        mesures appropriées doivent être prises pour que les données inexactes
        ou incomplètes au regard des finalités pour lesquelles elles sont
        collectées ou traitées soient effacées ou rectifiées ;
      </li>
    </ul>
    <p>
      Nous vous remercions de sélectionner uniquement les données strictement
      nécessaires à votre téléservice. Vous pouvez consulter le{' '}
      <a
        href="/docs/API_impots_particulier_template_corps_juridique_avec_annexes.pdf"
        target="_blank"
      >
        Contrat de Service Technique (CST)
      </a>{' '}
      pour voir le détail des données disponibles.
    </p>
    <p>
      Le non-respect du principe de proportionnalité vous expose vis à vis de la
      CNIL.
    </p>
    <label>
      <input type="checkbox" />
      J'atteste respecter les principes fondamentaux de la protection des
      données et avoir réalisé l'étude d'impact associée avant la mise en
      production de mon téléservice, conformément au règlement général sur la
      protection des données (RGPD) en vigueur depuis le 25 mai 2018.
    </label>
    <p>
      L'API « impôt particulier » restitue à des années de revenus différentes
      selon que la demande soit formulée avant ou après la taxation des revenus.
    </p>
    <p>Exemple :</p>
    <table>
      <thead>
        <tr>
          <th>Date de la demande</th>
          <th>dernière année de revenu</th>
          <th>avant-dernière année de revenu</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Février 2018</td>
          <td>Revenus 2016</td>
          <td>Revenus 2015</td>
        </tr>
        <tr>
          <td colspan="3" style={{ textAlign: 'center' }}>
            Taxation des revenus à compter du mois d'août
          </td>
        </tr>
        <tr>
          <td>Novembre 2018</td>
          <td>Revenus 2017</td>
          <td>Revenus 2016</td>
        </tr>
      </tbody>
    </table>
  </div>
);

const Dgfip = ({
  match: {
    params: { enrollmentId },
  },
}) => (
  <div className="documentation">
    <Nav isDgfip={true} />
    <div className="main-pane">
      <Form
        enrollmentId={enrollmentId}
        form={DgfipFormConfiguration}
        isDgfip={true}
        IntroDescription={IntroDescription}
        DemarcheDescription={DemarcheDescription}
        CguDescription={CguDescription}
        CadreJuridiqueDescription={CadreJuridiqueDescription}
        DonneesDescription={DonneesDescription}
      />
    </div>
  </div>
);

Dgfip.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      enrollmentId: PropTypes.string,
    }),
  }),
};

Dgfip.defaultProps = {
  match: {
    params: {
      enrollmentId: null,
    },
  },
};

export default Dgfip;