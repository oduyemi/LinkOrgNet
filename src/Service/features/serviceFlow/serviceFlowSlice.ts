import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ServiceFlowState, FlowType, ResidentialStep, EnterpriseStep, Plan, FormValues, EnterpriseService } from './types';
import { initializePlans } from './serviceFlowThunks'; 

const initialState: ServiceFlowState = {
  currentFlow: 'initial',
  residentialStep: 0, 
  enterpriseStep: 0,  
  plans: [],
  enterpriseServices: [],
  formValues: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    address: '',
    grandPlan: '',
    message: '',
  },
  selectedItem: null,
  isLoading: false,
  error: null,
  isModalOpen: false,
};

const serviceFlowSlice = createSlice({
  name: 'serviceFlow',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
    },
    setFlowType: (state, action: PayloadAction<FlowType>) => {
      state.currentFlow = action.payload;
    },
    setResidentialStep: (state, action: PayloadAction<ResidentialStep>) => {
      state.residentialStep = action.payload;
    },
    setEnterpriseStep: (state, action: PayloadAction<EnterpriseStep>) => {
      state.enterpriseStep = action.payload;
    },
    setPlans(state, action: PayloadAction<Plan[]>) {  
      state.plans = action.payload;  
    },

    setEnterpriseServices: (state, action: PayloadAction<EnterpriseService[]>) => {
      state.enterpriseServices = action.payload;
    },


    selectItem(state, action: PayloadAction<Plan | EnterpriseService | null>) {  
      state.selectedItem = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
    updateFormValues(state, action: PayloadAction<Partial<FormValues>>) {
      state.formValues = { ...state.formValues, ...action.payload };
    },
    resetServiceFlow(state) {
      return {
        ...initialState,
        isModalOpen: state.isModalOpen,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(initializePlans.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(initializePlans.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(initializePlans.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to initialize plans';
      });
  }
});

export const { 
  openModal, closeModal, setFlowType, setPlans,setEnterpriseServices, selectItem, 
  setResidentialStep, setEnterpriseStep, setLoading, setError, 
  updateFormValues, resetServiceFlow
} = serviceFlowSlice.actions;


export default serviceFlowSlice.reducer;
