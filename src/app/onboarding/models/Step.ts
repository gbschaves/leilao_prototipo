export enum Status {
  FINISHED = 'finished',
  IN_PROGRESS = 'inprogress',
  INACTIVE = 'inactive'
}

export interface Steps {
  [key: string]: Step;
}

export interface Step {
  type: string;
  stepIndex: number;
  ready?: boolean;
  title: string;
  collapsed?: boolean;
  hasSubStep?: boolean;
  data?: {
    status?: string;
    title?: string;
  }
  status?: string;
  subStep?: SubStep[]
}

export interface SubStep {
  stepIndex: number;
  parentIndex?: number;
  status?: string;
  title: string;
  ready?: boolean;
  type: string;
}


export interface OnboardingState {
  stepIndex: any;
  availableSteps: Steps;
  selectedStep: any;
  selectedSubStep: any;
  stepsLength: number;
}