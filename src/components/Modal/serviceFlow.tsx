import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '../../Service/store';
import {
  selectCurrentFlow,
  selectSelectedItem,
  selectIsSubmitting,
  selectResidentialStep,
  selectEnterpriseStep,
  selectSubmitError,
  selectPlans,
  selectEnterpriseServices
} from '../../Service/features/serviceFlow/selectors';
import {
  setFlowType,
  setResidentialStep,
  setEnterpriseStep,
  updateFormValues,
  selectItem,
  resetServiceFlow,
} from '../../Service/features/serviceFlow/serviceFlowSlice';
import { initializePlans } from '../../Service/features/serviceFlow/serviceFlowThunks';
import {
  FlowType,
  ResidentialStep,
  EnterpriseStep,
  Plan,
  EnterpriseService,
} from '../../Service/features/serviceFlow/types';
import ServiceSelectionPage from './ServiceSelectionPage';
import ServicePlanSelectionPage from './ServicePlanSelectionPage';
import ServiceFormPage from './ServiceFormPage';
import ServiceConfirmationPage from './ServiceConfirmationPage';
import ServiceDetailsPage from "./ServiceDetailsPage";

interface ServiceFlowProps {
  onComplete: () => void;
  initialFlow?: FlowType;
  onFlowChange?: (flowType: FlowType) => void;
}

const ServiceFlow: React.FC<ServiceFlowProps> = ({ onComplete, initialFlow }) => {
  const dispatch = useDispatch<AppDispatch>();
  const currentFlow = useSelector(selectCurrentFlow);
  const isSubmitting = useSelector(selectIsSubmitting);
  const residentialStep = useSelector(selectResidentialStep);
  const enterpriseStep = useSelector(selectEnterpriseStep);
  const submitError = useSelector(selectSubmitError);
  const plans = useSelector(selectPlans);
  const enterpriseServices = useSelector(selectEnterpriseServices);
  const selectedItem = useSelector(selectSelectedItem);

  // Initialize plans when component mounts
  useEffect(() => {
    dispatch(initializePlans());
  }, [dispatch]);

  // Set initial flow if provided
  useEffect(() => {
    if (initialFlow) {
      dispatch(setFlowType(initialFlow));
    }
  }, [initialFlow, dispatch]);


  const handlePlanSelect = (plan: Plan) => {
    dispatch(selectItem(plan));
  };

  const handleServiceSelect = (service: EnterpriseService) => {
    dispatch(selectItem(service));
  };

  const handleFlowChange = (flowType: FlowType) => {
    dispatch(setFlowType(flowType));
    dispatch(setResidentialStep(0));
    dispatch(setEnterpriseStep(0));
    dispatch(updateFormValues({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      jobTitle: '',
      address: '',
      grandPlan: '',
      message: ''
    }));
    dispatch(selectItem(null));
  };

  const handleNext = () => {  
    if (currentFlow === 'residential') {  
      const nextStep = residentialStep + 1 as ResidentialStep;  
      if (nextStep <= 3) { 
        dispatch(setResidentialStep(nextStep));  
      }  
    } else if (currentFlow === 'enterprise') {  
      const nextStep = enterpriseStep + 1 as EnterpriseStep;  
      if (nextStep <= 3) {  
        dispatch(setEnterpriseStep(nextStep));  
      }  
    }  
    console.log("button clicked")
  };  



  const handleBack = () => {
    if (currentFlow === 'residential') {
      const prevStep = Math.max(residentialStep - 1, 0) as ResidentialStep;
      if (prevStep === 0) {
        dispatch(selectItem(null));
      }
      dispatch(setResidentialStep(prevStep));
    } else if (currentFlow === 'enterprise') {
      const prevStep = Math.max(enterpriseStep - 1, 0) as EnterpriseStep;
      if (prevStep === 0) {
        dispatch(selectItem(null));
      }
      dispatch(setEnterpriseStep(prevStep));
    }
  };

  const handleClose = () => {
    dispatch(resetServiceFlow());
    onComplete();
  };

  useEffect(() => {
    dispatch(initializePlans());
  }, [dispatch]);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      {currentFlow === 'initial' && (
        <ServiceSelectionPage 
          onFlowChange={handleFlowChange}
          onComplete={onComplete}
        />
      )}

      {currentFlow === 'residential' && (
        <>
          {residentialStep === 0 && (
            <ServicePlanSelectionPage      

              items={plans} 
    selectedItem={selectedItem}
    onItemSelect={(item) => {
      handlePlanSelect(item as Plan);
    }}
    currentFlow="residential"
    onFlowChange={handleFlowChange}
    onBack={handleBack}
    onNext={handleNext}
    onComplete={onComplete} 
            />
          )}

          {residentialStep === 1 && (
              <ServiceFormPage 
                onNext={handleNext}
                isSubmitting={isSubmitting}
                error={submitError}
                onComplete={onComplete} 
              />
            )}


              {residentialStep === 2 && (
              <ServiceDetailsPage 
              onComplete={onComplete} 
              />
            )}



          {residentialStep === 3 && (
            <ServiceConfirmationPage onComplete={handleClose} />
          )}
        </>
      )}

      {currentFlow === 'enterprise' && (
        <>
          {enterpriseStep === 0 && (
            <ServicePlanSelectionPage 
              items={enterpriseServices} 
    selectedItem={selectedItem}
    onItemSelect={(item) => {
      handleServiceSelect(item as EnterpriseService);
    }}
    currentFlow="enterprise"
    onFlowChange={handleFlowChange}
    onBack={handleBack}
    onNext={handleNext}
    onComplete={onComplete} 
            />
          )}
          
           {enterpriseStep === 1 && (
            <ServiceFormPage 
              onNext={handleNext}
              isSubmitting={isSubmitting}
              error={submitError}
              onComplete={onComplete} 
            />
          )}

             {enterpriseStep === 2 && (
              <ServiceDetailsPage 
              onComplete={onComplete} 
              />
            )}


          {enterpriseStep === 3 && (
            <ServiceConfirmationPage onComplete={handleClose} />
          )}
        </>
      )}
    </div>
  );
};

export default ServiceFlow;