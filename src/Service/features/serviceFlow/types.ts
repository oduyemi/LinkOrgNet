export type Plan = {
  id: number;
  name: string;
  speed: string;
  price?: string;
  comingSoon?: boolean;
  totalAmount?: string;
};

export type EnterpriseService = {
  id: number;
  name: string;
  price?: string;
  speed?: string;
  totalAmount?: string;
};

export type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  jobTitle: string;
  address: string;
  grandPlan: string;
  message: string;
};

export type FlowType = 'initial' | 'residential' | 'enterprise';
export type ResidentialStep = 0 | 1 | 2 | 3;
export type EnterpriseStep = 0 | 1 | 2 | 3;

export interface ApiResponse {
  success: boolean;
  message?: string;
  data?: any;
}

export interface ServiceFlowState {
  currentFlow: FlowType;
  residentialStep: ResidentialStep;
  enterpriseStep: EnterpriseStep;
  plans: Plan[]; 
  formValues: FormValues;
  selectedItem: Plan | EnterpriseService | null;
  isLoading: boolean;
  error: string | null;
  isModalOpen: boolean;
  enterpriseServices: EnterpriseService[];
}

export function isPlan(item: Plan | EnterpriseService): item is Plan {
  return 'speed' in item && typeof item.speed === 'string';
}