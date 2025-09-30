import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../../store';
import { setPlans, setEnterpriseServices } from './serviceFlowSlice';
import { 
  setLoading,
  setError,
  setResidentialStep,
  setEnterpriseStep,
} from './serviceFlowSlice';

const RETAIL_API_URL = 'https://linkorgnet.vercel.app/api/v1/retail/';
const ENTERPRISE_API_URL = 'https://linkorgnet.vercel.app/api/v1/enterprise/';

// Helper function to calculate total amount
const calculateTotalAmount = (priceString: string): string => {
  const taxRate = 0.075;
  const installationFee = 50000; 
  const price = parseInt(priceString.replace(/,/g, '')) || 0;
  const total = (price + installationFee) * (1 + taxRate);
  return total.toLocaleString('en-NG'); 
};

// Initialize plans when the flow starts
export const initializePlans = createAsyncThunk(
  'serviceFlow/initializePlans',
  async (_, { dispatch }) => {
    const residentialPlans = [
      { id: 1, name: 'Express', speed: '35mbps', price: "18,500", totalAmount: calculateTotalAmount("18,500")},
      { id: 2, name: 'Super', speed: '50mbps', price: "24,000", totalAmount: calculateTotalAmount("24,000") },
      { id: 3, name: 'Gold', speed: '75mbps', price: "30,000", totalAmount: calculateTotalAmount("30,000") },
      { id: 4, name: 'Linkorg VIP1', speed: '100mbps', price: "50,000", totalAmount: calculateTotalAmount("50,000") },
      { id: 5, name: 'Linkorg VIP2', speed: '150mbps', price: "57,000", totalAmount: calculateTotalAmount("57,000") },
      { id: 6, name: 'Linkorg VIP3', speed: 'Coming soon', comingSoon: true },
    ];

    const enterpriseServices = [
      { id: 1, name: 'fiber to office' },
      { id: 2, name: 'voip' },
      { id: 3, name: 'vsat' },
      { id: 4, name: 'storage' },
      { id: 5, name: 'data center' },
      { id: 6, name: 'it' }
    ];

    dispatch(setPlans(residentialPlans));
    dispatch(setEnterpriseServices(enterpriseServices));
  }
);

export const submitRetailRequest = createAsyncThunk(
  'serviceFlow/submitRetail',
  async (_, { getState, dispatch }) => {
    const state = getState() as RootState;
    const { formValues, selectedItem } = state.serviceFlow;

    if (!selectedItem) {
      dispatch(setError('Please select a plan'));
      return;
    }

    // Basic form validation
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'address', 'grandPlan'];
    const missingFields = requiredFields.filter(field => !formValues[field as keyof typeof formValues]);
    
    if (missingFields.length > 0) {
      dispatch(setError(`Please fill all required fields: ${missingFields.join(', ')}`));
      return;
    }

    dispatch(setLoading(true));
    dispatch(setError(null));

    try {
      const installationFee = 50000;
      const price = selectedItem.price 
        ? parseInt(selectedItem.price.replace(/,/g, '')) 
        : 0;

      const payload = {
        fname: formValues.firstName,
        lname: formValues.lastName,
        company: formValues.company || '',
        jobTitle: formValues.jobTitle || '',
        email: formValues.email,
        phone: formValues.phone,
        address: formValues.address,
        grandPlan: formValues.grandPlan,
        plan: selectedItem.name,
        price: price.toString(),
        installation: installationFee.toString(),
      };

      const validGrandPlans = ["business", "residential"];
      const validResidentialPlans = ["Express", "Super", "Gold", "Linkorg VIP1", "Linkorg VIP2"];
        
      if (!validGrandPlans.includes(formValues.grandPlan)) {
        dispatch(setError('Please select a valid grand plan'));
        return;
      }
      
      if (!validResidentialPlans.includes(selectedItem.name)) {
        dispatch(setError('Please select a valid plan'));
        return;
      }

      await axios.post(RETAIL_API_URL, payload);
      dispatch(setResidentialStep(3)); // Move to success step
    } catch (error) {
      let errorMessage = 'Failed to submit. Please try again later.';
      if (axios.isAxiosError(error)) {
        errorMessage = error.response?.data?.message || errorMessage;
      }
      dispatch(setError(errorMessage));
      throw error;
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const submitEnterpriseRequest = createAsyncThunk(
  'serviceFlow/submitEnterprise',
  async (_, { getState, dispatch }) => {
    const state = getState() as RootState;
    const { formValues, selectedItem } = state.serviceFlow;

    if (!selectedItem) {
      dispatch(setError('No service selected'));
      return;
    }
  
    // Basic form validation
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'company', 'jobTitle', 'address'];
    const missingFields = requiredFields.filter(field => !formValues[field as keyof typeof formValues]);
    
    if (missingFields.length > 0) {
      dispatch(setError(`Please fill all required fields: ${missingFields.join(', ')}`));
      return;
    }

    dispatch(setLoading(true));
    dispatch(setError(null));
  
    try {      
      const payload = {
        fname: formValues.firstName,
        lname: formValues.lastName,
        email: formValues.email,
        phone: formValues.phone,
        company: formValues.company,
        jobTitle: formValues.jobTitle,
        address: formValues.address,
        plan: selectedItem.name,
        note: formValues.message || '',
      };

      await axios.post(ENTERPRISE_API_URL, payload);
      dispatch(setEnterpriseStep(3)); // Move to success step
    } catch (error) {
      let errorMessage = 'Failed to submit. Please try again later.';
      if (axios.isAxiosError(error)) {
        errorMessage = error.response?.data?.message || errorMessage;
      }
      dispatch(setError(errorMessage));
      throw error;
    } finally {
      dispatch(setLoading(false));
    }
  }
); 