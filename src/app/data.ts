import { Steps } from "./onboarding/models/Step";

export enum STEP_TYPES {
  COMPANY_TYPE = 'COMPANY_TYPE',
  STATE = 'STATE',
  BUSINESS_DETAILS = 'BUSINESS_DETAILS',
  BUSINESS_DETAILS_ABOUT = 'BUSINESS_DETAILS_ABOUT',
  BUSINESS_DETAILS_ADDITIONAL = 'BUSINESS_DETAILS_ADDITIONAL',
  BUSINESS_DETAILS_TEST = 'BUSINESS_DETAILS_TEST',
  TEAM = 'TEAM',
  PERSONAL = 'PERSONAL',
}

// STEPS DATA
export const steps: Steps = {
  COMPANY_TYPE: {
    stepIndex: 0,
    title: 'Tipo de Conta',
    type: STEP_TYPES.COMPANY_TYPE,
  },
  STATE: {
    stepIndex: 1,
    title: 'Dados de Acesso',
    type: STEP_TYPES.STATE,
  },
  BUSINESS_DETAILS: {
    stepIndex: 2,
    title: 'Informações Pessoais',
    hasSubStep: true,
    data: {
      title: 'Dados do Usuário',
    },
    type: STEP_TYPES.BUSINESS_DETAILS,
    subStep: [
      {
        stepIndex: 3,
        title: 'Endereço',
        parentIndex: 2,
        type: STEP_TYPES.BUSINESS_DETAILS_ABOUT,
      }
    ],
  },
  TEAM: {
    stepIndex: 4,
    title: 'Verificação de documentos',
    type: STEP_TYPES.TEAM,
    hasSubStep: true,
    data: {
      title: 'Envie esse documento',
    },
    subStep: [
      {
        stepIndex: 5,
        title: 'Processando',
        parentIndex: 4,
        type: STEP_TYPES.TEAM,
      },
      {
        stepIndex: 6,
        title: 'Documento Verificado',
        parentIndex: 4,
        type: STEP_TYPES.BUSINESS_DETAILS_ADDITIONAL,
      },
    ],
  },
  PERSONAL: {
    stepIndex: 7,
    title: 'Concluído',
    type: STEP_TYPES.PERSONAL,
  },
};