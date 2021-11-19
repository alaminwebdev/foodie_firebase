import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddIntro from './AddIntro';
import AddDetail from './AddDetail';


const AddMenu = () => {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        if (activeStep < 2 ) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
        //setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };


    const handleReset = () => {
        setActiveStep(0);
    };


    return (
        <Box>
            <Stepper activeStep={activeStep} orientation="vertical">
                <Step >
                    <StepLabel>First</StepLabel>
                    <StepContent>
                        <AddIntro  back={handleBack} next={handleNext}  step={activeStep}/>
                    </StepContent>
                </Step>
                <Step >
                    <StepLabel>Second</StepLabel>
                    <StepContent>
                        <AddDetail  back={handleBack} next={handleNext}  step={activeStep}/>
                    </StepContent>
                </Step>
                <Step >
                    <StepLabel>Third</StepLabel>
                </Step>
            </Stepper>
            <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                    variant="outlined"
                >
                    Back
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button onClick={handleNext} variant="outlined">
                    {activeStep === 2 ? 'Finish' : 'Next'}
                </Button>
            </Box>
        </Box>

    )
}

export default AddMenu
