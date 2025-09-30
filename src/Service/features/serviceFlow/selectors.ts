import { RootState } from '../../store';


export const selectCurrentFlow = (state: RootState) => state.serviceFlow.currentFlow;
export const selectResidentialStep = (state: RootState) => state.serviceFlow.residentialStep;
export const selectEnterpriseStep = (state: RootState) => state.serviceFlow.enterpriseStep;
export const selectFormValues = (state: RootState) => state.serviceFlow.formValues;
export const selectSelectedItem = (state: RootState) => state.serviceFlow.selectedItem;
export const selectIsLoading = (state: RootState) => state.serviceFlow.isLoading;
export const selectError = (state: RootState) => state.serviceFlow.error;
export const selectIsModalOpen = (state: RootState) => state.serviceFlow.isModalOpen;


export const selectPlans = (state: RootState) => state.serviceFlow.plans;
export const selectEnterpriseServices = (state: RootState) => state.serviceFlow.enterpriseServices;


export const selectIsSubmitting = (state: RootState) => state.serviceFlow.isLoading; 
export const selectSubmitError = (state: RootState) => state.serviceFlow.error;

export const selectIsFormValid = (state: RootState) => {
  const { currentFlow, residentialStep, enterpriseStep, formValues, selectedItem } = state.serviceFlow;
  
  if (currentFlow === 'residential') {
    if (residentialStep === 0) {
      return !!selectedItem;
    } else if (residentialStep === 1 || residentialStep === 2) {
      // Validate residential form
      const errors: Partial<typeof formValues> = {};
      if (!formValues.firstName) errors.firstName = 'First name is required';
      if (!formValues.lastName) errors.lastName = 'Last name is required';
      if (!formValues.email) {
        errors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
        errors.email = 'Email is invalid';
      }
      if (!formValues.phone) {
        errors.phone = 'Phone number is required';
      } else if (!/^[0-9]{11}$/.test(formValues.phone)) {
        errors.phone = 'Phone number must be 11 digits';
      }
      if (!formValues.address) errors.address = 'Address is required';
      if (!formValues.grandPlan) errors.grandPlan = 'Grand plan is required';
      
      return Object.keys(errors).length === 0 && !!selectedItem;
    }
  } else if (currentFlow === 'enterprise') {
    if (enterpriseStep === 0) {
      return !!selectedItem;
    } else if (enterpriseStep === 1 || enterpriseStep === 2) {
      // Validate enterprise form
      const errors: Partial<typeof formValues> = {};
      if (!formValues.firstName) errors.firstName = 'First name is required';
      if (!formValues.lastName) errors.lastName = 'Last name is required';
      if (!formValues.email) {
        errors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
        errors.email = 'Email is invalid';
      }
      if (!formValues.phone) {
        errors.phone = 'Phone number is required';
      } else if (!/^[0-9]{11}$/.test(formValues.phone)) {
        errors.phone = 'Phone number must be 11 digits';
      }
      if (!formValues.company) errors.company = 'Company name is required';
      if (!formValues.jobTitle) errors.jobTitle = 'Job title is required';
      if (!formValues.address) errors.address = 'Address is required';
      
      return Object.keys(errors).length === 0 && !!selectedItem;
    }
  }
  
  return false;
};